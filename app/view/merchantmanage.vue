<template>
    <section>     
         <div class="content">
             <div class="main">
                 <span class="main-title">主页 / 商家管理</span>
                 <div class="main-nav">
                     <span>商家管理</span>
                     <a @click='showMerchantChange' class="creat-new"><span></span>新建商家</a>
                 </div>
                 <div class="search-bar">
                 <input  style="left:40px" type="text" placeholder="输入姓名/卡号/手机号" v-model="nickNameOrUserPhone">
                 <a class="search"  style="left:280px"><img src="../assets/search.png" @click="search"></a>
                 <a class="export">导出列表</a>
                </div>
                <table class="partner-list">

                <tr class='title'>
                    <td class="crowone">商家姓名</td>
                    <td class="crowone">手机号码</td>
                    <td class="crowone">拥有项目</td>
                    <td class="crowone">身份证号</td>
                    <td class="crowtwo">累计募集金额</td>
                    <td class="crowone">累计分红</td>
                    <td class="crowone">状态</td>
                    <td class="crowtwo">操作</td>
                </tr>
                <tr v-for="(item,index) in merchantList" :class='{active:active[index%2]}'>
                    <td class="crowone">{{item.nickName}}</td>
                    <td class="crowone">{{item.userPhone}}</td>
                    <td class="crowone">{{item.projectCount}}</td>
                    <td class="crowone">23456199023456790</td>
                    <td class="crowtwo">2017</td>
                    <td class="crowone">快捷发起</td>
                    <td class="crowone">{{item.status}}</td>
                    <td class="crowtwo"><router-link to="partnerdetail">修改</router-link><a>查看</a></td>
                </tr>
                
                </table>
             </div>
         </div>
         <qr v-if="this.$store.state.showQr"></qr>
         <merchant v-if="this.$store.state.showMerchant"></merchant>
    </section>
</template>
<script>
    import qr from '../components/qrbar.vue'
    import merchant from '../components/cremerchant.vue'
    
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
                merchantList:{}
            }
        },
        methods:{
          showMerchantChange(){
            this.$store.state.showMerchant = true;
          },
          search(){
            let options={
                'nickNameOrUserPhone':this.nickNameOrUserPhone,
                'pageSize':10
            }
            this.$http.post(this.apiurl+'/merchant/list',options)
                .then((response) => {
                   this.merchantList=response.data.result;
                   console.log(this.merchantList)
                })
                .catch(function(response) {
                    console.log(response)
                })
          }
        },
        beforeMount(){
            let options={
                'pageSize':10
            }
            this.$http.post(this.apiurl+'/merchant/list',options)
                .then((response) => {
                   this.merchantList=response.data.result;
                   console.log(this.merchantList)
                })
                .catch(function(response) {
                    console.log(response)
                })
        },
        mounted() {
            
        },
        components:{
           qr,merchant
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
   
</style>
