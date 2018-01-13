$(function(){
	ShowData();
	ShowHighChart();
	
	$(".ShowDate").click(function(){
		ShowData();
	})
	
	$(".ShowHighchart").click(function(){
		ShowHighChart();
	})
	
})

//data
function ShowData(){
	$.get("json/home.php",function(data){
		var data = JSON.parse(data)
		var Tr  	= "";
		for(var i = 0;i< data.msg.length;i++){
			Tr +=   "<tr align='top'>"+
						"<td rowspan='3' class='txtBox'>"+
							"<p>"+data.msg[i].Allstate+"</p>"+
							"<p>"+data.msg[i].name+"</p>"+
						"</td>"+
						"<td>"+data.msg[i].Jstate+"</td>"+
						"<td>"+data.msg[i].J+"</td>"+
						"<td>"+data.msg[i].Jdata+"</td>"+
					"</tr>"+
					"<tr>"+
						"<td>"+data.msg[i].Fstate+"</td>"+
						"<td>"+data.msg[i].F+"</td>"+
						"<td>"+data.msg[i].Fdata+"</td>"+
					"</tr>"+
					"<tr>"+
						"<td ><span style='color:green'>"+data.msg[i].Z+"</span> <span style='color:red'>"+data.msg[i].Y+"</span></td>"+
						"<td  colspan='2'  class='txtcenter'>"+data.msg[i].type+"</td>"+
					"</tr>"
		}
		$(".HomePageOneBox table tbody").html(Tr)
	}) 
}

//图表
function ShowHighChart(){
	$.get("json/home.php",function(data){
		var data = JSON.parse(data)
		var maths = []
		for(var i = 0 ;i < 5; i++){
			maths.push(Math.random().toFixed(2)*10)
		}
		new Highcharts.Chart('HomePageTwoBoxHigh', {
	    title: {
	        text: '',
	    },
	    xAxis: {
	        categories: data.showDate
	    },
	    yAxis: {
	        title: {
	            text: '走势 '
	        },
	        plotLines: [{
	            value: 0,
	            width: 1,
	            color: '#808080'
	        }]
	    },
	    credits:{
	    	enabled:false
	    },
	    tooltip: {
	        valueSuffix: 'K'
	    },
	    legend: {
	        layout: 'vertical',
	        align: 'right',
	        verticalAlign: 'middle',
	        borderWidth: 0
	    },
	    series: [{
	        name: '图表',
	        data: maths
	    }]
	});
	})
	
}
