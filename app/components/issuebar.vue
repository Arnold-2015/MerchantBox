<template>
    <div class="consume">
    	<div class="consume-bar">
    		<div class="title">
                <p>新建公告</p>
                <span @click='showIssueChange'></span>    
            </div>
            <div class="container">
                <label :class="{ radioActive:option.operationType==6,radioNomal:option.operationType!=6 }"><input type="radio" name="project-kind" value="6" v-model="option.operationType">普通公告</label>
                <label :class="{ radioActive:option.operationType==5,radioNomal:option.operationType!=5 }"><input type="radio" name="project-kind" value="5" v-model="option.operationType">延迟分红</label>
            </div>
            <div class="container sale-info" v-if="option.operationType==5">
                 
                <span>延迟至</span>
                <input type="text" class="data" placeholder="日历选择器" v-model='option.delay2Time'>
                <span class="text">每次分红只可延迟一次,逾期将扣除部分押金</span>
                
            </div>
            <div class="container profit-info" v-if="option.operationType==5">                
            	<span>延迟原因</span>
            	<textarea  cols="30" rows="10"  v-model='option.memo'></textarea>
            </div>
            <div class="container profit-info" v-if="option.operationType==6">
              <span>公告内容</span>
              <textarea  cols="30" rows="10"  v-model='option.memo'></textarea>
            </div>
            <label class="shit"><input type="checkbox" checked>短信通知</label>
            <div class="profit-over" @click='goIssue'>发布</div>
    	</div>
    </div>
</template>

<script> 
   
    export default {
        props: ['apiurl','projectid'],
        data() {
            return {
                option:{
                    projectId:this.projectid,
                    operationType:6,
                    isSmsNotice:1,
                    delay2Time:'',
                    memo:''
                }

            }
        },
        methods:{
          showIssueChange(){
            this.$store.state.showIssue = false;
          },
          goIssue(){
            let options=this.option;
            this.$http.post(this.apiurl+'/projectLog/add',options)
                .then((response) => {
                   this.$store.state.showIssue = false
                })
                .catch(function(response) {
                    console.log(response)
                })
          }
        }
        
    }
</script>
      
<style lang='sass' scoped>
    $base-color:#C49F59;
    .consume{
    	width: 100%;
    	height: 100%;
    	position: fixed;
    	top:0;
    	left:0;
    	background: rgba(0,0,0,0.50);
    	z-index: 100;
    	.consume-bar{
    		width: 680px;
    		height: 480px;
    		background: #fff;
    		margin: 8% auto;
    		position: relative;
    		.title{
                width: 100%;
                height: 60px;
                position: relative;
                border-bottom: 1px solid #f6f6f6;
                p{
                    width: 72px;
                    height: 24px;
                    line-height: 24px;
                    position: absolute;
                    top: 18px;
                    left: 50px;
                    color: #333;
                }
               
           
                span{
                width:10px;
                height:10px;
                background:url('../assets/cancel.png')no-repeat center center;
                position: absolute;
                top:20px;
                right:20px;
                   }

 
            }
            .container{
                width: 580px;
                position: relative;
                margin: 0 auto;
                 label{
                  height: 48px;
                  line-height: 48px;
                  color:#666;
                  margin-right: 60px;
                  input{
                       width: 24px;
                       height: 24px;
                       position: relative;
                       top:6px;
                       filter: alpha(opacity=0);
                       opacity: 0;
                  }
                 
                }
                .radioNomal{
                       background: url('../assets/radio-nomal.png')no-repeat ;
                       background-size: 16px 16px;
                 }
                 .radioActive{
                       background: url('../assets/radio-active.png')no-repeat ;
                       background-size: 16px 16px;
                  }
            }
 
            .sale-info{
            	
                span{
                 font-size: 18px;
                 color: #333333;
                 height: 60px;
                 line-height: 60px;
                 display: inline-block;

                }
                .text{
                  font-size: 14px;
                  color: #999;
                 
                }
                .data{
                    width: 130px;
                    height: 30px;
                    background: #F6F6F6;
                    border: 1px solid #D7D7D7;
                    color:#666;
                    font-size: 14px;
                    margin:0 10px 0 40px ;
                    padding-left: 6px;
                    &:focus{
                            border: 1px solid #C09D5B;
                            outline:none
                        }
                 }
                 a{
                 	width: 56px;
                 	height: 60px;
                    line-height: 60px;
                 	font-size: 14px;
                    color: #C49F59;
                    margin-left: 10px;

                 }
                 .saledata{
                 	width: 380px;
                 	height: 68px;
                 	margin: 16px auto;
                 	border:1px solid #d7d7d7;
                 	        li{ 
                               position: relative;
                               float: left;
                               min-width: 42px;
                               height: 68px;
                               margin-left: 18px;
                               span{
                                   min-width: 42px;
                                   height: 30px;
                                   line-height: 30px;
                                   display: block;
                                   font-size: 14px;
                                   color: #333;
                                   text-align: center;
                               }
                               
                                }
                 }
            }
            .profit-info{
            	span{
                 font-size: 18px;
                 color: #333333;
                 height: 100px;
                 line-height: 100px;
                }
                textarea{
                	width: 460px;
                	height: 100px;
                	position: relative;
                	left: 100px;
                	top: -80px;
                	padding: 6px;
                	font-size: 18px;
                	color: #666;
                	background: #F6F6F6; 
                	&:focus{
                            border: 1px solid #C09D5B;
                            outline:none
                        }
                }

            }
            .shit{
              display: block;
              width: 160px;
              height: 46px;
              line-height: 46px;
              margin: -60px auto 10px;
              font-size: 12px;
              color: #333;
            }
            .profit-over{
                width: 160px;
                height: 46px;
                line-height: 46px;
                color: #fff;
                font-size: 14px;
                text-align: center;
                margin: -20px auto;
                background: $base-color;
                border-radius: 2px;

            }

    	}
    }

   
</style>