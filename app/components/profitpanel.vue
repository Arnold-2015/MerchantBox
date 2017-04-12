<template>
   <div class="profit-bar">
                   <div class="special-icon">
                         <div  class="icon " :class="{incon1Active:active1,incon1:!active1}" @click="changeActive(1)">
                           <input type="checkbox"  value="1" v-model="checkedProfits" @change='setProfits'>
                         </div>
                         <p :class="{pactive:active1}">折扣</p>
                   </div>
                   <div class="special-icon">
                         <div  class="icon " :class="{incon2Active:active2,incon2:!active2}" @click="changeActive(2)">
                           <input type="checkbox"  value="2" v-model="checkedProfits" @change='setProfits'>
                         </div>
                         <p :class="{pactive:active2}">免单</p>
                   </div>
                   <div class="special-icon">
                         <div  class="icon " :class="{incon3Active:active3,incon3:!active3}" @click="changeActive(3)">
                           <input type="checkbox"  value="3" v-model="checkedProfits" @change='setProfits'>
                         </div>
                         <p :class="{pactive:active3}">免费车位</p>
                   </div>
                    <div class="special-icon">
                         <div  class="icon " :class="{incon4Active:active4,incon4:!active4}" @click="changeActive(4)">
                           <input type="checkbox"  value="4" v-model="checkedProfits" @change='setProfits'>
                         </div>
                         <p :class="{pactive:active4}">免排队</p>
                   </div>
                   <div class="special-icon">
                         <div  class="icon " :class="{incon5Active:active5,incon5:!active5}" @click="changeActive(5)">
                           <input type="checkbox"  value="5" v-model="checkedProfits" @change='setProfits'>
                         </div>
                         <p :class="{pactive:active5}">专属包间</p>
                   </div>
                   <div class="special-icon">
                         <div  class="icon " :class="{incon6Active:active6,incon6:!active6}" @click="changeActive(6)">
                           <input type="checkbox"  value="6" v-model="checkedProfits" @change='setProfits'>
                         </div>
                         <p :class="{pactive:active6}">定制礼品</p>
                   </div>
                   <div class="special-icon">
                         <div  class="icon " :class="{incon7Active:active7,incon7:!active7}" @click="changeActive(7)">
                           <input type="checkbox"  value="7" v-model="checkedProfits" @change='setProfits'>
                         </div>
                         <p :class="{pactive:active7}">专属接待</p>
                   </div>
                   <div class="special-icon">
                         <div  class="icon " :class="{incon8Active:active8,incon8:!active8}" @click="changeActive(8)">
                           <input type="checkbox"  value="8" v-model="checkedProfits" @change='setProfits'>
                         </div>
                         <p :class="{pactive:active8}">其他权益</p>
                   </div>
    </div>
</template>

<script> 

    export default {
          data() {
            return {
                active:[true,false,false,false,false,false,false,false,false],
                active1:false,
                active2:false,
                active3:false,
                active4:false,
                active5:false,
                active6:false,
                active7:false,
                active8:false,
                checkedProfits:[]
            }
        },
        methods:{
          changeActive(i){
            this.active[i]=!(this.active[i]);
            this.active1=this.active[1];
            this.active2=this.active[2];
            this.active3=this.active[3];
            this.active4=this.active[4];
            this.active5=this.active[5];
            this.active6=this.active[6];
            this.active7=this.active[7];
            this.active8=this.active[8];
          },
          setProfits(){
          this.$store.state.partnerRightList=this.checkedProfits;
          console.log(this.$store.state.partnerRightList)
        }
        }

        
    }
</script>
      
<style lang="sass" scoped>
    $base-color:#C49F59;
    .profit-bar{
                  width: 740px;
                  height: 300px;
                  margin-top: 20px;
                  margin-left: 30px;
                  font-size: 18px;
                  color: #666;
                  border:1px solid #d7d7d7;
                  .special-icon{
                             width: 180px;
                             height: 120px;
                             display: inline-block;
                             margin-top:20px;
                             .icon{
                             width: 60px;
                             height: 60px;
                             margin: 0 auto;
                                  }
                              .incon1{
                              background: url('../assets/折扣 (2).png')no-repeat center center;
                              background-size: 60px 60px;
                             }
                              .incon2{
                              background: url('../assets/免单 (2).png')no-repeat center center;
                              background-size: 60px 60px;
                             }
                              .incon3{
                              background: url('../assets/免费车位 (2).png')no-repeat center center;
                              background-size: 60px 60px;
                             }
                              .incon4{
                              background: url('../assets/免排队 (2).png')no-repeat center center;
                              background-size: 60px 60px;
                             }
                              .incon5{
                              background: url('../assets/专属包间 (2).png')no-repeat center center;
                              background-size: 60px 60px;
                             }
                              .incon6{
                              background: url('../assets/定制礼品 (2).png')no-repeat center center;
                              background-size: 60px 60px;
                             }
                              .incon7{
                              background: url('../assets/专属接待 (2).png')no-repeat center center;
                              background-size: 60px 60px;
                             }
                             .incon8{
                              background: url('../assets/其他权益 (2).png')no-repeat center center;
                              background-size: 60px 60px;
                             }
                            
                             .incon1Active{
                              background: url('../assets/折扣.png')no-repeat center center;
                              background-size: 60px 60px;
                             }
                              .incon2Active{
                              background: url('../assets/免单.png')no-repeat center center;
                              background-size: 60px 60px;
                             }
                              .incon3Active{
                              background: url('../assets/免费车位.png')no-repeat center center;
                              background-size: 60px 60px;
                             }
                              .incon4Active{
                              background: url('../assets/免排队.png')no-repeat center center;
                              background-size: 60px 60px;
                             }
                              .incon5Active{
                              background: url('../assets/专属包间.png')no-repeat center center;
                              background-size: 60px 60px;
                             }
                              .incon6Active{
                              background: url('../assets/定制礼品.png')no-repeat center center;
                              background-size: 60px 60px;
                             }
                              .incon7Active{
                              background: url('../assets/专属接待.png')no-repeat center center;
                              background-size: 60px 60px;
                             }
                             .incon8Active{
                              background: url('../assets/其他权益.png')no-repeat center center;
                              background-size: 60px 60px;
                             }
                             p{
                              width: 180px;
                              height: 40px;
                              line-height: 40px;
                              text-align: center;
                              color:#d7d7d7;
                             }
                             .pactive{
                              color:$base-color;
                             }  
                             input{
                              width: 60px;
                              height: 60px;
                              filter: alpha(opacity=0);
                              opacity: 0;
                     
                             }  
                         }
                }

   
</style>