<template>
    <div class="partner-bar">
    
     <div class="search-bar" >
         <select v-model='status'>
           <option value =0 >全部</option>
           <option value =1 >有效合伙人</option>
           <option value=2 >退出合伙人</option>
         </select>
         <input  type="text" placeholder="输入姓名/卡号/手机号" v-model='realNameOrPhoneOrVipCardNo'>
         <div class="search" ><a  @click="search"></a></div>
         <a href='javascript:;' class="export" @click='excel'>导出列表</a>
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
                    <td class="crowone"><router-link :to="{ path: 'partnerdetail', query: { partnerId:item.partnerId,projectId:projectId }}">明细</router-link><a href="javascript:;" @click='delPartner(item.partnerId)'>退出</a></td>
                </tr>
                
    </table>
    <paging @getpage='getpage' :allpage='pages'></paging>
    </div>
</template>
<script>
    // require('../assets/list.scss')
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
                realNameOrPhoneOrVipCardNo:'',
                status:0,
                partnerList:{},
                pages:null
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
                   this.partnerList=response.data.result.partnerLists;
                   this.pages=Math.ceil(response.data.result.totalCount/10);
                   console.log(this.partnerList)
                })
                .catch(function(response) {
                    console.log(response)
                })
          },
          delPartner(partnerId){
            this.$http.delete(this.apiurl+'/partner/partnerId/'+partnerId)
                .then((response) => {
                  // window.location.reload()
                })
                .catch(function(response) {
                    console.log(response)
                })
          },
          getpage(){
            let options={
                'projectId':this.projectId,
                'realNameOrPhoneOrVipCardNo':this.realNameOrPhoneOrVipCardNo,
                'pageSize':10,
                'pageNum':this.$store.state.pageNum
            }
            this.$http.post(this.apiurl+'/partner/list',options)
                .then((response) => {
                   this.partnerList=response.data.result.partnerLists;
                   this.pages=Math.ceil(response.data.result.totalCount/10);
                   console.log(this.partnerList)
                })
                .catch(function(response) {
                    console.log(response)
                })

          },
          excel(){
             window.location.href=this.apiurl+'/partner/list/excel?projectId='+this.projectId+'&status='+this.status+'&realNameOrPhoneOrVipCardNo='+this.realNameOrPhoneOrVipCardNo;
                
          }
        },
        watch:{
          status(){
               let options={
               'projectId':this.projectId,
               'status':this.status,
               'pageSize':10,
               'pageNum':1
            }
            this.$http.post(this.apiurl+'/partner/list',options)
                .then((response) => {
                   this.partnerList=response.data.result.partnerLists;
                   this.pages=Math.ceil(response.data.result.totalCount/10);
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
                   this.partnerList=response.data.result.partnerLists;
                   this.pages=Math.ceil(response.data.result.totalCount/10);
                   console.log(this.partnerList)
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
