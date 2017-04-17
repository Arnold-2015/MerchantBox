<template>
    <section>     
         <div class="content">
             <div class="main">
                 <span class="main-title">主页 / 项目管理</span>
                 <div class="main-nav">
                     <span>项目管理列表</span>
                     <router-link to="creprofirst" class="creat-new"><span></span>新建项目</router-link>
                 </div>
                 <div class="search-bar">
                 <input  style="left:40px" type="text" placeholder="输入姓名/卡号/手机号" v-model="projectNameOrMerchantNameOrMerchantPhone">
                 <a class="search"  style="left:280px"><img src="../assets/search.png" @click="search"></a>
                 <a class="export">导出列表</a>
                </div>
                <table class="partner-list">

                <tr class='title'>
                    <td class="crowone">编号</td>
                    <td class="crowtwo">项目名称</td>
                    <td class="crowone">商家姓名</td>
                    <td class="crowone">联系号码</td>
                    <td class="crowone">招募开始时间</td>
                    <td class="crowone">项目来源</td>
                    <td class="crowone">状态</td>
                    <td class="crowtwo">操作</td>
                </tr>
                <tr v-for="(item,index) in projectList" :class='{active:active[index%2]}'>
                    <td class="crowone">{{item.projectCode }}</td>
                    <td class="crowtwo">{{item.projectName}}</td>
                    <td class="crowone">{{item.merchantName }}</td>
                    <td class="crowone">{{item.merchantPhone }}</td>
                    <td class="crowone">{{item.creationTime }}</td>
                    <td class="crowone">{{item.source}}</td>
                    <td class="crowone">{{item.projectStatus }}</td>
                    <td class="crowtwo"><a href="javascript:;" @click=''>审核</a><a href="javascript:;" @click=''>修改</a><a href="javascript:;" @click='delProject(item.projectId)'>删除</a></td>
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
                projectNameOrMerchantNameOrMerchantPhone:'',
                projectList:{}
            }
        },
        methods:{
          showQrChange(){
            this.$store.state.showQr = true;
          },
          search(){
            let options={
                'projectNameOrMerchantNameOrMerchantPhone':this.projectNameOrMerchantNameOrMerchantPhone,
                'pageSize':10,
                'pageNum':1
            }
            this.$http.post(this.apiurl+'/project/list',options)
                .then((response) => {
                   this.projectList=response.data.result;
                   console.log(this.projectList)
                })
                .catch(function(response) {
                    console.log(response)
                })
          },
          delProject(projectId){
            this.$http.delete(this.apiurl+'/project/'+projectId)
                .then((response) => {
                   window.location.reload()
                })
                .catch(function(response) {
                    console.log(response)
                })
          }
        },
        beforeMount(){
            localStorage.setItem('menuTag', 1)
            this.$emit('changetag')
            let options={
                'nickNameOrUserPhone':this.nickNameOrUserPhone,
                'pageSize':10,
                'pageNum':1
            }
            this.$http.post(this.apiurl+'/project/list',options)
                .then((response) => {
                   this.projectList=response.data.result;
                   console.log(this.projectList)
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
