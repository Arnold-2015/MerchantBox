<template>
    <div class="partner-bar">
     <div class="search-bar">
         <a href='javascript:;' class="export" @click='excel'>导出列表</a>
     </div>
     <table class="partner-list">

                <tr class='title'>
                    <td class="crowone">分红编号</td>
                    <td class="crowone">分红总金额</td>
                    <td class="crowone">分红人数</td>
                    <td class="crowone">发放时间</td>
                    <td class="crowtwo">分红说明</td>
                    <td class="crowone">操作</td>
                </tr>
                <tr v-for="(item,index) in profitList" :class='{active:active[index%2]}'>
                    <td class="crowone">{{item.dividendCode}}</td>
                    <td class="crowone">{{item.totalMoney}}</td>
                    <td class="crowone">{{item.headCount}}</td>
                    <td class="crowone">{{item.dividendTime |fmtDate}}</td>
                    <td class="crowtwo">{{item.memo}}</td>
                    <td class="crowone"><router-link  :to="{ path: 'profitdetail', query: { projectId:projectId,dividendId:item.dividendId }}">明细</router-link></td>
                </tr>
                
    </table>
    <paging @getpage='getpage' :allpage='pages'></paging>
    </div>
</template>
<script>
    // require('../assets/list.scss')
    import paging from '../components/paging.vue'
    import utils from '../modules/utils.js'
    export default {
        filters: {
            fmtDate(date){
                return utils.fmtDate(new Date(date),'yyyy-MM-dd hh:mm:ss')
            }
        },
        props: ['apiurl','projectid'],
        data() {
            return {
                apiurl:this.apiurl,
                active:[false,true],
                projectId:this.projectid,
                profitList:{},
                pages:null
            }
        },
        methods:{
          getpage(){
            let options={
                'projectId':this.projectId,
                'pageSize':10,
                'pageNum':this.$store.state.pageNum
            }
            this.$http.post(this.apiurl+'/dividend/list',options)
                .then((response) => {
                   this.profitList=response.data.result.dividendLists;
                   console.log(this.profitList)
                })
                .catch(function(response) {
                    console.log(response)
                })

          },
          excel(){
           window.location.href=this.apiurl+'/dividend/list/excel?projectId='+this.projectId;
                
          }
        },
        beforeMount(){
            let options={
               'projectId':this.projectId,
               'pageSize':10,
               'pageNum':1
            }
            this.$http.post(this.apiurl+'/dividend/list',options)
                .then((response) => {
                   this.profitList=response.data.result.dividendLists;
                   this.pages=Math.ceil(response.data.result.totalCount/10);
                   console.log(this.profitList)
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