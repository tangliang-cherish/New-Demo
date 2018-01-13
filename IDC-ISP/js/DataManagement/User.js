$(function(){
	$(".UserAdd").click(function(){
		layer.open({
			type:1,
			title:"新增",
			btn:["确定","取消"],
			area:["600px","650px"],
			content:"<div class='AlllayerAdd'>"+
						"<div class='mtop10'>"+
							"<span  class='TextRt'>IDC/ISP许可证号：</span>"+
							"<input type='text' class='UserIDC'>"+
							"<span class='Must'>*</span>"+
						"</div>"+
						"<div class='mtop10'>"+
							"<span class='TextRt'>用户类型：</span>"+
							"<select class='UserType'>"+
								"<option>提供应用服务的用户</option>"+
								"<option>其他用户</option>"+
							"</select>"+
							"<span class='Must'>*</span>"+
						"</div>"+
						"<div class='mtop10'>"+
							"<span class='TextRt'>单位名称：</span>"+
							"<input type='text' class='UserName'>"+
							"<span class='Must'>*</span>"+
						"</div>"+
						"<div class='mtop10'>"+
							"<span class='TextRt'>单位属性：</span>"+
							"<select class='UserAttrbute'>"+
								"<option>军队</option>"+
								"<option>政府机关</option>"+
								"<option>事业单位</option>"+
								"<option>企业</option>"+
								"<option>个人</option>"+
								"<option>社会团体</option>"+
								"<option>其他</option>"+
							"</select>"+
							"<span class='Must'>*</span>"+
						"</div>"+
						"<div class='mtop10'>"+
							"<span class='TextRt'>证件类型：</span>"+
							"<select class='UserCertificateType'>"+
								"<option>工商营业执照号码</option>"+
								"<option>身份证</option>"+
								"<option>组织结构代码证书</option>"+
								"<option>事业法人证书</option>"+
								"<option>护照</option>"+
								"<option>军官证</option>"+
								"<option>台胞证</option>"+
								"<option>其他</option>"+
							"</select>"+
							"<span class='Must'>*</span>"+
						"</div>"+
						"<div class='mtop10'>"+
							"<span class='TextRt'>证件号码：</span>"+
							"<input type='text' class='UserNum'>"+
							"<span class='Must'>*</span>"+
						"</div>"+
						"<div class='mtop10'>"+
							"<span class='TextRt'>网络信息安全责任人信息：</span>"+
							"<input type='text' class='UserResponsible'>"+
							"<span class='Must'>*</span>"+
						"</div>"+
						"<div class='mtop10'>"+
							"<span class='TextRt'>邮政编码：</span>"+
							"<input type='text' class='UserEMS'>"+
						"</div>"+
						"<div class='mtop10'>"+
							"<span class='TextRt'>注册时间：</span>"+
							"<input type='text' class='UserDate'>"+
							"<span class='Must'>* [ 格式如：2012-05-07 ] </span>"+
						"</div>"+
						"<div class='mtop10'>"+
							"<span class='TextRt'>单位地址：</span>"+
							"<input type='text' class='UserCity'>"+
							"<span class='Must'>* </span>"+
						"</div>"+
						"<div class='mtop10'>"+
							"<span class='TextRt'>备注：</span>"+
							"<textarea class='UserRemark'></textarea>"+
						"</div>"+
					"</div>",
			yes:function(index,layero){
				console.log(11)
			}
		})
	})
	
	$(".UserCheckBox").click(function(){
		if($('.UserCheckBox').is(':checked')==true){
			$(".AllTbody :checkbox").prop("checked", true);	
  	    }else{
		  $(".AllTbody :checkbox").prop("checked", false); 
	    } 
	})
	
	
})
