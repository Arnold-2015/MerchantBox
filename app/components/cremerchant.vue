<template>
    <div class="consume">
    	<div class="consume-bar">
    		
     
            <div class="container deal-info">
                <h1>新建商家</h1>
                <p><span>商家姓名（甲方)</span><input type="text" class="data" v-model='option.realName'></p>
                <p><span>商家身份证号</span><input type="text" class="data" v-model='option.idNo'></p>
                <p><span>手机号码（账号)</span><input type="text" class="data" v-model='option.userPhone'></p>
                <p><span>账号密码</span><input type="password" class="data" v-model='option.password'></p>
                <p><span>丙方(甲方所属企业名称)</span><input type="text" class="data" v-model='option.thirdPartyName '></p>
                <p><span>丙方组织机构代码</span><input type="text" class="data" v-model='option.thirdPartyCode '></p>
                <p><span>项目联系人姓名</span><input type="text" class="data" v-model='option.linkManName '></p>
                <p><span>项目联系人手机号码</span><input type="text" class="data" v-model='option.linkManPhone'></p>
                <!-- <p><span>商家角色</span>
                <label :class="{ radioActive:option.role==1,radioNomal:option.role!=1 }"><input type="radio" name="project-kind" value="1" v-model="option.role">正常</label>
                <label :class="{ radioActive:option.role==2,radioNomal:option.role!=2 }"><input type="radio" name="project-kind" value="2" v-model="option.role">冻结</label>
                <label :class="{ radioActive:option.role==3,radioNomal:option.role!=3 }"><input type="radio" name="project-kind" value="3" v-model="option.role">狗屎</label>
                <label :class="{ radioActive:option.role==4,radioNomal:option.role!=4 }"><input type="radio" name="project-kind" value="4" v-model="option.role">狗屎</label>
                </p> -->
               
                
     
              
            </div>
            <div @click='showCreMerchantChange' class="consume-cancel btn-no">取消</div>
            <div @click='addMerchant' class="consume-over btn-yes" @click='addMerchant'>确认</div>
    	</div>
    </div>
</template>

<script> 
    export default {
        props: ['apiurl'],
        data() {
            return {
                option:{
                  role:1
                }
            }
        },
        methods:{
          showCreMerchantChange(){
            this.$store.state.showCreMerchant = false;
          },
          addMerchant(){
            let options=this.option;
            this.$http.post(this.apiurl+'/merchant/add',options)
                .then((response) => {
                    if(response.data.statusCode==200){
                   this.$store.state.showCreMerchant = false;
                   this.$alert(true,'创建商家成功');
                   timer = setTimeout(() => {
                      window.location.reload()
                    }, 1000);
               }else{
                this.$alert(false,'创建失败，请重试')
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
        border-radius: 4px;
    		margin: 8% auto;
    		position: relative;  		
            .container{
                width: 580px;
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
                 margin-top: 20px;
                 .data{
                    width: 200px;
                    height: 30px;
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
                    width: 220px;
                    height: 28px;
                    line-height: 28px;
                    margin-left: 0px;
                    color: #333;
                 }
                 
                }
                label{
                  height: 36px;
                  line-height: 36px;
                  color:#666;
                  margin-right: 6px;
                  input{
                       width: 16px;
                       height: 36px;
                       position: relative;
                       filter: alpha(opacity=0);
                       opacity: 0;
                  }
                 
                }
                 .radioNomal{
                       background: url('../assets/radio-nomal.png')no-repeat left center ;
                       background-size: 16px 16px;
                 }
                 .radioActive{
                       background: url('../assets/radio-active.png')no-repeat left center;
                       background-size: 16px 16px;
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
        height: 500px;    
            .container{
                top: 20px;
                
            }

            .deal-info{
              min-height: 400px;
              margin-top: 20px;
              h1{
                  font-size: 16px;
                  margin-top: 10px;
                }
                p{
                 font-size: 14px;
                 height: 20px;
                 line-height: 20px;
                 margin-top: 20px;        
                 
                }               
            }
            .consume-cancel{
                height: 32px;
                line-height: 32px;
            }
            .consume-over{
                height: 34px;
                line-height: 34px;
            }

      }
    }
}  
</style>