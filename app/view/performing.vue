<template>
    <section>     
         <!-- <nb></nb> -->
         <div class="content">
             <div class="main">
                 <span class="main-title">主页 / 项目管理 / 管理中心</span>
                 
                 <!-- 招募中 -->
                 <div class="pro-item">
                     <div class="pro-info-wrap">
                         <div class="pro-info">
                             <div class="up-bar">
                                 <h1>{{projectInfo.projectName}}</h1>
                                 <span>履约中</span>
                                 <a @click='showIssueChange'  class="creat-new" :apiurl='apiurl'>新建公告</a>
                                 <a @click='showProfitChange' class="profit-entering" :apiurl='apiurl'>分红录入</a>
                                 <a @click='showConsumeChange' class="consume-entering" :apiurl='apiurl'>消费录入</a>
                             </div>
                             <div class="low-bar">
                                     <li>
                                         <span class="key-msg">{{projectInfo.partnerCount }}</span>
                                         <span class="key-word">合伙人 </span>
                                     </li>
                                     <li>
                                         <span class="key-msg">{{projectInfo.exitPartnerCount}}</span>
                                         <span class="key-word">已退出 </span>
                                     </li>
                                     <li>
                                         <span class="key-msg">{{projectInfo.totalPrincipalBalance }}</span>
                                         <span class="key-word">本金总余额</span>
                                     </li>
                                     <li>
                                         <span class="key-msg">{{projectInfo.earningTotalBalance}}</span>
                                         <span class="key-word">收益总余额</span>
                                     </li>
                                     <li>
                                         <span class="key-msg">{{projectInfo.cousumeTotalMoney }}</span>
                                         <span class="key-word">消费总金额</span>
                                     </li>
                                     <div>
                                         <a @click='showQrChange'>预览</a>
                                     </div>

                             </div>
                         </div>
                     </div>
                     <div class="pro-icon">
                         <img :src="projectInfo.projectBgImg" >
                     </div>
                 </div>

                 <ul class="menu-bar">
                     <li :class="{active:isActive==1}" @click='setActive(1)'>合伙人列表</li>
                     <li :class="{active:isActive==2}" @click='setActive(2)'>分红列表</li>
                     <li :class="{active:isActive==3}" @click='setActive(3)'>消费列表</li>
                     <li :class="{active:isActive==4}" @click='setActive(4)'>公告列表</li>
                 </ul>
                 <!-- 合伙人列表 -->
                 <partner v-if="isActive==1"  :apiurl='apiurl'></partner>
                 <!-- 分红列表 -->
                 <profit v-if="isActive==2"  :apiurl='apiurl'></profit>
                 <!-- 消费列表 -->
                 <consume v-if="isActive==3"  :apiurl='apiurl'></consume>
                 <!-- 公告列表 -->
                 <issue v-if="isActive==4"  :apiurl='apiurl'></issue>
             </div>
         </div>
         <!-- <sb></sb> -->
         <qr v-if="this.$store.state.showQr"  :previewurl='projectInfo.projectPreviewUrl' :qrcode='qrCode'></qr>
         <consumebar v-if="this.$store.state.showConsume" :apiurl='apiurl'></consumebar>
         <profitbar v-if="this.$store.state.showProfit" :apiurl='apiurl'></profitbar>
         <issuebar v-if="this.$store.state.showIssue" :apiurl='apiurl'></issuebar>

    </section>
</template>
<script>
    import nb from '../components/navbar.vue'
    import sb from '../components/sidebar.vue'
    import qr from '../components/qrbar.vue'
    import issue from '../components/issuelist.vue'
    import partner from '../components/partnerlist.vue'
    import profit from '../components/profitlist.vue'
    import consume from '../components/consumelist.vue'
    import consumebar from '../components/consumebar.vue'
    import profitbar from '../components/profitbar.vue'
    import issuebar from '../components/issuebar.vue'
    require('../assets/list.scss')
    export default {
          props: ['api'],
          data() {
            return {
                apiurl:this.api,
                isActive:this.$store.state.isActive,
                projectId:'22e6b233d5b5f78bf81c11242c0cb046',
                projectInfo:{},
                qrCode:null
            }
        },
        filters: {
            
        },
        methods:{
          setActive(i){
            this.isActive=i;
            this.$store.state.isActive=i;
          },
          showQrChange(){
            this.$store.state.showQr = true;
          },
          showConsumeChange(){
            this.$store.state.showConsume = true;
          },
          showProfitChange(){
            this.$store.state.showProfit = true;
          },
          showIssueChange(){
            this.$store.state.showIssue = true;
          }
         
        },
        beforeMount(){
            localStorage.setItem('menuTag', 1)
            this.$emit('changetag')
            this.$http.get(this.apiurl+'/project/'+this.projectId)
                .then((response) => {
                   this.projectInfo=response.data.result;
                   console.log(this.projectInfo)
                })
                .catch(function(response) {
                    console.log(response)
                })
           
        },
        components:{
           nb,sb,qr,issue,partner,profit,consume,consumebar,profitbar,issuebar
        }
    }
