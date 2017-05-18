<template>
    <section>     
         <div class="content">
             <div class="main">
                 <span class="main-title"> 订单管理</span>
                 <div class="main-nav">
                     <span>订单管理</span>
                 </div>
                 <div class="search-bar">
                 <input  style="left:40px" type="text" placeholder="输入姓名/卡号/手机号" v-model="realNameOrPhoneOrProjectName">
                 <div class="search"  style="left:280px" ><a  @click="search"></a></div>
                 <a href='javascript:;' class="export" @click='excel'>导出列表</a>
                </div>
                <table class="partner-list">

                <tr class='title'>
                    <td class="crowone">流水号</td>
                    <td class="crowone">项目名称</td>
                    <td class="crowone">真实姓名</td>
                    <td class="crowone">手机号码</td>
                    <td class="crowtwo">身份证号码</td>
                    <td class="crowone">份数</td>
                    <td class="crowone">投资金额</td>
                    <td class="crowone">支付时间</td>
                    <td class="crowone">
                        <select v-model='status' @change='search'>
                          <option value=0 >全部</option>
                          <option value=1 >待支付 </option>
                          <option value=2 >已支付</option>
                          <option value=3 >确认中</option>
                          <option value=4 >已取消</option>
                        </select>
                    </td>
                </tr>
                <tr v-for="(item,index) in orderList" :class='{active:active[index%2]}'>
                    <td class="crowone">{{item.orderCode}}</td>
                    <td class="crowone">{{item.projectName}}</td>
                    <td class="crowone">{{item.customerRealName}}</td>
                    <td class="crowone">{{item.phone}}</td>
                    <td class="crowtwo">{{item.idNo}}</td>
                    <td class="crowone">{{item.buyCount}}</td>
                    <td class="crowone">{{item.orderMoney}}</td>
                    <td class="crowone">{{item.creationTime | fmtDate}}</td>
                    <td class="crowone">{{item.status | status}}</td>
                </tr>
                
                </table>
                <paging @getpage='getpage' :allpage='pages'></paging>
             </div>
         </div>
         <qr v-if="this.$store.state.showQr"></qr>
    </section>
</template>
<script>
    import qr from '../components/qrbar.vue'
    import paging from '../components/paging.vue'
    import utils from '../modules/utils.js'
    require('../assets/list.scss')
    export default {
        filters: {
            status(status){
                let str = '';
        switch (status) {
            case 1:
                str = '待支付 ';
                break;
            case 2:
                str = '已支付';
                break;
            case 3:
                str = '确认中';
                break;
            case 4:
                str = '已取消';
                break;
            
        }   
            return str;          
            },
            fmtDate(date){
                return utils.fmtDate(new Date(date),'yyyy-MM-dd hh:mm:ss')
            }
        },
        props: ['api'],
        data() {
            return {
                active:[false,true],
                apiurl:this.api,
                status:0,
                realNameOrPhoneOrProjectName:'',
                orderList:{},
                pages:null
            }
        },
        methods:{
          showQrChange(){
            this.$store.state.showQr = true;
          },
          search(){
            let options={
                'status':this.status,
                'realNameOrPhoneOrProjectName':this.realNameOrPhoneOrProjectName,
                'pageSize':10,
                'pageNum':1
            }
            this.$http.post(this.apiurl+'/order/list',options)
                .then((response) => {
                   this.orderList=response.data.result.orderLists ;
                   this.pages=Math.ceil(response.data.result.totalCount/10);
                   console.log(this.orderList)
                })
                .catch(function(response) {
                    console.log(response)
                })
          },
          getpage(){
            let options={
                'status':this.status,
                'realNameOrPhoneOrProjectName':this.realNameOrPhoneOrProjectName,
                'pageSize':10,
                'pageNum':this.$store.state.pageNum
            }
            this.$http.post(this.apiurl+'/order/list',options)
                .then((response) => {
                   this.orderList=response.data.result.orderLists ;
                   console.log(this.orderList)
                })
                .catch(function(response) {
                    console.log(response)
                })

          },
          excel(){
            window.location.href=this.apiurl+'/order/list/excel?status='+this.status+'&realNameOrPhoneOrProjectName='+this.realNameOrPhoneOrProjectName;
                
          }

        },
        beforeMount(){
            localStorage.setItem('menuTag', 4)
            this.$emit('changetag')
            this.$emit('changenv')
            let options={
                'pageSize':10,
                'pageNum':1
            }
            this.$http.post(this.apiurl+'/order/list',options)
                .then((response) => {
                   this.orderList=response.data.result.orderLists ;
                   this.pages=Math.ceil(response.data.result.totalCount/10);
                   console.log(this.orderList)
                })
                .catch(function(response) {
                    console.log(response)
                })
        },
        mounted() {
            
        },
        components:{
           qr,paging
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
          margin-top:120px;
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
          margin-top:60px;
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
