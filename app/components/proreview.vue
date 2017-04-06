<template>
    <div class="consume">
    	<div class="consume-bar">
    		<div class="title">
                <p>项目审核</p>                
                <span @click='showConsumeChange'></span>    
            </div>
                <div class="container deal-info">
                <h1>项目信息</h1>
                <p><span>项目来源</span><span>快捷发起</span></p>
                <p><span>项目名称</span><span>FE狼人杀项目</span></p>
                <p><span>项目详情</span><span>线上预览</span></p>
                <h1>用户信息</h1>
                <p><span>手机号码</span><input type="text" class="data"></p>
                <p><span>身份证号</span><input type="text" class="data"></p>
                <p><span>商家姓名</span><input type="text" class="data"></p>
                <p><span>账号密码</span><input type="text" class="data"></p>
                <img src="">             
            </div>
            
            <div class="consume-cancel">不通过</div>
            <div class="consume-over">审核通过</div>
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
                    width: 100px;
                    height: 24px;
                    line-height: 24px;
                    position: absolute;
                    font-size: 20px;
                    font-weight: bold;
                    top: 18px;
                    left: 50px;
                    color: #333;
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
          
            .deal-info{
            	img{
            		position: absolute;
            		width: 150px;
            		height: 150px;
            		border:1px solid #333;
            		top: 20px;
            		right: 20px;
            	}
            	h1{
                	font-size: 18px;
                	margin-top: 28px;
                	color: #333;
                }
                p{
                 font-size: 18px;
                 color: #999;
                 height: 48px;
                 line-height: 48px;
                 .data{
                    width: 300px;
                    height: 36px;
                    line-height: 36px;
                    background: #F6F6F6;
                    border: 1px solid #D7D7D7;
                    color:#999;
                    font-size: 18px;
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
                    margin-right: 20px;
                    color: #999;
                 }
               
                }
            }
            .consume-cancel{
            	width: 159px;
                height: 45px;
                position: absolute;
                left: 150px;
                bottom: 20px;
                line-height: 46px;
                color: #999;
                font-size: 14px;
                text-align: center;
                background: #fff;
                border-radius: 2px;
                border: 1px solid #979797;
            }
            .consume-over{
                width: 160px;
                height: 46px;
                position: absolute;
                right: 150px;
                bottom: 20px;
                line-height: 46px;
                color: #fff;
                font-size: 14px;
                text-align: center;
                background: $base-color;
                border-radius: 2px;
            }

    	}
    }

   
</style>