<template>
     <table class="partner-list">
                <tr class='title'>
                    <td class="crowone">操作人</td>
                    <td class="crowone">公告类型</td>
                    <td class="crowone">创建时间</td>
                    <td class="crowtow">公告内容</td>
                </tr>
                <tr v-for="(item,index) in issueList" :class='{active:active[index%2]}'>
                    <td class="crowone">{{item.operatorName}}</td>
                    <td class="crowone">{{item.operationType}}</td>
                    <td class="crowone">{{item.creationTime}}</td>
                    <td class="crowtow">{{item.memo}}</td>
                </tr>
                
    </table>
</template>
<script>

    export default {
        filters: {
            
        },
        props: ['apiurl'],
        data() {
            return {
                apiurl:this.apiurl,
                active:[false,true],
                projectId:'22e6b233d5b5f78bf81c11242c0cb046',
                partnerNameOrCardNoOrPhone:'',
                issueList:{}
            }
        },
        methods:{
         
        },
        beforeMount(){
            let options={
               'projectId':this.projectId,
               'pageSize':10,
               'pageNum':1
            }
            this.$http.post(this.apiurl+'/projectLog/list',options)
                .then((response) => {
                   this.issueList=response.data.result;
                   console.log(this.issueList)
                })
                .catch(function(response) {
                    console.log(response)
                })
        }
    }
</script>
