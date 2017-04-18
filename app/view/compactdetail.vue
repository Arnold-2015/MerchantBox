<template>
    <section>     
         <!-- <nb></nb> -->
         <div class="content">
             <div class="main">
                 <span class="main-title">主页 / 合同管理 / 合同明细</span>
                 <div class="search-bar">
                        <div class="info-bar">
                            <span>{{customerdetail.realName}}</span>
                            <span>项目编号 {{customerdetail.participateProjectNum }}</span>
                            <span>签署人数 {{customerdetail.investmentMoney }}</span>

                            
                        </div>
                 </div>
                 <table class="partner-list">

                            <tr class='title'>
                                <td class="crowone">真实姓名</td>
                                <td class="crowone">手机号码</td>
                                <td class="crowone">身份证号码</td>
                                <td class="crowone">投资金额</td>
                                <td class="crowone">占股</td>
                                <td class="crowtwo">操作</td>
                            </tr>
                            <tr v-for="(item,index) in customerdetail.customerOrderList  " :class='{active:active[index%2]}'>
                                <td class="crowone">{{item.projectName}}</td>
                                <td class="crowone">{{item.buyCount }}</td>
                                <td class="crowone">{{item.principalBalance }}</td>
                                <td class="crowone">{{item.vipCode }}</td>
                                <td class="crowone">{{item.principal}}</td>
                                <td class="crowtwo">{{item.totalShare }}</td>
                            </tr>
                
                </table>
             </div>
         </div>
         <!-- <sb></sb> -->
    </section>
</template>
<script>
    require('../assets/list.scss')
    export default {
        filters: {
            
        },
        props: ['api'],
        data() {
            return {
                active:[false,true],
                apiurl:this.api,
                customerdetail:{}
            }
        },
        beforeMount(){
          localStorage.setItem('menuTag', 3)
          this.$emit('changetag')
            
            let options={
                'customerId':'0c0ef3d6188dba0b634de4e65c880846',
                'pageSize':10,
                'pageNum':1
            }
            this.$http.post(this.apiurl+'/customer/detail',options)
                .then((response) => {
                   this.customerdetail=response.data.result;
                   console.log(this.customerdetail)
                })
                .catch(function(response) {
                    console.log(response)
                })
        },
        components:{

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