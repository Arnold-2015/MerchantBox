<template>
    <div class="consume">
    	<div class="consume-bar">
    		<div class="title">
                <p>消费录入</p> 
                <input  type="text" placeholder="输入姓名/卡号/手机号" >
                <a class="search"><img src="../assets/search.png" ></a> 
                <span @click='showConsumeChange'></span>    
            </div>
            <div class="container user-info">
                <p>赵钱孙李</p>
                <span>手机：13423459808</span>
                <span>卡号：400004000030000</span>
                <span>收益余额：100元</span>
                <span>本金余额：10000元</span>
            </div>
            <div class="container deal-info">
                <p>消费金额<input type="text" class="data"></p>
                <p>结算方式</p>
                <p>应付金额<span>800元</span></p>
                <div class="deal-bar">
                    
                </div>
                <p>验证码<input type="text" class="data"><a class="getcode" id="getcode">获取验证码</a></p>
            </div>
            <div class="consume-over">确认消费</div>
    	</div>
    </div>
</template>

<script> 
    export default {
          data() {
            return {
                isActive:1
            }
        },
        methods:{
          showConsumeChange(){
            this.$store.state.showConsume = false;
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
                    img{
                        width: 18px;
                        height: 18px;
                        position: absolute;
                        left:11px;
                        top: 11px;
                    }
                }
                span{
                width:10px;
                height:10px;
                background:url('../assets/cancel.png')no-repeat center center;
                position: absolute;
                top:10px;
                right:10px;
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
                    color: #333;
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

   
</style>