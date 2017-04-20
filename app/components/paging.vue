<template>
     <div class="pagination" >
        <ul>
            <li @click=" goto(1)" ><a href="javascript:;">首页</a></li>
            <li v-show="current != 1" @click="current-- && goto(current--)" ><a href="javascript:;">上一页</a></li>
            <li v-for="index in pages" @click="goto(index)" :class="{'active':current == index}" :key="index">
              <a href="javascript:;" >{{index}}</a>
            </li>
            <li v-show="allpage != current && allpage != 0 " @click="current++ && goto(current++)"><a href="javascript:;" >下一页</a></li>
            <li @click=" goto(allpage)" ><a href="javascript:;">尾页</a></li>
            <li><input type="text" v-model='index'></li>
            <li @click=" goto(index)" ><a href="javascript:;" class="jump">跳转</a></li>
        </ul>
     </div>
</template>
<script>

    export default {
        filters: {
            
        },
        props: ['apiurl','allpage'],
        data() {
            return {
               current:1,
               showItem:3,
               allpage:null,
               index:''
            }
        },
        computed:{
          pages:function(){
                var pag = [];
                  if( this.current < this.showItem ){ //如果当前的激活的项 小于要显示的条数
                       //总页数和要显示的条数那个大就显示多少条
                       var i = Math.min(this.showItem,this.allpage);
                       while(i){
                           pag.unshift(i--);
                       }
                   }else{ //当前页数大于显示页数了
                       var middle = this.current - Math.floor(this.showItem / 2 ),//从哪里开始
                           i = this.showItem;
                       if( middle >  (this.allpage - this.showItem)  ){
                           middle = (this.allpage - this.showItem) + 1
                       }
                       while(i--){
                           pag.push( middle++ );
                       }
                   }
                 return pag
               }
      },
        methods:{
         goto:function(index){
          if(index == this.current || index>this.allpage || index == '') return;
            this.current = index;
            this.$store.state.pageNum=index;
            this.$emit('getpage')
        }
        }     
    }
</script>
<style>
    li{
      list-style:none;
    }
    a{
      text-decoration:none;
    }
    .pagination {
        position: relative;
        width: 100%;
        height: 80px;
        margin-top: 20px;
        background: #fff;
      }
      ul{
          position: relative;
          width: 700px;
          height: 42px;
          margin: 0 auto;
          top: 20px;
      }
      .pagination li{
        display: inline-block;
        margin:0 -1px;
      }
      .pagination li a{
        width: 74px;
        height: 42px;
        line-height: 42px;
        text-align: center;
        display:inline-block;
        border:1px solid #f6f6f6;
        background:#fff;
        color:#999;
        font-size: 14px;
      }
      .pagination li input{
        width: 74px;
        height: 40px;
        text-align: center;
        color: #999;
        font-size: 14px;
        background: #F6F6F6;
        border: 1px solid #F6F6F6;
        border-radius: 6px;
      }

      .pagination li .jump{
        background:#C49F59;
        color: #fff;
        font-size: 14px;
        border-radius: 6px;
      }
      .pagination li .jump:hover{
        background:#C49F59;
      }
      .pagination li a:hover{
        background:#eee;
      }
      .pagination li.active a{
        background:#C49F59;
        color:#fff;
        font-size: 14px;
      }
</style>