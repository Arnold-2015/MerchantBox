<template>
    <div class="partner-bar">
    
     <div class="search-bar">
         <input class="search-key" style="left:40px" type="text" placeholder="输入姓名/卡号/手机号" >
         <a class="search" style="left:280px"><img src="../assets/search.png" ></a>
         <a class="export">导出列表</a>
     </div>
     <table class="partner-list">

                <tr class='title'>
                    <td class="crowone">姓名</td>
                    <td class="crowtwo">手机号</td>
                    <td class="crowtwo">卡号</td>
                    <td class="crowone">消费类型</td>
                    <td class="crowone">消费金额</td>
                    <td class="crowtwo">消费时间</td>
                </tr>
                <tr v-for="(n,index) in 6" :class='{active:active[index%2]}'>
                    <td class="crowone">赵钱孙李</td>
                    <td class="crowtwo">15033336666</td>
                    <td class="crowtwo">23444-22243-24222</td>
                    <td class="crowone">本金</td>
                    <td class="crowone">2017</td>
                    <td class="crowtwo">2016-3-23 12:00</td>
                </tr>
                
    </table>
    </div>
</template>
<script>
    // require('../assets/list.scss')
    export default {
        filters: {
            
        },
        props: ['api'],
        data() {
            return {
                apiurl:this.api,
                active:[false,true]
            }
        },
        mounted() {
            
        }
    }
</script>