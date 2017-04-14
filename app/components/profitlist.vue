<template>
    <div class="partner-bar">
     <div class="search-bar">
         <a class="export">导出列表</a>
     </div>
     <table class="partner-list">

                <tr class='title'>
                    <td class="crowone">分红编号</td>
                    <td class="crowone">分红总金额</td>
                    <td class="crowone">出让股份(%)</td>
                    <td class="crowone">分红人数</td>
                    <td class="crowone">发放时间</td>
                    <td class="crowtwo">分红说明</td>
                    <td class="crowone">操作</td>
                </tr>
                <tr v-for="(item,index) in profitList" :class='{active:active[index%2]}'>
                    <td class="crowone">{{item.dividendCode}}</td>
                    <td class="crowone">{{item.totalMoney}}</td>
                    <td class="crowone">{{item.totalMoney}}</td>
                    <td class="crowone">{{item.headCount}}</td>
                    <td class="crowone">{{item.dividendTime}}</td>
                    <td class="crowtwo">{{item.memo}}</td>
                    <td class="crowone"><router-link to="profitdetail">明细</router-link></td>
                </tr>
                
    </table>
    </div>
</template>
<script>
    // require('../assets/list.scss')
    export default {
        filters: {
            
        },
        props: ['apiurl'],
        data() {
            return {
                apiurl:this.apiurl,
                active:[false,true],
                projectId:'22e6b233d5b5f78bf81c11242c0cb046',
                profitList:{}
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
            this.$http.post(this.apiurl+'/dividend/list',options)
                .then((response) => {
                   this.profitList=response.data.result;
                   console.log(this.profitList)
                })
                .catch(function(response) {
                    console.log(response)
                })
        }
    }
</script>