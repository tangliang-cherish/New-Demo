$(function(){
	$.get("json/json.php",function(data){
		var data = JSON.parse(data);
		var Tr= ""
		for (var i = 0; i <data.msg.length;i++) {
			Tr += "<tr>"+
					"<td>"+data.msg[i].IDC+"</td>"+
					"<td>"+data.msg[i].name+"</td>"+
					"<td>"+data.msg[i].user+"</td>"+
					"<td>"+data.msg[i].EMS+"</td>"+
					"<td>"+data.msg[i].city+"</td>"+
					"<td>"+data.msg[i].username+"</td>"+
					"<td>"+data.msg[i].xinxi+"</td>"+
					"<td>"+data.msg[i].data+"</td>"+
					"<td>"+data.msg[i].ISP+"</td>"+
					"<td>"+data.msg[i].yes+"</td>"+
					"<td>"+data.msg[i].no+"</td>"+
					"<td>"+
						"<img src='img/modify.png' class='Allmodify' /> "+
						"<img src='img/delete.gif' class='Alldel' /> "+
						"<img src='img/pic_13.png' class='Alllack' />"+
					"</td>"+
					"<td>"+data.msg[i].state+"</td>"+
				"</tr>"
		}
		$(".AllTable tbody").html(Tr)
	})
	
	//删除
	$(document).on("click",".Alldel",function(){
		$(this).parents("tr").remove()
	})
	//编辑
	$(document).on("click",".Allmodify",function(){
		layer.msg("编辑")
	})
	//浏览
	$(document).on("click",".Alllack",function(){
		layer.msg("浏览")
	})
	//导入
	$(document).on("click",".IDCImport",function(){
		layer.msg("导入")
	})
	//导出
	$(document).on("click",".IDCExport",function(){
		layer.msg("导出")
	})
	//搜索
	$(document).on("click",".IDCSearch",function(){
		layer.msg("搜索")
	})
	//重置
	$(document).on("click",".IDCReset",function(){
		layer.msg("重置")
	})
	
	
	//新增
	$(".IDCAdd").click(function(){
		layer.open({
			type:1,
			title:"新增",
			btn:["确定","取消"],
			area:["500px","450px"],
			content:"<div class='AlllayerAdd'>"+
						"<div class='mtop10'>"+
							"<span  class='TextRt'>IDC/ISP许可证号：</span>"+
							"<input type='text' class='IDCLicence'>"+
							"<span class='Must'>*</span>"+
						"</div>"+
						"<div class='mtop10'>"+
							"<span class='TextRt'>IDC/经营者名称：</span>"+
							"<input type='text' class='IDCUser'>"+
							"<span class='Must'>* [ 与许可证上名称一致 ]</span>"+
						"</div>"+
						"<div class='mtop10'>"+
							"<span class='TextRt'>经营者地址：</span>"+
							"<input type='text' class='IDCAddress'>"+
							"<span class='Must'>*</span>"+
						"</div>"+
						"<div class='mtop10'>"+
							"<span class='TextRt'>邮政编号：</span>"+
							"<input type='text' class='IDCEMS'>"+
							"<span class='Must'>*</span>"+
						"</div>"+
						"<div class='mtop10'>"+
							"<span class='TextRt'>企业法人：</span>"+
							"<input type='text' class='IDCEnterprise'>"+
							"<span class='Must'>*</span>"+
						"</div>"+
						"<div class='mtop10'>"+
							"<span class='TextRt'>网络信息安全责任人信息：</span>"+
							"<input type='text' class='IDCResponsibility'>"+
							"<span class='Must'>*</span>"+
						"</div>"+
						"<div class='mtop10'>"+
							"<span class='TextRt'>应急联系人信息：</span>"+
							"<input type='text' class='IDCEmergency'>"+
							"<span class='Must'>*</span>"+
						"</div>"+
					"</div>",
			yes:function(index,layero){
				console.log(11)
			}
		})
	})
})
