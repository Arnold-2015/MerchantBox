<template>
    <div class="partner-bar">
     <div class="search-bar">
         <a class="export">导出列表</a>
     </div>
     <table class="partner-list">

                <tr class='title'>
                    <td class="crowone">分红编号</td>
                    <td class="crowone">分红总金额</td>
                    <td class="crowone">出让股份(%)</td>
                    <td class="crowone">分红人数</td>
                    <td class="crowone">发放时间</td>
                    <td class="crowtwo">分红说明</td>
                    <td class="crowone">操作</td>
                </tr>
                <tr v-for="(n,index) in 6" :class='{active:active[index%2]}'>
                    <td class="crowone">0000123455</td>
                    <td class="crowone">1503</td>
                    <td class="crowone">23%</td>
                    <td class="crowone">30000</td>
                    <td class="crowone">3/12/2016</td>
                    <td class="crowtwo">3月第一次分红</td>
                    <td class="crowone"><router-link to="profitdetail">明细</router-link></td>
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