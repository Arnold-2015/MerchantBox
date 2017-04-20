<template>
    <section>     
         <div class="content">
             <div class="main">
                 <span class="main-title">主页 / 商家管理 / 商家明细</span>
                 <div class="search-bar">
                        <div class="info-bar">
                            <span>{{merchantdetail.nickName}}</span>
                            <span>参与项目数 {{merchantdetail.projectCount  }}</span>
                            <span>累计投资金额 {{merchantdetail.totalMoney  }}</span>
                            <span>累计分红 {{merchantdetail.dividendTotalMoney  }}</span>
                            
                        </div>
                 </div>
                 <table class="partner-list">

                            <tr class='title'>
                                <td class="crowone">项目名称</td>
                                <td class="crowone">目标筹集金额</td>
                                <td class="crowone">实际筹集金额</td>
                                <td class="crowone">累计分红</td>
                                <td class="crowone">状态</td>
                            </tr>
                            <tr v-for="(item,index) in merchantdetail.merchantDetailProjectInfoList  " :class='{active:active[index%2]}'>
                                <td class="crowone">{{item.projectName  }}</td>
                                <td class="crowone">{{item.totalMoney  }}</td>
                                <td class="crowone">{{item.realMoney  }}</td>
                                <td class="crowone">{{item.totalDividend   }}</td>
                                <td class="crowone">{{item.projectStatus }}</td>
                            </tr>
                
                </table>
                <paging @getpage='getpage' :allpage='pages'></paging>
             </div>
         </div>
    </section>
</template>
<script>
    require('../assets/list.scss')
     import paging from '../components/paging.vue'
    export default {
        filters: {
            
        },
        props: ['api'],
        data() {
            return {
                active:[false,true],
                apiurl:this.api,
                merchantdetail:{},
                pages:null
            }
        },
        methods:{
         getpage(){
            let options={
                'merchantId':this.$route.query.merchantId,
                'pageSize':10,
                'pageNum':this.$store.state.pageNum
            }
            this.$http.post(this.apiurl+'/merchant/detailAndProjectList',options)
                .then((response) => {
                   this.merchantdetail=response.data.result;
                   console.log(this.merchantdetail)
                })
                .catch(function(response) {
                    console.log(response)
                })

          }
        },
        beforeMount(){
          localStorage.setItem('menuTag', 2)
          this.$emit('changetag')
            
            let options={
                'merchantId':this.$route.query.merchantId,
                'pageSize':10,
                'pageNum':1
            }
            this.$http.post(this.apiurl+'/merchant/detailAndProjectList',options)
                .then((response) => {
                   this.merchantdetail=response.data.result;
                   this.pages=Math.ceil(response.data.result.totalCount/10);
                   console.log(this.merchantdetail)
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
                font-size:24px;
               }
            }
            

          } 
  }
</style>