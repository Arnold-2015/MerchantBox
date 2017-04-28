<template>
    <div class="consume">
    	<div class="consume-bar">
    		<div class="title">
                <p>分红录入</p>
                <span @click='showProfitChange'></span>    
            </div>
         
            <div class="container sale-info">
                <span>销售额</span>
                <input type="text" class="data" v-model='totalMoney' @blur='getProfitInfo'>
                <span>销售凭证</span>
                <a>点击上传
                <input type="file" :accept="accepts" id="upImg" @change='upImg' >
                </a>
                <div class="saledata">
                	<li>
                        <span class="key-msg">{{sumInfo.returnRate }}</span>
                        <span class="key-word">回报率</span>
                    </li>                
                    <li>
                        <span class="key-msg">{{sumInfo.estimatedAnnualizedReturnRate}}</span>
                        <span class="key-word">本次年化</span>
                    </li>
                    <li>
                        <span class="key-msg">{{sumInfo.participateMoney }}</span>
                        <span class="key-word">分红金额</span>
                    </li>
                    <li>
                        <span class="key-msg">{{sumInfo.eachMoney }}</span>
                        <span class="key-word">每份金额</span>
                    </li>
                    <li>
                        <span class="key-msg">{{sumInfo.participateNumberOfPeople}}</span>
                        <span class="key-word">分红人数</span>
                    </li>
                </div>
            </div>
            <div class="container profit-info">
            	<span>分红说明</span>
            	<textarea  cols="30" rows="10" placeholder="请填写分红说明" v-model='memo'></textarea>
            </div>
            <label for=""><input type="checkbox" checked>短信通知</label>
            <div class="profit-over" @click='goDevide'>确认分红</div>
    	</div>
    </div>
</template>

<script> 
   
    export default {
        filters: {
            
        },
        props: ['apiurl','projectid'],
        data() {
            return {
                isActive:1,
                accepts:'image/jpeg,image/jpg,image/png',
                totalMoney:null,
                memo:'',
                picUrl:null,
                projectId:this.projectid,
                sumInfo:{}

            }
        },
        methods:{
          showProfitChange(){
            this.$store.state.showProfit = false;
          },
          upImg(event){
            var file=event.target.files[0];
            const formData = new FormData();
            formData.append('file', file);     
            this.$http.post(this.apiurl+'/file/upload',formData)
                .then((response) => {
                   this.picUrl=response.data.result.msg
                })
                .catch(function(response) {
                    console.log(response)
                })
          },
          goDevide(){
            let options={
                'projectId':this.projectId,
                'totalMoney':this.totalMoney,
                'picUrl':this.picUrl,
                'memo':this.memo,
                'isSmsNotice':1
            }
            this.$http.post(this.apiurl+'/dividend/add',options)
                .then((response) => {
                   if(response.data.statusCode==200){
                    window.location.reload()
                   }else{
                    alert('分红失败，请重试')
                   }
                })
                .catch(function(response) {
                    console.log(response)
                })
          },
          getProfitInfo(){
            // let options={
            //     'projectId':'81013538870fdfe011b06c211e601aec',
            //     'totalMoney ':this.totalMoney
            // }
            this.$http.get(this.apiurl+'/dividend/'+this.projectId+'/totalMoney/'+this.totalMoney)
                .then((response) => {
                   this.sumInfo=response.data.result
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
    		height: 500px;
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
                
            }
 
            .sale-info{
            	border-bottom: 1px solid #f6f6f6;
                span{
                 font-size: 18px;
                 color: #333333;
                 height: 60px;
                 line-height: 60px;
                 display: inline-block;

                }
                .data{
                    width: 130px;
                    height: 30px;
                    background: #F6F6F6;
                    border: 1px solid #D7D7D7;
                    color:#666;
                    font-size: 14px;
                    margin:0 20px;
                    padding-left: 6px;
                    &:focus{
                            border: 1px solid #C09D5B;
                            outline:none
                        }
                 }
                 a{
                position: relative;
                width: 56px;
                height: 60px;
                line-height: 60px;
                font-size: 14px;
                color: #C49F59;
                text-indent: 0;
                margin-left: 10px;
                input{
                position: absolute;
                width: 56px;
                height: 60px;
                right: 0;
                top: 0;
                opacity: 0;
              }
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
            label{
              display: block;
              width: 160px;
              height: 46px;
              line-height: 46px;
              margin: -60px auto 0;
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
                margin:-5px auto;
                background: $base-color;
                border-radius: 2px;

            }

    	}
    }

   
</style>