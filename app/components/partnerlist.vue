<template>
     <table class="issue-list">
                <tr class='title'>
                    <td class="crowone">姓名</td>
                    <td class="crowone">手机号</td>
                    <td class="crowone">份数</td>
                    <td class="crowone">投资金额</td>
                    <td class="crowone">占股</td>
                    <td class="crowone">支付时间</td>
                    <td class="crowtow">备注</td>
                </tr>
                <tr v-for='n in 6'>
                    <td class="crowone">赵钱孙李</td>
                    <td class="crowone">15033336666</td>
                    <td class="crowone">2</td>
                    <td class="crowone">30000</td>
                    <td class="crowone">1%</td>
                    <td class="crowone">2017/3/23/14:00</td>
                    <td class="crowtow"></td>
                </tr>
                
    </table>
</template>
<script>

    export default {
        filters: {
            
        },
        data() {
            return {
                
            }
        },
        mounted() {
            
        }
    }
</script>
<style lang="sass" scoped>
   .issue-list{
        width: 100%;
        height: auto;
        font-size: 18px;
        border-collapse:collapse;
        tr{
            width: 100%;
            height: 60px;
            line-height: 60px;
            color: #666;
            background: #FAFAFA;
        }
        .title{
            background: #fff;
            font-weight: bold;
            color: #333;
        }
        td{
            height: 60px;
            line-height: 60px;
            text-align: center;    
        }
        .crowone{
            width: 14%;
        }
        .crowtow{
            width: 16%;
        }
   }
</style>