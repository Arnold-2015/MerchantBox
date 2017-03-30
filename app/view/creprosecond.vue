<template>
    <section>     
         <div class="content">
             <div class="main">
                 <span class="main-title">主页 / 项目管理 / 创建项目</span>
                 <div class="period-bar">
                     <ul>
                         <li class="li-active">项目介绍</li>
                         <li class="li-active">项目详情</li>
                         <li>融资信息</li>
                         <li>合同编辑</li>
                     </ul>
                     <img src="../assets/crestep2.png" >
                 </div>
                 <span style="font-weight:bold">项目详情</span>
                 <span class="remind">填写品牌故事、店铺相关图片、团队介绍、店铺优势、目前经营状况等信息</span>
                 <div class="project-detail"></div>
                 <router-link to="creprofirst" class="prev-step">上一步</router-link>
                 <router-link to="creprothird" class="next-step">下一步</router-link>
             </div>
         </div>
    </section>
</template>
<script>
    export default {
        filters: {
            
        },
        methods:{
          
        },
        data() {
            return {
                active:[false,true]
            }
        },
        mounted() {
            
        },
        components:{
           
        }
    }
</script>
<style lang='sass' scoped>
$base-color:#C49F59;
   section{ width:100%;}
  .content{
          width:100%;
          min-height:100%;
          float:left;
          margin-top:-120px;
          background: #fff;
          .main{
            height:100%;
            margin-left:200px;
            margin-top:120px;
            .main-title{
                width:100%;
                height:60px;
                line-height:60px;
                padding-left:40px;
                margin-left: 0;
                font-size: 12px;
                color:#999;
                background:#f6f6f6;
            }
            .period-bar{
                width: 100%;
                height: 74px;
                ul{
                    width: 600px;
                    height: 24px;
                    line-height: 24px;
                    margin: 26px auto 0;
                    li{
                        width: 150px;
                        height: 24px;
                        line-height: 24px;
                        color: #333;
                        float: left;
                        text-align: center;
                    }
                    .li-active{
                        color: $base-color;
                    }
                }
                img{
                    width: 468px;
                    margin: 10px auto;
                }
            }
            span{
                display: inline-block;
                height: 24px;
                list-style: 24px;
                color: #333;
                margin-left: 40px;
              }
              .remind{
                font-size: 12px;
                color: #999;
                
              }
              .project-detail{
                width: 76%;
                height: 510px;
                background: #f8f8f8;
                margin-left: 40px;
                margin-top: 20px;
                border:1px solid #d7d7d7;
              }
              .prev-step{
              float:left;
              width: 158px;
              height: 46px;
              line-height: 46px;
              background: #fff;
              font-size: 14px;
              color: #999;
              border-radius: 2px;
              border:1px solid #999;
              text-align: center;
              margin:40px 0 0 110px;
              }
              .next-step{
              float:left;
              width: 160px;
              height: 48px;
              line-height: 48px;
              background: $base-color;
              font-size: 14px;
              color: #fff;
              border-radius: 2px;
              text-align: center;
              margin:40px 30px;
            }
            

          } 
  }
</style>