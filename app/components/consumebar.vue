<template>
    <div class="consume">
    	<div class="consume-bar">
    		<div class="title">
                <p>消费录入</p> 
                <input  type="text" placeholder="输入姓名/卡号/手机号" v-model='realNameOrVipCodeOrUserPhone'>
                <div class="search"><a  @click="search"></a></div>
                <span @click='showConsumeChange'></span>    
            </div>
            <div class="container user-info">
                <p>合伙人：{{partnerInfo.realName}}</p>
                <span>手机：{{partnerInfo.phone }}</span>
                <span>卡号：{{partnerInfo.vipCode}}</span>
                <span>收益余额：{{partnerInfo.earning }}元</span>
                <span>本金余额：{{partnerInfo.principalBalance }}元</span>
            </div>
            <div class="container deal-info">
                <p>消费金额<input type="text" class="data" v-model="consumeTotal" @keyup='calculateTopay'></p>
                <p style="float:left">结算方式</p>
                <div class="consume-choose">
                <label :class="{ radioActive:consumeType==2,radioNomal:consumeType!=2 }"><input type="radio" name="project-kind" value="2" v-model="consumeType" @click='calculateTopay'>收益消费
                <span v-if='!changediscount'>{{incomdiscount}}折</span><span v-if='changediscount'><input type="text" v-model='incomdiscount' @blur='discount(0)'>折</span></label>
                <label :class="{ radioActive:consumeType==3,radioNomal:consumeType!=3 }"><input type="radio" name="project-kind" value="3" v-model="consumeType" @click='calculateTopay'>本金消费
                <span v-if='!changediscount'>{{basediscount}}折</span><span v-if='changediscount'><input type="text" v-model='basediscount' @blur='discount(0)'>折</span></label>
                <a href="javascript:;" @click='discount(1)'>修改折扣</a>
                </div>
                <p style="clear:both">应付金额<span>{{topay}}</span></p>
                <div class="deal-bar">
                    {{consumeType | consumeType}}   {{nowtopay}} 元<span v-if='showWarn'>收益余额不足,请提醒消费者使用其它消费方式</span>
                </div>
                <p>验证码<input type="text" class="data" v-model='verificationCode'><a href="javascript:;" class="getcode" id="getcode" @click='getcode'>获取验证码</a></p>
            </div>
            <div class="consume-over" @click='goconsume'>确认消费</div>
    	</div>
    </div>
</template>

