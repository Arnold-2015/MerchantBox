<template>
    	<div class="loading">
    		<a></a>
    	</div>
</template>

<script> 
 
</script>
      
<style scoped>
    .loading{
    	width: 100%;
    	height: 100%;
    	background: #333;
    	opacity: 0.8;
    	position: fixed;
    	z-index: 1000;
    	left: 0;
    	top: 0;
    }
    .loading a{
        width: 150px;
        height: 150px;
        display: block;
        margin: 300px auto;
        opacity: 0.8;
        background: url('../assets/load.gif')no-repeat center center;
        background-size:150px 150px;
    }
   
</style>