<template>
    <section>     
         <div class="content">
             <div class="main">
                 <span class="main-title">主页 / 项目管理 / 创建项目</span>
                 <div class="period-bar">
                     <ul>
                         <li class="li-active">项目介绍</li>
                         <li class="li-active">项目详情</li>
                         <li class="li-active">融资信息</li>
                         <li>合同编辑</li>
                     </ul>
                     <img src="../assets/crestep3.png" >
                 </div>
                 <span class="title">基本信息</span>
                 <div class="info-bar container">
                   <div class="info-item">
                   <span>项目类型：</span>
                   </div>
                   <div class="info-item">
                   <span>甲方(项目发起人)：</span><input type="text" placeholder="请填写甲方名称">
                   </div>
                   <div class="info-item">
                   <span>项目估值(元)：</span><input type="text" placeholder="请填写项目估值">
                   </div>
                   <div class="info-item">
                   <span>目标众筹金额(元)：</span><input type="text" placeholder="请填写目标众筹金额 "><span>出让股份占公司股份： </span><input type="text" placeholder="20% ">
                   </div>
                   <div class="info-item">
                   <span>认购份数(份)：</span><input type="text" placeholder="请填写认购分数 "><span>超募份数(份)：</span><input type="text" placeholder="14 ">
                   </div>
                   <div class="info-item">
                   <span>单份金额(元)：</span><input type="text" placeholder="请输入单份金额"><span>每份占股：</span><input type="text" placeholder="2% ">
                   </div>
                   <div class="info-item">
                   <span>每人限购份数(份)：</span><input type="text" placeholder="请输入每人限购份数">
                   </div>
                   <div class="info-item">
                   <span>融资周期(天)：</span><input type="text" placeholder="30"><span>以项目上线时间为起始时间</span>
                   </div>
                   <div class="info-item">
                   <span>投资周期：</span>
                   <select>
                     <option value ="全部">6个月</option>
                     <option value ="有效合伙人">12个月</option>
                     <option value="已退出合伙">18个月</option>
                   </select> 
                   </div>
                 </div>
                 <span class="title">回报设置</span>
                 <div class="info-bar container">
                   
                 </div>
                 <span class="title">特权设置</span>
                 <div class="info-bar container">
                   
                 </div>
                 <router-link to="creprosecond" class="prev-step">上一步</router-link>
                 <router-link to="creproforth" class="next-step">下一步</router-link>
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
            .title{
                display: inline-block;
                height: 24px;
                list-style: 24px;
                color: #333;
                margin-left: 40px;
                margin-top:   60px;
                font-weight: bold;
              }
              .info-bar{
                width: 1100px;
                min-height:700px;
                background: #fff;
                margin-left: 40px;
                margin-top: 20px;
                border:1px solid #d7d7d7;
                span{
                  display: inline-block;
                  margin-top: 54px;
                  color: #666;
                  min-width: 160px;
                  padding-left: 30px;
                }
                input{
                  width: 250px;
                  height: 48px;
                  display: inline-block;
                  margin-left: 40px;
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
                select{
                  width: 250px;
                  height: 48px;
                  display: inline-block;
                  margin-left: 40px;
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
              }

              .container{
                padding:0 90px 46px 30px;
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