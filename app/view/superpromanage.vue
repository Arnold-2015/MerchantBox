<template>
    <section>     
         <div class="content">
             <div class="main">
                 <span class="main-title"><a href="javascript:;" > 项目管理</a></span>
                 <div class="main-nav">
                     <span>项目管理</span>
                     <router-link to="creprofirst" class="creat-new"><span></span>新建项目</router-link>
                 </div>
                 <div class="search-bar">
                 <input  style="left:40px" type="text" placeholder="输入姓名/卡号/手机号" v-model="projectNameOrMerchantNameOrMerchantPhone">
                 <div class="search"  style="left:280px" ><a  @click="search"></a></div>
                 <a href='javascript:;' class="export" @click='excel'>导出列表</a>
                </div>
                <table class="partner-list">

                <tr class='title'>
                    <td class="crowone">编号</td>
                    <td class="crowtwo">项目名称</td>
                    <td class="crowone">商家姓名</td>
                    <td class="crowone">联系号码</td>
                    <td class="crowone">招募开始时间</td>
                    <td class="crowone">项目来源</td>
                    <td class="crowone">
                        <select v-model='projectStatus' @change='search'>
                          <option value=0 >全部</option>
                          <option value=1 >草稿 </option>
                          <option value=2 >待审核</option>
                          <option value=3 >审核失败</option>
                          <option value=4 >招募中</option>
                          <option value=5 >确认中</option>
                          <option value=6 >履约中</option>
                          <option value=7 >项目失败</option>
                        </select>
                    </td>
                    <td class="crowtwo">操作</td>
                </tr>
                <tr v-for="(item,index) in projectList" :class='{active:active[index%2]}'>
                    <td class="crowone">{{item.projectCode }}</td>
                    <td class="crowtwo">{{item.projectName}}</td>
                    <td class="crowone">{{item.merchantName }}</td>
                    <td class="crowone">{{item.merchantPhone }}</td>
                    <td class="crowone">{{item.creationTime | fmtDate}}</td>
                    <td class="crowone">{{item.source}}</td>
                    <td class="crowone">{{item.projectStatus | getStatus}}</td>
                    <td class="crowtwo">
                    <a v-if='item.projectStatus!=1&&item.projectStatus!=2' href="javascript:;"  @click='showQrChange(item.projectId,item.qrCode)'>预览</a>
                    <a v-if='(item.projectStatus==1||item.projectStatus==2)&&item.source!=1' href="javascript:;" @click='showreviewmerchantChange(item.projectId)'>审核</a>
                    <a v-if='(item.projectStatus==1||item.projectStatus==2)&&item.source==1' href="javascript:;" @click='showreviewfastChange(item.projectId)'>审核</a>
                    <router-link  href="javascript:;" :to="{ path: 'creprofirst', query: { projectId:item.projectId }}">修改</router-link>
                    <a v-if='item.projectStatus==1||item.projectStatus==2||item.projectStatus==3' href="javascript:;" @click='delProject(item.projectId)'>删除</a>
                    <router-link  v-if='item.projectStatus==4' href="javascript:;" :to="{ path: 'recruiting', query: { projectId:item.projectId }}">管理</router-link>
                    <router-link  v-if='item.projectStatus==5' href="javascript:;" :to="{ path: 'confirming', query: { projectId:item.projectId }}">管理</router-link>
                    <router-link  v-if='item.projectStatus==6' href="javascript:;" :to="{ path: 'performing', query: { projectId:item.projectId }}">管理</router-link>
                    
                    
                    </td>
                </tr>
                
                </table>
                <paging @getpage='getpage' :allpage='pages'></paging>
             </div>
         </div>
         <qr v-if="this.$store.state.showQr" :projectid='projectId' :qrCode='qrCode'></qr>
         <reviewfast v-if='this.$store.state.showreviewfast' :apiurl='apiurl' :projectid='projectId'></reviewfast>
         <reviewmerchant v-if='this.$store.state.showreviewmerchant' :apiurl='apiurl' :projectid='projectId'></reviewmerchant>
         <noverify v-if='this.$store.state.shownoverify' :apiurl='apiurl' :projectid='projectId'></noverify>
    </section>
</template>
<script>
    import qr from '../components/qrbar.vue'
    import reviewmerchant from '../components/reviewmerchant.vue'
    import reviewfast from '../components/reviewfast.vue'
    import noverify from '../components/noverify.vue'
    import paging from '../components/paging.vue'
    import utils from '../modules/utils.js'
    require('../assets/list.scss')
    export default {
        filters: {
            getStatus(status){
                return utils.getProStatus(status)
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
                source:0,
                projectStatus:0,
                projectId:null,
                qrCode:null,
                projectNameOrMerchantNameOrMerchantPhone:'',
                projectList:{},
                pages:null
            }
        },
        methods:{
          showQrChange(projectId,qrCode){
            this.projectId=projectId;
            this.qrCode=qrCode;
            this.$store.state.showQr = true;
          },
          showreviewmerchantChange(projectId){
            this.$store.state.showreviewmerchant = true;
            this.projectId=projectId;
          },
          showreviewfastChange(projectId){
            this.$store.state.showreviewfast = true;
            this.projectId=projectId;
          },
          search(){
            let options={
                'projectStatus':this.projectStatus,
                'projectNameOrMerchantNameOrMerchantPhone':this.projectNameOrMerchantNameOrMerchantPhone,
                'pageSize':10,
                'pageNum':1
            }
            this.$http.post(this.apiurl+'/project/list',options)
                .then((response) => {
                   this.projectList=response.data.result.projectLists;
                   this.pages=Math.ceil(response.data.result.totalCount/10);
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
          },
          getpage(){
            let options={
                'projectStatus':this.projectStatus,
                'projectNameOrMerchantNameOrMerchantPhone':this.projectNameOrMerchantNameOrMerchantPhone,
                'pageSize':10,
                'pageNum':this.$store.state.pageNum
            }
            this.$http.post(this.apiurl+'/project/list',options)
                .then((response) => {
                   this.projectList=response.data.result.projectLists;
                   console.log(this.projectList)
                })
                .catch(function(response) {
                    console.log(response)
                })

          },
          excel(){
            window.location.href=this.apiurl+'/project/list/excel?projectStatus='+this.projectStatus+'&source='+this.source+'&projectNameOrMerchantNameOrMerchantPhone='+this.projectNameOrMerchantNameOrMerchantPhone;
                
          }

        },
        beforeMount(){
            localStorage.setItem('menuTag', 1)
            this.$emit('changetag')
            this.$emit('changenv')
            let options={
                'projectStatus':this.projectStatus,
                'pageSize':10,
                'pageNum':1
            }
            this.$http.post(this.apiurl+'/project/list',options)
                .then((response) => {
                   this.projectList=response.data.result.projectLists;
                   this.pages=Math.ceil(response.data.result.totalCount/10);
                   console.log(this.projectList)
                })
                .catch(function(response) {
                    console.log(response)
                })
        },
        mounted() {
            
        },
        components:{
           qr,reviewmerchant,reviewfast,paging,noverify
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
                font-size:12px;
                a{
                  color:#999;
                }
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
                .creat-new:hover{
                    background:#BA9246;
                }
                .creat-new:active{
                    background:#020204;
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
