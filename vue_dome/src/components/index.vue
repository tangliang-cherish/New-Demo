<template>
	<div class="Index" v-if="data">
		<div class="IndexShow">
			<slider :pages="data.bannerArr" :sliderinit="sliderinit"></slider>
			<div class="IndexNav">
				<router-link :to="{name:'product',params:{num:CityNum}}" v-for="(Cityitem,index) in data.city" :key="Cityitem"  v-on:mouseover.native="ShowText(index,$event)"  v-on:mouseout.native="HideText($event)">{{Cityitem}}</router-link>
			</div>
		</div>
		<div class="IndexText">{{data.brandtext}}</div>
		<div class="IndexBrand">
			<div class="BrandItem" v-for="item in data.brandarr">
				<p>{{item.city}}</p>
				<img :src="item.url" alt="" />
				<p>{{item.text}}</p>
			</div>
		</div>
		<div class="split"><img :src="data.split" alt="分割线" /></div>
		<div class="IndexCustom">
			<div class="IndexCustomTitle">
				<p class="title">品牌特色</p>
				<span>——Brand characteristics——</span>
			</div>
			<div class="IndexCustomItem">
				<p>{{data.ch}}</p>
				<p>{{data.en}}</p>
			</div>
			<div class="IndexCustomImg">
				<img :src="data.brandimg" alt="" />
			</div>
		</div>
		<div class="split"><img :src="data.split" alt="分割线" /></div>
		<div class="IndexProduct">
			<div class="IndexProductTitle">
				<p class="title">产品展示</p>
				<span>——Product show——</span>
			</div>
			<div class="IndexProductImg">
				<transition-group tag="ul" name="move">
				  <li v-for="(item,index) in data.productarr" :key="index">
				    <img :src="item.url" alt="产品" v-show="index === num" />
				  </li>
				</transition-group>
			</div>	
			<div class="IndexProductItem">
				<div v-for="(item,index) in data.productarr" :class="{active:index === num}" @click="SelectClick(index)">{{item.name}}</div>
			</div>
		</div>
	</div>
</template>

<script>
	import slider from 'vue-concise-slider'//插件
	export default{
		data(){
			return {
				data:"",
				CityName:"",
				num:0,
				CityNum:0,
		        sliderinit: {
		          currentPage: 0,
		          thresholdDistance: 1000,
		          thresholdTime: 500,
		          autoplay:3000,
		          loop:true,
		        }
			}
		},
		created(){
			this.axios.get("/static/data.json").then((res)=>{
				this.data = res.data;
			})
		},
		methods:{
			ShowText(index,e){
				this.CityName = e.target.innerText;
				this.CityNum = index;
				e.target.innerText = "更多好图，尽在其中";
			},
			HideText(e){
				e.target.innerText = this.CityName;
			},
			SelectClick(index){
				this.num = index
			}
		},
		components: {
	        slider
	   	},
	}
</script>
<style>
	.Index{
		width: 100%;
	}
	/*banner*/
	.IndexShow{
		position: relative;
		text-align: center;
		width: 100%;
		height: 563px;
	}
	.IndexShow .IndexIcon{
		width: 100%;
		text-align: center;
		position: absolute;
		bottom: 1em;
	}
	.IndexShow .IndexIcon span{
		margin: 0 0.2em;
		display: inline-block;
		width: 1.5em;
		height: 1.5em;
		cursor: pointer;
		background: #fff;
		border-radius: 50%;
	}
	.IndexShow .IndexIcon span:hover{
		background: #ccc;
	}
	.IndexShow .IndexNav{
		width: 100%;
		height: 50px;
		text-align: center;
		position: absolute;
		left: 0;
		top: 0;
		z-index: 9;
	}
	.IndexShow .IndexNav a{
		display: inline-block;
		width: 12.5%;
		height: 50px;
		line-height: 50px;
		text-align: center;
		color: #fff;
		cursor: pointer;
		background: rgba(0,0,0,0.3);
	}
	.IndexShow .IndexNav a:hover{
		background: rgba(0,0,0,0.5);
	}
	/*text*/
	.IndexText{
		padding: 20px 0;
	    font-size: 24px;
	    font-weight: 300;
	    text-align: center;
	    color: rgba(147,153,159,0.5);
	    background: #f4f4f4;
	}
	.IndexBrand {
		background: #f4f4f4;
		text-align: center;
		padding-bottom: 20px;
	}
	.IndexBrand .BrandItem{
		background: white;
		display: inline-block;
		width: 20%;
		padding: 0 20px;
	}
	.IndexBrand .BrandItem p{
		padding: 20px 0;
	}
	.IndexBrand .BrandItem:nth-child(2){
		margin: 0 5%;
	}
	.split{
		padding: 20px 0;
		text-align: center;
	}
	.split img{
		width: inherit;
	}
	.IndexCustom{
		text-align: center;
	}
	.IndexCustom .IndexCustomTitle .title{
	    font-size: 24px;
	    font-weight: 300;
	}
	.IndexCustom .IndexCustomTitle span{
		color: rgb(147,153,159);
	}
	.IndexCustom .IndexCustomItem,
	.IndexCustom .IndexCustomImg{
		display: inline-block;
	    vertical-align: top;
	    margin-top: 20px;
	    width: 510px;
	}
	.IndexCustom .IndexCustomImg{
		width: 426px;
	}
	.IndexCustom .IndexCustomItem p{
		padding: 40px;
	    color: rgb(192,192,192);
	    font-size: 14px;
	}
	/*产品展示*/
	.IndexProduct{
		text-align: center;
	}
	.IndexProduct .IndexProductTitle .title{
	    font-size: 24px;
	    font-weight: 300;
	}
	.IndexProduct .IndexProductTitle span{
		color: rgb(147,153,159);
	}
	.IndexProduct .IndexProductImg{
		width: 1000px;
		margin: 0 auto;
	}
	.IndexProduct .IndexProductItem{
		margin: 20px auto;
	    font-size: 0;
	    width: 1000px;
	}
	.IndexProduct .IndexProductItem div{
	    display: inline-block;
	    width: 25%;
	    padding: 20px 0;
	    font-size: 14px;
	    border-bottom: 2px solid #ccc;
	    border-top: 2px solid #ccc;
	    cursor: pointer;
	}
	.move-enter-active, .move-leave-active {
            transition: all 1s;
        }
    .move-enter, .move-leave-active {
        opacity: 0;
    }
	.IndexProduct .IndexProductItem div:hover{
		border-bottom: 2px solid dodgerblue;
   		border-top: 2px solid dodgerblue;
	}
	.IndexProduct .IndexProductItem div.active{
		border-bottom: 2px solid dodgerblue;
   		border-top: 2px solid dodgerblue;
	}
</style>