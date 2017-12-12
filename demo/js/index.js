$(document).ready(function() {
	$('#banner_Box').particleground({
		dotColor: '#f4f4f4',
		lineColor: '#f4f4f4'
	});
});
$(function(){
	$(".TopNavContRight .HeadGo").click(function(){
		var name =$(this).attr("name")
		$(this).addClass("TopNavActive").siblings().removeClass("TopNavActive");
		var num =0;
		if(name!="Top"){num =$("#"+name).offset().top-80}
		$("html,body").animate({scrollTop:num}, 500)
	})
	/*中文*/
	var China = {
		nav:[
			{china:"首页",en:"HOME"},
			{china:"介绍",en:"EATURES"},
			{china:"交易所",en:"EXCHANGES"},
			{china:"交易钱包",en:"WALLTETS"},
			{china:"FAQ",en:"FAQ"},
		],
		title:[
			{china:"路线图",en:"ROADMAP"},
			{china:"交易所",en:"EXCHANGE"},
			{china:"交易钱包",en:"WALLTETS"},
		],
		luxianTXT1:[
			{china:"快速小额交付",en:"Micro-Fast-Transaction"},
			{china:"大区块",en:"Large Blocks"},
			{china:"低费用",en:"Low Transaction Fees"}
		],
		luxianTXT2:[
			{china:"在499999高度分叉_开始我们伟大的试验",en:"Fork the blockchain at the height of_ 499999 a new beginning"},
			{china:"引入DPOS共识机制",en:"Add the DPOS "},
			{china:"上线小额快速支付",en:"Micro-Fast-Transaction"}
		],
		FAQ1:[
			{china:"什么是比特币王者？",en:"What is Bitcoin King?"},
			{china:"BCK能解决哪些问题？",en:"What problems will Bitcoin King fix?"},
			{china:"BCK的总量是多少？",en:"What is the amount of Bitcoin King?"},
			{china:"预挖BCK的用途。",en:"What is the purpose of Bitcoin King pre-mine?"},
		],
		FAQ2:[
			{china:"比特币王者（BCK）是在比特币在499999区块高度产生的分叉币。比特币王者将引用不同的共识机制来创建新的区块。原来的比特币区块保持不变， 新分叉的区块将脱离原有的链。它将继承比特币的交易历史，直到它开始分叉并脱离比特币产生一个新的区块。作为这一过程的结果，一个新的加密货币诞生了， 这就是比特币王者！",en:"Bitcoin king is a peer-to-peer electronic cryptocurrency,which is forked from Bitcoin block 499999."},
			{china:"1、秒级的交易速度，BCK将在后期对钱包之间的交易环节引入DPOS共识算法，用户之间转只需几秒便可完成！_2、更少的手续费，全新的挖矿机制使得BCK交易更具有效率，从而大大降低交易手续费，让用户得到实惠，让BCK更具有实用性！_3、隐私保护，为了保障用户的信息安全和个人隐私，BCK对每次的交易金额进行加密。",en:"1 Small block size, low transaction confirmation_2 Lack of privacy protection_3 High cost of transaction fees"},
			{china:"BCK总量 2121万，其中21万为分叉预挖。",en:"Total 21210000,of which 210000 were pre-mined."},
			{china:"预挖BCK的用途。",en:"The BCK pre-mined will be managed by the foundation to encourage the early developers."},
		]
	}
	
	/*FAQ问答*/
	$(".FaqTxtBox h3").click(function(){
		$(this).siblings("p").removeClass("hide").parent("div").siblings().children("p").addClass("hide");
	})
	/*底部微信*/
	$(".FloorWeiXinBox").mouseover(function(){
		$(this).children("div").removeClass("hide")
	}).mouseout(function(){
		$(this).children("div").addClass("hide")
	})
	/*英文*/
	$(".EnTxt").click(function(){
		//菜单
		$(".TopNavContRight").children("a").each(function(index){
			if(index < China.nav.length){
				$(this).text(China.nav[index].en)
			}
		})
		//标题
		$(".TabelBoxTitle").text(China.title[0].en);
		$(".ExchangeTxt").text(China.title[1].en);
		$(".ExchangeMoneyTxt").text(China.title[2].en)
		//区域图
		$(".TopLuXian").children("div").each(function(index){
			$(this).find("p").text(China.luxianTXT1[index].en)
		})
		$(".TabelTxtBox").children("div").each(function(index){
			$(this).find("p").html(China.luxianTXT2[index].en.replace(/\_/g,"<br/>"))
		})
		//底部
		$(".FaqTxtBox").children("div").each(function(index){
			$(this).find("h3").html(China.FAQ1[index].en.replace(/\_/g,"<br/>"))
			$(this).find("p").html(China.FAQ2[index].en.replace(/\_/g,"<br/>"))
		})
	})
	/*中文*/
	$(".ChinaTxt").click(function(){
		$(".TopNavContRight").children("a").each(function(index){
			if(index < China.nav.length){
				$(this).text(China.nav[index].china)
			}
		})
		$(".TabelBoxTitle").text(China.title[0].china);
		$(".ExchangeTxt").text(China.title[1].china);
		$(".ExchangeMoneyTxt").text(China.title[2].china)
		//区域图
		$(".TopLuXian").children("div").each(function(index){
			$(this).find("p").text(China.luxianTXT1[index].china)
		})
		$(".TabelTxtBox").children("div").each(function(index){
			$(this).find("p").html(China.luxianTXT2[index].china.replace(/\_/g,"<br/>"))
		})
		//底部
		$(".FaqTxtBox").children("div").each(function(index){
			$(this).find("h3").html(China.FAQ1[index].china.replace(/\_/g,"<br/>"))
			$(this).find("p").html(China.FAQ2[index].china.replace(/\_/g,"<br/>"))
		})
	})
	
	
	
})
