<template>
	<div class="Header ">
		<div class="HeaderWarpper clearfix">
			<div class="Header_Logo fl">
			   <span>
			       <img alt="" src="../assets/logo.png" />
			   </span>
			</div>
			<div class="Header_Text fr">
				<ul class="clearfix">
					<li><router-link to="/">首页</router-link></li>
					<li><router-link to="/brand">品牌特色</router-link></li>
					<li><router-link to="/product">产品展示</router-link></li>
					<li><router-link to="/company">公司简介</router-link></li>
					<li><router-link to="/contact">联系我们</router-link></li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
	export default {}
</script>
<style>
	.Header{
		background: url(../assets/head_bg.jpg);
	}
	.HeaderWarpper{
		width: 80%;
		min-width: 1000px;
		max-width: 1920px;
		margin: 0 auto;
	}
	.Header_Logo{
		display: table;
		height:60px; 
	}
	.Header_Logo span{
		display: table-cell; 
		vertical-align: middle;
	}
	.Header_Logo span img{
		display: inline-block;
	}
	.HeaderWarpper .Header_Text ul li{
		float: left;
		
	}
	.Header .Header_Text ul li a{
		display: inline-block;
		width: 120px;
		line-height: 60px;
		text-align: center;
		color:#fff;
	}
	.Header .Header_Text ul li a.router-link-exact-active{
		color:rgb(255, 192, 1);
	}
</style>