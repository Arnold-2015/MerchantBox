<template>
    <div class="prepartner-bar">
      <div class="search-bar">
         <input  type="text"  style="left:40px" placeholder="输入姓名/卡号/手机号" >
         <a class="search" style="left:280px"><img src="../assets/search.png" ></a>
         <a class="export">导出列表</a>
     </div>
     <table class="partner-list">

                <tr class='title'>
                    <td class="crowone">姓名</td>
                    <td class="crowone">手机号</td>
                    <td class="crowone">份数</td>
                    <td class="crowone">投资金额</td>
                    <td class="crowone">占股</td>
                    <td class="crowone">支付时间</td>
                    <td class="crowtow">备注</td>
                </tr>
                <tr v-for="(n,index) in 6" :class='{active:active[index%2]}'>
                    <td class="crowone">赵钱孙李</td>
                    <td class="crowone">15033336666</td>
                    <td class="crowone">2</td>
                    <td class="crowone">30000</td>
                    <td class="crowone">1%</td>
                    <td class="crowone">2017/3/23/14:00</td>
                    <td class="crowtow"></td>
                </tr>
                
    </table>
    </div>
</template>
<script>

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
