$(function(){
	$(".RoomAdd").click(function(){
		layer.open({
			type:1,
			title:"新增",
			btn:["确定","取消"],
			area:["500px","450px"],
			content:"<div class='AlllayerAdd'>"+
						"<div class='mtop10'>"+
							"<span  class='TextRt'>经营者名称：</span>"+
							"<input type='text' class='RoomUser'>"+
							"<span class='Must'>*</span>"+
						"</div>"+
						"<div class='mtop10'>"+
							"<span class='TextRt'>机房编号：</span>"+
							"<input type='text' class='RoomAddress'>"+
							"<span class='Must'>* [ 机房编号为5-14位 ]</span>"+
						"</div>"+
						"<div class='mtop10'>"+
							"<span class='TextRt'>机房名称：</span>"+
							"<input type='text' class='RoomName'>"+
							"<span class='Must'>*</span>"+
						"</div>"+
						"<div class='mtop10'>"+
							"<span class='TextRt'>所在区域：</span>"+
							"<input type='text' class='RoomCity'>"+
							"<span class='Must'>*</span>"+
						"</div>"+
						"<div class='mtop10'>"+
							"<span class='TextRt'>机房性质：</span>"+
							"<select class='RoomType'>"+
								"<option value='0'>租用</option>"+
								"<option value='1'>自建</option>"+
								"<option value='2'>其他</option>"+
							"</select>"+
							"<span class='Must'>*</span>"+
						"</div>"+
						"<div class='mtop10'>"+
							"<span class='TextRt'>邮政编号：</span>"+
							"<input type='text' class='RoomEMS'>"+
							"<span class='Must'>*</span>"+
						"</div>"+
						"<div class='mtop10'>"+
							"<span class='TextRt'>机房网络信息安全负责人信息：</span>"+
							"<input type='text' class='IDCInformation'>"+
							"<span class='Must'>*</span>"+
						"</div>"+
					"</div>",
			yes:function(index,layero){
				console.log(11)
			}
		})
	})
	
	$(".RommeCheckBox").click(function(){
		if($('.RommeCheckBox').is(':checked')==true){
			$(".AllTbody :checkbox").prop("checked", true);	
  	    }else{
		  $(".AllTbody :checkbox").prop("checked", false); 
	    } 
	})
	
	
})
