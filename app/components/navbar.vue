<template>
    <div class="nav-bar">
      <span class="nav-icon"></span>
      <span class="nav-title">六度盒子商家版</span>
      <img :src="avarta" class="user-avarta">
      <span class="setting-icon" @mouseover='changeWillShow(true)' ></span>
      <div class="setting-bar" v-if='willShow'  @mouseleave='changeWillShow(false)'>
        <router-link to='setting' @click.native='changeWillShow'>账号设置</router-link>
        <router-link to='login' @click.native='changeWillShow'>退出账号</router-link>
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
      props: ['api','avarta'],
        data() {
            return {
                willShow:false,
                apiurl:this.api
            }
        },
        methods:{
          changeWillShow(i){
              this.willShow=i;
          }
          
        },
        beforeMount() {
            // this.$http.get(this.apiurl+'/merchant')
            //     .then((response) => {
            //        this.avarta = response.data.result.headImgUrl ;
            //     })
            //     .catch(function(response) {
            //         console.log(response)
            //     })
        }
    }
</script>
<style lang="sass" scoped>
$base-color:#C49F59;
  .nav-bar{
    background:#020204;
    width:100%;
    height:120px;
    position: fixed;
    left:0;
    top:0;
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
              background:url('../assets/setting.png') no-repeat center top 0;
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


  @media (min-width: 768px) and (max-width: 1368px) {
 $base-color:#C49F59;
  .nav-bar{
    height:60px;
    .nav-icon{
              width:30px;
              height:30px;
              left:16px;
              top:16px;
              background-size:30px 30px;
    }
    .nav-title{
              width:120px;
              height:22px;
              left:72px;
              top:20px;
              font-size:16px;

    }
    .user-avarta{
              width:30px;
              height:30px;
              right:76px;
              top:15px;
    }
    .setting-icon{
              width:16px;
              height:16px;
              right:30px;
              top:22px;
              background-size:16px 16px;
    }
    .setting-bar{
              width:120px;
              height:80px;
              right:30px;
              top:75px;
              a{
                width:56px;
                height:12px;
                font-size:12px;
                margin:20px auto;

              }
    }
  }

}
</style>