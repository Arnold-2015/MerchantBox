<template>
    <section>     
         <!-- <nb></nb> -->
         <div class="content">
             <div class="main">
                 <span class="main-title">主页 / 项目管理</span>
                 <div class="main-nav">
                     <span>项目列表</span>
                     <router-link to="creprofirst" class="creat-new"><span></span>新建项目</router-link>
                 </div>
                 
                 <div class="pro-item" v-for="item in projectList">
                   <!-- 草稿 -->
                <div v-if="item.projectStatus==1">
                     <div class="pro-info-wrap">
                         <div class="pro-info">
                             <div class="up-bar">
                                 <h1>{{item.projectName}}</h1>
                                 <span>草稿</span>
                             </div>
                             <div class="low-bar">
                                     <li>
                                         <span class="key-msg">{{item.totalMoney}}</span>
                                         <span class="key-word">目标总金额</span>
                                     </li>
                                     <li>
                                         <span class="key-msg">{{item.unitPrice}}</span>
                                         <span class="key-word">单份金额</span>
                                     </li>
                                     <li>
                                         <span class="key-msg">{{item.validityPeriod}}</span>
                                         <span class="key-word">招募时间</span>
                                     </li>
                                     <li>
                                         <span class="key-msg">{{item.copiesLimit}}</span>
                                         <span class="key-word">每人限购</span>
                                     </li>
                                     <li>
                                         <span class="key-msg">{{item.extraSaleCount}}</span>
                                         <span class="key-word">允许超募数</span>
                                     </li>
                                     <div>
                                         <router-link to="creprofirst">编辑项目</router-link>
                                     </div>

                             </div>
                         </div>
                     </div>
                     <div class="pro-icon">
                         <img src="../assets/logo@3x.png" >
                     </div>
                </div>
                     <!-- 项目审核中 -->
                 <div v-else-if="item.projectStatus==2">
                     <div class="pro-info-wrap" >
                         <div class="pro-info">
                             <div class="up-bar">
                                 <h1>{{item.projectName}}</h1>
                                 <span>项目审核中</span>
                             </div>
                             <div class="low-bar">
                                     <li>
                                         <span class="key-msg">{{item.totalMoney}}</span>
                                         <span class="key-word">目标总金额</span>
                                     </li>
                                     <li>
                                         <span class="key-msg">{{item.unitPrice}}</span>
                                         <span class="key-word">单份金额</span>
                                     </li>
                                     <li>
                                         <span class="key-msg">{{item.validityPeriod}}</span>
                                         <span class="key-word">招募时间</span>
                                     </li>
                                     <li>
                                         <span class="key-msg">{{item.copiesLimit}}</span>
                                         <span class="key-word">每人限购</span>
                                     </li>
                                     <li>
                                         <span class="key-msg">{{item.extraSaleCount}}</span>
                                         <span class="key-word">允许超募数</span>
                                     </li>
                                    

                             </div>
                         </div>
                     </div>
                     <div class="pro-icon">
                         <img src="../assets/logo@3x.png" >
                     </div>
                </div>
                    <!-- 项目审核失败 -->
                <div v-else-if="item.projectStatus==3">
                     <div class="pro-info-wrap">
                         <div class="pro-info">
                             <div class="up-bar">
                                 <h1>{{item.projectName}}</h1>
                                 <span>项目审核失败</span>
                             </div>
                             <div class="low-bar">
                                     <li>
                                         <span class="key-msg">{{item.totalMoney}}</span>
                                         <span class="key-word">目标总金额</span>
                                     </li>
                                     <li>
                                         <span class="key-msg">{{item.unitPrice}}</span>
                                         <span class="key-word">单份金额</span>
                                     </li>
                                     <li>
                                         <span class="key-msg">{{item.validityPeriod}}</span>
                                         <span class="key-word">招募时间</span>
                                     </li>
                                     <li>
                                         <span class="key-msg">{{item.copiesLimit}}</span>
                                         <span class="key-word">每人限购</span>
                                     </li>
                                     <li>
                                         <span class="key-msg">{{item.extraSaleCount}}</span>
                                         <span class="key-word">允许超募数</span>
                                     </li>
                                     <div>
                                         <router-link to="creprofirst">编辑项目</router-link>
                                     </div>

                             </div>
                         </div>
                     </div>
                     <div class="pro-icon">
                         <img src="../assets/logo@3x.png" >
                     </div>
                </div>
                 
                 <!-- 待确认合伙人 -->
                <div v-else-if="item.projectStatus==5">
                     <div class="pro-info-wrap">
                         <div class="pro-info">
                             <div class="up-bar">
                                 <h1>{{item.projectName}}</h1>
                                 <span>待确认合伙人</span>
                             </div>
                             <div class="low-bar">
                                     <li>
                                         <span class="key-msg">{{item.totalShares}}</span>
                                         <span class="key-word">出让股份</span>
                                     </li>
                                     <li>
                                         <span class="key-msg">{{item.wantPartnerCount}}</span>
                                         <span class="key-word">意向合伙人</span>
                                     </li>
                                     <li>
                                         <span class="key-msg">3000</span>
                                         <span class="key-word">已募集总金额</span>
                                     </li>
                                     <li>
                                         <span class="key-msg">{{item.unitPrice}}</span>
                                         <span class="key-word">单份金额</span>
                                     </li>
                                     <li>
                                         <span class="key-msg">{{item.validityPeriod}}</span>
                                         <span class="key-word">招募剩余时间</span>
                                     </li>
                                     <div>
                                         <router-link to="confirming">管理中心</router-link>
                                         <a @click='showQrChange'>预览</a>
                                     </div>

                             </div>
                         </div>
                     </div>
                     <div class="pro-icon">
                         <img src="../assets/logo@3x.png" >
                     </div>
                </div>
                 <!-- 招募中 -->
                <div v-else-if="item.projectStatus==4">
                     <div class="pro-info-wrap">
                         <div class="pro-info">
                             <div class="up-bar">
                                 <h1>{{item.projectName}}</h1>
                                 <span>招募中</span>
                             </div>
                             <div class="low-bar">
                                     <li>
                                         <span class="key-msg">{{item.totalShares}}</span>
                                         <span class="key-word">出让股份</span>
                                     </li>
                                     <li>
                                         <span class="key-msg">{{item.wantPartnerCount}}</span>
                                         <span class="key-word">意向合伙人</span>
                                     </li>
                                     <li>
                                         <span class="key-msg">3000</span>
                                         <span class="key-word">已募集总金额</span>
                                     </li>
                                     <li>
                                         <span class="key-msg">{{item.unitPrice}}</span>
                                         <span class="key-word">单份金额</span>
                                     </li>
                                     <li>
                                         <span class="key-msg">{{item.validityPeriod}}</span>
                                         <span class="key-word">招募剩余时间</span>
                                     </li>
                                     <div>
                                         <router-link to="recruiting">管理中心</router-link>
                                         <a @click='showQrChange'>预览</a>
                                     </div>

                             </div>
                         </div>
                     </div>
                     <div class="pro-icon">
                         <img src="../assets/logo@3x.png" >
                     </div>
                </div>
                 <!-- 履约中 -->
                <div v-else-if="item.projectStatus==6">
                     <div class="pro-info-wrap">
                         <div class="pro-info">
                             <div class="up-bar">
                                 <h1>{{item.projectName}}</h1>
                                 <span>履约中</span>
                             </div>
                             <div class="low-bar">
                                     <li>
                                         <span class="key-msg">{{item.partnerCount}}</span>
                                         <span class="key-word">合伙人 </span>
                                     </li>
                                     <li>
                                         <span class="key-msg">{{item.exitPartnerCount}}</span>
                                         <span class="key-word">已退出 </span>
                                     </li>
                                     <li>
                                         <span class="key-msg">{{item.totalPrincipalBalance}}</span>
                                         <span class="key-word">本金总余额</span>
                                     </li>
                                     <li>
                                         <span class="key-msg">{{item.earningTotalBalance}}</span>
                                         <span class="key-word">收益总余额</span>
                                     </li>
                                     <li>
                                         <span class="key-msg">{{item.cousumeTotalMoney}}</span>
                                         <span class="key-word">消费总金额</span>
                                     </li>
                                     <li>
                                         <span class="key-msg">{{item.totalShares}}</span>
                                         <span class="key-word">出让股份</span>
                                     </li>
                                     <div>
                                         <router-link :to="{ path: 'performing', query: { projectId:item.projectId }}">管理中心</router-link>
                                         <a @click='showQrChange'>预览</a>
                                     </div>

                             </div>
                         </div>
                     </div>
                     <div class="pro-icon">
                         <img src="../assets/logo@3x.png">
                     </div>
                 </div>
                   <!-- 项目失败 -->
                 <div v-else-if="item.projectStatus==7">
                     <div class="pro-info-wrap" >
                         <div class="pro-info">
                             <div class="up-bar">
                                 <h1>{{item.projectName}}</h1>
                                 <span>项目失败</span>
                             </div>
                             <div class="low-bar">
                                     <li>
                                         <span class="key-msg">{{item.totalMoney}}</span>
                                         <span class="key-word">目标总金额</span>
                                     </li>
                                     <li>
                                         <span class="key-msg">{{item.unitPrice}}</span>
                                         <span class="key-word">单份金额</span>
                                     </li>
                                     <li>
                                         <span class="key-msg">{{item.validityPeriod}}</span>
                                         <span class="key-word">招募时间</span>
                                     </li>
                                     <li>
                                         <span class="key-msg">{{item.copiesLimit}}</span>
                                         <span class="key-word">每人限购</span>
                                     </li>
                                     <li>
                                         <span class="key-msg">{{item.extraSaleCount}}</span>
                                         <span class="key-word">允许超募数</span>
                                     </li>
                                    

                             </div>
                         </div>
                     </div>
                     <div class="pro-icon">
                         <img src="../assets/logo@3x.png" >
                     </div>
                </div>
            </div>
                 
             </div>
         </div>
         <!-- <sb></sb> -->
         <qr v-if="this.$store.state.showQr"></qr>
    </section>
