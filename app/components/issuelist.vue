<template>
     <table class="partner-list">
                <tr class='title'>
                    <td class="crowone">操作人</td>
                    <td class="crowone">公告类型</td>
                    <td class="crowone">创建时间</td>
                    <td class="crowtow">公告内容</td>
                </tr>
                <tr v-for="(n,index) in 6" :class='{active:active[index%2]}'>
                    <td class="crowone">赵钱孙李</td>
                    <td class="crowone">自动生成</td>
                    <td class="crowone">2016/03/12/14:00</td>
                    <td class="crowtow">项目已完成80%，还在观望的亲们抓紧啦</td>
                </tr>
                
    </table>
</template>
<script>

    export default {
        filters: {
            
        },
        data() {
            return {
                active:[false,true]
            }
        },
        mounted() {
            
        }
    }
</script>
