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
                         <li>合同编辑</li>
                     </ul>
                     <a ></a>
                 </div>
                 <div style="width:1000px;margin:0 auto;">
                 <span class="title">基本信息</span>
                 <div class="info-bar container">
                   <div class="info-item">
                   <span>项目类型：</span>
                   <label :class="{ radioActive:option.projectType==1,radioNomal:option.projectType!=1 }"><input type="radio" name="project-kind" value="1" v-model="option.projectType">股权投资</label>
                   <label :class="{ radioActive:option.projectType==2,radioNomal:option.projectType!=2 }"><input type="radio" name="project-kind" value="2" v-model="option.projectType">项目合作</label>
                   <label :class="{ radioActive:option.projectType==3,radioNomal:option.projectType!=3 }"><input type="radio" name="project-kind" value="3" v-model="option.projectType">运营活动</label>
                   </div>                  
                   <!-- <div class="info-item">
                   <span>甲方(项目发起人)：</span><input class="base-info" type="text" placeholder="请填写甲方名称">
                   </div> -->
                   <div class="info-item" v-if="option.projectType==1">
                   <span>项目估值(元)：</span>
                   <!-- <input class="base-info" type="text" placeholder="请填写项目估值" v-model='option.projectValuation'> -->
                   <input v-validate:projectValuation="'required'" class="base-info" :class="{'input': true, 'is-danger': errors.has('projectValuation') }" name="projectValuation" type="text" placeholder="请填写项目估值" v-model='option.projectValuation'>

                   </div>
                   <!-- <div class="info-item" v-else="basePicked==2">
                   <span>丙方(合作方)：</span><input class="base-info" type="text" placeholder="请填写丙方名称">
                   </div> -->
                   <div class="info-item">
                   <span>目标众筹金额(元)：</span>
                   <!-- <input class="base-info" type="text" placeholder="请填写目标众筹金额 "  v-model='totalMoney'> -->
                   <input v-validate:totalMoney="'required'" class="base-info" :class="{'input': true, 'is-danger': errors.has('totalMoney') }" name="totalMoney" type="text" placeholder="请填写目标众筹金额" v-model='totalMoney'>
                   <!-- <span v-if="option.projectType==1">出让占公司股份：{{}} %</span> -->
                   <!-- <input v-if="basePicked==1" class="base-info" type="text" placeholder="20% "> -->
                   </div>
                   <div class="info-item">
                   <span>认购份数(份)：</span>
                   <!-- <input class="base-info" type="text" placeholder="请填写认购份数 " v-model='saleCount'> -->
                   <input v-validate:saleCount="'required'" class="base-info" :class="{'input': true, 'is-danger': errors.has('saleCount') }" name="saleCount" type="text" placeholder="请填写认购份数" v-model='saleCount'>
                   <span>超募份数(份)：</span>
                   <!-- <input class="base-info" type="text" placeholder="请填写超募份数" v-model='option.extraSaleCount'> -->
                   <input v-validate:extraSaleCount="'required'" class="base-info" :class="{'input': true, 'is-danger': errors.has('extraSaleCount') }" name="extraSaleCount" type="text" placeholder="请填写超募份数" v-model='option.extraSaleCount'>
                   </div>
                   <div class="info-item">
                   <span>单份金额(元)：</span>
                   <!-- <input class="base-info" type="text" placeholder="请输入单份金额" v-model='option.unitPrice'> -->
                    <input v-validate:unitPrice="'required'" class="base-info" :class="{'input': true, 'is-danger': errors.has('unitPrice') }" name="unitPrice" type="text" placeholder="请输入单份金额" v-model='option.unitPrice'>
                   <!-- <span>每份占股：</span> -->
                   <!-- <input class="base-info" type="text" placeholder="2% "> -->
                   </div>
                   <div class="info-item">
                   <span>每人限购份数(份)：</span>
                   <!-- <input class="base-info" type="text" placeholder="请输入每人限购份数" v-model='option.copiesLimit'> -->
                    <input v-validate:copiesLimit="'required'" class="base-info" :class="{'input': true, 'is-danger': errors.has('copiesLimit') }" name="copiesLimit" type="text" placeholder="请输入每人限购份数" v-model='option.copiesLimit'>
                   </div>
                   <div class="info-item">
                   <span>融资周期(天)：</span>
                   <!-- <input class="base-info" type="text" placeholder="请输入融资周期" v-model='option.validityPeriod'> -->
                   <input v-validate:validityPeriod="'required'" class="base-info" :class="{'input': true, 'is-danger': errors.has('validityPeriod') }" name="validityPeriod" type="text" placeholder="请输入融资周期" v-model='option.validityPeriod'>
                   <span>以项目上线时间为起始时间</span>
                   </div>
                   <div class="info-item">
                   <span>投资周期：</span>
                   <select v-model='period'>
                     <option >6个月</option>
                     <option >12个月</option>
                     <option >18个月</option>
                     <option >24个月</option>
                     <option >30个月</option>
                     <option >36个月</option>
                     <option >42个月</option>
                     <option >48个月</option>

                   </select> 
                   </div>
                 </div>
                 <span class="title">回报设置</span>
                 <div class="info-bar container">
                   <div class="info-item add-border">
                   <span>回报周期: </span>
                   <label :class="{ radioActive:option.salesProjectVo.returnCycle==1,radioNomal:option.salesProjectVo.returnCycle!=1 }"><input type="radio" name="project-kind" value="1" v-model="option.salesProjectVo.returnCycle">月</label>
                   <label :class="{ radioActive:option.salesProjectVo.returnCycle==2,radioNomal:option.salesProjectVo.returnCycle!=2 }"><input type="radio" name="project-kind" value="2" v-model="option.salesProjectVo.returnCycle">季度</label>
                   <label :class="{ radioActive:option.salesProjectVo.returnCycle==3,radioNomal:option.salesProjectVo.returnCycle!=3 }"><input type="radio" name="project-kind" value="3" v-model="option.salesProjectVo.returnCycle">半年</label>
                   <label :class="{ radioActive:option.salesProjectVo.returnCycle==4,radioNomal:option.salesProjectVo.returnCycle!=4 }"><input type="radio" name="project-kind" value="4" v-model="option.salesProjectVo.returnCycle">年</label>
                   </div>
                   <div class="info-item">
                   <span>销售额阶梯设置</span>
                   </div>
                   <div class="info-item">
                   <div class="info-wrap">
                   <span>销售额未达到：</span>
                   <!-- <input class="return-info" type="text"  v-model='option.salesProjectVo.salesNoReach'> -->
                   <input v-validate:salesNoReach="'required'" class="return-info" :class="{'input': true, 'is-danger': errors.has('salesNoReach') }" name="salesNoReach" type="text"  v-model='option.salesProjectVo.salesNoReach'>
                   </div><span>销售额回报：</span>
                   <!-- <input class="return-info" type="text"  v-model='option.salesProjectVo.returnSales'>% -->
                   <input v-validate:returnSales="'required'" class="return-info" :class="{'input': true, 'is-danger': errors.has('returnSales') }" name="returnSales" type="text"  v-model='option.salesProjectVo.returnSales'>%
                   </div>
                   <div class="info-item" v-for='(item,index) in option.salesProjectVo.salesReachInfos'>
                   <div class="info-wrap"><span>销售额达到(含)：</span>
                   <!-- <input class="return-info" type="text"  v-model='option.salesProjectVo.salesReachInfos[index].reachMoney'> -->
                   <input v-validate:reachMoney="'required'" class="return-info" :class="{'input': true, 'is-danger': errors.has('reachMoney') }" name="reachMoney" type="text"  v-model='option.salesProjectVo.salesReachInfos[index].reachMoney'>
                   </div>
                   <span>销售额回报：</span>
                   <!-- <input class="return-info" type="text"  v-model='option.salesProjectVo.salesReachInfos[index].returnRate'>%   -->
                   <input v-validate:returnRate="'required'" class="return-info" :class="{'input': true, 'is-danger': errors.has('returnRate') }" name="returnRate" type="text"  v-model='option.salesProjectVo.salesReachInfos[index].returnRate'>%  
                   </div>

                   <div class="info-item add-border"><a href='javascript:;' class="add" @click='add'>增加一列</a>  <a href='javascript:;' class="reduce" @click='reduce'>删除一列</a></div>
                   <div class="info-item add-border">
                   <span>回报说明 </span>
                   <!-- <textarea cols="30" rows="10" placeholder="填写店铺目前营业状态；预计月销售额；折合年化利率" v-model='option.salesProjectVo.returnExplain'></textarea> -->
                    <textarea v-validate:returnExplain="'required'" :class="{'input': true, 'is-danger': errors.has('returnExplain') }" name="returnExplain" type="text" placeholder="填写店铺目前营业状态；预计月销售额；折合年化利率" v-model='option.salesProjectVo.returnExplain' ></textarea>
                   </div>
                   <div class="info-item ">
                   <span>退出机制 </span>
                   <!-- <textarea cols="30" rows="10" placeholder="例：消费可随时退出、6月后可协商退出、12月后强制退出。退出比例根据净利润/销售额确定" v-model='option.salesProjectVo.exitExplain'></textarea> -->
                   <textarea v-validate:exitExplain="'required'" :class="{'input': true, 'is-danger': errors.has('exitExplain') }" name="exitExplain" type="text"  placeholder="例：消费可随时退出、6月后可协商退出、12月后强制退出。退出比例根据净利润/销售额确定" v-model='option.salesProjectVo.exitExplain'></textarea>
                   </div>
                 </div>
                 <span class="title">特权设置</span>
                 <div class="info-bar container">
                   <div class="info-item">
                   <span>允许消费方式</span>
                   <label :class="{ radioActive:option.consumeRightVo.consumeType==1,radioNomal:option.consumeRightVo.consumeType!=1 }"><input type="radio" name="project-kind" value="1" v-model="option.consumeRightVo.consumeType">都支持</label>
                   <label :class="{ radioActive:option.consumeRightVo.consumeType==2,radioNomal:option.consumeRightVo.consumeType!=2 }"><input type="radio" name="project-kind" value="2" v-model="option.consumeRightVo.consumeType">本金消费</label>
                   <label :class="{ radioActive:option.consumeRightVo.consumeType==3,radioNomal:option.consumeRightVo.consumeType!=3 }"><input type="radio" name="project-kind" value="3" v-model="option.consumeRightVo.consumeType">收益消费</label>
                   </div>
                   <div class="info-item"  v-if='option.consumeRightVo.consumeType==1||option.consumeRightVo.consumeType==2'>
                   <span>本金消费折扣：</span>
                   <!-- <input class="return-info" type="text" placeholder="1-10" v-model='option.consumeRightVo.principalConsumeDiscount'> -->
                   <input v-validate:principalConsumeDiscount="'required'" class="return-info" :class="{'input': true, 'is-danger': errors.has('principalConsumeDiscount') }" name="principalConsumeDiscount" type="text" placeholder="1-10" v-model='option.consumeRightVo.principalConsumeDiscount'>
                   <!-- <input class="profit-info" type="text" placeholder="补充说明" v-model='option.consumeRightVo.principalConsumeMemo'> -->
                   <input v-validate:principalConsumeMemo="'required'" class="profit-info" :class="{'input': true, 'is-danger': errors.has('principalConsumeMemo') }"placeholder="补充说明"  name="principalConsumeMemo" type="text"  v-model='option.consumeRightVo.principalConsumeMemo'>
                   </div>
                   <div class="info-item " v-if='option.consumeRightVo.consumeType==1||option.consumeRightVo.consumeType==3'>
                   <span>收益消费折扣：</span>
                   <!-- <input class="return-info" type="text" placeholder="1-10" v-model='option.consumeRightVo.earningsDiscount '> -->
                   <input v-validate:earningsDiscount="'required'" class="return-info" :class="{'input': true, 'is-danger': errors.has('earningsDiscount') }" name="earningsDiscount" type="text" placeholder="1-10" v-model='option.consumeRightVo.earningsDiscount '>
                   <!-- <input class="profit-info" type="text" placeholder="补充说明" v-model='option.consumeRightVo.earningsMemo'> -->
                   <input v-validate:privilegeCardName="'required'" class="profit-info" :class="{'input': true, 'is-danger': errors.has('privilegeCardName') }" placeholder="补充说明" name="privilegeCardName" type="text"  v-model='option.consumeRightVo.earningsMemo'>
                   </div>
                   <div class="info-item">
                   <span>特权卡名称：</span>
                   <!-- <input class="base-info" type="text" placeholder="建议店铺名" v-model='option.privilegeCardName'> -->
                   <input v-validate:privilegeCardName="'required'" class="base-info" :class="{'input': true, 'is-danger': errors.has('privilegeCardName') }" placeholder="建议店铺名" name="privilegeCardName" type="text"  v-model='option.privilegeCardName'>
                   </div>
                   <div class="info-item add-border" style="height:300px">
                   <span>特权卡样式：</span>
                   <div class="upbar">
                     <img style="width:86px;height:86px"   :src='privilegeLogo'>
                   <a class="file btn-yes">上传店铺logo
                       <input type="file" :accept="accepts" id="upImg" @change='upImg(0)' >
                   </a>
                   <span class="tip">建议尺寸：750*606像素</span>
                   </div>
                   <div class="upbar">
                     <img style="width:160px;height:90px"   :src='privilegeBg'>
                   <a class="file btn-yes" style="left:380px">上传卡片背景
                       <input type="file" :accept="accepts" id="upImg" @change='upImg(1)' >
                   </a>
                   <span class="tip" style="left:350px">建议尺寸：750*606像素</span>
                   </div>

                   
                   </div>
                   <div class="info-item">
                   <span>特权卡权益</span><span class="remind">点亮你的特权卡权益</span>
                   <profitpanel :partnerrightlist='option.partnerRightVo.partnerRightList'></profitpanel>   
                   </div>
                   <div class="info-item ">
                   <span>合伙人特权说明 </span>
                   <!-- <textarea cols="30" rows="10" placeholder="请输入您的合伙人权益卡说明，例：