</template>
<script>
    import nb from '../components/navbar.vue'
    import sb from '../components/sidebar.vue'
    import qr from '../components/qrbar.vue'
    export default {
        filters: {
            
        },
        props: ['api'],
           data() {
            return {
                apiurl:this.api,
                projectList:{}
            }
        },
        methods:{
          showQrChange(){
            this.$store.state.showQr = true;
          }
        },
        beforeMount(){
            let options={
               
            }
            this.$http.post(this.apiurl+'/project/list',options)
                .then((response) => {
                   this.projectList=response.data.result;
                   console.log(this.projectList)
                })
                .catch(function(response) {
                    console.log(response)
                })
        },
        mounted() {
            
        },
        components:{
           nb,sb,qr
        }
    }
</script>
<style lang="sass" scoped>
$base-color:#C49F59;
   section{
           width:100%;
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
            .main-nav{
                width:100%;
                height:60px;
                line-height:60px;
                background:#fff;
                box-shadow: 0 2px 2px 0 #d7d7d7;
                span{
                    width:75px;
                    float:left;
                    margin-left:40px;
                    color:#333;
                    font-size:18px;
                    font-weight:bold;
                }
                .creat-new{
                     width:150px;
                     height:40px;
                     line-height:40px;
                     border-radius:5px;
                     color:#fff;
                     font-size:14px;
                     float:right;
                     margin-top:10px;
                     margin-right:40px;
                     background:$base-color;
                     span{
                        width: 20px;
                        height:40px;
                        background:url('../assets/btn_creat.png')no-repeat left  center;
                     }
                }
            }
            .pro-item{
                width: 99%;
                height: 220px;
                background: #fff;
                margin:10px 0.5%; 
                box-shadow: 0 2px 2px 0 #d7d7d7;
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
                                position: absolute;
                                top: 30px;
                                left: 15px;
                            }
                            span{
                                min-width: 90px;
                                height: 32px;
                                font-size: 18px;
                                color: #9DA4B7;
                                position: absolute;
                                top: 30px;
                                right: 40px;
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
                                    width: 90px;
                                    height: 25px;
                                    line-height: 25px;
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

          }
   
      
  }
</style>
