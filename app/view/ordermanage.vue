<template>
    <section>     
         <div class="content">
             <div class="main">
                 <span class="main-title">主页 / 订单管理</span>
                 <div class="main-nav">
                     <span>订单管理</span>
                 </div>
                 <div class="search-bar">
                 <input  style="left:40px" type="text" placeholder="输入姓名/卡号/手机号" v-model="realNameOrPhoneOrProjectName">
                 <a class="search"  style="left:280px"><img src="../assets/search.png" @click="search"></a>
                 <a class="export">导出列表</a>
                </div>
                <table class="partner-list">

                <tr class='title'>
                    <td class="crowone">流水号</td>
                    <td class="crowtwo">项目名称</td>
                    <td class="crowone">真实姓名</td>
                    <td class="crowone">手机号码</td>
                    <td class="crowtwo">身份证号码</td>
                    <td class="crowone">份数</td>
                    <td class="crowone">投资金额</td>
                    <td class="crowone">支付时间</td>
                    <td class="crowtwo">状态</td>
                </tr>
                <tr v-for="(item,index) in orderList" :class='{active:active[index%2]}'>
                    <td class="crowone">{{item.orderCode}}</td>
                    <td class="crowtwo">{{item.projectName}}</td>
                    <td class="crowone">{{item.customerRealName}}</td>
                    <td class="crowone">{{item.phone}}</td>
                    <td class="crowtwo">{{item.idNo}}</td>
                    <td class="crowone">{{item.buyCount}}</td>
                    <td class="crowone">{{item.orderMoney}}</td>
                    <td class="crowone">{{item.modifyTime}}</td>
                    <td class="crowtwo">{{item.status}}</td>
                </tr>
                
                </table>
             </div>
         </div>
         <qr v-if="this.$store.state.showQr"></qr>
    </section>
</template>
<script>
    import qr from '../components/qrbar.vue'
    require('../assets/list.scss')
    export default {
        filters: {
            
        },
        props: ['api'],
        data() {
            return {
                active:[false,true],
                apiurl:this.api,
                realNameOrPhoneOrProjectName:'',
                orderList:{}
            }
        },
        methods:{
          showQrChange(){
            this.$store.state.showQr = true;
          },
          search(){
            let options={
                'realNameOrPhoneOrProjectName':this.realNameOrPhoneOrProjectName,
                'pageSize':10,
                'pageNum':1
            }
            this.$http.post(this.apiurl+'/order/list',options)
                .then((response) => {
                   this.orderList=response.data.result;
                   console.log(this.orderList)
                })
                .catch(function(response) {
                    console.log(response)
                })
          }
        },
        beforeMount(){
            let options={
                'pageSize':10,
                'pageNum':1
            }
            this.$http.post(this.apiurl+'/order/list',options)
                .then((response) => {
                   this.orderList=response.data.result;
                   console.log(this.orderList)
                })
                .catch(function(response) {
                    console.log(response)
                })
        },
        mounted() {
            
        },
        components:{
           qr
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
