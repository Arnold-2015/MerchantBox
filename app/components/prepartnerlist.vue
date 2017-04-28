<template>
    <div class="prepartner-bar">
      <div class="search-bar">
         <input  type="text"  style="left:40px" placeholder="输入姓名/卡号/手机号" v-model='realNameOrPhone'>
         <div class="search"  style="left:280px" > <a  @click="search"> </a> </div>
         <a href='javascript:;' class="export" @click='excel'>导出列表</a>
     </div>
     <table class="partner-list">

                <tr class='title'>
                    <td class="crowone">姓名</td>
                    <td class="crowone">手机号</td>
                    <td class="crowone">份数</td>
                    <td class="crowone">投资金额</td>
                    <td class="crowone">下单时间</td>
                    <td class="crowone">订单状态</td>
                    <td class="crowtow">备注</td>
                </tr>
                <tr v-for="(item,index) in prepartnerList" :class='{active:active[index%2]}'>
                    <td class="crowone">{{item.realName}}</td>
                    <td class="crowone">{{item.phone}}</td>
                    <td class="crowone">{{item.buyCount}}</td>
                    <td class="crowone">{{item.investMoney}}</td>
                    <td class="crowone">{{item.creationTime}}</td>
                    <td class="crowone">{{item.orderStatus}}</td>
                    <td class="crowtow">{{item.memo}}</td>
                </tr>
                
    </table>
    <paging @getpage='getpage' :allpage='pages'></paging>
    </div>
</template>
<script>
    import paging from '../components/paging.vue'
    export default {
        filters: {
            
        },
        props: ['apiurl','projectid'],
        data() {
            return {
                apiurl:this.apiurl,
                active:[false,true],
                projectId:this.projectid,
                realNameOrPhone :'',
                prepartnerList:{},
                pages:null
            }
        },
        methods:{
          search(){
            let options={
                'projectId':this.projectId,
                'realNameOrPhone':this.realNameOrPhone,
                'pageSize':10,
                'pageNum':1
            }
            this.$http.post(this.apiurl+'/partner/intention/list',options)
                .then((response) => {
                   this.prepartnerList=response.data.result.partnerIntentionList;
                   console.log(this.prepartnerList)
                })
                .catch(function(response) {
                    console.log(response)
                })
          },
          getpage(){
            let options={
                'projectId':this.projectId,
                'pageSize':10,
                'pageNum':this.$store.state.pageNum
            }
          this.$http.post(this.apiurl+'/partner/intention/list',options)
                .then((response) => {
                   this.prepartnerList=response.data.result.partnerIntentionList;
                   console.log(this.prepartnerList)
                })
                .catch(function(response) {
                    console.log(response)
                })

          },
          excel(){
            window.location.href=this.apiurl+'/partner/intention/excel?projectId='+this.projectId+'&realNameOrPhone='+this.realNameOrPhone;
                
          }
        },
        beforeMount(){
            let options={
               'projectId':this.projectId,
               'pageSize':10,
               'pageNum':1
            }
            this.$http.post(this.apiurl+'/partner/intention/list',options)
                .then((response) => {
                   this.prepartnerList=response.data.result.partnerIntentionList;
                   this.pages=Math.ceil(response.data.result.buyTotalCount /10);
                   console.log(this.prepartnerList)
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
