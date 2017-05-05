 <template>
 <div class="wrap">
   <div class="side-bar-default">
       <router-link to="superpromanage" class="side-item" :class="{bactive:isActive==1}"  v-if='role=="ADMIN"'>
       <span class='promanage' :class="{activepromanage:isActive==1 ||active==1}" @click='setActive(1)' @mouseenter='changeActive(1)' @mouseleave='changeActive(0)'>项目管理</span></router-link>
       <router-link to="promanage" class="side-item" :class="{bactive:isActive==1}"  v-if='role!="ADMIN"'>
       <span class='promanage' :class="{activepromanage:isActive==1 ||active==1}" @click='setActive(1)' @mouseenter='changeActive(1)' @mouseleave='changeActive(0)'>项目管理</span></router-link>
       <router-link to="merchantmanage" class="side-item" :class="{bactive:isActive==2}"  v-if='role=="ADMIN"'>
       <span class='merchantmanage' :class="{activemerchantmanage:isActive==2 ||active==2}" @click='setActive(2)' @mouseenter='changeActive(2)' @mouseleave='changeActive(0)'>商家管理</span></router-link>
       <router-link to="customermanage" class="side-item" :class="{bactive:isActive==3}"  v-if='role=="ADMIN"'>
       <span class='customermanage' :class="{activecustomermanage:isActive==3 ||active==3}" @click='setActive(3)' @mouseenter='changeActive(3)' @mouseleave='changeActive(0)'>用户管理</span></router-link>
       <router-link to="ordermanage" class="side-item" :class="{bactive:isActive==4}"  v-if='role=="ADMIN"'>
       <span class='ordermanage' :class="{activeordermanage:isActive==4||active==4}" @click='setActive(4)' @mouseenter='changeActive(4)' @mouseleave='changeActive(0)'>订单管理</span></router-link>
       <!-- <router-link to="compactmanage" class="side-item" :class="{bactive:isActive==5}"><span class='compactmanage' :class="{activecompactmanage:isActive==5}" @click='setActive(5)'>合同管理</span></router-link> -->
       <!-- <router-link to="creproforth" class="side-item" :class="{bactive:isActive==6}"><span class='compactmodel' :class="{activecompactmodel:isActive==6}" @click='setActive(6)'>合同模版</span></router-link> -->
       <!-- <router-link to="managerlist" class="side-item" :class="{bactive:isActive==7}"><span class='managerlist' :class="{activemanagerlist:isActive==7}" @click='setActive(7)'>账户管理</span></router-link> -->
       <!-- <router-link to="" class="side-bottom"><span>设置</span></div>      -->
   </div>
    <div class="side-bar">
       <router-link to="superpromanage" class="side-item" :class="{bactive:isActive==1}" @mouseover.native='showItem(1)' @mouseleave.native='showItem(0)' v-if='role=="ADMIN"'>
       <span class='promanage' :class="{activepromanage:isActive==1||active==1}" @click='setActive(1)'  @mouseenter='changeActive(1)' @mouseleave='changeActive(0)'></span>
       <div class='showItem' v-if='showitem==1'>项目管理</div></router-link>
       <router-link to="promanage" class="side-item" :class="{bactive:isActive==1}" @mouseover.native='showItem(1)' @mouseleave.native='showItem(0)' v-if='role!="ADMIN"'>
       <span class='promanage' :class="{activepromanage:isActive==1||active==1}" @click='setActive(1)'  @mouseenter='changeActive(1)' @mouseleave='changeActive(0)'></span>
       <div class='showItem' v-if='showitem==1'>项目管理</div></router-link>
       <router-link to="merchantmanage" class="side-item" :class="{bactive:isActive==2}" @mouseover.native='showItem(2)' @mouseleave.native='showItem(0)' v-if='role=="ADMIN"'>
       <span class='merchantmanage' :class="{activemerchantmanage:isActive==2||active==2}" @click='setActive(2)' @mouseenter='changeActive(2)' @mouseleave='changeActive(0)'></span>
       <div class='showItem' v-if='showitem==2'>商家管理</div></router-link>
       <router-link to="customermanage" class="side-item" :class="{bactive:isActive==3}" @mouseover.native='showItem(3)' @mouseleave.native='showItem(0)' v-if='role=="ADMIN"'>
       <span class='customermanage' :class="{activecustomermanage:isActive==3||active==3}" @click='setActive(3)' @mouseenter='changeActive(3)' @mouseleave='changeActive(0)'></span>
       <div class='showItem' v-if='showitem==3'>用户管理</div></router-link>
       <router-link to="ordermanage" class="side-item" :class="{bactive:isActive==4}" @mouseover.native='showItem(4)' @mouseleave.native='showItem(0)' v-if='role=="ADMIN"'>
       <span class='ordermanage' :class="{activeordermanage:isActive==4||active==4}" @click='setActive(4)' @mouseenter='changeActive(4)' @mouseleave='changeActive(0)'></span>
       <div class='showItem' v-if='showitem==4'>订单管理</div></router-link>
       <!-- <router-link to="compactmanage" class="side-item" :class="{bactive:isActive==5}"><span class='compactmanage' :class="{activecompactmanage:isActive==5}" @click='setActive(5)'></span></router-link> -->
       <!-- <router-link to="creproforth" class="side-item" :class="{bactive:isActive==6}"><span class='compactmodel' :class="{activecompactmodel:isActive==6}" @click='setActive(6)'></span></router-link> -->
       <!-- <router-link to="managerlist" class="side-item" :class="{bactive:isActive==7}"><span class='managerlist' :class="{activemanagerlist:isActive==7}" @click='setActive(7)'></span></router-link> -->
       <!-- <router-link to="" class="side-bottom"><span>设置</span></div>      -->
   </div>
