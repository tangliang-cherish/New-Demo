<template>
	<div class="product">
		<img src="/static/me/product.jpg" alt="" />
		<div class="productNav" :class="{FixedNav:fixed}">
			<a href="javascript:void(0)" v-for="(item, index) in data.city" @click="goAnchor(index)">{{item}}</a>
		</div>
		<div class="productWarpper">
			<div class="productItem" v-for="(item,index) in data.product">
				<div class="productTitle">{{item.text}}</div>
				<div class="ProductImg">
					<img :src="itemsrc" v-for="itemsrc in item.url"  alt="产品图" />
				</div>
				<div class="split"><img src="/static/banner/split.png" alt="分割线" /></div>
			</div>
		</div>
	</div>	
</template>

<script>
export default {
	data(){
		return {
			data:"",
			distance:0,
			total:0,
			step:0,
			fixed:false
		}
	},
	created(){
		this.axios.get("/static/product.json").then((res)=>{
			this.data = res.data;
			if(this.$route.params.num){
				this.$nextTick(()=>{
					this.goAnchor(this.$route.params.num);
				})
			}
		})
	},
	methods: {
		menu() {
		    this.scroll = document.body.scrollTop;
		    this.fixed = this.scroll>99 ? true :false;
		},
    	goAnchor (index) {
		    var Dom = document.querySelectorAll('.productItem');
		    this.total = Dom[index].offsetTop;
		    this.distance = document.documentElement.scrollTop || document.body.scrollTop;
	        this.step = this.total / 50;
	        if (this.total > this.distance) {
	          this.scrollDown();
	        } else {
	          let newTotal = this.distance - this.total;
	          this.step = newTotal / 50;
	          this.scrollUp();
	        }
		},
		scrollDown () {
			var _this = this;
	        if (_this.distance < _this.total) {
	            _this.distance += _this.step;
	　　　　　　 document.body.scrollTop = _this.distance;
	            document.documentElement.scrollTop = _this.distance;
	            setTimeout(_this.scrollDown, 10);
	        } else {
	            document.body.scrollTop = _this.total;
	            document.documentElement.scrollTop = _this.total;
	        }
	    },
	    scrollUp () {
	    	var _this = this;
	        if (_this.distance > _this.total) {
	            _this.distance -= _this.step;
	　　　　　　 document.body.scrollTop = _this.distance;
	            document.documentElement.scrollTop = _this.distance;
	            setTimeout(_this.scrollUp, 10);
	        } else {
	            document.body.scrollTop = _this.total;
	            document.documentElement.scrollTop = _this.total;
	        }
	    }
	},
	mounted() {
	   window.addEventListener('scroll', this.menu);
	}
}
</script>

<style>
	.product{
		position: relative;
	}
	.product .productNav{
		width: 100%;
		height: 50px;
		text-align: center;
		position: absolute;
		left: 0;
		top: 0;
		z-index: 9;
	}
	.product .FixedNav{
		position: fixed;
		left: 0;
		top: 0;
		z-index: 9;
	}
	.product .productNav a{
		display: inline-block;
		width: 12.5%;
		height: 50px;
		line-height: 50px;
		text-align: center;
		color: #fff;
		cursor: pointer;
		background: rgba(0,0,0,0.3);
	}
	.product .productNav a:hover{
		background: rgba(0,0,0,0.5);
	}
	.productWarpper{
		width: 100%;
	}
	.productWarpper .productTitle{
		padding: 10px 0;
		text-align: center;
		font-size: 24px;
		color: #555;
	}
	.productWarpper .ProductImg{
		text-align: center;
	}
	.productWarpper .ProductImg img{
		width: 24%;
		margin: 5px;
	}
	.split{
		padding: 20px 0;
		text-align: center;
	}
	.split img{
		width: inherit;
	}
</style>
