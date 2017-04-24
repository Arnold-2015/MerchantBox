<template>
    <section>     
         <div class="content">
             <div class="main">
                 <span class="main-title">主页 / 合同管理</span>
                 <div class="main-nav">
                     <span>合同管理</span>
                 </div>
                 <div class="search-bar">
                 <input  style="left:40px" type="text" placeholder="输入姓名/卡号/手机号" >
                 <div class="search"  style="left:280px" ><a  @click="search"></a></div>
                 <a class="export">导出列表</a>
                </div>
                <table class="partner-list">

                <tr class='title'>
                    <td class="crowone">编号</td>
                    <td class="crowone">项目名称</td>
                    <td class="crowone">商家姓名</td>
                    <td class="crowtwo">手机号码</td>
                    <td class="crowone">签署人数</td>
                    <td class="crowone">签署时间</td>
                    <td class="crowone">状态</td>
                    <td class="crowtwo">操作</td>
                </tr>
                <tr v-for="(n,index) in 6" :class='{active:active[index%2]}'>
                    <td class="crowone">{{index}}</td>
                    <td class="crowone">12345670987</td>
                    <td class="crowone">赵钱孙李</td>
                    <td class="crowtwo">23456199023456790</td>
                    <td class="crowone">2017/3/23/14:00</td>
                    <td class="crowone">快捷发起</td>
                    <td class="crowone">未通过</td>
                    <td class="crowtwo"><router-link to="partnerdetail">修改</router-link><a>查看</a></td>
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
        methods:{
          showQrChange(){
            this.$store.state.showQr = true;
          }
        },
        data() {
            return {
                active:[false,true]
            }
        },
        beforeMount() {
            localStorage.setItem('menuTag', 5)
            this.$emit('changetag')
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
