<template>
    <div class="nav-bar">
      <span class="nav-icon"></span>
      <span class="nav-title">六度盒子商家版</span>
      <img :src="avarta" class="user-avarta">
      <span class="setting-icon" @click='changeWillShow'></span>
      <div class="setting-bar" v-if='willShow'>
        <a href="">账号设置</a>
        <a href="">退出账号</a>
      </div>
    </div>
</template>
<script>
import Vue from 'Vue'
import VueResource from 'vue-resource'
Vue.use(VueResource);
// 拦截器
Vue.http.interceptors.push((request, next) => {
  const merchantId=localStorage.getItem('merchantId')
  const token=localStorage.getItem('token')
  request.headers.set('merchantId', merchantId)
  request.headers.set('token',token)
  console.log(request.headers)
  next(response => {
    return response
  })
})
    export default {
      props: ['api'],
        data() {
            return {
                willShow:false,
                avarta:null,
                apiurl:this.api
            }
        },
        methods:{
          changeWillShow(){
            if(this.willShow==true){
              this.willShow=false;
            }else{
              this.willShow=true;
            }
          }
          
        },
        beforeMount() {
            this.$http.get(this.apiurl+'/merchant')
                .then((response) => {
                   this.avarta = response.data.result.headImgUrl ;
                })
                .catch(function(response) {
                    console.log(response)
                })
        }
    }
</script>
<style lang="sass" scoped>
$base-color:#C49F59;
  .nav-bar{
    background:#020204;
    width:100%;
    height:120px;
    position: relative;
    z-index:10;
    .nav-icon{
              width:40px;
              height:40px;
              position: absolute;
              left:40px;
              top:40px;
              background:url('../assets/logo.png') no-repeat;
              background-size:40px 40px;
    }
    .nav-title{
              width:140px;
              height:30px;
              position: absolute;
              left:100px;
              top:45px;
              color:$base-color;
              font-size:20px;

    }
    .user-avarta{
              width:60px;
              height:60px;
              border-radius:50%;
              position: absolute;
              right:90px;
              top:30px;
    }
    .setting-icon{
              width:20px;
              height:20px;
              position: absolute;
              right:50px;
              top:50px;
              background:url('../assets/setting.png') no-repeat;
              background-size:20px 20px;
    }
    .setting-bar{
              width:150px;
              height:120px;
              border-radius:2px;
              background:#fff;
              position: absolute;
              right:45px;
              top:105px;
              a{
                width:56px;
                height:20px;
                display:block;
                font-size:14px;
                margin:30px auto;
                color:$base-color;

              }
    }
  }
</style>