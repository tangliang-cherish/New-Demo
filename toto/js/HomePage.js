$(function(){
	$(".NavBox,.UserNameBox").hide();
	$(".Foolt,.TextBtn").show();
	$(".Banner2").hover(function(){
		$(this).animate({top:"-70px"},'slow')
	},function(){
		$(this).animate({top:"0px"},'slow')
	})
	
	$(".Head-Administer-Calendar img").hover(function(){
		$(this).animate({width:"270px",height:"270px"},'slow')
	},function(){
		$(this).animate({width:"258px",height:"258px"},'slow')
	})
	
	$(".Head-Administer-DetermineUpload img").hover(function(){
		$(this).animate({width:"340px",height:"150px"},'slow')
	},function(){
		$(this).animate({width:"337px",height:"142px"},'slow')
	})
	
	$(".Inform").click(function(){
		$(this).addClass("Zindex").siblings().removeClass("Zindex")
		var num = $(this).attr("name");
		$(this).animate({top: "22%",left: "7%"},'slow')
		if(num==3){
			$(this).attr("name",1);
			$(this).siblings().each(function(){
				if($(this).attr("name")==1){
					$(this).attr("name",3)
					$(this).animate({left: "11%",top:"0"},'slow')
				}
				if($(this).attr("name")==2){
					$(this).addClass("Zindex2").siblings().removeClass("Zindex2")
				}
			})
		}
		if(num==2){
			$(this).attr("name",1)
			$(this).siblings().each(function(){
				if($(this).attr("name")==1){
					$(this).attr("name",2)
					$(this).animate({top: "11%",left: "9%"},'slow')
				}
				if($(this).attr("name")==2){
					$(this).addClass("Zindex2").siblings().removeClass("Zindex2")
				}
			})
			
		}	
	})
	$(".Album").click(function(){
		$(this).addClass("Zindex").siblings().removeClass("Zindex")
		var num = $(this).attr("name");
		$(this).animate({top: "22%",left: "7%"},'slow')
		if(num==3){
			$(this).attr("name",1);
			$(this).siblings().each(function(){
				if($(this).attr("name")==1){
					$(this).attr("name",3)
					$(this).animate({left: "11%",top:"0"},'slow')
				}
				if($(this).attr("name")==2){
					$(this).addClass("Zindex2").siblings().removeClass("Zindex2")
				}
			})
		}
		if(num==2){
			$(this).attr("name",1)
			$(this).siblings().each(function(){
				if($(this).attr("name")==1){
					$(this).attr("name",2)
					$(this).animate({top: "11%",left: "9%"},'slow')
				}
				if($(this).attr("name")==2){
					$(this).addClass("Zindex2").siblings().removeClass("Zindex2")
				}
			})
			
		}	
	})
	$(".Account").click(function(){
		$(this).addClass("Zindex").siblings().removeClass("Zindex")
		var num = $(this).attr("name");
		$(this).animate({top: "22%",left: "7%"},'slow')
		if(num==3){
			$(this).attr("name",1);
			$(this).siblings().each(function(){
				if($(this).attr("name")==1){
					$(this).attr("name",3)
					$(this).animate({left: "11%",top:"0"},'slow')
				}
				if($(this).attr("name")==2){
					$(this).addClass("Zindex2").siblings().removeClass("Zindex2")
				}
			})
		}
		if(num==2){
			$(this).attr("name",1)
			$(this).siblings().each(function(){
				if($(this).attr("name")==1){
					$(this).attr("name",2)
					$(this).animate({top: "11%",left: "9%"},'slow')
				}
				if($(this).attr("name")==2){
					$(this).addClass("Zindex2").siblings().removeClass("Zindex2")
				}
			})
		}	
	})
	
	$(".Font-Color").click(function(){
		$(this).addClass("ActiveColor").siblings().removeClass("ActiveColor")
		var num = $(this).attr("name");
		if(num==3){$(".Inform").click()}
		if(num==2){$(".Album").click()}
		if(num==1){$(".Account").click()}
	})
	
	var arr = [
		"img/other01.png",
		"img/other02.png",
		"img/other03.png",
		"img/other04.png",
		"img/other05.png",
		"img/other06.png"
	]
	for (var i =0;i<arr.length;i++) {
		if(i<4){
			var str = "<div class='ImgBox'>"+
					"<img src="+arr[i]+" />"+
				   "</div>"
			$(".RotationImg").append(str)
		}
	}
	var ImgNum  = 0;
	var ImgNum2 = 4;
	var ImgNum3 = arr.length-1;
	$(".RotationRight").click(function(){
		$(".RotationImg").children().eq(ImgNum).remove()
		var s = "<div class='ImgBox'>"+
					"<img src="+arr[ImgNum2]+" />"+
				   "</div>"
		$(".RotationImg").append(s);
		if(ImgNum2==arr.length-1){ImgNum2=0}else{ImgNum2++;}		
	})
	$(".RotationLeft").click(function(){
		$(".RotationImg").children().eq(ImgNum2-1).remove();	
		var s = "<div class='ImgBox'>"+
					"<img src="+arr[ImgNum3]+" />"+
				"</div>"
		$(".RotationImg").prepend(s);	
		if(ImgNum3==0){ImgNum3=arr.length-1;}else{ImgNum3--;}	
	})
	
	
})
	