1、享受8折优惠
2、每次来店消费，赠送合伙人专属定制礼品
3、更多不定期的定制权益，欢迎咨询店长" v-model='option.partnerRightVo.partnerRightDetail'></textarea> -->

<textarea v-validate:partnerRightDetail="'required'" :class="{'input': true, 'is-danger': errors.has('partnerRightDetail') }" name="partnerRightDetail" type="text"  placeholder="请输入您的合伙人权益卡说明，例：
1、享受8折优惠
2、每次来店消费，赠送合伙人专属定制礼品
3、更多不定期的定制权益，欢迎咨询店长" v-model='option.partnerRightVo.partnerRightDetail'></textarea>
                   </div>
                 </div>
                 <router-link to="creprosecond" class="prev-step btn-no">上一步</router-link>
                 <a  class="next-step btn-yes" @click='validateBeforeSubmit'>下一步</a>
                 </div>
             </div>
         </div>
    </section>
</template>
<script>
    import profitpanel from '../components/profitpanel.vue'
    export default {
        filters: {
            
        },
        props: ['api'],
        data() {
            return {
                apiurl:this.api,
                accepts:'image/jpeg,image/jpg,image/png',
                role:localStorage.getItem('role'),
                period:'6个月',
                privilegeLogo:'',
                privilegeBg :'',
                totalMoney:'',
                saleCount:'',
                option:{
                  projectId:this.$store.state.projectId,
                  projectType:1,
                  investmentPeriod:1,
                  privilegeLogo:'',
                  privilegeBg :'',
                  salesProjectVo:{
                    returnCycle:1,
                    salesReachInfos:[{},{}]
                  },
                  consumeRightVo:{
                    consumeType:1
                  },
                  partnerRightVo:{
                    partnerRightList:[]
                  }
                }
            }
        },
         watch: {
          totalMoney(val) {
              this.option.unitPrice = this.totalMoney/this.saleCount;//新增tag的watch，监听变更并同步到isActive上
          },
          saleCount(val){
            this.option.unitPrice = this.totalMoney/this.saleCount;//新增tag的watch，监听变更并同步到isActive上
          }

         },
        methods:{
          add(){this.option.salesProjectVo.salesReachInfos.push({})},
          reduce(){this.option.salesProjectVo.salesReachInfos.pop()},
          upImg(item){
            var file=event.target.files[0];
            const formData = new FormData();
            formData.append('file', file);     
            this.$http.post(this.apiurl+'/file/upload',formData)
                .then((response) => {
                   if(item==0){
                    this.option.privilegeLogo=response.data.result.msg
                    this.privilegeLogo="http://pic.6dbox.cn/"+response.data.result.msg
                    this.$alert(true,'上传成功')
                   }else{
                    this.option.privilegeBg=response.data.result.msg
                    this.privilegeBg="http://pic.6dbox.cn/"+response.data.result.msg
                    this.$alert(true,'上传成功')
                   }
                })
                .catch(function(response) {
                    console.log(response)
                })
          },
          periodfilter(value){
                if(value=='6个月'){
                  return 1
                }else if(value=='12个月'){
                  return 2
                }else{
                  return 3
                }
            },
            validateBeforeSubmit() {
            this.$validator.validateAll().then(() => {

                // alert('From Submitted!');
            this.option.totalMoney=this.totalMoney;
            this.option.saleCount=this.saleCount;
            let options=this.option;
            options.partnerRightVo.partnerRightList=this.$store.state.partnerRightList;
            options.investmentPeriod=this.periodfilter(this.period);
            this.$http.post(this.apiurl+'/project/third',options)
                .then((response) => {
                  if(response.data.statusCode==200){
                   this.$alert(true,'操作成功')
                   this.$router.push({
                    name: 'creproforth'
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
          // thirdStep(){
          //   this.option.totalMoney=this.totalMoney;
          //   this.option.saleCount=this.saleCount;
          //   let options=this.option;
          //   options.partnerRightVo.partnerRightList=this.$store.state.partnerRightList;
          //   options.investmentPeriod=this.periodfilter(this.period);
          //   this.$http.post(this.apiurl+'/project/third',options)
          //       .then((response) => {
          //         if(response.data.statusCode==200){
          //          this.$router.push({
          //           name: 'creproforth'
          //       });
          //       }else{
          //         alert('失败，请完善信息')
          //       }
          //     })
          //       .catch(function(response) {
          //           console.log(response)
          //       })
          // }
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
                  
                  if(data.totalMoney!=0){
                   this.privilegeLogo="http://pic.6dbox.cn/"+data.privilegeLogo;
                   this.privilegeBg="http://pic.6dbox.cn/"+data.privilegeBg;
                   this.totalMoney =data.totalMoney ,
                   this.saleCount =data.saleCount ,
                   this.option={
                      projectId:this.$store.state.projectId,
                      projectType:data.projectType,
                      projectValuation:data.projectValuation ,                      
                      extraSaleCount :data.extraSaleCount ,
                      unitPrice :data.unitPrice ,
                      copiesLimit :data.copiesLimit ,
                      validityPeriod :data.validityPeriod ,
                      privilegeCardName :data.privilegeCardName ,
                      investmentPeriod:data.investmentPeriod,
                      privilegeLogo:data.privilegeLogo,
                      privilegeBg :data.privilegeBg,
                      salesProjectVo:data.salesProjectVo,
                      consumeRightVo:data.consumeRightVo,
                      partnerRightVo:data.partnerRightVo
                    }
                   console.log(this.option)
                 }
                })
                .catch(function(response) {
                    console.log(response)
                })
              }
        },
        components:{
           profitpanel
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
                margin-left: 0;
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
                    background: url('../assets/crestep3.png') no-repeat ;
                    background-size: 468px 15px;
                }
            }
            .title{
                display: inline-block;
                height: 24px;
                list-style: 24px;
                color: #333;
                margin-left: 40px;
                margin-top:   60px;
                font-weight: bold;
              }
              .info-bar{
                width: 820px;
                min-height:700px;
                background: #fff;
                margin-left: 40px;
                margin-top: 20px;
                border:1px solid #d7d7d7;
               /* .info-item{
                  position: relative;*/
                .add-border{
                  border-bottom: 1px solid #d7d7d7;
                  padding-bottom: 40px;
                }
                span{
                  display: inline-block;
                  margin-top: 54px;
                  color: #666;
                  min-width: 160px;
                  padding-left: 30px;
                }
                .add,.reduce{
                  color: $base-color;
                  display: inline-block;
                  width: 100px;
                  margin-left: 30px;
                  margin-top: 30px;
                }
                label{
                  height: 48px;
                  line-height: 48px;
                  color:#666;
                  margin-right: 60px;
                  input{
                       width: 24px;
                       height: 24px;
                       position: relative;
                       top:6px;
                       filter: alpha(opacity=0);
                       opacity: 0;
                  }
                 
                }
                 .radioNomal{
                       background: url('../assets/radio-nomal.png')no-repeat ;
                       background-size: 16px 16px;
                 }
                 .radioActive{
                       background: url('../assets/radio-active.png')no-repeat ;
                       background-size: 16px 16px;
                  }
                input{   
                  height: 48px;
                  display: inline-block;
                  margin-left: 10px;
                  margin-right: 10px;
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
                .upbar{
                  position: relative;
                  width: 500px;
                  height: 120px;
                img{
                position: absolute;
                width: 86px;
                height: 86px;
                background: #d8d8d8;
                position: absolute;
                left:200px;
                top: -40px;
              }
              a{
                position: relative;
                display: inline-block;
                width: 148px;
                height: 48px;
                line-height: 48px;
                background: $base-color;
                font-size: 14px;
                color: #fff;
                border-radius: 2px;
                text-align: center;
                text-indent: 0;
                position: absolute;
                left: 300px;
                top: -40px;
                input{
                position: absolute;
                font-size: 100px;
                width: 148px;
                height: 40px;
                right: 0;
                top: 0;
                opacity: 0;
              }
              }
              .btn-yes:hover{
                    background:#BA9246;
                }
            .btn-yes:active{
                background:#020204;
            }
               .tip{
                font-size: 12px;
                color: #999;
                display: block;
                position: absolute;
                left: 270px;
                top: -40px;
              }
            }
                .info-wrap{
                  width: 360px;
                  display: inline-block;
                  color: #666;
                }
                .base-info{
                  width: 180px;
                }
                .is-danger{
                border: 1px solid #E56B6B;
              }
                .return-info{
                  width: 132px;
                }
                .profit-info{
                  width: 380px;
                }

                .remind{
                font-size: 12px;
                color: #999;
                display: block;
                margin-top: 10px;
              }
                textarea{
                  width: 600px;
                  height: 136px;
                  display: block;
                  padding: 10px;
                  margin-top: 20px;
                  margin-left: 30px;
                  font-size: 18px;
                  color: #666;
                  background: #F6F6F6; 
                  &:focus{
                            border: 1px solid #C09D5B;
                            outline:none
                        }
                }
                select{
                  width: 250px;
                  height: 48px;
                  display: inline-block;
                  margin-left: 10px;
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
              }
              /*}*/

              .container{
                padding:0 90px 46px 30px;
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