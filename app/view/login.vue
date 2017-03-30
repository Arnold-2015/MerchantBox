<template>
    <section>

        <img src="../assets/logo@3x.png">
        <p class="title">六度盒子商家管理平台<p/>
        <div class="login-bar">
            <span class="login-title">商家登录</span>
            <span class="lab">账号</span>
            <input type="tel" name="tel">
            <span class="lab">密码</span>
            <input type="tel" name="pw">
            <a class="forget">忘记密码？</a>
            <div class="login" @click='login'>登录</div>
            <a class="nocount">没有账号?</a>
        </div>
        <p class="cr">Copyright © 2016-2017 杭州钒融科技有限公司 . All Rights Reserved </p>
    
        
    </section>
</template>
<script>

    export default {
         mounted() {
           
        },
        methods:{
            login(){
                this.$router.push({
                    name: 'index'
                });
            }
        }
    }
</script>
<style lang="sass" scoped>
    section{
        width: 100%;
        height: 100%;
        background: url('../assets/background.jpg')no-repeat center center;
        background-size: 100% 100%;
        position: absolute;
        z-index:100;
        left: 0;
        top: 0;
        img{
            width: 38px;
            height: 40px;
            margin: 5% auto 0;
            left: 48%;
        }
        .title{
            width: 300px;
            height: 42px;
            line-height: 42px;
            font-size: 30px;
            color: #C09D5B;
            font-family: 'PingFangSC-Light';
            margin: 10px auto 0;
        }
        .login-bar{
            width: 398px;
            height: 404px;
            background: #fff;
            border-radius: 6px;
            margin: 4% auto;
            .login-title{
                width: 100%;
                height: 72px;
                line-height: 72px;
                font-size: 20px;
                color: #666;
                text-align: center;
            }
            .lab{
                width: 32px;
                height: 22px;
                margin-left: 52px;
                margin-top: 8px;
                font-size: 16px;
                color: #333333;
            }
            input{
                display: block;
                width: 286px;
                height: 48px;
                padding-left: 14px;
                margin:8px auto 0;
                background: #F6F6F6;
                border: 1px solid #d7d7d7;
                border-radius: 2px;
                font-size: 24px;
                color:#666;
                &:focus{
                    border: 1px solid #C09D5B;
                    outline:none
                }
            }
            a{
                display: block;
                width: 60px;
                height: 20px;
                line-height: 20px;
                font-size: 12px;
                color: #666666;
                margin-left: 52px;
            }
            .nocount{
                margin: auto;
            }
            .login{
                width: 300px;
                height: 48px;
                line-height: 48px;
                background: #C09D5B;
                border-radius: 2px;
                color: #fff;
                font-size: 16px;
                text-align: center;
                margin: 8px auto 20px;
            }
        }
        .cr{
            width: 100%;
            height: 17px;
            text-align: center;
            color: #fff;
            font-size: 12px;
            opacity: 0.6;
            position: absolute;
            bottom: 20px;
        }

    }
      
</style>