<template>
    <div class="partner-bar">
    
     <div class="search-bar" >
         <select>
           <option value ="全部">全部</option>
           <option value ="有效合伙人">有效合伙人</option>
           <option value="已退出合伙">已退出合伙</option>
         </select>
         <input  type="text" placeholder="输入姓名/卡号/手机号" v-model='realNameOrPhoneOrVipCardNo'>
         <a class="search"><img src="../assets/search.png" @click='search'></a>
         <a class="export">导出列表</a>
     </div>
     <table class="partner-list">

                <tr class='title'>
                    <td class="crowone">姓名</td>
                    <td class="crowtwo">手机号</td>
                    <td class="crowtwo">卡号</td>
                    <td class="crowone">本金余额</td>
                    <td class="crowone">占股</td>
                    <td class="crowone">收益余额</td>
                    <td class="crowone">消费金额</td>
                    <td class="crowone">操作</td>
                </tr>
                <tr v-for="(item,index) in partnerList" :class='{active:active[index%2]}'>
                    <td class="crowone">{{item.realName}}</td>
                    <td class="crowtwo">{{item.phone }}</td>
                    <td class="crowtwo">{{item.vipCardNo}}</td>
                    <td class="crowone">{{item.principalBalance}}</td>
                    <td class="crowone">{{item.shares}}</td>
                    <td class="crowone">{{item.earningBalance}}</td>
                    <td class="crowone">{{item.consumeTotal}}</td>
                    <td class="crowone"><router-link to="partnerdetail">明细</router-link><a>退出</a></td>
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
                realNameOrPhoneOrVipCardNo:'',
                partnerList:{}
            }
        },
        methods:{
          search(){
            let options={
                'projectId':this.projectId,
                'realNameOrPhoneOrVipCardNo':this.realNameOrPhoneOrVipCardNo,
                'pageSize':10,
                'pageNum':1
            }
            this.$http.post(this.apiurl+'/partner/list',options)
                .then((response) => {
                   this.partnerList=response.data.result;
                   console.log(this.partnerList)
                })
                .catch(function(response) {
                    console.log(response)
                })
          }
        },
        beforeMount(){
            let options={
               'projectId':this.projectId,
               'status':'',
               'pageSize':10,
               'pageNum':1
            }
            this.$http.post(this.apiurl+'/partner/list',options)
                .then((response) => {
                   this.partnerList=response.data.result;
                   console.log(this.partnerList)
                })
                .catch(function(response) {
                    console.log(response)
                })
        }
    }
</script>
