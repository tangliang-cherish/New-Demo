$(function(){
	//一级菜单
	$(document).on("click",".NavOneLi",function(){
		$(this).addClass("active").parent().siblings("li").children("div").removeClass("active");
		$(this).next("ul").removeClass("hide").parent().siblings("li").children("ul").addClass("hide");
		$(this).parent().siblings("li").children("ul").children("li").removeClass("active");
		if($(this).next("ul").find(".active").length>0){
			$(this).removeClass("active");
		}
	})
	//二级菜单
	$(document).on("click",".NavTwoLi",function(){
		$(this).addClass("active").parent().prev().removeClass("active");
		$(this).siblings().removeClass("active");
		var urlDate = $(this).children("a").attr("href");
		ShowHtml(urlDate)
	})
})
