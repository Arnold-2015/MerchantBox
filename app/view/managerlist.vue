<template>
    <section>     
         <div class="content">
             <div class="main">
                 <span class="main-title">主页 / 管理员账户</span>
                 <div class="main-nav">
                     <span>管理员账户列表</span>
                     <a @click='showManagerChange' class="creat-new"><span></span>新建管理员</a>
                 </div>
                 
                <table class="partner-list">

                <tr class='title'>
                    <td class="crowone">商家姓名</td>
                    <td class="crowone">帐号</td>
                    <td class="crowone">身份</td>
                    <td class="crowone">操作</td>
                </tr>
                <tr v-for="(n,index) in 6" :class='{active:active[index%2]}'>
                    <td class="crowone">赵钱孙李</td>
                    <td class="crowone">帐号</td>
                    <td class="crowone">运营管理</td>
                    <td class="crowone"><router-link to="partnerdetail">编辑</router-link><a>删除</a></td>
                </tr>
                
                </table>
             </div>
         </div>
         <qr v-if="this.$store.state.showQr"></qr>
         <manager v-if="this.$store.state.showManager"></manager>
    </section>
</template>
<script>
    import qr from '../components/qrbar.vue'
    import manager from '../components/cremanager.vue'
    require('../assets/list.scss')
    export default {
        filters: {
            
        },
        methods:{
          showManagerChange(){
            this.$store.state.showManager = true;
          }
        },
        data() {
            return {
                active:[false,true]
            }
        },
        mounted() {
            
        },
        components:{
           qr,manager
        }
    }
</script>
<style lang="sass" scoped>
$base-color:#C49F59;
   section{
           width:100%;
   }
  .content{
          width:100%;
          min-height:100%;
          float:left;
          margin-top:-120px;
          .main{
            height:100%;
            margin-left:200px;
            margin-top:120px;
            .main-title{
                width:100%;
                height:60px;
                line-height:60px;
                margin-left:40px;
                color:#999;
                font-size:12px;
            }
            .main-nav{
                width:100%;
                height:60px;
                line-height:60px;
                background:#fff;
                border-bottom:1px solid #d7d7d7;
                span{
                    width:160px;
                    float:left;
                    margin-left:40px;
                    color:#333;
                    font-size:18px;
                    font-weight:bold;
                }
                .creat-new{
                     width:150px;
                     height:40px;
                     line-height:40px;
                     border-radius:5px;
                     color:#fff;
                     font-size:14px;
                     float:right;
                     margin-top:10px;
                     margin-right:40px;
                     background:$base-color;
                     span{
                        width: 20px;
                        height:40px;
                        background:url('../assets/btn_creat.png')no-repeat left  center;
                     }
                }
            }
 
            }

          }
   
</style>
