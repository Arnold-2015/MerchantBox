<template>
    <section>     
         <div class="content">
             <div class="main">
                 <span class="main-title">
                 <router-link to='superpromanage' v-if='role=="ADMIN"'>项目管理</router-link>
                 <router-link to='promanage' v-if='role!="ADMIN"'>项目管理</router-link> / <a href="javascript:;" >创建项目</a></span>
                 <div class="period-bar">
                     <ul>
                         <li class="li-active">项目介绍</li>
                         <li class="li-active">项目详情</li>
                         <li class="li-active">融资信息</li>
                         <li class="li-active">合同编辑</li>
                     </ul>
                     <a></a>
                 </div>
                 <div class="clear-fix">
                 <div class="project-detail ">
             <!--       <span class="title">合同模板</span>
                   <div class="compact-item">
                     <div class="compact"></div>
                     <span>股权投资：以净利润清算</span>
                     <a class="preview">预览</a><a class="download">下载</a>
                   </div>
                   <div class="compact-item">
                     <div class="compact"></div>
                     <span>股权投资：以销售额清算</span>
                     <a class="preview">预览</a><a class="download">下载</a>
                   </div>
                   <div class="compact-item">
                     <div class="compact"></div>
                     <span>项目合作：委托经营</span>
                     <a class="preview">预览</a><a class="download">下载</a>
                   </div>
                   <div class="compact-item">
                     <div class="compact"></div>
                     <span>项目合作：委托销售</span>
                     <a class="preview">预览</a><a class="download">下载</a>
                   </div> -->
                   <span class="title">上传合同</span>
                   <a class="up-compact btn-yes">上传合同
                   <input type="file" :accept="accepts" id="upFile" @change='upFile' >
                   </a>
                 </div>
                 <p class="describe">
                   <span>步骤说明</span>
                    1、选择合适的合同模板并下载<br>
                    2、填写好合同中甲方信息<br>
                    3、上传填写好的合同中，提交审核<br>
                 </p>
                 </div>
                 <router-link to="creprothird" class="prev-step btn-no">上一步</router-link>
                 <a class="next-step btn-yes" @click='forthStep'>提交审核</a>
             </div>
         </div>
    </section>
</template>
<script>
    export default {
        filters: {
            
        },
        props: ['api'],
        data() {
            return {
                apiurl:this.api,
                accepts:'application/pdf',
                role:localStorage.getItem('role'),
                option:{
                  projectId:this.$store.state.projectId,
                  contractUrl:''
                }
                
            }
        },
        methods:{
          upFile(event){
            var file=event.target.files[0];
            const formData = new FormData();
            formData.append('file', file);     
            this.$http.post(this.apiurl+'/file/upload',formData)
                .then((response) => {
                   this.option.contractUrl=response.data.result.msg
                   this.$alert(true,'上传成功')
                })
                .catch(function(response) {
                    console.log(response)
                })
          },
          forthStep(){
            if(this.option.contractUrl){
            let options=this.option;
            this.$http.post(this.apiurl+'/project/fourth',options)
                .then((response) => {
                   this.$store.state.projectId=null;
                   this.$alert(true,'项目已提交审核')
                   var _route=localStorage.getItem('role')=='ADMIN'?'superpromanage':'promanage';
                   this.$router.push({
                    name: _route
                });
                })
                .catch(function(response) {
                    console.log(response)
                })
          }else{
            this.$alert(false,'请上传项目合同')
          }
        }
        }, 
        beforeMount(){ 
            localStorage.setItem('menuTag', 1)      
            this.$emit('changetag') 
            this.$emit('changenv')
            var projectId=this.$store.state.projectId;
            if(projectId){
              this.$http.get(this.apiurl+'/project/'+projectId+'/properties')
                .then((response) => {
                  var data=response.data.result;
                   this.option={
                      projectId:this.$store.state.projectId,
                      contractUrl:data.contractUrl 
                   }
                   console.log(this.option)
                })
                .catch(function(response) {
                    console.log(response)
                })
              }
        },
        components:{
           
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
          margin-top:120px;
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
                font-size: 12px;
                color:#999;
                background:#f6f6f6;
                 a{
                  color:#999;
                }
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
               a{
                    width: 468px;
                    height: 20px;
                    margin: 10px auto;
                    display: block;
                    background: url('../assets/crestep4.png') no-repeat ;
                    background-size: 468px 15px;
                }
            }
            .clear-fix:after{
                      content:".";        
                      display:block;        
                      height:0;        
                      clear:both;        
                      visibility:hidden; 
              }
            .project-detail{
                width: 70%;
                min-height: 540px;
                float: left;
                background: #fff;
                margin-left: 40px;
                margin-top: 20px;
                border:1px solid #d7d7d7;
                .compact-item{
                  width: 380px;
                  height: 90px;
                  float: left;
                  margin: 28px 0 42px 68px;
                  position: relative;
                  .compact{
                    width: 72px;
                    height: 90px;
                    background: #D8D8D8;
                    border: 1px solid #979797;
                    position: absolute;
                    left: 0;
                    top: 0;
                  }
                  span{
                    position: absolute;
                    width: 200px;
                    height: 24px;
                    line-height: 24px;
                    left: 100px;
                    color: #666;
                  }
                  .preview{
                    position: absolute;
                    left: 100px;
                    top: 30px;
                    color: $base-color;
                  }
                  .download{
                    position: absolute;
                    left: 180px;
                    top: 30px;
                    color: $base-color;
                  }
                }
                .title{
                  display: block;
                  clear: both;
                  width: 72px;
                  height: 24px;
                  line-height: 24px;
                  margin-left: 68px;
                  margin-top: 42px;
                  color: #333;
                  font-weight: bold;
                }
                .up-compact{
                  position: relative;
                  width: 160px;
                  height: 48px;
                  line-height: 48px;
                  background: $base-color;
                  font-size: 14px;
                  color: #fff;  
                  border-radius: 2px;
                  text-align: center;
                  margin:20px 68px;
                  input{
                       position: absolute;
                       display: inline-block;
                       opacity: 0;
                       width: 160px;
                       height: 48px;
                       left: 0;
                       top: 0;
                  }
                }
                .btn-yes:hover{
                    background:#BA9246;
                }
            .btn-yes:active{
                background:#020204;
            }
              }
              
              .describe{
                float: left;
                font-size: 14px;
                color: #666;
                line-height: 20px;
                margin-left: 30px;
                margin-top: 60px;
                span{
                    font-size: 18px;
                    font-weight: bold;  
                    margin-bottom: 30px;
                }
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
              margin:40px 0 0 110px;
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
              margin:40px 30px;
            }
             .btn-yes:hover{
                    background:#BA9246;
                }
            .btn-yes:active{
                background:#020204;
            }
             .btn-no:hover{
                  color:#333;
                }
            .btn-no:active{
                color:#333;
                border:1px solid #333;
            }

          } 
  }

    @media (min-width: 768px) and (max-width: 1368px) {
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
                /*margin-left:24px;*/
                color:#999;
                font-size:12px;
            }
}
}
}
</style>