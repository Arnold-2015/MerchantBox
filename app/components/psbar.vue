<template>
    <div class="consume">
    	<div class="consume-bar">
    		
     
            <div class="container deal-info">
                <h1>修改密码</h1>
                <p><span>新的密码</span><input type="password" class="data" v-model='newps'></p>
                <p><span>确认密码</span><input type="password" class="data" v-model='confirmps'></p>
            </div>
            <div @click='showpsChange' class="consume-cancel btn-no">取消</div>
            <div @click='changeps' class="consume-over btn-yes" >确认</div>
    	</div>
    </div>
</template>

<script> 
    export default {
        props: ['apiurl','merchantid'],
        data() {
            return {
                
                  newps:null,
                  confirmps:null
               
            }
        },
        methods:{
          showpsChange(){
            this.$store.state.showps = false;
          },
          changeps(){
            if(this.confirmps==this.newps&&this.newps!=null){
             let options={
                        password:this.newps,
                        merchantId:this.merchantid
                      };
                 this.$http.put(this.apiurl+'/merchant',options)
                             .then((response) => {   
                            if(response.data.statusCode==200){
                             this.$alert(true,'密码修改成功')
                             this.$store.state.showps = false;
                           }else{
                             this.$alert(false,response.data.result.msg)
                           }
                                       
                               })  
                
                .catch(function(response) {
                    console.log(response)
                })
              }else{
                this.$alert(false,'两次输入的密码不一致')
              }
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
    		width: 480px;
    		height: 300px;
    		background: #fff;
        border-radius: 4px;
    		margin: 8% auto;
    		position: relative;  		
            .container{
                width: 420px;
                position: relative;
                top: 40px;
                margin: 0 auto;
                
            }

            .deal-info{
            	width: 400px;
            	min-height: 400px;
            	margin-top: 60px;
            	h1{
                	font-size: 20px;
                	margin-top: 60px;
                }
                p{
                 font-size: 18px;
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
                    width: 80px;
                    height: 28px;
                    line-height: 28px;
                    margin-left: 0px;
                    color: #333;
                 }
                 
                }
                 
                  
            }
            .consume-cancel{
            	  width: 159px;
                height: 45px;
                position: absolute;
                left: 60px;
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
                right: 60px;
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

</style>