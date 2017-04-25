<template>
    <div class="qr">
    	<div class="qr-bar">
            <span @click='showQrChange'></span>
    		<img :src="qrcode">
    		<a class="download" :href='qrcode' download='二维码'>下载二维码</a>
    		<a class='preview' :href='previewurl' target='_blank' >在线预览</a>
    	</div>
    </div>
</template>

<script> 

    export default {
        props:['projectid','qrcode'],
        data(){
            return {
                previewurl:'http://www.6dbox.cn/6dhezi/page/projectDetail.html?projectId='+this.projectid
            }
        },
        methods:{
          showQrChange(){
            this.$store.state.showQr = false;
          }
        }
        
    }
</script>
      
<style lang="sass" scoped>
    $base-color:#C49F59;
    .qr{
    	width: 100%;
    	height: 100%;
    	position: fixed;
    	top:0;
    	left:0;
    	background: rgba(0,0,0,0.50);
    	z-index: 100;
    	.qr-bar{
    		width: 500px;
    		height: 500px;
    		background: #fff;
    		margin: 8% auto;
    		position: relative;
            span{
                width:10px;
                height:10px;
                background:url('../assets/cancel.png')no-repeat center center;
                position: absolute;
                top:20px;
                right:20px;
            }
    		img{
    			width: 300px;
    			height: 300px;
    			position: absolute;
    			left: 100px;
    			top: 60px;
    		}
    		a{
    			width: 100px;
    			height: 25px;
    			line-height: 25px;
    			color:$base-color;
                font-size: 18px;
                text-align: center;
    		}
    		.download{
    			position: absolute;
    			left: 200px;
    			bottom: 86px;
    		}
    		.preview{
    			position: absolute;
    			left: 200px;
    			bottom: 38px;
    		}
    	}
    }

   
</style>