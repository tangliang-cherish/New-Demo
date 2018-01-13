$(function(){
	$(".ServiceAdd").click(function(){
		layer.open({
			type:1,
			title:"新增",
			btn:["确定","取消"],
			area:["600px","500px"],
			content:"<div class='AlllayerAdd'>"+
						"<div class='mtop10'>"+
							"<span  class='TextRt'>提供互联网应用服务的用户信息：</span>"+
							"<input type='text' class='ServiceUser'>"+
							"<span class='Must'>*</span>"+
						"</div>"+
						"<div class='mtop10'>"+
							"<span class='TextRt'>服务内容：</span>"+
							"<input type='text' class='ServiceTxt'>"+
							"<span class='Must'>*</span>"+
						"</div>"+
						"<div class='mtop10'>"+
							"<span class='TextRt'>网站备案号或许可证号：</span>"+
							"<input type='text' class='ServiceNum'>"+
							"<span class='Must'>*</span>"+
						"</div>"+
						"<div class='mtop10'>"+
							"<span class='TextRt'>接入方式：</span>"+
							"<select class='ServiceWay'>"+
								"<option>专线</option>"+
								"<option>虚拟主机</option>"+
								"<option>主机托管</option>"+
								"<option>整机租用</option>"+
								"<option>其他</option>"+
							"</select>"+
							"<span class='Must'>*</span>"+
						"</div>"+
						"<div class='mtop10'>"+
							"<span class='TextRt'>业务类型：</span>"+
							"<select class='ServiceType'>"+
								"<option>IDC 业务</option>"+
								"<option>ISP 业务</option>"+
							"</select>"+
							"<span class='Must'>*</span>"+
						"</div>"+
						"<div class='mtop10'>"+
							"<span class='TextRt'>域名：</span>"+
							"<div class='ServiceDomain'>"+
								"<div>"+
									"<input type='text'> "+
									"<button class='btn btn-default btn-xs ServiceDomainDel'>删除</button>"+
								"</div>"+
							"</div>"+
						"</div>"+
						"<div class='mtop10'>"+
							"<span class='TextRt'></span>"+
							"<button class='btn btn-primary btn-xs ServiceDomainAdd'>添加域名</button>"+
						"</div>"+
					"</div>",
			yes:function(index,layero){
				console.log(11)
			}
		})
		
		//添加域名
		$(document).on("click",".ServiceDomainAdd",function(){
			var str =	"<div class='mtop5'>"+
							"<input type='text'> "+
							"<button class='btn btn-default btn-xs ServiceDomainDel'>删除</button>"+
						"</div>"
			$(".ServiceDomain").append(str)		  
		})	
		//删除域名
		$(document).on("click",".ServiceDomainDel",function(){
			$(this).parent().remove()
		})
		
	})
	//全选
	$(".ServiceCheckBox").click(function(){
		if($('.ServiceCheckBox').is(':checked')==true){
			$(".AllTbody :checkbox").prop("checked", true);	
  	    }else{
		  $(".AllTbody :checkbox").prop("checked", false); 
	    } 
	})
	
	
})
