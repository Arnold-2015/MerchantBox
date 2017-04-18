<template>
    <section>     
         <div class="content">
             <div class="main">
                 <span class="main-title">主页 / 商家管理 / 商家明细</span>
                 <div class="search-bar">
                        <div class="info-bar">
                            <span>{{customerdetail.realName}}</span>
                            <span>参与项目数 {{customerdetail.participateProjectNum }}</span>
                            <span>累计投资金额 {{customerdetail.investmentMoney }}</span>
                            <span>累计分红 {{customerdetail.investmentMoney }}</span>
                            
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
                            <tr v-for="(item,index) in customerdetail.customerOrderList  " :class='{active:active[index%2]}'>
                                <td class="crowone">{{item.projectName}}</td>
                                <td class="crowone">{{item.buyCount }}</td>
                                <td class="crowone">{{item.principalBalance }}</td>
                                <td class="crowone">{{item.vipCode }}</td>
                                <td class="crowone">{{item.principal}}</td>
                            </tr>
                
                </table>
             </div>
         </div>
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
          localStorage.setItem('menuTag', 2)
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