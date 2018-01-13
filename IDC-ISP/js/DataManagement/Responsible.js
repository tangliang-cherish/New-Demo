$(function(){
	$(".ResponsibleAdd").click(function(){
		layer.open({
			type:1,
			title:"新增",
			btn:["确定","取消"],
			area:["600px","400px"],
			content:"<div class='AlllayerAdd'>"+
						"<div class='mtop10'>"+
							"<span  class='TextRt'>姓名：</span>"+
							"<input type='text' class='ResponsibleUser'>"+
							"<span class='Must'>*</span>"+
						"</div>"+
						"<div class='mtop10'>"+
							"<span class='TextRt'>证件类型：</span>"+
							"<select class='ResponsibleType'>"+
								"<option>身份证</option>"+
								"<option>护照</option>"+
								"<option>军官证</option>"+
								"<option>台胞证</option>"+
							"</select>"+
							"<span class='Must'>*</span>"+
						"</div>"+
						"<div class='mtop10'>"+
							"<span class='TextRt'>证件号码：</span>"+
							"<input type='text' class='ResponsibleNum'>"+
							"<span class='Must'>*</span>"+
						"</div>"+
						"<div class='mtop10'>"+
							"<span class='TextRt'>固定电话：</span>"+
							"<input type='text' class='ResponsibleFixed'>"+
							"<span class='Must'>* [ 格式如：0755-12345678 ]</span>"+
						"</div>"+
						"<div class='mtop10'>"+
							"<span class='TextRt'>移动电话：</span>"+
							"<input type='text' class='ResponsibleIpone'>"+
							"<span class='Must'>* [ 格式如：13612345678 ]</span>"+
						"</div>"+
						"<div class='mtop10'>"+
							"<span class='TextRt'>Email地址：</span>"+
							"<input type='text' class='ResponsibleEmail'>"+
							"<span class='Must'>* [ 格式如：abc@163.com ]</span>"+
						"</div>"+
					"</div>",
			yes:function(index,layero){
				console.log(11)
			}
		})
	})
	
	$(".ResponsibleCheckBox").click(function(){
		if($('.ResponsibleCheckBox').is(':checked')==true){
			$(".AllTbody :checkbox").prop("checked", true);	
  	    }else{
		  $(".AllTbody :checkbox").prop("checked", false); 
	    } 
	})
	
	
})
