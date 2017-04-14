<template>
    <div class="partner-bar">
    
     <div class="search-bar">
         <input class="search-key" style="left:40px" type="text" placeholder="输入姓名/卡号/手机号" v-model='partnerNameOrCardNoOrPhone'>
         <a class="search" style="left:280px"><img src="../assets/search.png" @click="search"></a>
         <a class="export">导出列表</a>
     </div>
     <table class="partner-list">

                <tr class='title'>
                    <td class="crowone">姓名</td>
                    <td class="crowtwo">手机号</td>
                    <td class="crowtwo">卡号</td>
                    <td class="crowone">消费类型</td>
                    <td class="crowone">消费金额</td>
                    <td class="crowtwo">消费时间</td>
                </tr>
                <tr v-for="(item,index) in consumeList" :class='{active:active[index%2]}'>
                    <td class="crowone">{{item.partnerName}}</td>
                    <td class="crowtwo">{{item.partnerPhone}}</td>
                    <td class="crowtwo">{{item.partnerVipCardNo}}</td>
                    <td class="crowone">{{item.consumeType}}</td>
                    <td class="crowone">{{item.consumeMoney}}</td>
                    <td class="crowtwo">{{item.consumeTime}}</td>
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
                partnerNameOrCardNoOrPhone:'',
                consumeList:{}
            }
        },
        methods:{
          search(){
            let options={
                'nickNameOrUserPhone':this.partnerNameOrCardNoOrPhone,
                'pageSize':10,
                'pageNum':1
            }
            this.$http.post(this.apiurl+'/consume/list',options)
                .then((response) => {
                   this.consumeList=response.data.result;
                   console.log(this.consumeList)
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
            this.$http.post(this.apiurl+'/consume/list',options)
                .then((response) => {
                   this.consumeList=response.data.result;
                   console.log(this.consumeList)
                })
                .catch(function(response) {
                    console.log(response)
                })
        }
    }
</script>