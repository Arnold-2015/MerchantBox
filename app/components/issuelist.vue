<template>
<div>
     <table class="partner-list">
                <tr class='title'>
                    <td class="crowone">操作人</td>
                    <td class="crowone">公告类型</td>
                    <td class="crowone">创建时间</td>
                    <td class="crowtow">公告内容</td>
                </tr>
                <tr v-for="(item,index) in issueList" :class='{active:active[index%2]}'>
                    <td class="crowone">{{item.operatorName}}</td>
                    <td class="crowone">{{item.operationType |operationType}}</td>
                    <td class="crowone">{{item.creationTime |fmtDate}}</td>
                    <td class="crowtow">{{item.memo}}</td>
                </tr>               
    </table>
    <paging @getpage='getpage' :allpage='pages'></paging>
</div>
</template>
<script>
    import paging from '../components/paging.vue'
    import utils from '../modules/utils.js'
    export default {
        filters: {
            operationType(value){
                return value==1?'延迟分红':'普通公告'
            },
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
                partnerNameOrCardNoOrPhone:'',
                issueList:{},
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
            this.$http.post(this.apiurl+'/projectLog/list',options)
                .then((response) => {
                   this.issueList=response.data.result.projectLogLists;
                   console.log(this.issueList)
                })
                .catch(function(response) {
                    console.log(response)
                })

          }
        },
        beforeMount(){
            let options={
               'projectId':this.projectId,
               'pageSize':10,
               'pageNum':1
            }
            this.$http.post(this.apiurl+'/projectLog/list',options)
                .then((response) => {
                   this.issueList=response.data.result.projectLogLists;
                   this.pages=Math.ceil(response.data.result.totalCount/10);
                   console.log(this.issueList)
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
