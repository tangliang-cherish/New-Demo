$(function(){
	//登录
	$(".Login").click(function(){
		var user = $(".UserName").val();
		var pass = $(".PassWord").val();
		if(user == "admin" && pass == "admin")
			window.location="index.html";
		else if(user != "admin")
			$(".Cont").append("<span class='error'>用户名/账号错误，请重新输入</span>")
		else if(pass != "admin")
			$(".Cont").append("<span class='error'>密码错误，请重新输入</span>")
	})
	//重置
	$(".reset").click(function(){
		$(".UserName").val("");
		$(".PassWord").val("");
		$(".Code").val("");
	})
	$('.UserName,.PassWord,.Code').keydown(function(e){
		if(e.keyCode==13){
		  $(".Login").click();
		}
	});
	
})
