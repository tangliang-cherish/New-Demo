$(function(){
	$(".CommandeerAdd").click(function(){
		layer.open({
			type:1,
			title:"新增",
			btn:["确定","取消"],
			area:["600px","650px"],
			content:"<div class='AlllayerAdd'>"+
						"<div class='mtop10'>"+
							"<span  class='TextRt'>所属用户：</span>"+
							"<input type='text' class='CommandeerName'>"+
							"<span class='Must'>*</span>"+
						"</div>"+
						"<div class='mtop10'>"+
							"<span class='TextRt'>所属机房：</span>"+
							"<select class='CommandeerOnly'>"+
								"<option>请选择</option>"+
								"<option>上海呼兰路机房</option>"+
							"</select>"+
							"<span class='Must'>*</span>"+
						"</div>"+
						"<div class='mtop10'>"+
							"<span class='TextRt'>机房片区：</span>"+
							"<select class='CommandeerCity'>"+
								"<option></option>"+
							"</select>"+
							"<span class='Must'>*</span>"+
						"</div>"+
						"<div class='mtop10'>"+
							"<span class='TextRt'>选择机柜：</span>"+
							"<select class='CommandeerCity'>"+
								"<option></option>"+
							"</select>"+
							"<span class='Must'>*</span>"+
						"</div>"+
						"<div class='mtop10'>"+
							"<span class='TextRt'>网络宽带：</span>"+
							"<input type='text' class='CommandeerBroadband'>"+
							"<span class='Must'>* [ MB ] </span>"+
						"</div>"+
						"<div class='mtop10'>"+
							"<span class='TextRt'>服务器IP：</span>"+
							"<textarea class='CommandeerTxt'></textarea></br>"+
							"<span class='Must'>[格式：外网|内网 12.12.12.12-12.12.12.13|192.1.1.1-192.1.1.3"+
							"或只有外网 12.12.12.1-12.12.12.2;12.12.12.3-12.12.12.4|192.1.1.4-192.1.1.5"+
							"多个用（英文状态)';'分号隔离]</span>"+
						"</div>"+
						"<div class='mtop10'>"+
							"<span class='TextRt'>服务器开始日期：</span>"+
							"<input type='text' class='CommandeerStartDate'>"+
							"<span class='Must'>*</span>"+
						"</div>"+
						"<div class='mtop10'>"+
							"<span class='TextRt'>服务器结束日期：</span>"+
							"<input type='text' class='CommandeerEndDate'>"+
							"<span class='Must'>* ( 私有接口 )</span>"+
						"</div>"+
						"<div class='mtop10'>"+
							"<span class='TextRt'>服务器描述：</span>"+
							"<textarea class='CommandeerRemerkTxt'></textarea></br>"+
							"<span class='Must'>注：服务器型号、操作系统、硬盘描述、CPU描述、内存描述和服务器描述最大长度不能超过255个字符</span>"+
						"</div>"+
					"</div>",
			yes:function(index,layero){
				console.log(11)
			}
		})
	})
	
	$(".CommandeerCheckBox").click(function(){
		if($('.CommandeerCheckBox').is(':checked')==true){
			$(".AllTbody :checkbox").prop("checked", true);	
  	    }else{
		  $(".AllTbody :checkbox").prop("checked", false); 
	    } 
	})
	
	
})
