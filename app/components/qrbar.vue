<template>
    <div class="qr">
    	<div class="qr-bar">
    		<img src="../assets/logo@3x.png">
    		<a class="download">下载二维码</a>
    		<a class='preview'>在线预览</a>
    	</div>
    </div>
</template>

<script> 
 
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
    		margin: 200px auto;
    		position: relative;
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