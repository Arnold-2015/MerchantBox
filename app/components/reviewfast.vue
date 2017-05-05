<template>
    <div class="consume">
      <div class="consume-bar">
            <div class="title">
                <p>项目审核</p>
                <span @click='showreviewfastChange'></span>    
            </div>
            <div class="container">
              <div class="left-bar">
              <div class=" sale-info">
              <p>项目信息</p>
               <span>项目来源&nbsp&nbsp&nbsp&nbsp{{verifyInfo.source }}</span>
               <span>项目名称&nbsp&nbsp&nbsp&nbsp{{verifyInfo.projectName}}</span>
               <span>项目详情&nbsp&nbsp&nbsp&nbsp<a href="">线上预览</a></span>
               </div>
                <img :src="verifyInfo.qrCodeUrl" >
              <div class=" profit-info">
              <p>项目配置</p>
              <div class="item">配置平台手续费用比例<input class='percent' type="text" v-model='option.payRate '>%</div>
              <div class="item">配置众筹金额冻结比例<input class='percent' type="text" v-model='option.frozenRate  '>%</div>
              </div>
            </div>
            <div class="right-bar">
              <div class=" profit-info">
              <p>用户信息</p>
              <div class="item"><span>商家手机号</span><input type="text" v-model='option.merchantPhone' @blur='getMerchantInfo'></div>
              <div class="item"><span>商家姓名(甲方)</span><input type="text" v-model='option.merchantName'></div>
              <div class="item"><span>身份证号</span><input type="text" v-model='option.idNo '></div>
              <div class="item"><span>账号密码</span><input type="text" v-model='option.password '></div>
              <div class="item"><span>丙方(甲方所属企业名称)</span><input type="text" v-model='option.thirdPartyName '></div>
              <div class="item"><span>丙方组织机构代码</span><input type="text" v-model='option.thirdPartyCode '></div>
              <div class="item"><span>项目联系人姓名</span><input type="text" v-model='option.linkManName '></div>
              <div class="item"><span>项目联系人手机号码</span><input type="text" v-model='option.linkManPhone '></div>
            </div>
            </div>
            </div>
            
            
            <div class="operate">
              <div class="review-no btn-no" @click='noverify'>不通过</div>
              <div class="review-yes btn-yes" @click='goverify'>审核通过</div>
            </div>
            
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
                verifyInfo:null,
                option:{}
            }
        },
        methods:{
          showreviewfastChange(){
            this.$store.state.showreviewfast = false;
          },
          getMerchantInfo(){
            this.$http.get(this.apiurl+'/merchant/phone/'+this.option.merchantPhone)
                .then((response) => {
                   this.option=response.data.result;
                })
                .catch(function(response) {
                    console.log(response)
                })
          },
          goverify(){
            let options=this.option;
            options.status =4;
            this.$http.put(this.apiurl+'/project/'+this.projectid+'/status',options)
                .then((response) => {
                 if(response.data.statusCode==200){
                    this.$store.state.showreviewmerchant = false;
                    window.location.reload()
                  }else{
                    alert('审核失败，请重试')
                  }
                   
                })
                .catch(function(response) {
                    console.log(response)
                })
          },
          noverify(){
            this.$store.state.showreviewfast = false;
            this.$store.state.shownoverify = true;
          }
        },
        beforeMount(){

            this.$http.get(this.apiurl+'/project/'+this.projectid+'/verifyInfo')
                .then((response) => {
                   this.verifyInfo=response.data.result;
                })
                .catch(function(response) {
                    console.log(response)
                })
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
        width: 960px;
        height: 600px;
        background: #fff;
        margin: 8% auto;
        position: relative;
            .title{
                width: 100%;
                height: 60px;
                position: relative;
                border-bottom: 1px solid #f6f6f6;
                p{
                    width: 90px;
                    height: 24px;
                    font-size: 20px;
                    line-height: 24px;
                    position: absolute;
                    top: 18px;
                    left: 40px;
                    color: #333;
                    font-weight: bold;
                }
           
                span{
                width:20px;
                height:20px;
                background:url('../assets/cancel.png')no-repeat center center;
                position: absolute;
                top:10px;
                right:10px;
                   }
 
            }
            .left-bar{
              width: 360px;
              height: 450px;
              float: left;
              img{
                width: 120px;
                height: 120px;
                margin-left: 100px;
              }
            }
            .right-bar{
              width: 520px;
              height: 450px;
              float: left;
              .profit-info{
                margin: 0;
              }
            }
            .container{
                width: 880px;
                position: relative;
                margin: 0 auto;               
            }
 
            .sale-info{
                p{
                 font-size: 18px;
                 font-weight: bold;
                 color: #333;
                 height:48px;
                 line-height:48px;
                 display: inline-block;
                }
                span{
                  font-size: 18px;
                  color: #999;
                  height: 32px;
                  line-height: 32px;
                  a{
                    font-size: 18px;
                    color:$base-color;
                  }
                }
            }
            .profit-info{
              margin-top: 20px;
              p{
                 font-size: 18px;
                 font-weight: bold;
                 color: #333333;
                 height: 48px;
                 line-height: 48px;
                }
              .item{
                  font-size: 18px;
                  color: #999;
                  height: 48px;
                  line-height: 48px;
                  input{
                    width: 240px;
                    height: 30px;
                    line-height: 30px;
                    background: #F6F6F6;
                    border: 1px solid #D7D7D7;
                    color:#666;
                    font-size: 14px;
                    margin:0 20px;
                    padding-left: 20px;
                    &:focus{
                            border: 1px solid #C09D5B;
                            outline:none
                        }
                 }
                 span{
                  width: 200px;
                  color:#999;
                  display: inline-block;
                 }
                 .percent{
                  width: 60px;
                  text-align:center;
                  padding-left: 0;
                 }
                }
            }
            .operate{
              width: 100%;
              margin-top: 20px;
              border-top: 1px solid #f6f6f6;
              clear: both;
            }
            .review-no{
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
              margin:20px 0 0 290px;
              }
              .review-yes{
              float:left;
              width: 160px;
              height: 48px;
              line-height: 48px;
              background: $base-color;
              font-size: 14px;
              color: #fff;
              border-radius: 2px;
              text-align: center;
              margin:20px 30px 16px 30px;
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
 .consume{
      .consume-bar{
        width: 760px;
        height: 450px;
            .title{
                height: 40px;
                p{
                    font-size: 16px;
                    top: 12px;
                }
 
            }
            .left-bar{
              width: 260px;
              height: 320px;
              img{
                width: 72px;
                height: 72px;
                margin-left: 80px;
              }
            }
            .right-bar{
              width: 420px;
              height: 320px;
            }
            .container{
                width: 680px;             
            }
 
            .sale-info{
                p{
                 font-size: 14px;
                }
                span{
                  font-size: 12px;
                  color: #999;
                  height: 24px;
                  line-height: 24px;
                  a{
                    font-size: 12px;
                  }
                }
            }
            .profit-info{
              margin-top: 20px;
              p{
                 font-size: 14px;
                }
              .item{
                  font-size: 12px;
                  height: 30px;
                  line-height: 30px;
                  input{
                    width: 140px;
                    height: 20px;
                    line-height: 20px;
                 }
                }
            }
            .review-no{
              height: 34px;
              line-height: 34px;
              margin:20px 0 0 190px;
              }
              .review-yes{
              height: 36px;
              line-height: 36px;
            }

      }
    }
}  
</style>