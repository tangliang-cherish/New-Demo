$(".Foolt,.TextBtn").show()    
angular.module('ngRouteExample', ['ngRoute'])
.controller('HomeController', function ($scope, $route) { $scope.$route = $route;})
.controller('AboutController', function ($scope, $route) { $scope.$route = $route;})
.controller('AccountController', function ($scope, $route) { $scope.$route = $route;})
.controller('UploadController', function ($scope, $route) { $scope.$route = $route;})
.controller('StateController', function ($scope, $route) { $scope.$route = $route;})
.controller('DateController', function ($scope, $route) { $scope.$route = $route;})
.config(function ($routeProvider) {
    $routeProvider.
    when('/H', {
        templateUrl: '../Dome2/login/HomePage.html',
        controller: 'HomeController'
    }).
    when('/Account', {
        templateUrl: '../Dome2/index/Account.html',
        controller: 'AccountController'
    }).
    when('/Upload', {
        templateUrl: '../Dome2/index/Upload.html',
        controller: 'UploadController'
    }).
    when('/State', {
        templateUrl: '../Dome2/index/qingkuang.html',
        controller: 'StateController'
    }).
    when('/Date', {
        templateUrl: '../Dome2/index/date.html',
        controller: 'DateController'
    }).
    when('/D', {
        templateUrl: '../Dome2/login/Login.html',
        controller: 'AboutController'
    }).
    otherwise({
    	templateUrl: '../Dome2/login/HomePage.html',
        redirectTo: '/'
    });
});
$(".FixedOne").mouseover(function(){
	$(this).children("img").attr("src","img/scroll-top-hover.png");
}).mouseout(function(){
	$(this).children("img").attr("src","img/scroll-top.png");
})

$(".FixedTwo").mouseover(function(){
	$(this).children("img").attr("src","img/qr-hover.png");
	$(".WinXiImg").removeClass("ImgHide")
}).mouseout(function(){
	$(this).children("img").attr("src","img/qr-code.png");
	$(".WinXiImg").addClass("ImgHide")
})

$(".NavBox a").click(function(){
	$(this).children().addClass("BtnActive");
	$(this).siblings().children().removeClass("BtnActive");
})

 function goTop() {  
	$(window).scroll(function() {  
	    var $scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop; //兼容浏览器  
	    if($scrollTop > 200) { //滚动高度可调  
	        $(".FixedOne").show();  
	    } else {  
	        $(".FixedOne").hide();  
	    };  
    })  
    $(".FixedOne").on("click", function() {  
    	$("body").stop().animate({  
            scrollTop: 0  
        });  
    })  
}  
goTop();