<template>
    <section>     
         <!-- <nb></nb> -->
         <div class="content">
             <div class="main">
                 <span class="main-title">主页 / 项目管理 / 管理中心 /合伙人明细</span>
                 <div class="search-bar">
                        <!-- <router-link class="toback" to="performing">返回</router-link> -->
                        <div class="info-bar">
                            <span class="title">{{partnerDetail.realName}}</span>
                            <span>手机号码 {{partnerDetail.phone }}</span>
                            <span>卡号 {{partnerDetail.vipCode}}</span>
                            <span>本金余额 {{partnerDetail.principalBalance}}</span>
                            <span>收益余额 {{partnerDetail.earning }}</span>
                            <span>消费总额 {{partnerDetail.consumeTotal}}</span>
                        </div>
                        <a href='javascript:;' class="export" @click='excel'>导出列表</a>
                 </div>
                 <table class="partner-list">

                            <tr class='title'>
                                <td class="crowone">流水号</td>
                                <td class="crowone">金额</td>
                                <td class="crowone">类型</td>
                                <td class="crowone">时间</td>
                                <td class="crowtwo">备注</td>
                            </tr>
                            <tr v-for="(item,index) in partnerDetail.partnerDetailAccountFlowList " :class='{active:active[index%2]}'>
                                <td class="crowone">{{item.projectAccountFlowId }}</td>
                                <td class="crowone">{{item.businessMoney}}</td>
                                <td class="crowone">{{item.businessType }}</td>
                                <td class="crowone">{{item.creationTime }}</td>
                                <td class="crowtwo">{{item.memo }}</td>
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
        props: ['api'],
        data() {
            return {
                active:[false,true],
                apiurl:this.api,
                partnerDetail:{}
            }
        },
        methods:{
          excel(){
            window.location.href=this.apiurl+'/partner/'+this.$route.query.projectId+'/'+this.$route.query.partnerId+'/detail/excel';
                
          }
        },
        beforeMount(){
          localStorage.setItem('menuTag', 1)
          this.$emit('changetag')
            
            this.$http.get(this.apiurl+'/partner/'+this.$route.query.projectId+'/'+this.$route.query.partnerId+'/detail')
                .then((response) => {
                   this.partnerDetail=response.data.result;
                   console.log(this.partnerDetail)
                })
                .catch(function(response) {
                    console.log(response)
                })
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