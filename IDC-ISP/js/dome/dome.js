$(function(){
	$.get("json/data.php",function(data){
		var data  = JSON.parse(data);
		var datas = data.nav
		var li   = "";
		for(var i =0;i<datas.length;i++){
			var lis = "";
			if(datas[i].children!=null){
				for (var j = 0 ; j <datas[i].children.length;j++) {
					lis +="<li class='NavTwoLi'>"+
							  "<a href="+datas[i].children[j].url+" class='NavTwoLiA'>"+datas[i].children[j].name+"</a>"+
						   "</li>"
				}
			}
			if(lis.length>0)lis = "<ul class='NavTwo hide'>"+lis+"</ul>";
			li += "<li>"+
					  "<div class='NavOneLi'>"+
						  "<img src="+datas[i].img+"> "+	
						  "<span>"+datas[i].name+"</span>"+
					  "</div>"+lis
				  "</li>"
		}
		
		$(".NavOne").append(li)
		GetUrl()
	})
	
	//返回
	$(".GoBack").click(function(){
		history.go(-1)
		setTimeout(GetUrl,100)
	})
	
	//退出系统
	$(".over").click(function(){
		layer.confirm('确定要退出吗？', {
			  btn: ['确定','取消'] //按钮
			}, function(){
			  window.location = "http://127.0.0.1:8020/IDC-ISP/login.html"
		});
		
	})
	
})

function GetUrl(){
		var url = window.location.hash;
		if(url=="" || url=="###"){url="HomePage";}
		else{
			$("a[href="+url+"]").parent().addClass("active").parents(".NavTwo").removeClass("hide");
			$("a[href="+url+"]").parent().siblings().removeClass("active");
			$("a[href="+url+"]").parents(".NavTwo").parent().siblings().children("ul").addClass("hide")
		}
		ShowHtml(url);
}

function ShowHtml(a){
	switch(a){
		case "HomePage":
			$(".Vivw").load("DataManagement/HomePage.html")
		break;
		case "#IDC":
			$(".Vivw").load("DataManagement/IDC.html");
		break;
		case "#room":
			$(".Vivw").load("DataManagement/Room.html");
		break;
		case "#roomArea":
			$(".Vivw").load("DataManagement/RoomArea.html");
		break;
		case "#user":
			$(".Vivw").load("DataManagement/User.html");
		break;
		case "#service":
			$(".Vivw").load("DataManagement/Service.html");
		break;
		case "#responsible":
			$(".Vivw").load("DataManagement/responsible.html");
		break;
		case "#commandeer":
			$(".Vivw").load("DataManagement/Commandeer.html");
		break;
	}
}
	

