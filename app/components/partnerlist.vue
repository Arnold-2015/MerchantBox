<template>
    <div class="partner-bar">
    
     <div class="search-bar">
         <select>
           <option value ="全部">全部</option>
           <option value ="有效合伙人">有效合伙人</option>
           <option value="已退出合伙">已退出合伙</option>
         </select>
         <input  type="text" placeholder="输入姓名/卡号/手机号" >
         <a class="search"><img src="../assets/search.png" ></a>
         <a class="export">导出列表</a>
     </div>
     <table class="partner-list">

                <tr class='title'>
                    <td class="crowone">姓名</td>
                    <td class="crowtwo">手机号</td>
                    <td class="crowtwo">卡号</td>
                    <td class="crowone">本金余额</td>
                    <td class="crowone">占股</td>
                    <td class="crowone">收益余额</td>
                    <td class="crowone">收益余额</td>
                    <td class="crowone">操作</td>
                </tr>
                <tr v-for="(n,index) in 6" :class='{active:active[index%2]}'>
                    <td class="crowone">赵钱孙李</td>
                    <td class="crowtwo">15033336666</td>
                    <td class="crowtwo">23444-22243-24222</td>
                    <td class="crowone">30000</td>
                    <td class="crowone">1%</td>
                    <td class="crowone">2017/3/23/14:00</td>
                    <td class="crowone">2000</td>
                    <td class="crowone"><router-link to="partnerdetail">明细</router-link><a>退出</a></td>
                </tr>
                
    </table>
    </div>
</template>
<script>
    // require('../assets/list.scss')
    export default {
        filters: {
            
        },
        data() {
            return {
                parm:'',
                active:[false,true]
            }
        },
        mounted() {
            
        }
    }
</script>
