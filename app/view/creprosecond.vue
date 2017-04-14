<template>
    <section>     
         <div class="content">
             <div class="main">
                 <span class="main-title">主页 / 项目管理 / 创建项目</span>
                 <div class="period-bar">
                     <ul>
                         <li class="li-active">项目介绍</li>
                         <li class="li-active">项目详情</li>
                         <li>融资信息</li>
                         <li>合同编辑</li>
                     </ul>
                     <img src="../assets/crestep2.png" >
                 </div>
                 <span style="font-weight:bold">项目详情</span>
                 <span class="remind">填写品牌故事、店铺相关图片、团队介绍、店铺优势、目前经营状况等信息</span>
                 <div class="project-detail">
                  <quill-editor :options="editorOption" v-model='option.detail'>
                  </quill-editor>
                 </div>
                 <router-link to="creprofirst" class="prev-step">上一步</router-link>
                 <a  class="next-step" @click='secondStep'>下一步</a>
             </div>
         </div>
    </section>
</template>
<script>
    import Vue from 'Vue'
    import VueQuillEditor from 'vue-quill-editor'
    Vue.use(VueQuillEditor)
    import Quill from 'quill'
    import { ImageImport } from '../modules/ImageImport.js'
    import { ImageResize } from '../modules/ImageResize.js'
    Quill.register('modules/imageImport', ImageImport)
    Quill.register('modules/imageResize', ImageResize)
    export default {
        props: ['api'],
        data() {
            return {
                apiurl:this.api,
                editorOption: {
                   modules: {
                     toolbar: [
                       [{ 'size': ['small', false, 'large','huge'] }],
                       ['bold', 'italic'],
                       [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                       [{ 'header': ['1','2','3','4','5','6']}],
                       ['link', 'image'],
                       [{ 'color': [] }], 
                       [{ 'font': [] }],
                       [{ 'align': [] }],
                     ],
                     history: {
                       delay: 1000,
                       maxStack: 50,
                       userOnly: false
                     },
                     imageImport: true,
                     imageResize: {
                       displaySize: true
                     }
                   }
                 },
                option:{
                  projectId:this.$store.state.projectId,
                  detail:''
                }
            }
        },
        methods:{
          secondStep(){
            let options=this.option;
            this.$http.post(this.apiurl+'/project/second',options)
                .then((response) => {
                  console.log(this.option.detail)
                  this.$router.push({
                    name: 'creprothird'
                });
                })
                .catch(function(response) {
                    console.log(response)
                })
          }
        },
        beforeMount(){        
            var projectId=this.$store.state.projectId;
            if(projectId){
              this.$http.get(this.apiurl+'/project/'+projectId+'/properties')
                .then((response) => {
                  var data=response.data.result;
                   this.option={
                      projectId:this.$store.state.projectId,
                      detail:data.detail 
                   }
                   console.log(this.option)
                })
                .catch(function(response) {
                    console.log(response)
                })
              }
        }
    }
</script>
<style lang='sass' scoped>
$base-color:#C49F59;
   section{ width:100%;}
  .content{
          width:100%;
          min-height:100%;
          float:left;
          margin-top:-120px;
          background: #fff;
          .main{
            height:100%;
            margin-left:200px;
            margin-top:120px;
            .main-title{
                width:100%;
                height:60px;
                line-height:60px;
                padding-left:40px;
                margin-left: 0;
                font-size: 12px;
                color:#999;
                background:#f6f6f6;
            }
            .period-bar{
                width: 100%;
                height: 74px;
                ul{
                    width: 600px;
                    height: 24px;
                    line-height: 24px;
                    margin: 26px auto 0;
                    li{
                        width: 150px;
                        height: 24px;
                        line-height: 24px;
                        color: #333;
                        float: left;
                        text-align: center;
                    }
                    .li-active{
                        color: $base-color;
                    }
                }
                img{
                    width: 468px;
                    margin: 10px auto;
                }
            }
            span{
                display: inline-block;
                height: 24px;
                list-style: 24px;
                color: #333;
                margin-left: 40px;
              }
              .remind{
                font-size: 12px;
                color: #999;
                
              }
              .project-detail{
                width: 76%;
                height: 500px;
                /*background: #f8f8f8;*/
                margin-left: 40px;
                margin-top: 20px;
                /*border:1px solid #d7d7d7;*/
              }
              .prev-step{
              float:left;
              width: 158px;
              height: 46px;
              line-height: 46px;
              background: #fff;
              font-size: 14px;
              color: #999;
              border-radius: 2px;
              border:1px solid #999;
              text-align: center;
              margin:80px 0 0 110px;
              }
              .next-step{
              float:left;
              width: 160px;
              height: 48px;
              line-height: 48px;
              background: $base-color;
              font-size: 14px;
              color: #fff;
              border-radius: 2px;
              text-align: center;
              margin:80px 30px 16px 30px;
            }
            

          } 
  }
</style>