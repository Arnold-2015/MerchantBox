 <template>
    <section>     
         <!-- <nb></nb> -->
         <div class="content">
             <div class="main">
                 <span class="main-title"><a href="javascript:;" >项目管理</a></span>
                 <div class="main-nav">
                     <span>项目管理</span>
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
                                         <span class="key-msg">{{item.totalMoney}}元</span>
                                         <span class="key-word">目标总金额</span>
                                     </li>
                                     <li>
                                         <span class="key-msg">{{item.unitPrice}}元</span>
                                         <span class="key-word">单份金额</span>
                                     </li>
                                     <li>
                                         <span class="key-msg">{{item.validityPeriod}}天</span>
                                         <span class="key-word">招募时间</span>
                                     </li>
                                     <li>
                                         <span class="key-msg">{{item.copiesLimit}}份</span>
                                         <span class="key-word">每人限购</span>
                                     </li>
                                     <li>
                                         <span class="key-msg">{{item.extraSaleCount}}份</span>
                                         <span class="key-word">允许超募数</span>
                                     </li>
                                     <div>
                                         <router-link :to="{ path: 'creprofirst', query: { projectId:item.projectId }}">编辑项目</router-link>
                                     </div>

                             </div>
                         </div>
                     </div>
                     <div class="pro-icon">
                         <img :src='item.backgroundImg | backgroundImg' >
                     </div>
                </div>
                     <!-- 项目审核中 -->
                 <div v-else-if="item.projectStatus==2">
                     <div class="pro-info-wrap" >
                         <div class="pro-info">
                             <div class="up-bar">
                                 <h1>{{item.projectName}}</h1>
                                 <span>待审核</span>
                             </div>
                             <div class="low-bar">
                                     <li>
                                         <span class="key-msg">{{item.totalMoney}}元</span>
                                         <span class="key-word">目标总金额</span>
                                     </li>
                                     <li>
                                         <span class="key-msg">{{item.unitPrice}}元</span>
                                         <span class="key-word">单份金额</span>
                                     </li>
                                     <li>
                                         <span class="key-msg">{{item.validityPeriod}}天</span>
                                         <span class="key-word">招募时间</span>
                                     </li>
                                     <li>
                                         <span class="key-msg">{{item.copiesLimit}}份</span>
                                         <span class="key-word">每人限购</span>
                                     </li>
                                     <li>
                                         <span class="key-msg">{{item.extraSaleCount}}份</span>
                                         <span class="key-word">允许超募数</span>
                                     </li>
                                     <div>
                                         <router-link :to="{ path: 'creprofirst', query: { projectId:item.projectId }}">编辑项目</router-link>
                                     </div>

                             </div>
                         </div>
                     </div>
                     <div class="pro-icon">
                         <img :src='item.backgroundImg | backgroundImg' >
                     </div>
                </div>
                    <!-- 项目审核失败 -->
                <div v-else-if="item.projectStatus==3">
                     <div class="pro-info-wrap">
                         <div class="pro-info">
                             <div class="up-bar">
                                 <h1>{{item.projectName}}</h1>
                                 <span>审核失败</span>
                             </div>
                             <div class="low-bar">
                                     <li>
                                         <span class="key-msg">{{item.totalMoney}}元</span>
                                         <span class="key-word">目标总金额</span>
                                     </li>
                                     <li>
                                         <span class="key-msg">{{item.unitPrice}}元</span>
                                         <span class="key-word">单份金额</span>
                                     </li>
                                     <li>
                                         <span class="key-msg">{{item.validityPeriod}}天</span>
                                         <span class="key-word">招募时间</span>
                                     </li>
                                     <li>
                                         <span class="key-msg">{{item.copiesLimit}}份</span>
                                         <span class="key-word">每人限购</span>
                                     </li>
                                     <li>
                                         <span class="key-msg">{{item.extraSaleCount}}份</span>
                                         <span class="key-word">允许超募数</span>
                                     </li>
                                     <div>
                                         <router-link to="creprofirst">编辑项目</router-link>
                                     </div>

                             </div>
                         </div>
                     </div>
                     <div class="pro-icon">
                         <img :src='item.backgroundImg | backgroundImg' >
                     </div>
                </div>
                 
                 <!-- 待确认合伙人 -->
                <div v-else-if="item.projectStatus==5">
                     <div class="pro-info-wrap">
                         <div class="pro-info">
                             <div class="up-bar">
                                 <h1>{{item.projectName}}</h1>
                                 <span>确认中</span>
                             </div>
                             <div class="low-bar">
                                     <li>
                                         <span class="key-msg">{{item.totalShares}}</span>
                                         <span class="key-word">出让股份</span>
                                     </li>
                                     <li>
                                         <span class="key-msg">{{item.wantPartnerCount}}人</span>
                                         <span class="key-word">意向合伙人</span>
                                     </li>
                                     <li>
                                         <span class="key-msg">{{item.hadCrowdFundingMoney}}元</span>
                                         <span class="key-word">已募集总金额</span>
                                     </li>
                                     <li>
                                         <span class="key-msg">{{item.unitPrice}}元</span>
                                         <span class="key-word">单份金额</span>
                                     </li>
                                     <li>
                                         <span class="key-msg">{{item.validityPeriod}}天</span>
                                         <span class="key-word">招募剩余时间</span>
                                     </li>
                                     <div>
                                         <router-link :to="{ path: 'confirming', query: { projectId:item.projectId }}">管理中心</router-link>
                                         <a href="javascript:;"  @click='showQrChange(item.projectId,item.qrCode)'>预览</a>
                                     </div>

                             </div>
                         </div>
                     </div>
                     <div class="pro-icon">
                         <img :src='item.backgroundImg | backgroundImg'>
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
                                         <span class="key-msg">{{item.wantPartnerCount}}人</span>
                                         <span class="key-word">意向合伙人</span>
                                     </li>
                                     <li>
                                         <span class="key-msg">{{item.hadCrowdFundingMoney}}元</span>
                                         <span class="key-word">已募集总金额</span>
                                     </li>
                                     <li>
                                         <span class="key-msg">{{item.unitPrice}}元</span>
                                         <span class="key-word">单份金额</span>
                                     </li>
                                     <li>
                                         <span class="key-msg">{{item.validityPeriod}}天</span>
                                         <span class="key-word">招募剩余时间</span>
                                     </li>
                                     <div>
                                         <router-link :to="{ path: 'recruiting', query: { projectId:item.projectId }}">管理中心</router-link>
                                         <a href="javascript:;"  @click='showQrChange(item.projectId,item.qrCode)'>预览</a>
                                     </div>

                             </div>
                         </div>
                     </div>
                     <div class="pro-icon">
                         <img :src='item.backgroundImg | backgroundImg' >
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
                                         <span class="key-msg">{{item.partnerCount}}人</span>
                                         <span class="key-word">合伙人 </span>
                                     </li>
                                     <li>
                                         <span class="key-msg">{{item.exitPartnerCount}}人</span>
                                         <span class="key-word">已退出 </span>
                                     </li>
                                     <li>
                                         <span class="key-msg">{{item.totalPrincipalBalance}}元</span>
                                         <span class="key-word">本金总余额</span>
                                     </li>
                                     <li>
                                         <span class="key-msg">{{item.earningTotalBalance}}元</span>
                                         <span class="key-word">收益总余额</span>
                                     </li>
                                     <li>
                                         <span class="key-msg">{{item.consumeTotalMoney}}元</span>
                                         <span class="key-word">消费总金额</span>
                                     </li>
                                     <li>
                                         <span class="key-msg">{{item.totalShares}}</span>
                                         <span class="key-word">出让股份</span>
                                     </li>
                                     <div>
                                         <router-link :to="{ path: 'performing', query: { projectId:item.projectId }}">管理中心</router-link>
                                         <a href="javascript:;"  @click='showQrChange(item.projectId,item.qrCode)'>预览</a>
                                     </div>

                             </div>
                         </div>
                     </div>
                     <div class="pro-icon">
                         <img :src='item.backgroundImg | backgroundImg'>
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
                                         <span class="key-msg">{{item.totalMoney}}元</span>
                                         <span class="key-word">目标总金额</span>
                                     </li>
                                     <li>
                                         <span class="key-msg">{{item.unitPrice}}元</span>
                                         <span class="key-word">单份金额</span>
                                     </li>
                                     <li>
                                         <span class="key-msg">{{item.validityPeriod}}天</span>
                                         <span class="key-word">招募时间</span>
                                     </li>
                                     <li>
                                         <span class="key-msg">{{item.copiesLimit}}份</span>
                                         <span class="key-word">每人限购</span>
                                     </li>
                                     <li>
                                         <span class="key-msg">{{item.extraSaleCount}}份</span>
                                         <span class="key-word">允许超募数</span>
                                     </li>
                                    

                             </div>
                         </div>
                     </div>
                     <div class="pro-icon">
                         <img :src='item.backgroundImg | backgroundImg' >
                     </div>
                </div>
            </div>
                 <paging @getpage='getpage' :allpage='pages'></paging>
             </div>
         </div>
         <!-- <sb></sb> -->
         <qr v-if="this.$store.state.showQr" :projectid='projectId' :qrcode='qrCode'></qr>
    </section>