</script>
<style lang="sass" scoped>
$base-color:#C49F59;
   section{
           width:100%;
           // height:100%;
   }
  .content{
          width:100%;
          min-height:100%;
          float:left;
          margin-top:-120px;
          .main{
            height:100%;
            margin-left:200px;
            margin-top:120px;
            .main-title{
                width:100%;
                height:60px;
                line-height:60px;
                margin-left:40px;
                color:#999;
                font-size:12px;
            }
            .pro-item{
                width: 100%;
                height: 220px;
                background: #fff;
                .pro-info-wrap{
                    width: 100%;
                    height: 100%;
                    float:left;
                    .pro-info{
                        height: 100%;
                        margin-left: 220px;
                        position: relative;
                        .up-bar{
                            position: relative;
                            width: 100%;
                            height: 88px;
                            border-bottom: 2px solid #f6f6f6;
                            h1{
                                min-width: 300px;
                                height: 32px;
                                font-size: 24px;
                                color: #333;
                                float: left;
                                margin-top: 30px;
                                margin-left: 15px;
                            }
                            span{
                                min-width: 90px;
                                height: 32px;
                                line-height: 32px;
                                font-size: 18px;
                                color: #9DA4B7;
                                float: left;
                                margin-top: 30px;
                                margin-left: 2%;
                            }
                            .consume-entering,.profit-entering{
                            	        width:100px;
                                        height:40px;
                                        line-height:40px;
                                        padding-left:20px;
                                        border-radius:5px;
                                        color:$base-color;
                                        font-size:14px;
                                        float:right;
                                        text-align: center;
                                        margin-top:30px;
                                        margin-right:40px;
                                        border:1px solid $base-color;
                     
                            }
                            .consume-entering{
                                background:url('../assets/consume-entering.png')no-repeat center left 20px;
                            }
                            .profit-entering{
                            	background:url('../assets/profit-entering.png')no-repeat center left 20px;
                            }
                            .creat-new{
                                        width:120px;
                                        height:40px;
                                        line-height:40px;
                                        border-radius:5px;
                                        color:#fff;
                                        font-size:14px;
                                        float:right;
                                        text-align: center;
                                        margin-top:30px;
                                        margin-right:40px;
                                        background:$base-color;
                                }
                    }
                        .low-bar{
                            position: relative;
                            width: 100%;
                            height: 130px; 
                            li{
                               position: relative;
                               float: left;
                               left: 15px;
                               top: 40px;
                               min-width: 70px;
                               margin-right: 6%;
                               span{
                                   min-width: 70px;
                                   height: 25px;
                                   line-height: 25px;
                                   text-align: center;
                               }
                               .key-msg{
                                    font-size: 24px;
                                    font-family: 'DINCondensed-Bold';
                                    font-weight: bold;
                                    color: #333;
                               }
                               .key-word{
                                    font-size: 14px;
                                    color: #999;
                               }
                                }
                            div{
                                width: 90px;
                                height: 80px;
                                position: absolute;
                                top: 25px;
                                right: 30px;
                                a{
                                    width: 60px;
                                    height: 25px;
                                    line-height: 25px;
                                    text-align: right;
                                    padding-right: 25px;
                                    margin-top: 12px;
                                    color: $base-color;
                                    background: url('../assets/forMore.png')no-repeat center right;
                                    background-size: 9.2px;
                                }
                            }
                            
                        }
                    }

                }
                .pro-icon{
                    width: 218px;
                    height: 220px;
                    float: left;
                    margin-left: -100%;
                    border-right: 2px solid #f6f6f6;
                    img{
                        width: 120px;
                        height: 120px;
                        margin:50px auto;
                    }
                }
            }
            .menu-bar{
                width: 97%;
                height: 60px;
                line-height:60px;
                margin-top: 9px;
                background: #FAFAFA;
                padding-left: 3%;
                display: block;
                li{
                    min-width: 160px;
                    height: 60px;
                    line-height: 60px;
                    text-align: center;
                    float: left;
                    font-size: 18px;
                    color: #333333;
                }
                .active{
                    background: #fff;
                }
            }

          }
   
      
  }
</style>
