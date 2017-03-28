<template>
    <section>     
         <nb></nb>
         <div class="content">
             <div class="main">
                 <span class="main-title">主页 / 项目管理 / 管理中心</span>
                 
                 <!-- 招募中 -->
                 <div class="pro-item">
                     <div class="pro-info-wrap">
                         <div class="pro-info">
                             <div class="up-bar">
                                 <h1>项目名称之香蒲滨江店众筹项目</h1>
                                 <span>招募中</span>
                                 <a href="" class="creat-new">新建公告</a>
                             </div>
                             <div class="low-bar">
                                     <li>
                                         <span class="key-msg">10%</span>
                                         <span class="key-word">出让股份</span>
                                     </li>
                                     <li>
                                         <span class="key-msg">20</span>
                                         <span class="key-word">意向合伙人</span>
                                     </li>
                                     <li>
                                         <span class="key-msg">3000</span>
                                         <span class="key-word">已募集总金额</span>
                                     </li>
                                     <li>
                                         <span class="key-msg">2000</span>
                                         <span class="key-word">单份金额</span>
                                     </li>
                                     <li>
                                         <span class="key-msg">01-01-17</span>
                                         <span class="key-word">项目开始时间</span>
                                     </li>
                                     <div>
                                         <a href="">预览</a>
                                     </div>

                             </div>
                         </div>
                     </div>
                     <div class="pro-icon">
                         <img src="../assets/logo@3x.png" >
                     </div>
                 </div>

                 <ul class="menu-bar">
                     <li :class="{active:isActive}" @click='setActiveTrue'>意向合伙人列表</li>
                     <li :class="{active:!isActive}" @click='setActiveFalse'>公告列表</li>
                 </ul>
                 <!-- 公告列表 -->
                 <issue v-if="!isActive"></issue>
                 <!-- 合伙人列表 -->
                 <prepartner v-if="isActive"></prepartner>
             </div>
         </div>
         <sb></sb>
         <!-- <qr></qr> -->
    </section>
</template>
<script>
    import nb from '../components/navbar.vue'
    import sb from '../components/sidebar.vue'
    import qr from '../components/qrbar.vue'
    import issue from '../components/issuelist.vue'
    import prepartner from '../components/prepartnerlist.vue'
    require('../assets/list.scss')
    export default {
        filters: {
            
        },
        methods:{
          setActiveTrue(){
            this.isActive=true
          },
          setActiveFalse(){
            this.isActive=false
          }
        },
        data() {
            return {
                isActive:true
            }
        },
        mounted() {
            
        },
        components:{
           nb,sb,qr,issue,prepartner
        }
    }
</script>
<style lang="sass" scoped>
$base-color:#C49F59;
   section{
           width:100%;
           height:100%;
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
                            .creat-new{
                                        width:150px;
                                        height:40px;
                                        line-height:40px;
                                        border-radius:5px;
                                        color:#fff;
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
</style>
