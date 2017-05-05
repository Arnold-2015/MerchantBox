<template>
    <div class="partner-bar">
    
     <div class="search-bar">
         <input class="search-key" style="left:40px" type="text" placeholder="输入姓名/卡号/手机号" v-model='partnerNameOrCardNoOrPhone'>
         <div class="search"  style="left:280px" ><a  @click="search"></a></div>
         <a href='javascript:;' class="export" @click='excel'>导出列表</a>
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
                    <td class="crowtwo">{{item.consumeTime |fmtDate}}</td>
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
                partnerNameOrCardNoOrPhone:'',
                consumeList:{},
                pages:null
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
                   this.consumeList=response.data.result.consumeLists;
                   console.log(this.consumeList)
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
            this.$http.post(this.apiurl+'/consume/list',options)
                .then((response) => {
                   this.consumeList=response.data.result.consumeLists;
                   console.log(this.consumeList)
                })
                .catch(function(response) {
                    console.log(response)
                })

          },
          excel(){
            window.location.href=this.apiurl+'/consume/list/excel?projectId='+this.projectId+'&partnerNameOrCardNoOrPhone='+this.partnerNameOrCardNoOrPhone;
                
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
                   this.consumeList=response.data.result.consumeLists;
                   this.pages=Math.ceil(response.data.result.totalCount/10);
                   console.log(this.consumeList)
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