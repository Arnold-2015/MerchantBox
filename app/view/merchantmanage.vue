<template>
    <section>     
         <div class="content">
             <div class="main">
                 <span class="main-title">主页 / 商家管理</span>
                 <div class="main-nav">
                     <span>商家管理</span>
                     <a href="javascript:;" @click='showCreMerchantChange' class="creat-new"><span></span>新建商家</a>
                 </div>
                 <div class="search-bar">
                 <input  style="left:40px" type="text" placeholder="输入姓名/卡号/手机号" v-model="nickNameOrUserPhone">
                 <div class="search"  style="left:280px" ><a  @click="search"></a></div>
                 <a href='javascript:;' class="export" @click='excel'>导出列表</a>
                </div>
                <table class="partner-list">

                <tr class='title'>
                    <td class="crowone">商家（甲方）</td>
                    <td class="crowone">手机号码</td>                   
                    <td class="crowone">丙方名称</td>
                    <td class="crowone">联系人姓名</td>
                    <td class="crowone">联系人手机号码</td>
                    <td class="crowone">拥有项目</td>
                    <td class="crowone">状态</td>
                    <td class="crowtwo">操作</td>
                </tr>
                <tr v-for="(item,index) in merchantList" :class='{active:active[index%2]}'>
                    <td class="crowone">{{item.nickName}}</td>
                    <td class="crowone">{{item.userPhone}}</td>
                    <td class="crowone">{{item.thirdPartyName}}</td>
                    <td class="crowone">{{item.linkManName}}</td>
                    <td class="crowtwo">{{item.linkManPhone}}</td>
                    <td class="crowone">{{item.projectCount}}</td>
                    <td class="crowone">{{item.status}}</td>
                    <td class="crowtwo"><a href="javascript:;" @click='showRevMerchantChange(item.merchantId)'>修改</a><router-link :to="{ path: 'merchantdetail', query: { merchantId:item.merchantId }}">查看</router-link></td>
                </tr>
                
                </table>
                <paging @getpage='getpage' :allpage='pages'></paging>
             </div>

         </div>
         <qr v-if="this.$store.state.showQr"></qr>
         <cremerchant v-if="this.$store.state.showCreMerchant" :apiurl='apiurl'></cremerchant>
         <revmerchant v-if="this.$store.state.showRevMerchant" :apiurl='apiurl' :merchantinfo='merchantinfo'></revmerchant>
         
    </section>
</template>
<script>
    import qr from '../components/qrbar.vue'
    import cremerchant from '../components/cremerchant.vue'
    import revmerchant from '../components/revmerchant.vue'
    import paging from '../components/paging.vue'
    
    require('../assets/list.scss')
    export default {
        filters: {
            
        },
        props: ['api'],
        data() {
            return {
                active:[false,true],
                apiurl:this.api,
                nickNameOrUserPhone:'',
                status:0,
                merchantList:{},
                merchantinfo:null,
                pages:null
            }
        },
        methods:{
          showCreMerchantChange(){
            this.$store.state.showCreMerchant = true;
          },
          showRevMerchantChange(merchantId){

            this.$store.state.showRevMerchant = true;
            this.$http.get(this.apiurl+'/merchant/'+merchantId)
                .then((response) => {
                   this.merchantinfo=response.data.result;
                   console.log(this.merchantinfo)
                })
                .catch(function(response) {
                    console.log(response)
                })
          },
          search(){
            let options={
                'nickNameOrUserPhone':this.nickNameOrUserPhone,
                'pageSize':10,
                'pageNum':1
            }
            this.$http.post(this.apiurl+'/merchant/list',options)
                .then((response) => {
                   this.merchantList=response.data.result.merchantLists;
                   console.log(this.merchantList)
                })
                .catch(function(response) {
                    console.log(response)
                })
          },
          getpage(){
            let options={
                'pageSize':10,
                'pageNum':this.$store.state.pageNum
            }
            this.$http.post(this.apiurl+'/merchant/list',options)
                .then((response) => {
                   this.merchantList=response.data.result.merchantLists;
                   console.log(this.merchantList)
                })
                .catch(function(response) {
                    console.log(response)
                })
          },
          excel(){
            window.location.href=this.apiurl+'/merchant/list/excel?status='+this.status+'&nickNameOrUserPhone='+this.nickNameOrUserPhone;
                
          }
        },

        beforeMount(){
            localStorage.setItem('menuTag', 2)
            this.$emit('changetag')
            this.$emit('changenv')
            let options={
                'pageSize':10,
                'pageNum':1
            }
            this.$http.post(this.apiurl+'/merchant/list',options)
                .then((response) => {
                   this.merchantList=response.data.result.merchantLists;
                   this.pages=Math.ceil(response.data.result.totalCount/10);
                   console.log(this.merchantList)
                })
                .catch(function(response) {
                    console.log(response)
                })
        },
        mounted() {
            
        },
        components:{
           qr,cremerchant,revmerchant,paging
        }
    }
</script>
<style lang="sass" scoped>
$base-color:#C49F59;
   section{
           width:100%;
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
            .main-nav{
                width:100%;
                height:60px;
                line-height:60px;
                background:#fff;
                border-bottom:1px solid #d7d7d7;
                span{
                    width:160px;
                    float:left;
                    margin-left:40px;
                    color:#333;
                    font-size:18px;
                    font-weight:bold;
                }
                .creat-new{
                     width:150px;
                     height:40px;
                     line-height:40px;
                     border-radius:5px;
                     color:#fff;
                     font-size:14px;
                     float:right;
                     margin-top:10px;
                     margin-right:40px;
                     background:$base-color;
                     span{
                        width: 20px;
                        height:40px;
                        background:url('../assets/btn_creat.png')no-repeat left  center;
                     }
                }
            }
 
            }

          }
   

   @media (min-width: 768px) and (max-width: 1368px) {
 $base-color:#C49F59;
   section{
           width:100%;
   }
  .content{
          width:100%;
          min-height:100%;
          float:left;
          margin-top:-60px;
          .main{
            height:100%;
            margin-left:60px;
            margin-top:60px;
            .main-title{
                width:100%;
                height:40px;
                line-height:40px;
                margin-left:24px;
                color:#999;
                font-size:12px;
            }
            .main-nav{
                width:100%;
                height:42px;
                line-height:42px;
                background:#fff;
                border-bottom:1px solid #d7d7d7;
                span{
                    width:96px;
                    float:left;
                    margin-left:24px;
                    color:#333;
                    font-size:16px;
                    font-weight:bold;
                }
                .creat-new{
                     width:96px;
                     height:26px;
                     line-height:26px;
                     border-radius:2px;
                     color:#fff;
                     font-size:12px;
                     text-align:center;
                     margin-top:7px;
                     margin-right:32px;
                     background:$base-color;
                     span{
                        display:none;
                     }
                }
            }
 
            }

          }
}  
</style>
