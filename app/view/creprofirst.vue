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
                         <li>项目详情</li>
                         <li>融资信息</li>
                         <li>合同编辑</li>
                     </ul>
                     <a ></a>
                 </div>
                 
                 <div class="info-item" style="height:180px">
                   <span style="display:block">项目头图</span>
                   <img  :src='backgroundImg'>
                   <a class="file btn-yes">选择图片
                       <input type="file" :accept="accepts" id="upImg" @change='upImg' >
                   </a>
                   <span class="remind">建议尺寸：750*606像素</span>
                 </div>
                 <div class="info-item">
                   <span>项目名称</span>
                   <input v-validate:projectname="'required'" :class="{'input': true, 'is-danger': errors.has('projectname') }" name="projectname" type="text" placeholder="请输入您的项目名称" v-model='option.projectName'>
                 </div>
   
                 <div class="info-item">
                   <span>项目地址</span>
                   <input v-validate:address="'required'" :class="{'input': true, 'is-danger': errors.has('address') }" name="address" type="text" placeholder="请输入您的项目地址"   id='address'>
                 </div>
                 <div class="info-item" >
                   <span style="display:block">项目简介</span>
                   <textarea v-validate:projectDesc="'required'" :class="{'input': true, 'is-danger': errors.has('projectDesc') }" name="projectDesc" type="text" placeholder="请填写说明，例如：
一家不高冷的葡萄酒体验馆，邀您当合伙人" v-model='option.projectDesc' id='projectDesc'></textarea>
                 </div>
                 <a  class="next-step btn-yes" @click='validateBeforeSubmit'>下一步</a>
                 
             </div>
         </div>
    </section>
