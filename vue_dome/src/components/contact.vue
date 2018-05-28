<template>
	<div class="contact">
		<img src="/static/me/me.jpg" alt="展示图" />
		<div class="contactTitle">
			<p class="title">联系我们</p>
			<span>——contact us——</span>
		</div>
		<div class="contactCont clearfix">
			<div class="contactImg fl">
				<img src="/static/me/erweima.png" alt="二维码" />
				<p>关注我们公众微信号，更多好礼尽在其中</p>	
			</div>
			<div class="contactTxt fl">
				<p>24小时服务热线：15196063635</p>
				<p>QQ:1546234162</p>
				<p>邮箱：164008319@qq.com</p>
				<p>公司地址：四川省泸州市叙永县新区</p>
			</div>
		</div>
		<div class="baidumap" id="allmap"></div>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				opts:{
				  width : 200,
				  height: 75,
				  title : "景摄影 婚纱全球旅拍",
				  enableMessage:true,
				  message:"为自己留下最美的回忆。我在这里等你哦~~~",
				}
			}
		},
		mounted() {
			var map = new BMap.Map("allmap");
			var point = new BMap.Point(105.4531770000,28.1670610000);
			var marker = new BMap.Marker(point);
			var infoWindow = new BMap.InfoWindow("地址：四川省泸州市叙永县新区鱼凫古街唱享时光2楼", this.opts);
			map.addOverlay(marker); 
			map.centerAndZoom(point, 19);
			map.enableScrollWheelZoom(true);  
			map.openInfoWindow(infoWindow,point);
		}
	}
</script>
<style>
	.contact{
		text-align: center;
	}
	.contact .contactTitle{
		padding: 40px 0;
	}
	.contact .contactTitle .title{
	    font-size: 24px;
	    font-weight: 300;
	}
	.contact .contactTitle span{
		color: rgb(147,153,159);
	}
	.contactCont{
		width: 800px;
    	margin: 0 auto;
	}
	.contactCont .contactImg{
		padding: 40px;
	}
	.contactCont .contactImg img{
		width: inherit;
	}
	.contactCont .contactImg p{
		font-size: 12px;
    	color: #ccc;
	}
	.contactCont .contactTxt{
		font-size: 24px;
	    padding: 30px;
	    color: #555;
	    line-height: 50px;
	    text-align: left;
	}
	.baidumap{
		width: 700px;
		height: 300px;
		margin: 30px auto;
	}
</style>