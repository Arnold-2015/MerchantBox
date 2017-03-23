<template>
   <div class="side-bar">
       <div class="side-item"><span>项目管理</span></div>
       <div class="side-bottom"></div>     
   </div>

</template>

<script>
    export default {
        data () {
            return {
                
            }
        },
        methods:{
           
        },
        mounted() {
            
        }
    }
</script>

<style lang="sass" scoped>
  $base-color:#C49F59;
  .side-bar{
         width: 200px;
         height: 100%;
         background: #4A4A4A; 
         position: relative;
         float:left;
         margin-left:-100%;
         margin-top:-120px;
         .side-item{
               width: 200px;
               height: 60px;
               margin-top:120px;
               font-size: 18px;
               background: #2F2F2F;
               span{
                  width: 200px;
                  height: 60px;
                  color:$base-color;
                  line-height: 60px;
                  text-align: center;
                  background:url('../assets/icon_proManage.png') no-repeat center left 30px;
                  background-size:16px 16px;
               }
          }
          .side-bottom{
               width: 200px;
               height: 60px;
               position: absolute;
               bottom:0;
               background: #2F2F2F;     
         }
  }
  
</style>