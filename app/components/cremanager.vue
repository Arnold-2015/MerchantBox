<template>
    <div class="consume">
    	<div class="consume-bar">
    		
     
            <div class="container deal-info">
                <h1>新建管理员</h1>
                <p><span>管理员姓名</span><input type="text" class="data"></p>
                <p><span>手机号码</span><input type="text" class="data"></p>
                <p><span>密码</span><input type="text" class="data"></p>
                <p><span>身份</span></p>
                <div class="pickbar">
                <label :class="{ radioActive:returnPicked==1,radioNomal:returnPicked!=1 }"><input type="radio" name="project-kind" value="1" v-model="returnPicked">超级管理员</label>
                <label :class="{ radioActive:returnPicked==2,radioNomal:returnPicked!=2 }"><input type="radio" name="project-kind" value="2" v-model="returnPicked">运营管理</label>
                </div>
                <p><span>权限</span></p>
                <div class="pickbar">
                <label :class="{ radioActive:rights==1,radioNomal:rights!=1 }"><input type="ckeckbox" name="project-kind" value="1" v-model="rights">超级管理员</label>
                <label :class="{ radioActive:rights==2,radioNomal:rights!=2 }"><input type="ckeckbox" name="project-kind" value="2" v-model="rights">超级管理员</label>
                <label :class="{ radioActive:rights==3,radioNomal:rights!=3 }"><input type="ckeckbox" name="project-kind" value="3" v-model="rights">超级管理员</label>
                <label :class="{ radioActive:rights==4,radioNomal:rights!=4 }"><input type="ckeckbox" name="project-kind" value="4" v-model="rights">超级管理员</label>
                <label :class="{ radioActive:rights==5,radioNomal:rights!=5 }"><input type="ckeckbox" name="project-kind" value="5" v-model="rights">超级管理员</label>
                <label :class="{ radioActive:rights==6,radioNomal:rights!=6 }"><input type="ckeckbox" name="project-kind" value="6" v-model="rights">超级管理员</label> 
                </div>
     
              
            </div>
            <div @click='showManagerChange' class="consume-cancel">取消</div>
            <div class="consume-over">确认</div>
    	</div>
    </div>
</template>

<script> 
    export default {
          data() {
            return {
                isActive:1,
                returnPicked:1,
                rights:[]
            }
        },
        methods:{
          showManagerChange(){
            this.$store.state.showManager = false;
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
    		margin: 8% auto;
    		position: relative;  		
            .container{
                width: 520px;
                position: relative;
                top: 40px;
                margin: 0 auto;
                
            }

            .deal-info{
            	width: 520px;
            	min-height: 400px;
            	margin-top: 60px;
            	h1{
                	font-size: 24px;
                	margin-top: 60px;
                }
                p{
                 font-size: 20px;
                 color: #333333;
                 height: 28px;
                 line-height: 28px;
                 margin-top: 40px;
                 .data{
                    width: 300px;
                    height: 40px;
                    background: #F6F6F6;
                    border: 1px solid #D7D7D7;
                    color:#666;
                    font-size: 14px;
                    margin-left: 80px;
                    padding-left: 6px;
                    &:focus{
                            border: 1px solid #C09D5B;
                            outline:none
                        }
                 }
                 span{
                    display: inline-block;
                    width: 100px;
                    height: 28px;
                    line-height: 28px;
                    margin-left: 20px;
                    color: #333;
                 }
                 
                }
                .pickbar{
                 	width: 400px;
                 	float: left;
                 	margin-top: -28px;
                 	margin-left: 200px;
                    label{
                  display: inline-block;
                  height: 36px;
                  line-height: 36px;
                  color:#666;
                  margin-right: 46px;
                  input{
                       width: 36px;
                       height: 36px;
                       position: relative;
                       top:6px;
                       filter: alpha(opacity=0);
                       opacity: 0;
                  }
                 
                }
                 .radioNomal{
                       background: url('../assets/radio-nomal.png')no-repeat left center ;
                       background-size: 20px 20px;
                 }
                 .radioActive{
                       background: url('../assets/radio-active.png')no-repeat left center;
                       background-size: 20px 20px;
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


@media (min-width: 768px) and (max-width: 1368px) {
 .consume{
      .consume-bar{
        height: 600px;    
            .container{
                top: 20px;          
            }

            .deal-info{
              width: 520px;
              min-height: 400px;
              margin-top: 40px;
              h1{
                  font-size: 14px;
                  margin-top: 60px;
                }
                p{
                 font-size: 20px;
                 color: #333333;
                 height: 28px;
                 line-height: 28px;
                 margin-top: 40px;
                 .data{
                    width: 300px;
                    height: 40px;
                    background: #F6F6F6;
                    border: 1px solid #D7D7D7;
                    color:#666;
                    font-size: 14px;
                    margin-left: 80px;
                    padding-left: 6px;
                    &:focus{
                            border: 1px solid #C09D5B;
                            outline:none
                        }
                 }
                 span{
                    display: inline-block;
                    width: 100px;
                    height: 28px;
                    line-height: 28px;
                    margin-left: 20px;
                    color: #333;
                 }
                 
                }
                .pickbar{
                  width: 400px;
                  float: left;
                  margin-top: -28px;
                  margin-left: 200px;
                    label{
                  display: inline-block;
                  height: 36px;
                  line-height: 36px;
                  color:#666;
                  margin-right: 46px;
                  input{
                       width: 36px;
                       height: 36px;
                       position: relative;
                       top:6px;
                       filter: alpha(opacity=0);
                       opacity: 0;
                  }
                 
                }
                 .radioNomal{
                       background: url('../assets/radio-nomal.png')no-repeat left center ;
                       background-size: 20px 20px;
                 }
                 .radioActive{
                       background: url('../assets/radio-active.png')no-repeat left center;
                       background-size: 20px 20px;
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

}   
</style>