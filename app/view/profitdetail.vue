<template>
    <section>     
         <!-- <nb></nb> -->
         <div class="content">
             <div class="main">
                 <span class="main-title">主页 / 项目管理 / 管理中心 / 明细</span>
                 <div class="search-bar">
                        <router-link class="toback" to="performing">返回</router-link>
                        <div class="info-bar">
                            <span class="title">2017年3月21日 分红明细</span>
                            <span>分红总金额 10,000元</span>
                            <span>分红人数 15人</span>
                        </div>
                        <a class="export">导出列表</a>
                 </div>
                 <table class="partner-list">

                            <tr class='title'>
                                <td class="crowone">姓名</td>
                                <td class="crowtwo">手机号码</td>
                                <td class="crowtwo">卡号</td>
                                <td class="crowone">本金余额</td>
                                <td class="crowone">占股(%)</td>
                                <td class="crowone">分红金额</td>
                                
                            </tr>
                            <tr v-for="(n,index) in 6" :class='{active:active[index%2]}'>
                                <td class="crowone">赵钱孙李</td>
                                <td class="crowtwo">12345670000</td>
                                <td class="crowtwo">400040000012345</td>
                                <td class="crowone">1503</td>
                                <td class="crowone">23%</td>
                                <td class="crowone">333</td>
                                
                            </tr>
                
                </table>
             </div>
         </div>
         <!-- <sb></sb> -->
    </section>
</template>
<script>
    import nb from '../components/navbar.vue'
    import sb from '../components/sidebar.vue'
    require('../assets/list.scss')
    export default {
        filters: {
            
        },
        methods:{
          
        },
        data() {
            return {
                active:[false,true]
            }
        },
        mounted() {
            
        },
        components:{
           nb,sb
        }
    }
</script>
<style lang="sass" scoped>
$base-color:#C49F59;
   section{
           width:100%;
           // height:100%;
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
            

          } 
  }
</style>