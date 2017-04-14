<template>
    <div class="confirm">
    	<div class="confirm-bar">
    		<div class="title">
                <p>确认有效合伙人</p>  
                <span @click='showConfirmChange'></span>    
            </div>
            <div class="search-bar">
                <input  type="text" placeholder="输入姓名/卡号/手机号" >
                <a class="search"><img src="../assets/search.png" ></a> 
                <p>目标分数{{prepartnerList.totalCount }}份,当前共{{prepartnerList.buyTotalCount  }}份</p>
            </div>
            <div class="confirm-list-bar">
                  <table class="confirm-list">
                <tr class='title'>
                    <td class="crowone">合伙人</td>
                    <td class="crowone">手机号码</td>
                    <td class="crowone">份数</td>
                    <td class="crowone">备注</td>
                    <td class="crowtwo">操作</td>
                </tr>
                <tr v-for="(item,index) in prepartnerList.partnerIntentionList" :class='{active:active[index%2]}'>
                    <td class="crowone">{{item.realName }}</td>
                    <td class="crowone">{{item.phone }}</td>
                    <td class="crowone">{{item.buyCount }}</td>
                    <td class="crowone">{{item.memo }}</td>
                    <td class="crowtwo"><a>剔除该合伙人</a></td>
                </tr>
                
                </table>
            </div>
            <div class="success">开始履约</div>
            <div class="failed">认筹失败</div>
    	</div>
    </div>
</template>

<script> 
    export default {
        props: ['apiurl'],
        data() {
            return {
                apiurl:this.apiurl,
                active:[false,true],
                projectId:'22e6b233d5b5f78bf81c11242c0cb046',
                realNameOrPhone :'',
                prepartnerList:{}
            }
        },
        methods:{
          showConfirmChange(){
            this.$store.state.showConfirm = false;
          },
          search(){
            let options={
                'projectId':this.projectId,
                'realNameOrPhone':this.realNameOrPhone,
                'pageSize':10,
                'pageNum':1
            }
            this.$http.post(this.apiurl+'/partner/intention/list',options)
                .then((response) => {
                   this.prepartnerList=response.data.result.partnerIntentionList;
                   console.log(this.prepartnerList)
                })
                .catch(function(response) {
                    console.log(response)
                })
          }
        },
        beforeMount(){
            let options={
               'projectId':this.projectId,
               'pageSize':10,
               'pageNum':1
            }
            this.$http.post(this.apiurl+'/partner/intention/list',options)
                .then((response) => {
                   this.prepartnerList=response.data.result;
                   console.log(this.prepartnerList)
                })
                .catch(function(response) {
                    console.log(response)
                })
        }
        
    }
</script>
      
<style lang='sass' scoped>
    $base-color:#C49F59;
    .confirm{
    	width: 100%;
    	height: 100%;
    	position: fixed;
    	top:0;
    	left:0;
    	background: rgba(0,0,0,0.50);
    	z-index: 100;
    	.confirm-bar{
    		width: 680px;
    		height: 600px;
    		background: #fff;
    		margin: 150px auto;
    		position: relative;
            .title{
                width: 100%;
                height: 60px;
                position: relative;
                border-bottom: 1px solid #f6f6f6;
                p{
                    width: 200px;
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
                top:10px;
                right:10px;
                   }
            }
    		.search-bar{
                width: 100%;
                height: 60px;
                position: relative;
                p{
                    width: 164px;
                    height: 20px;
                    line-height: 20px;
                    position: absolute;
                    top: 20px;
                    right: 20px;
                    color: #666;
                    font-size: 14px;
                }
                input{
                    width: 300px;
                    height: 36px;
                    position: absolute;
                    left: 20px;
                    top: 12px;
                    font-size: 14px;
                    display: block;
                    padding-left: 10px;
                    background: #F6F6F6;
                    border: 1px solid #d7d7d7;
                    border-radius: 2px;
                    color:#666;
                    &:focus{
                            border: 1px solid #C09D5B;
                            outline:none
                        }
                }
                .search{
                    display:block;
                    width: 40px;
                    height: 40px;
                    background: $base-color;
                    position: absolute;
                    left: 291px;
                    top: 12px;
                    img{
                        width: 18px;
                        height: 18px;
                        position: absolute;
                        left:11px;
                        top: 11px;
                    }
                }
                
 
            }
           .confirm-list-bar{
            width: 640px;
            height: 354px;
            margin: 10px auto;
            border:1px solid #d7d7d7;
            overflow: scroll;
               .confirm-list{
                          width: 100%;
                          height: auto;
                          font-size: 14px;
                          border-collapse:collapse;
                          tr{
                              width: 100%;
                              height: 40px;
                              line-height: 40px;
                              color: #666;
                              background: #FAFAFA;
                          }
                          .title td{
                              background: #fff;
                              color: #333;
                          }
                          td{
                              height: 40px;
                              line-height: 40px;
                              color: #666;
                              text-align: center;  
                              a{
                                  height: 40px;
                                  line-height: 40px;
                                  font-size: 14px;
                                  color: $base-color;
                                  margin-left: 10px;
                              }  
                          }
                          .crowone{
                              width: 16%;
                          }
                          .crowtow{
                              width: 20%;
                          }
                          .active{
                              background:#fff;
                          }
                     }
           }
            .success,.failed{
                width: 160px;
                height: 46px;
                line-height: 46px;
                
                font-size: 14px;
                text-align: center;
                float: left;
                
                border-radius: 2px;
            }
            .success{
                margin:20px 20px 0 180px;
                color: #fff;
                background: $base-color;
            }
            .failed{
                margin:20px 0 0 0;
                background: #fff;
                color: #999;
                border:1px solid #999;
            }
    	}
    }

   
</style>