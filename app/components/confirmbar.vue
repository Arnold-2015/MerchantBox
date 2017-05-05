<template>
    <div class="confirm">
    	<div class="confirm-bar">
    		<div class="title">
                <p>确认有效合伙人</p>  
                <span @click='showConfirmChange'></span>    
            </div>
            <div class="search-bar">
                <input  type="text" placeholder="输入姓名/卡号/手机号" >
                <div class="search"  style="left:291px" ><a  @click="search"></a></div>
                <p>目标分数{{totalCount }}份,当前共{{buyTotalCount  }}份</p>
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
                <tr v-for="(item,index) in prepartnerList" :class='{active:active[index%2]}'>
                    <td class="crowone">{{item.realName }}</td>
                    <td class="crowone">{{item.phone }}</td>
                    <td class="crowone">{{item.buyCount }}</td>
                    <td class="crowone">{{item.memo }}</td>
                    <td class="crowtwo"><a href="javascript:;" @click='delPartner(item.orderId)'>剔除该合伙人</a></td>
                </tr>
                
                </table>
            </div>
            <div class="success btn-yes" @click='startup(6)'>开始履约</div>
            <div class="failed btn-no" @click='startup(7)'>认筹失败</div>
    	</div>
    </div>
</template>

<script> 
    export default {
        props: ['apiurl','projectid'],
        data() {
            return {
                apiurl:this.apiurl,
                active:[false,true],
                projectId:this.projectid,
                realNameOrPhone :'',
                prepartnerList:{},
                totalCount:null,
                buyTotalCount:null
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
                'orderStatus':2

            }
            this.$http.post(this.apiurl+'/partner/intention/list',options)
                .then((response) => {
                   this.prepartnerList=response.data.result.partnerIntentionList;
                   
                   console.log(this.prepartnerList)
                })
                .catch(function(response) {
                    console.log(response)
                })
          },
          delPartner(orderId){

            this.$http.delete(this.apiurl+'/partner/orderId/'+orderId)
                .then((response) => {
                  if(response.data.statusCode==200){
                  this.$alert(true,'剔除成功');
                   timer = setTimeout(() => {
                      window.location.reload()
                    }, 2000);
                }else{
                  this.$alert(false,'剔除失败，请稍后重试')
                }
                })
                .catch(function(response) {
                    console.log(response)
                })
          },
          startup(status){
             let options={
               'projectId':this.projectId,
               'status':status
            }
            this.$http.post(this.apiurl+'/project/startup',options)
                .then((response) => {
                   this.$alert(true,'操作成功');
                   this.$store.state.showConfirm = false;
                   timer = setTimeout(() => {
                      this.$router.push({
                    name: 'promanage'
                });
                    }, 1000);
                })
                .catch(function(response) {
                    console.log(response)
                })
          }
        },
        beforeMount(){
            let options={
               'projectId':this.projectId,
               'orderStatus':2
            }
            this.$http.post(this.apiurl+'/partner/intention/list',options)
                .then((response) => {
                   this.prepartnerList=response.data.result.partnerIntentionList;
                   this.totalCount =response.data.result.totalCount;
                   this.buyTotalCount  =response.data.result.buyTotalCount ;
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
    		height: 490px;
    		background: #fff;
    		margin: 8% auto;
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
                top:20px;
                right:20px;
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
                               
 
            }
           .confirm-list-bar{
            width: 640px;
            height: 260px;
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
                              height: 30px;
                              line-height: 30px;
                              color: #666;
                              background: #FAFAFA;
                          }
                          .title td{
                              background: #fff;
                              color: #333;
                          }
                          td{
                              height: 30px;
                              line-height: 30px;
                              color: #666;
                              text-align: center;  
                              a{
                                  height: 30px;
                                  line-height: 30px;
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
            .btn-yes:hover{
                    background:#BA9246;
                }
            .btn-yes:active{
                background:#020204;
            }
             .btn-no:hover{
                  color:#333;
                }
            .btn-no:active{
                color:#333;
                border:1px solid #333;
            }
    	}
    }

 @media (min-width: 768px) and (max-width: 1368px) {
 .confirm .confirm-bar .search-bar{
            
                input{
                    height: 30px;          
                }
                               
            }
}  
</style>