<div>
</template>

<script>
    export default {
      props:['menutag','role'],
        data () {
            return {
                isActive:this.menutag,
                active:0,
                showitem:0              
            }
        },
        methods:{
           setActive(i){
            this.isActive=i;
          },
          changeActive(i){
            this.active=i;
          },
          showItem(i){
            this.showitem=i;
            // alert(this.showitem)
          }
        },
        mounted() {
            
        },
        watch: {
          menutag(val) {
              this.isActive = val;//新增tag的watch，监听变更并同步到isActive上
          }
         }
    }
</script>

<style lang='sass' scoped>
  $base-color:#C49F59;
  .side-bar{
    display: none;
  }
  .wrap{
    height:100%;
    margin-top:-120px;
  }
  .side-bar-default{
         width: 200px;
         height: 100%;
         background: #4A4A4A; 
         position: fixed;
         overflow: hidden;
         left:0;
         top:0;
         /*float:left;*/
         /*margin-left:-100%;*/
         /*margin-top:-120px;*/
         /*padding-bottom: 200000px;*/
        /*margin-bottom: -200000px;*/
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
                  
               }
               .promanage{
                  background:url('../assets/icon_project.png') no-repeat center left 30px;
                  background-size:16px 16px;
               }
               .merchantmanage{
                  background:url('../assets/icon_shop.png') no-repeat center left 30px;
                  background-size:16px 16px;
               }
               .customermanage{
                  background:url('../assets/icon_user.png') no-repeat center left 30px;
                  background-size:16px 16px;
               }
               .ordermanage{
                  background:url('../assets/icon_order.png') no-repeat center left 30px;
                  background-size:16px 16px;
               }
               .compactmanage{
                  background:url('../assets/icon_contract.png') no-repeat center left 30px;
                  background-size:16px 16px;
               }
               .compactmodel{
                  background:url('../assets/icon_template.png') no-repeat center left 30px;
                  background-size:16px 16px;
               }
               .managerlist{
                  background:url('../assets/icon_admin.png') no-repeat center left 30px;
                  background-size:16px 16px;
               }
               .activepromanage{
                color:$base-color;
               }
               .activepromanage{
                  background:url('../assets/icon_project_gold.png') no-repeat center left 30px;
                  background-size:16px 16px;
                  color:$base-color;
               }
               .activemerchantmanage{
                  background:url('../assets/icon_shop_gold.png') no-repeat center left 30px;
                  background-size:16px 16px;
                  color:$base-color;
               }
               .activecustomermanage{
                  background:url('../assets/icon_user_gold.png') no-repeat center left 30px;
                  background-size:16px 16px;
                  color:$base-color;
               }
               .activeordermanage{
                  background:url('../assets/icon_order_gold.png') no-repeat center left 30px;
                  background-size:16px 16px;
                  color:$base-color;
               }
               .activecompactmanage{
                  background:url('../assets/icon_contract_gold.png') no-repeat center left 30px;
                  background-size:16px 16px;
                  color:$base-color;
               }
               .activecompactmodel{
                  background:url('../assets/icon_template_gold.png') no-repeat center left 30px;
                  background-size:16px 16px;
                  color:$base-color;
               }
               .activemanagerlist{
                  background:url('../assets/icon_admin_gold.png') no-repeat center left 30px;
                  background-size:16px 16px;
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

  @media (min-width: 768px) and (max-width: 1368px) {
  .wrap{
    height:100%;
    margin-top:-60px
  }
 .side-bar-default{
  display: none;
 }
  .side-bar{
         width: 60px;
         height: 100%;
         background: #4A4A4A; 
         position: fixed;
         left:0;
         top:0;
         /*overflow: hidden;*/
         display: block;
        /* float:left;
         margin-left:-100%;
         margin-top:-60px;*/
         /*padding-bottom: 200000px;*/
         /*margin-bottom: -200000px;*/
         .side-item{
               width: 60px;
               height: 60px;
               display: block;
               margin-top:60px;
               margin-bottom:-60px;
               font-size: 12px;
               span{
                  width: 60px;
                  height: 60px;
                  color:#d7d7d7;
                  line-height: 60px;
                  text-align: center;
               }
               .showItem{
                  background: #4A4A4A;
                  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.50);
                  border-radius: 2px;
                  position:relative;
                  width: 80px;
                  height: 30px;
                  line-height: 30px;
                  text-align: center;
                  top: -45px;
                  left: 50px;
                  color: $base-color;
               }
               .promanage{
                  background:url('../assets/icon_project.png') no-repeat center center;
                  background-size:16px 16px;
               }
               .merchantmanage{
                  background:url('../assets/icon_shop.png') no-repeat center center;
                  background-size:16px 16px;
               }
               .customermanage{
                  background:url('../assets/icon_user.png') no-repeat center center;
                  background-size:16px 16px;
               }
               .ordermanage{
                  background:url('../assets/icon_order.png') no-repeat center center;
                  background-size:16px 16px;
               }
               .compactmanage{
                  background:url('../assets/icon_contract.png') no-repeat center center;
                  background-size:16px 16px;
               }
               .compactmodel{
                  background:url('../assets/icon_template.png') no-repeat center center;
                  background-size:16px 16px;
               }
               .managerlist{
                  background:url('../assets/icon_admin.png') no-repeat center center;
                  background-size:16px 16px;
               }
      
                .activepromanage{
                  background:url('../assets/icon_project_gold.png') no-repeat center center;
                  
               }
               .activemerchantmanage{
                  background:url('../assets/icon_shop_gold.png') no-repeat center center;
                  
               }
               .activecustomermanage{
                  background:url('../assets/icon_user_gold.png') no-repeat center center;
                  
               }
               .activeordermanage{
                  background:url('../assets/icon_order_gold.png') no-repeat center center;
                  
               }
               .activecompactmanage{
                  background:url('../assets/icon_contract_gold.png') no-repeat center center;
                  
               }
               .activecompactmodel{
                  background:url('../assets/icon_template_gold.png') no-repeat center center;
                  
               }
               .activemanagerlist{
                  background:url('../assets/icon_admin_gold.png') no-repeat center center;
                  
               }
          }
          .bactive{
            background: #2F2F2F;
          }
          .side-bottom{
               width: 60px;
               height: 60px;
               position: absolute;
               bottom:0;
               background: #2F2F2F;  
               span{
                  width: 60px;
                  height: 60px;
                  color:#d7d7d7;
                  line-height: 60px;
                  text-align: center;
                  background:url('../assets/setting.png') no-repeat center center;
                  background-size:12px 12px;
               }   
         
  }
}
}
  
</style>