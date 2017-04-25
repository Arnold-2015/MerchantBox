<template>
    <section>     
         <!-- <nb></nb> -->
         <div class="content">
             <div class="main">
                 <span class="main-title">主页 / 项目管理 / 管理中心 / 明细</span>
                 <div class="search-bar">
                        <!-- <router-link class="toback" to="performing">返回</router-link> -->
                        <div class="info-bar">
                            <span class="title">{{profitDetail.dividendTime}} 分红明细</span>
                            <span>分红总金额 {{profitDetail.dividendTotalMoney}}元</span>
                            <span>分红人数 {{profitDetail.dividendTotalCount}}人</span>
                        </div>
                        <a href='javascript:;' class="export" @click='excel'>导出列表</a>
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
                            <tr v-for="(item,index) in profitDetail.dividendDetailList" :class='{active:active[index%2]}'>
                                <td class="crowone">{{item.realName}}</td>
                                <td class="crowtwo">{{item.phone}}</td>
                                <td class="crowtwo">{{item.vipCardNo}}</td>
                                <td class="crowone">{{item.principalBalance}}</td>
                                <td class="crowone">{{item.unitShares}}%</td>
                                <td class="crowone">{{item.participateMoney }}</td>
                                
                            </tr>
                
                </table>
                <paging @getpage='getpage' :allpage='pages'></paging>
             </div>
         </div>
         <!-- <sb></sb> -->
    </section>
</template>
<script>
    import paging from '../components/paging.vue'
    require('../assets/list.scss')
    export default {
        filters: {
            
        },
        props: ['api'],
        data() {
            return {
                active:[false,true],
                apiurl:this.api,
                projectId:'22e6b233d5b5f78bf81c11242c0cb046',
                dividendId:'0bbc881586cf4ca71356e5bc24ee718b',
                profitDetail:{},
                pages:null
            }
        },
        methods:{
         getpage(){
            let options={
                'projectId':this.projectId,
                'dividendId':this.dividendId,
                'pageSize':10,
                'pageNum':this.$store.state.pageNum
            }
            this.$http.post(this.apiurl+'/dividend/detail',options)
                .then((response) => {
                   this.profitDetail=response.data.result;
                   console.log(this.profitDetail)
                })
                .catch(function(response) {
                    console.log(response)
                })

          },
          excel(){
            window.location.href=this.apiurl+'/dividend/detail/excel?projectId='+this.projectId+'&dividendId='+this.dividendId;
                
          }
        },
        beforeMount(){

          localStorage.setItem('menuTag', 1)

          this.$emit('changetag')

            let options={
               'pageSize':10,
               'pageNum':1,
               'projectId':this.projectId,
               'dividendId':this.dividendId
            }

            this.$http.post(this.apiurl+'/dividend/detail',options)
                .then((response) => {
                   this.profitDetail=response.data.result;
                   this.pages=Math.ceil(response.data.result.totalCount/10);
                   console.log(this.profitDetail)
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
          margin-top:-60px;
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