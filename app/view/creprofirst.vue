<template>
    <section>     
         <div class="content">
             <div class="main">
                 <span class="main-title">主页 / 项目管理 / 创建项目</span>
                 <div class="period-bar">
                     <ul>
                         <li class="li-active">项目介绍</li>
                         <li>项目详情</li>
                         <li>融资信息</li>
                         <li>合同编辑</li>
                     </ul>
                     <img src="../assets/crestep1.png" >
                 </div>
                 <div class="info-item" style="height:180px">
                   <span style="display:block">项目头图</span><img><a>上传图片</a><span class="remind">建议尺寸：750*606像素</span>
                 </div>
                 <div class="info-item">
                   <span>项目名称</span><input placeholder="请输入您的项目名称" type="text">
                 </div>
                 <div class="info-item">
                   <span>项目地址</span><input placeholder="请输入您的项目名称" type="text">
                 </div>
                 <div class="info-item" >
                   <span style="display:block">项目简介</span><textarea placeholder="请填写说明，例如：
一家不高冷的葡萄酒体验馆，邀您当合伙人"  cols="30" rows="10"></textarea>
                 </div>
                 <router-link to="creprosecond" class="next-step">下一步</router-link>
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
            .info-item{
              width: 1000px;
              margin: 12px 0 30px 108px;
              position: relative;
              span{
                display: inline-block;
                color: #666;
              }
              .remind{
                font-size: 12px;
                color: #999;
                margin-left: 440px;
                margin-top: 24px;
              }
              img{
                display: inline-block;
                width: 220px;
                height: 180px;
                background: #d8d8d8;
                position: absolute;
                left:190px;
                top: -10px;
              }
              a{
                display: inline-block;
                width: 100px;
                height: 48px;
                line-height: 48px;
                background: $base-color;
                font-size: 14px;
                color: #fff;
                border-radius: 2px;
                text-align: center;
                position: absolute;
                left: 440px;
                top: -10px;
              }
              input{
                  width: 600px;
                  height: 48px;
                  display: inline-block;
                  margin-left: 120px;
                  padding-left: 10px;
                  background: #F6F6F6;
                  border: 1px solid #d7d7d7;
                  font-size: 18px;
                  color:#666;
                  &:focus{
                          border: 1px solid #C09D5B;
                          outline:none
                      }
              }
              textarea{
                  width: 600px;
                  height: 136px;
                  position: relative;
                  left: 190px;
                  top: -20px;
                  padding: 10px;
                  font-size: 18px;
                  color: #666;
                  background: #F6F6F6; 
                  &:focus{
                            border: 1px solid #C09D5B;
                            outline:none
                        }
                }
            }

            .next-step{
              width: 160px;
              height: 48px;
              line-height: 48px;
              background: $base-color;
              font-size: 14px;
              color: #fff;
              border-radius: 2px;
              text-align: center;
              margin:0 0 42px 108px;
            }

          } 
  }
</style>