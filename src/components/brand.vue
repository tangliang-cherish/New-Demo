<template>
	<div class="brand">
		<img src="/static/brand/brand.jpg" alt="特色展示" />
		<div class="brandTitle">
			<p class="title">品牌特色</p>
			<span>——Brand characteristics——</span>
		</div>
		<div class="brandItem">
			<div class="brandItemTxt">
				<p>景摄影婚纱全球旅拍成立于2010年5月1日，位于美丽的西南地区四川叙永。自成立以来秉着"诚信、专业、时尚、创新"的原则，不断的提高吸收新创意，严把质量关口，全方位服务跟踪，坚持拍出让人终身难忘的回忆照片。</p>
				<p>Jing Photography Wedding Global Travel Photography was established on May 1, 2010. located in the beautiful southwest region of Sichuan Xuyong. Since its establishment, the company has been adhering to the principles of "integrity, professionalism, fashion, and innovation", constantly improving its ability to absorb new ideas, strictly control the quality of its products, and track all aspects of its service, and has consistently taken unforgettable memories!</p>
			</div>
			<div class="brandItemImg">
				<img src="/static/brand/show2.jpg" alt="特色1" />
			</div>
		</div>
		<div class="split"><img src="/static/banner/split.png" alt="分割线" /></div>
		<div class="brandItem">
			<div class="brandItemImg">
				<img src="/static/brand/show.jpg" alt="特色2" />
			</div>
			<div class="brandItemTxt">
				<p>景摄影婚纱全球旅拍成立于2010年5月1日，位于美丽的西南地区四川叙永。自成立以来秉着"诚信、专业、时尚、创新"的原则，不断的提高吸收新创意，严把质量关口，全方位服务跟踪，坚持拍出让人终身难忘的回忆照片。</p>
				<p>Jing Photography Wedding Global Travel Photography was established on May 1, 2010. located in the beautiful southwest region of Sichuan Xuyong. Since its establishment, the company has been adhering to the principles of "integrity, professionalism, fashion, and innovation", constantly improving its ability to absorb new ideas, strictly control the quality of its products, and track all aspects of its service, and has consistently taken unforgettable memories!</p>
			</div>
		</div>
	</div>	
</template>

<script>
</script>

<style>
	.brand{
		text-align: center;
	}
	.brand .brandTitle{
		padding: 40px 0;
	}
	.brand .brandTitle .title{
	    font-size: 24px;
	    font-weight: 300;
	}
	.brand .brandTitle span{
		color: rgb(147,153,159);
	}
	.brand .brandItem .brandItemImg,
	.brand .brandItem .brandItemTxt{
		display: inline-block;
	    vertical-align: top;
	    margin-top: 20px;
	    width: 510px;
	}
	.brand .brandItem .brandItemImg{
		width: 426px;
	}
	.brand .brandItem p{
		padding: 40px;
	    color: rgb(192,192,192);
	    font-size: 14px;
	}
	.split{
		padding: 20px 0;
		text-align: center;
	}
	.split img{
		width: inherit;
	}
</style>