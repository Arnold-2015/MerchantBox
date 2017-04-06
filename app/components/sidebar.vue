<template>
   <div class="side-bar">
       <router-link to="promanage" class="side-item" :class="{bactive:isActive==1}"><span :class="{active:isActive==1}" @click='setActive(1)'>项目管理</span></router-link>
       <router-link to="merchantmanage" class="side-item" :class="{bactive:isActive==2}"><span :class="{active:isActive==2}" @click='setActive(2)'>商家管理</span></router-link>
       <router-link to="customermanage" class="side-item" :class="{bactive:isActive==3}"><span :class="{active:isActive==3}" @click='setActive(3)'>用户管理</span></router-link>
       <router-link to="ordermanage" class="side-item" :class="{bactive:isActive==4}"><span :class="{active:isActive==4}" @click='setActive(4)'>订单管理</span></router-link>
       <router-link to="compactmanage" class="side-item" :class="{bactive:isActive==5}"><span :class="{active:isActive==5}" @click='setActive(5)'>合同管理</span></router-link>
       <router-link to="creproforth" class="side-item" :class="{bactive:isActive==6}"><span :class="{active:isActive==6}" @click='setActive(6)'>合同模版</span></router-link>
       <router-link to="managerlist" class="side-item" :class="{bactive:isActive==7}"><span :class="{active:isActive==7}" @click='setActive(7)'>管理员账户</span></router-link>
       <router-link to="" class="side-bottom"><span>设置</span></div>     
   </div>

</template>

<script>
    export default {
        data () {
            return {
                isActive:1
            }
        },
        methods:{
           setActive(i){
            this.isActive=i;
          }
        },
        mounted() {
            
        }
    }
</script>

<style lang='sass' scoped>
  $base-color:#C49F59;
  .side-bar{
         width: 200px;
         height: 100%;
         background: #4A4A4A; 
         position: relative;
         overflow: hidden;
         float:left;
         margin-left:-100%;
         margin-top:-120px;
         .side-item{
               width: 200px;
               height: 60px;
               display: block;
               margin-top:120px;
               margin-bottom:-120px;
               font-size: 18px;
               span{
                  width: 200px;
                  height: 60px;
                  color:#d7d7d7;
                  line-height: 60px;
                  text-align: center;
                  background:url('../assets/icon_proManage.png') no-repeat center left 30px;
                  background-size:16px 16px;
               }
               .active{
                color:$base-color;
               }
          }
          .bactive{
            background: #2F2F2F;
          }
          .side-bottom{
               width: 200px;
               height: 60px;
               position: absolute;
               bottom:0;
               background: #2F2F2F;  
               span{
                  width: 200px;
                  height: 60px;
                  color:#d7d7d7;
                  line-height: 60px;
                  text-align: center;
                  background:url('../assets/setting.png') no-repeat center left 30px;
                  background-size:16px 16px;
               }   
         }
  }
  
</style>