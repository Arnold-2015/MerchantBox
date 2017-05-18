<template>
    <section>     
         <!-- <nb></nb> -->
         <div class="content">
             <div class="main">
                 <span class="main-title">
                 <router-link to='customermanage' >用户管理</router-link>
                  / <a href="javascript:;" >用户明细</a></span>
                 <div class="search-bar">
                        <div class="info-bar">
                            <span>{{customerdetail.realName}}</span>
                            <span>参与项目数 {{customerdetail.participateProjectNum }}</span>
                            <span>累计投资金额 {{customerdetail.investmentMoney }}</span>
                            <span>类型 {{customerdetail.authStatus |authStatus}}</span>
                            
                        </div>
                 </div>
                 <table class="partner-list">

                            <tr class='title'>
                                <td class="crowone">项目名称</td>
                                <td class="crowone">份数</td>
                                <td class="crowone">投资金额</td>
                                <td class="crowone">卡号</td>
                                <td class="crowone">本金金额</td>
                                <!-- <td class="crowone">剩余占股</td> -->
                                <td class="crowone">收益总额</td>
                                <td class="crowone">消费总额</td>
                            </tr>
                            <tr v-for="(item,index) in customerdetail.customerOrderList  " :class='{active:active[index%2]}'>
                                <td class="crowone">{{item.projectName}}</td>
                                <td class="crowone">{{item.buyCount }}</td>
                                <td class="crowone">{{item.principalBalance }}</td>
                                <td class="crowone">{{item.vipCode }}</td>
                                <td class="crowone">{{item.principal}}</td>
                                <!-- <td class="crowone">{{item.totalShare }}</td> -->
                                <td class="crowone">{{item.earning }}</td>
                                <td class="crowone">{{item.consumeTotal}}</td>
                            </tr>
                
                </table>
             <paging @getpage='getpage' :allpage='pages'></paging>
             </div>
         </div>
         <!-- <sb></sb> -->
    </section>
</template>
<script>
    require('../assets/list.scss')
    import paging from '../components/paging.vue'
    import utils from '../modules/utils.js'
    export default {
        filters: {
            authStatus(value){
                return value==1?'认证用户':'普通用户'
            }
        },
        props: ['api'],
        data() {
            return {
                active:[false,true],
                apiurl:this.api,
                customerId:this.$route.query.customerId,
                customerdetail:{},
                pages:null
            }
        },
        methods:{
         getpage(){
            let options={
                'customerId':this.customerId,
                'pageSize':10,
                'pageNum':this.$store.state.pageNum
            }
            this.$http.post(this.apiurl+'/customer/detail',options)
                .then((response) => {
                   this.customerdetail=response.data.result;
                   console.log(this.customerdetail)
                })
                .catch(function(response) {
                    console.log(response)
                })

          }
        },
        beforeMount(){
          localStorage.setItem('menuTag', 3)
          this.$emit('changetag')
            
            let options={
                'customerId':this.customerId,
                'pageSize':10,
                'pageNum':1
            }
            this.$http.post(this.apiurl+'/customer/detail',options)
                .then((response) => {
                   this.customerdetail=response.data.result;
                   this.pages=Math.ceil(response.data.result.totalCount/10);
                   console.log(this.customerdetail)
                })
                .catch(function(response) {
                    console.log(response)
                })
        },
        components:{
             paging
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
          margin-top:120px;
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
                a{
                  color:#999;
                }
            }
           .search-bar  .info-bar {
               left:0;
               span{
                font-size:18px;
                font-weight:bold;
               }
            }
            

          } 
  }


  @media (min-width: 768px) and (max-width: 1368px) {
$base-color:#C49F59;
   section{
           width:100%;
           // height:100%;
   }
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
                margin-left:24px;
                color:#999;
                font-size:12px;
            }
           .search-bar  .info-bar {
               left:0;
               span{
                font-size:16px;
                font-weight:bold;
               }
            }
            

          } 
  }
}
</style>