</template>
<script>
import Vue from 'Vue'
    export default {
        filters: {
            
        },
        props: ['api'],
        data() {
            return {
                active:[false,true],
                apiurl:this.api,
                accepts:'image/jpeg,image/jpg,image/png',
                role:localStorage.getItem('role'),
                backgroundImg:'',
                option:{
                  backgroundImg:'',
                  address:null,
                  province :'',
                  city :'',
                  area :'',
                  latitude :null,
                  longitude :null,
                  projectId:''
                }
            }
        },
        methods:{
          upImg(event){
            var file=event.target.files[0];
            const formData = new FormData();
            formData.append('file', file);     
            this.$http.post(this.apiurl+'/file/upload',formData)
                .then((response) => {
                   this.option.backgroundImg =response.data.result.msg;
                   this.backgroundImg ="http://pic.6dbox.cn/"+response.data.result.msg;
                   this.$alert(true,'上传成功')
                })
                .catch(function(response) {
                    console.log(response)
                })
          },
          search(){
              
 
          },
          validateBeforeSubmit() {
            this.$validator.validateAll().then(() => {

                if(this.option.address==null){
                this.option.address=localStorage.getItem('address');
                this.option.longitude=localStorage.getItem('longitude');
                this.option.latitude=localStorage.getItem('latitude');
            }
            let options=this.option;
          
            this.$http.post(this.apiurl+'/project/first',options)
                .then((response) => {
                  if(response.data.statusCode==200){
                   this.projectId=response.data.result.projectId;
                   this.$store.state.projectId=this.projectId;
                   console.log(this.projectId);
                   this.$alert(true,'操作成功')
                   this.$router.push({
                    name: 'creprosecond'
                });
                }else{
                  this.$alert(false,response.data.result.msg)
                }
              })
                .catch(function(response) {
                    console.log(response)
                })

            }).catch(() => {
                this.$alert(false,'您有项目未填写完整')
            })
          }
          // firstStep(){
          //     if(this.option.address==null){
          //       this.option.address=localStorage.getItem('address');
          //       this.option.longitude=localStorage.getItem('longitude');
          //       this.option.latitude=localStorage.getItem('latitude');
          //   }
          //   let options=this.option;
          
          //   this.$http.post(this.apiurl+'/project/first',options)
          //       .then((response) => {
          //         if(response.data.statusCode==200){
          //          this.projectId=response.data.result.projectId;
          //          this.$store.state.projectId=this.projectId;
          //          console.log(this.projectId);
          //          this.$router.push({
          //           name: 'creprosecond'
          //       });
          //       }else{
          //         alert('创建失败，请重试')
          //       }
          //     })
          //       .catch(function(response) {
          //           console.log(response)
          //       })
          // }
        },
        beforeMount(){
            var projectId;
            localStorage.setItem('menuTag', 1)
            this.$emit('changetag')
            this.$emit('changenv')
            if(this.$route.query.projectId){
              projectId=this.$route.query.projectId;
              this.$store.state.projectId=projectId;
            }else{
              projectId=this.$store.state.projectId;
            };
            if(projectId!=null){
              this.$http.get(this.apiurl+'/project/'+projectId+'/properties')
                .then((response) => {
                  var data=response.data.result;
                  this.backgroundImg="http://pic.6dbox.cn/"+data.backgroundImg
                   this.option={
                      projectId:projectId,
                      backgroundImg:data.backgroundImg,
                      projectName:data.projectName,
                      address:data.address,
                      projectDesc:data.projectDesc,
                      province :'',
                      city :'',
                      area :'',
                      latitude :data.latitude,
                      longitude :data.longitude
                   }
                   document.getElementById('address').value=data.address
                   console.log(this.option)
                })
                .catch(function(response) {
                    console.log(response)
                })
              }
        },
        mounted(){
           // 百度地图API功能
    function G(id) {
        return document.getElementById(id);
    }

    var map = new BMap.Map("l-map");
    map.setCurrentCity("杭州"); // 初始化地图,设置城市和地图级别。
    var ac = new BMap.Autocomplete(     //建立一个自动完成的对象
            {
                "input": "address"
                , "location": map
            });

    var myValue;
    ac.addEventListener("onconfirm", function (e) {
        var _value = e.item.value;
        myValue = _value.province + _value.city + _value.district + _value.street + _value.business;
        localStorage.setItem('address', myValue)
        setPlace();
    });
    function setPlace() {
        map.clearOverlays();
        function myFun() {
            var pp = local.getResults().getPoi(0).point;
            localStorage.setItem('longitude', pp.lng)
            localStorage.setItem('latitude', pp.lat)
        }
        var local = new BMap.LocalSearch(map, {
            onSearchComplete: myFun,
            renderOptions: { map: map }

        });
        local.search(myValue,{forceLocal:false,customData:null});
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
                    background: url('../assets/crestep1.png') no-repeat;
                    background-size: 468px 15px;
                }
            }
            .info-item{
              width: 1000px;
              margin: 12px 0 30px 108px;
              position: relative;
              span{
                display: inline-block;
                color: #666;
              }
              .remind{
                font-size: 12px;
                color: #999;
                margin-left: 440px;
                margin-top: 24px;
              }
              img{
                display: inline-block;
                width: 220px;
                height: 180px;
                background: #d8d8d8;
                position: absolute;
                left:190px;
                top: -10px;
              }
              a{
                position: relative;
                display: inline-block;
                width: 100px;
                height: 48px;
                line-height: 48px;
                background: $base-color;
                font-size: 14px;
                color: #fff;
                border-radius: 2px;
                text-align: center;
                text-indent: 0;
                position: absolute;
                left: 440px;
                top: -10px;
                input{
                position: absolute;
                font-size: 100px;
                right: 0;
                top: 0;
                opacity: 0;
              }
              }

              input{
                  width: 600px;
                  height: 48px;
                  display: inline-block;
                  margin-left: 120px;
                  padding-left: 10px;
                  background: #F6F6F6;
                  border: 1px solid #d7d7d7;
                  font-size: 18px;
                  color:#666;
                  &:focus{
                          border: 1px solid #C09D5B;
                          outline:none
                      }
              }
              .is-danger{
                border: 1px solid #E56B6B;
              }
              textarea{
                  width: 600px;
                  height: 136px;
                  position: relative;
                  left: 190px;
                  top: -20px;
                  padding: 10px;
                  font-size: 18px;
                  color: #666;
                  background: #F6F6F6; 
                  &:focus{
                            border: 1px solid #C09D5B;
                            outline:none
                        }
                }
            }

            .next-step{
              width: 160px;
              height: 48px;
              line-height: 48px;
              background: $base-color;
              font-size: 14px;
              color: #fff;
              border-radius: 2px;
              text-align: center;
              margin:0 0 42px 108px;
            }
            .btn-yes:hover{
                    background:#BA9246;
                }
            .btn-yes:active{
                background:#020204;
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
            .info-item{
             img{
              left:170px;
             }
             textarea{
                  left: 170px;
                }
            }

}
}
}
</style>