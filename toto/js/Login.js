$(function(){
	$(".LoginBtn").click(function(){
		var user = $(".LoginUserName input").val();
		var pass = $(".LoginPassWord input").val();
		if(user == 'admin' && pass == 123456 ){
			window.location = "http://127.0.0.1:8020/Dome2/index.html#/Account"
		}
	})
})
