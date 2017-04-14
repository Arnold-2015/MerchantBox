<template>
    <section>     
         <!-- <nb></nb> -->
         <div class="content">
             <div class="main">
                 <span class="main-title">主页 / 项目管理 / 管理中心 /合伙人明细</span>
                 <div class="search-bar">
                        <router-link class="toback" to="performing">返回</router-link>
                        <div class="info-bar">
                            <span class="title">姓名 {{partnerDetail.realName}}</span>
                            <span>手机号码 {{partnerDetail.phone }}</span>
                            <span>卡号 {{partnerDetail.vipCode}}</span>
                            <span>本金余额 {{partnerDetail.principalBalance}}</span>
                            <span>收益余额 {{partnerDetail.earning }}</span>
                            <span>消费总额 {{partnerDetail.cunsume}}</span>
                        </div>
                 </div>
                 <table class="partner-list">

                            <tr class='title'>
                                <td class="crowone">流水号</td>
                                <td class="crowone">金额</td>
                                <td class="crowone">类型</td>
                                <td class="crowone">时间</td>
                                <td class="crowtwo">备注</td>
                            </tr>
                            <tr v-for="(n,index) in 6" :class='{active:active[index%2]}'>
                                <td class="crowone">0000123455</td>
                                <td class="crowone">1503</td>
                                <td class="crowone">23%</td>
                                <td class="crowone">3/12/2016</td>
                                <td class="crowtwo">3月第一次分红</td>
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
        beforeMount(){
            let options={
               'pageSize':10,
               'pageNum':1,
               'projectId':projectId,
               'realNameOrVipCodeOrUserPhone':realNameOrVipCodeOrUserPhone 
            }
            this.$http.get(this.apiurl+'/partner/baseInfo',options)
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
            

          } 
  }
</style>