<template>
    <section>     
         <div class="content">
             <div class="main">
                 <span class="main-title"> 用户管理</span>
                 <div class="main-nav">
                     <span>用户管理</span>
                 </div>
                 <div class="search-bar">
                 <input  style="left:40px" type="text" placeholder="输入姓名/卡号/手机号" v-model="realNameOrUserPhoneOrIDNo">
                 <div class="search"  style="left:280px" ><a  @click="search"></a></div>
                 <a href='javascript:;' class="export" @click='excel'>导出列表</a>
                </div>
                <table class="partner-list">

                <tr class='title'>
                    <td class="crowone">昵称</td>
                    <td class="crowone">真实姓名</td>
                    <td class="crowone">手机号码</td>
                    <td class="crowtwo">身份证号</td>
                    <td class="crowone">参与项目</td>
                    <td class="crowone">累计投资金额</td>
                    <td class="crowone">注册时间</td>
                    <td class="crowone">状态</td>
                    <td class="crowtwo">操作</td>
                </tr>
                <tr v-for="(item,index) in customerList" :class='{active:active[index%2]}'>
                    <td class="crowone">{{item.nickName}}</td>
                    <td class="crowone">{{item.realName}}</td>
                    <td class="crowone">{{item.phone}}</td>
                    <td class="crowtwo">{{item.idNo}}</td>
                    <td class="crowone">{{item.participateProjectNum}}</td>
                    <td class="crowone">{{item.investmentMoney}}</td>
                    <td class="crowone">{{item.creationTime | fmtDate}}</td>
                    <td class="crowone">{{item.authStatus | authStatus}}</td>
                    <td class="crowtwo"><router-link :to="{ path: 'customerdetail', query: { customerId:item.customerId }}">查看</router-link></td>
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
            authStatus(value){
                return value==1?'认证用户':'普通用户'
            },
            fmtDate(date){
                return utils.fmtDate(new Date(date),'yyyy-MM-dd')
            }
        },
        props: ['api'],
        data() {
            return {
                active:[false,true],
                apiurl:this.api,
                realNameOrUserPhoneOrIDNo:'',
                customerList:{},
                pages:null,
                authStatus:0
            }
        },
        methods:{
          showQrChange(){
            this.$store.state.showQr = true;
          },
          search(){
            let options={
                'realNameOrUserPhoneOrIDNo':this.realNameOrUserPhoneOrIDNo,
                'pageSize':10,
                'pageNum':1
            }
            this.$http.post(this.apiurl+'/customer/list',options)
                .then((response) => {
                   this.customerList=response.data.result.customerLists;
                   this.pages=Math.ceil(response.data.result.totalCount/10);
                   console.log(this.customerList)
                })
                .catch(function(response) {
                    console.log(response)
                })
          },
          getpage(){
            let options={
                'realNameOrUserPhoneOrIDNo':this.realNameOrUserPhoneOrIDNo,
                'pageSize':10,
                'pageNum':this.$store.state.pageNum
            }
            this.$http.post(this.apiurl+'/customer/list',options)
                .then((response) => {
                   this.customerList=response.data.result.customerLists;
                   console.log(this.customerList)
                })
                .catch(function(response) {
                    console.log(response)
                })

          },
          excel(){
            window.location.href=this.apiurl+'/customer/list/excel?authStatus='+this.authStatus+'&realNameOrUserPhoneOrIDNo='+this.realNameOrUserPhoneOrIDNo;
                
          }
        },
       
        beforeMount(){
            localStorage.setItem('menuTag', 3)
            this.$emit('changetag')
            this.$emit('changenv')
            let options={
                'pageSize':10,
                'pageNum':1
            }
            this.$http.post(this.apiurl+'/customer/list',options)
                .then((response) => {
                   this.customerList=response.data.result.customerLists;
                   this.pages=Math.ceil(response.data.result.totalCount/10);
                   console.log(this.customerList)
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
