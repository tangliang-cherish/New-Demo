$(function(){
	$(".AccountShow").load("index/zh.html")
	$(".NavBox").children().eq(0).children().addClass("BtnActive");
	$(".NavBox").children().eq(1).children().removeClass("BtnActive");
	$(".NavBox").children().eq(2).children().removeClass("BtnActive");
	$(".NavBox").children().eq(3).children().removeClass("BtnActive");
	$(".NavBox,.UserNameBox").show();
	$(".Foolt,.TextBtn").hide();
	$(".NavBox").children().eq(0).children().addClass("BtnActive");
	$(".AlbumAdminister,.AccoutAdminister,.InformList").click(function(){
		var num = $(this).attr("name")
		$(this).addClass("AccoutActive").siblings().removeClass("AccoutActive")
		if(num==1){
			$(".AccountShow").load("index/zh.html")
		}
		if(num==2){
			$(".AccountShow").load("index/zz.html")
		}
		if(num==3){
			$(".AccountShow").load("index/tt.html")
		}
	})
	
})
