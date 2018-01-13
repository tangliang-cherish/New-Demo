$(function(){
	$(".RoomAreaAdd").click(function(){
		layer.open({
			type:1,
			title:"新增",
			btn:["确定","取消"],
			area:["600px","700px"],
			content:"<div class='AlllayerAdd'>"+
						"<div class='mtop10'>"+
							"<span  class='TextRt'>机房名称：</span>"+
							"<input type='text' class='RoomAreaName'>"+
							"<span class='Must'>*</span>"+
						"</div>"+
						"<div class='mtop10'>"+
							"<span class='TextRt'>机房片区编号：</span>"+
							"<input type='text' class='RoomAreaCityNum'>"+
							"<span class='Must'>*</span>"+
						"</div>"+
						"<div class='mtop10'>"+
							"<span class='TextRt'>机房片区名称：</span>"+
							"<input type='text' class='RoomAreaCityName'>"+
							"<span class='Must'>*</span>"+
						"</div>"+
						"<div class='mtop10'>"+
							"<span class='TextRt'>楼层ID：</span>"+
							"<input type='text' class='RoomAreaCityID'>"+
							"<span class='Must'>* [ 正整数 ] </span>"+
						"</div>"+
						"<div class='mtop10'>"+
							"<span class='TextRt'>机柜的总行数：</span>"+
							"<input type='text' class='RoomAreaAllX'>"+
							"<span class='Must'>* [ 正整数 ] </span>"+
						"</div>"+
						"<div class='mtop10'>"+
							"<span class='TextRt'>机柜的总列数：</span>"+
							"<input type='text' class='RoomAreaAllY'>"+
							"<span class='Must'>* [ 正整数 ] </span>"+
						"</div>"+
						"<div class='mtop10'>"+
							"<span class='TextRt'>所在区域：</span>"+
							"<input type='text' class='RoomAreaCity'>"+
							"<span class='Must'>*</span>"+
						"</div>"+
						"<div class='mtop10'>"+
							"<span class='TextRt'>联系人：</span>"+
							"<input type='text' class='RoomAreaUser'>"+
						"</div>"+
						"<div class='mtop10'>"+
							"<span class='TextRt'>联系电话：</span>"+
							"<input type='text' class='RoomAreaMobile'>"+
							"<span class='Must'>* [ 格式如：0755-12345678 ] </span>"+
						"</div>"+
						"<div class='mtop10'>"+
							"<span class='TextRt'>手机号：</span>"+
							"<input type='text' class='RoomAreaIpone'>"+
							"<span class='Must'>* [ 格式如：13612345678 ] </span>"+
						"</div>"+
						"<div class='mtop10'>"+
							"<span class='TextRt'>即时通：</span>"+
							"<input type='text' class='RoomAreaInstant'>"+
						"</div>"+
						"<div class='mtop10'>"+
							"<span class='TextRt'>邮件地址：</span>"+
							"<input type='text' class='RoomAreaEmali'>"+
							"<span class='Must'>* [ 格式如：abc@163.com ] </span>"+
						"</div>"+
						"<div class='mtop10'>"+
							"<span class='TextRt'>机房描述：</span>"+
							"<textarea class='RoomAreaText'></textarea>"+
						"</div>"+
					"</div>",
			yes:function(index,layero){
				console.log(11)
			}
		})
	})
	
	$(".RommeAreaCheckBox").click(function(){
		if($('.RommeAreaCheckBox').is(':checked')==true){
			$(".AllTbody :checkbox").prop("checked", true);	
  	    }else{
		  $(".AllTbody :checkbox").prop("checked", false); 
	    } 
	})
	
	
})
