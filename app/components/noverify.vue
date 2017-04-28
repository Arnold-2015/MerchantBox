<template>
    <div class="consume">
      <div class="consume-bar">
            <div class="title">
                <p>项目审核</p>
                <span @click='shownoverifyChange'></span>    
            </div>
            <div class="container">
    
              <div class=" sale-info">
              <p>审核状态：拒绝通过审核</p>
               
              </div>
              <textarea placeholder="输入未通过审核原因" v-model='failReason'></textarea>
             </div>
            
            
            <div class="operate">
              <div class="review-yes" @click='noverify'>确认</div>
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
                failReason:null
            }
        },
        methods:{
          shownoverifyChange(){
            this.$store.state.shownoverify = false;
          },
          noverify(){
            let options={
                'failReason':this.failReason,
                'status':3
            }
            this.$http.put(this.apiurl+'/project/'+this.projectid+'/status',options)
                .then((response) => {
                   if(response.data.statusCode==200){
                    this.$store.state.shownoverify = false;
                    window.location.reload()
                    }else{
                      alert('操作失败，请稍后重试')
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
                width:10px;
                height:10px;
                background:url('../assets/cancel.png')no-repeat center center;
                position: absolute;
                top:20px;
                right:20px;
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
           
          .operate{
              width: 100%;
              margin-top: 20px;
              border-top: 1px solid #f6f6f6;
            }
           
          .review-yes{
              width: 160px;
              height: 48px;
              line-height: 48px;
              background: $base-color;
              font-size: 14px;
              color: #fff;
              border-radius: 2px;
              text-align: center;
              margin:20px auto;
            }

      }
    }
          textarea{
                  width: 800px;
                  height: 350px;
                  margin-top:10px;
                  padding: 10px;
                  font-size: 18px;
                  color: #666;
                  background: #F6F6F6; 
                  &:focus{
                            border: 1px solid #C09D5B;
                            outline:none
                        }
                }
 
 @media (min-width: 768px) and (max-width: 1368px) {
.consume{
      .consume-bar{
        width: 720px;
        height: 450px;
            .container{
                width: 680px;            
            }
      }
    }
          textarea{
                  width: 640px;
                  height: 200px;
                  font-size: 12px;
                }
}  
</style>