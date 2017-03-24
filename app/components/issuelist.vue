<template>
     <table class="issue-list">
                <tr class='title'>
                    <td class="crowone">操作人</td>
                    <td class="crowone">公告类型</td>
                    <td class="crowone">创建时间</td>
                    <td class="crowtow">公告内容</td>
                </tr>
                <tr v-for="n in 6" >
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
            width: 58%;
        }
   }
</style>