</template>
<script>
    import nb from '../components/navbar.vue'
    import sb from '../components/sidebar.vue'
    import qr from '../components/qrbar.vue'
    import paging from '../components/paging.vue'
    export default {
        filters: {
            backgroundImg(val){
                return ''+val
            }
        },
        props: ['api'],
           data() {
            return {
                apiurl:this.api,
                projectId:null,
                qrCode:null,
                projectList:{},
                pages:null
            }
        },
        methods:{
          showQrChange(projectId,qrCode){
            this.projectId=projectId;
            this.qrCode=qrCode;
            this.$store.state.showQr = true;
          },
          getpage(){
            let options={
                'pageSize':10,
                'pageNum':this.$store.state.pageNum
            }
            this.$http.post(this.apiurl+'/project/list',options)
                .then((response) => {
                   this.projectList=response.data.result.projectLists;
                   console.log(this.projectList)
                })
                .catch(function(response) {
                    console.log(response)
                })

          }

        },
        beforeMount(){
            localStorage.setItem('menuTag', 1)
            this.$emit('changetag')
            this.$emit('changenv')
            let options={
               'pageSize':10,
               'pageNum':1
            }
            this.$http.post(this.apiurl+'/project/list',options)
                .then((response) => {
                   this.projectList=response.data.result.projectLists;
                   this.pages=Math.ceil(response.data.result.totalCount/10);
                   console.log(this.projectList)
                })
                .catch(function(response) {
                    console.log(response)
                })
        },
        mounted() {
            
        },
        components:{
           nb,sb,qr,paging
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
          margin-top:120px;
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
                 a{
                  color:#999;
                }
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
                .creat-new:hover{
                    background:#BA9246;
                }
                .creat-new:active{
                    background:#020204;
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
                                    background-size: 8px;
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



  @media (min-width: 768px) and (max-width: 1368px) {

$base-color:#C49F59;
   section{
           width:100%;
   }
  .content{
           width:100%;
          min-height:100%;
          float:left;
          margin-top:60px;
          .main{
            height:100%;
            margin-left:60px;
            margin-top:60px;
            .main-title{
                width:100%;
                height:40px;
                line-height:40px;
                margin-left:24px;
                color:#999;
                font-size:12px;
            }
            .main-nav{
                width:100%;
                height:42px;
                line-height:42px;
                background:#fff;
                box-shadow: 0 2px 2px 0 #d7d7d7;
                span{
                    width:75px;
                    float:left;
                    margin-left:24px;
                    color:#333;
                    font-size:16px;
                    font-weight:bold;
                }
                .creat-new{
                     width:96px;
                     height:26px;
                     line-height:26px;
                     border-radius:2px;
                     color:#fff;
                     font-size:12px;
                     text-align:center;
                     margin-top:7px;
                     margin-right:32px;
                     background:$base-color;
                     span{
                        display:none;
                     }
                }
            }
            .pro-item{
                width: 100%;
                height: 120px;
                background: #fff;
                .pro-info-wrap{
                    width: 100%;
                    height: 100%;
                    float:left;
                    .pro-info{
                        height: 100%;
                        margin-left: 140px;
                        position: relative;
                        .up-bar{
                            position: relative;
                            width: 100%;
                            height: 45px;
                            border-bottom: 1px solid #f6f6f6;
                            h1{
                                min-width: 140px;
                                height: 22px;
                                font-size: 16px;
                                color: #333;
                                float: left;
                                top: 12px;
                                left: 15px;
                            }
                            span{
                                min-width: 90px;
                                height: 20px;
                                line-height: 20px;
                                font-size: 14px;
                                color: #9DA4B7;
                                float: left;
                                top: 12px;
                                right: 2%;
                            }
                            .creat-new{
                                        width:120px;
                                        height:26px;
                                        line-height:26px;
                                        border-radius:2px;
                                        color:#fff;
                                        font-size:12px;
                                        float:right;
                                        text-align: center;
                                        margin-top:12px;
                                        margin-right:20px;
                                        background:$base-color;
                                }
                    }
                        .low-bar{
                            position: relative;
                            width: 100%;
                            height: 75px; 
                            li{
                               position: relative;
                               float: left;
                               left: 15px;
                               top: 12px;
                               min-width: 70px;
                               margin-right: 6%;
                               span{
                                   min-width: 70px;
                                   height: 25px;
                                   line-height: 25px;
                                   text-align: center;
                               }
                               .key-msg{
                                    font-size: 20px;
                                    font-family: 'DINCondensed-Bold';
                                    font-weight: bold;
                                    color: #333;
                               }
                               .key-word{
                                    font-size: 12px;
                                    color: #999;
                               }
                                }
                            div{
                                width: 90px;
                                height: 80px;
                                position: absolute;
                                top: 12px;
                                right: 30px;
                                a{
                                    width: 60px;
                                    height: 8px;
                                    line-height: 8px;
                                    text-align: right;
                                    padding-right: 20px;
                                    margin-top: 12px;
                                    color: $base-color;
                                    background: url('../assets/forMore.png')no-repeat center right;
                                    background-size: 8px;
                                }
                            }
                            
                        }
                    }

                }
                .pro-icon{
                    width: 140px;
                    height: 120px;
                    float: left;
                    margin-left: -100%;
                    border-right: 2px solid #f6f6f6;
                    img{
                        width: 80px;
                        height: 80px;
                        margin:20px auto;
                    }
                }
            }
            .menu-bar{
                width: 97%;
                height: 60px;
                margin-top: 9px;
                background: #FAFAFA;
                padding-left: 3%;
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
}
</style>