<script> 
    export default {
        filters: {
            consumeType:function(consumeType){
                return consumeType==2?'收益消费':'本金消费'
            }
        },
        props: ['apiurl'],
        data() {
            return {
                isActive:1,
                consumeType:2,
                topay:0,
                incomdiscount:0,
                basediscount:0,
                changediscount:0,
                showWarn:0,
                baseleft:0,
                incomeleft:0,
                nowtopay:0,
                consumeTotal:null,
                verificationCode:null,
                realNameOrVipCodeOrUserPhone:null,
                partnerInfo:{}
            }
        },
        methods:{
          showConsumeChange(){
            this.$store.state.showConsume = false;
          },
          search(){
            this.$http.get(this.apiurl+'/partner/'+this.$route.query.projectId+'/'+this.realNameOrVipCodeOrUserPhone)
                .then((response) => {
                   this.partnerInfo=response.data.result;
                   this.baseleft=this.partnerInfo.principalBalance;
                   this.incomeleft=this.partnerInfo.earning;
                   if(this.partnerInfo.consumeRightList[0].consumeType==2){
                    this.incomdiscount=this.partnerInfo.consumeRightList[0].consumeDiscoun;
                   }else{
                    this.basediscount=this.partnerInfo.consumeRightList[0].consumeDiscoun
                   }
                   if(this.partnerInfo.consumeRightList[1].consumeType==2){
                    this.incomdiscount=this.partnerInfo.consumeRightList[1].consumeDiscoun;
                   }else{
                    this.basediscount=this.partnerInfo.consumeRightList[1].consumeDiscoun
                   }
                })
                .catch(function(response) {
                    console.log(response)
                })
          },
          discount(i){
             this.changediscount=i;
             if(this.consumeType==2) {
              this.topay=(this.consumeTotal)*(this.incomdiscount)/10;
              if(this.topay>this.incomeleft){
                this.nowtopay=this.incomeleft;
                this.showWarn=1;
              }else{
                this.nowtopay=this.topay;
                this.showWarn=0;
              }
              
            }else {
              this.topay=(this.consumeTotal)*(this.basediscount)/10;
              if(this.topay>this.baseleft){
                this.nowtopay=this.baseleft;
                this.showWarn=1;
              }else{
                this.nowtopay=this.topay;
                this.showWarn=0;
              }
            }
          },
          calculateTopay(){
            if(this.consumeType==2) {
              this.topay=(this.consumeTotal)*(this.incomdiscount)/10;
              if(this.topay>this.incomeleft){
                this.nowtopay=this.incomeleft;
                this.showWarn=1;
              }else{
                this.nowtopay=this.topay;
                this.showWarn=0;
              }
              
            }else {
              this.topay=(this.consumeTotal)*(this.basediscount)/10;
              if(this.topay>this.baseleft){
                this.nowtopay=this.baseleft;
                this.showWarn=1;
              }else{
                this.nowtopay=this.topay;
                this.showWarn=0;
              }
            }

          },
          getcode(){
            let options={
                'phone':this.partnerInfo.phone
            }
            this.$http.post(this.apiurl+'/consume/smsCode',options)
                .then((response) => {
                   
                })
                .catch(function(response) {
                    console.log(response)
                })
          },
          goconsume(){
            let options={
                'verificationCode':this.verificationCode,
                'phone':this.partnerInfo.phone,
                'consumeType':this.consumeType,
                'money':this.consumeTotal,
                'customerId':this.partnerInfo.customerId,
                'projectId':this.$route.query.projectId
            }
            this.$http.post(this.apiurl+'/consume/add',options)
                .then((response) => {
                  if(response.data.statusCode==200){
                   this.$store.state.showConsume = false;
                   window.location.reload()
                  }else{
                    alert('核销失败，请稍后重试')
                  }
                })
                .catch(function(response) {
                    console.log(response)
                })
          }
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
                    width: 72px;
                    height: 24px;
                    line-height: 24px;
                    position: absolute;
                    top: 18px;
                    left: 50px;
                    color: #333;
                }
                input{
                    width: 300px;
                    height: 36px;
                    position: absolute;
                    left: 270px;
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
                    left: 541px;
                    top: 12px;
                    a{
                width: 18px;
                height: 18px;
                position: absolute;
                left:10px;
                top: 11px;
                background:url('../assets/search.png')no-repeat center center;
            }
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
            .container{
                width: 580px;
                position: relative;
                margin: 0 auto;
                
            }
            .user-info{
                height: 160px;
                border-bottom: 1px solid #f6f6f6;
                p{
                 font-size: 20px;
                 color: #333333;
                 height: 60px;
                 line-height: 60px;
                }
                span{
                    min-width: 200px;
                    height: 40px;
                    line-height: 40px;
                    color: #666;
                    float: left;
                }
            }
            .deal-info{
                p{
                 font-size: 18px;
                 color: #333333;
                 height: 60px;
                 line-height: 60px;
                 .data{
                    width: 130px;
                    height: 30px;
                    background: #F6F6F6;
                    border: 1px solid #D7D7D7;
                    color:#666;
                    font-size: 14px;
                    margin-left: 20px;
                    padding-left: 6px;
                    &:focus{
                            border: 1px solid #C09D5B;
                            outline:none
                        }
                 }
                 span{
                    display: inline-block;
                    height: 60px;
                    line-height: 60px;
                    margin-left: 20px;
                    color: #666;
                 }
                 .getcode{
                         display: inline-block;
                         position: relative;
                         width: 110px;
                         height: 30px;
                         line-height: 30px;
                         border: 1px solid $base-color;
                         border-radius: 2px;
                         text-align: center;
                         font-size: 14px;
                         color: $base-color;
                         margin-left: 20px;
                         background: #fff;
                     }
                }
                .consume-choose{
                   float: left;
                   margin-left: 20px;
                   a{
                     font-size: 14px;
                     color: #999999;
                   }
                }
                 label{
                  height: 60px;
                  line-height: 60px;
                  color:#666;
                  margin-right: 10px;
                  input{
                       width: 24px;
                       height: 24px;
                       position: relative;
                       margin: 0;
                       filter: alpha(opacity=0);
                       opacity: 0;
                  }
                 span{
                  display: inline-block;
                  font-size: 14px;
                  color: #999;
                  width: 40px;
                  text-align: center;
                  input{
                    width: 20px;
                    height: 14px;
                    border:1px solid #D7D7D7;
                    text-align: center;
                    font-size: 12px;
                    color: #999999;
                    opacity: 1;
                    &:focus{
                            border: 1px solid #C09D5B;
                            outline:none
                        }
                  }
                 }
                }
                .radioNomal{
                       background: url('../assets/radio-nomal.png')no-repeat left center;
                       background-size: 16px 16px;
                 }
                .radioActive{
                       background: url('../assets/radio-active.png')no-repeat left center;
                       background-size: 16px 16px;
                  }
              .deal-bar{
                min-width: 400px;
                height: 36px;
                line-height: 36px;
                background: #FAFAFA;
                margin-left: 90px;
                font-size: 14px;
                color: #666666;
                padding-left: 20px;
                span{
                  display: inline-block;
                  padding-left: 20px;
                  font-size:12px;
                  color: #c45959;
                }
              }
            }
            .consume-over{
                width: 160px;
                height: 46px;
                line-height: 46px;
                color: #fff;
                font-size: 14px;
                text-align: center;
                margin: 20px auto;
                background: $base-color;
                border-radius: 2px;
            }

    	}
    }

 

 @media (min-width: 768px) and (max-width: 1368px) {
$base-color:#C49F59;
    .consume{
    
      .consume-bar{
        width: 680px;
        height: 450px;
        margin: 8% auto;
        .title{
                height: 40px;
                p{
                    width: 72px;
                    height: 12px;
                    line-height: 12px;
                    top: 14px;
                }
                input{
                    width: 300px;
                    height: 24px;
                    left: 270px;
                    top: 6px;
                    font-size: 12px;
                }
                .search{
                    width: 40px;
                    height: 28px;
                    background: $base-color;
                    position: absolute;
                    left: 541px;
                    top: 6px;
                    a{
                     left:10px;
                     top: 6px;
                     }
                }
                span{
                top:16px;
                   }
 
            }
            .container{
                width: 580px;           
            }
            .user-info{
                height: 120px;
                p{
                 font-size: 14px;
                 color: #333333;
                 height: 40px;
                 line-height: 40px;
                }
                span{
                    height: 30px;
                    line-height: 30px;
                }
            }
            .deal-info{
                p{
                 font-size: 14px;
                 height: 40px;
                 line-height: 40px;
                 .data{
                    width: 130px;
                    height: 24px;
                    font-size: 12px;
                 }
                }
                .consume-choose{
                   a{
                     font-size: 12px;
                   }
                }
                 label{
                  height: 40px;
                  line-height: 40px;
                  input{
                       width: 24px;
                       height: 24px;
                  }
                 span{
                  font-size: 12px;
                 }
                }
            }
            .consume-over{
                height: 36px;
                line-height: 36px;
            }

      }
    }
}  
</style>