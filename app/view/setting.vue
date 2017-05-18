<template>
    <section>     
         <div class="content">
             <div class="main">
                 <span class="main-title"> <a href="javascript:;" > 账号设置</a></span>
                 <div class="main-nav">
                     <span>账号设置</span>
                 </div>
                 
                     <div class="wrap avatar-bar">
                     <span>头像</span>
                     <img :src="option.headImgUrl | backgroundImg" >
                      <a class="file">上传头像
                       <input type="file" :accept="accepts" id="upImg" @change='upImg' >
                      </a>
                     </div>
                     <div class="wrap"><span>账号联系人</span><span>{{option.nickName}}</span></div>
                     <div class="wrap"><span>手机号码</span><span>{{option.phone}}</span></div>
                     <div class="wrap"><span>密码</span><a href="javascript:;" @click='showpsChange'>修改密码</a></div>
              
                 
             </div>

         </div>
         <ps v-if="this.$store.state.showps" :merchantid='option.merchantId' :apiurl='api'></ps>
         
    </section>
</template>
<script>
    import ps from '../components/psbar.vue'
    export default {
        props: ['api'],
        filters: {
            backgroundImg(val){
                return ''+val
            }
        },
        data() {
            return {
                apiurl:this.api,
                accepts:'image/jpeg,image/jpg,image/png',
                changepw:0,
                option:{
                  headImgUrl:'',
                  password:''
                }
            }
        },
        methods:{
          showpsChange(){
            this.$store.state.showps = true;
          },
          upImg(event){
            var file=event.target.files[0];
            const formData = new FormData();
            formData.append('file', file);     
            this.$http.post(this.apiurl+'/file/upload',formData)
                .then((response) => {
                   this.option.headImgUrl ='http://pic.6dbox.cn/'+response.data.result.msg;
                      var options={
                        headImgUrl:response.data.result.msg,
                        merchantId:this.option.merchantId
                      }
                      this.$http.put(this.apiurl+'/merchant',options)
                             .then((response) => {     
                             this.$alert(true,'上传成功')
                             localStorage.setItem('avarta', this.option.headImgUrl)
                             this.$emit('changeavartaandrole')           
                               })  
                })
                .catch(function(response) {
                    console.log(response)
                })
          },

        },

        beforeMount(){
            this.$emit('changenv')
            this.$http.get(this.apiurl+'/merchant')
                .then((response) => {
                   this.option=response.data.result;
                })
                .catch(function(response) {
                    console.log(response)
                })
        },
        components:{
           ps
        }
    }
</script>
<style lang='sass' scoped>
$base-color:#C49F59;
   section{
           width:100%;
           /*height:100%;*/
   }
  .content{
          width:100%;
          height:100%;
          float:left;
          margin-top:120px;
          /*margin-bottom:-120px;*/
          background:#fff;
          .main{
            height:100%;
            margin-left:200px;
            margin-top:120px;
            .main-title{
                width:100%;
                height:60px;
                line-height:60px;
                padding-left:40px;
                color:#999;
                font-size:12px;
                background:#f6f6f6;
                 a{
                  color:#999;
                }
            }
            .main-nav{
                width:100%;
                height:60px;
                line-height:60px;
                background:#fff;
                border-bottom:1px solid #d7d7d7;
                span{
                    width:160px;
                    height:60px;
                    line-height:60px;
                    float:left;
                    // margin-left:40px;
                    color:#333;
                    font-size:18px;
                    font-weight:bold;
                }
            }
            span{
                width:120px;
                display:inline-block;
                height:40px;
                line-height:40px;
                padding-left:24px;
                color:#999;
            }

              a{
                width:80px;
                display:inline-block;
                height:40px;
                line-height:40px;
                padding-left:24px;
                color:$base-color;
                input{
                position: absolute;
                font-size: 100px;
                right: 0;
                top: 0;
                opacity: 0;
              }
              }
            .avatar-bar{
                height:160px;
                position: relative;
            }
            img{
                position:absolute;
                width: 100px;
                height: 100px;
                left: 160px;
                top: 10px;
                background: #d7d7d7;
            }
            .file{
                margin-left: 120px;
            }
            }

          }
   

   @media (min-width: 768px) and (max-width: 1368px) {
  .content{
          width:100%;
          min-height:100%;
          float:left;
          margin-top:60px;
          .main{
            height:100%;
            margin-left:60px;
            margin-top:60px;
            .main-title{
                width:100%;
                height:40px;
                line-height:40px;
                padding-left:24px;
                color:#999;
                font-size:12px;
            }
            .main-nav{
                width:100%;
                height:42px;
                line-height:42px;
                background:#fff;
                border-bottom:1px solid #d7d7d7;
                span{
                    width:96px;
                    height:42px;
                    line-height:42px;
                    float:left;
                    // margin-left:24px;
                    color:#333;
                    font-size:16px;
                    font-weight:bold;
                }
           
            }
             .avatar-bar{
                height:120px;
                position: relative;
            }
            img{
                position:absolute;
                width: 80px;
                height: 80px;
                left: 160px;
                top: 10px;
            }
            .upimg{
                margin-left: 80px;
            }
            }

          }
}  
</style>
