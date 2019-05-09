function login(){
	var name = $("#name").val();
	var pass = $("#pass").val();
	
	$.ajax({
		type:"POST",
		
		url:"./loginservlet",
		
		data:{
			name:name,
			pass:pass
		},
		
		statusCode :{
			404:function(){
				alert("404");
				
			},
			500:function(){
				alert("500");
			}
		},
		
		success: function(data,Status){
			if(data==1){
				window.location.href="main.html";
			}else if(data==2){
				alert("fadsfs");
			}
		}
		
	})
}


function submitxinxi(){
	$.ajax({
		type:"post",
		url:"./addxinxiservlet",
		data:{
			type:"add",
			xinxiname:$('#xinxiname').val(),
			xinximenber:$('#xinximenber').val(),
			xinxitype:$('#xinxitype').val(),
			xinxiremark:$('#xinxiremark').val(),
		},
		dataType:"json",
		statusCode:{
		404:function(){
			alert("404");
		},
		500:function(){
			alert("500");
		}
	},
		success:function(data){
			alert(data.message);
		},

	});
}	
function addxinxi(){
var str;
	
	$.ajax({
		type:"POST",
		
		url:"./addxinxiservlet",
		
		data:{
			xinxiid:$('#xinxiid').val(),
			xinxiname:$('#xinxiname').val(),
			xinximenber:$('#xinximenber').val(),
			xinxitype:$('#xinxitype').val(),
			xinxiremark:$('#xinxiremark').val()
			},
		
		statusCode :{
			404:function(){
				alert("404");
				
			},
			500:function(){
				alert("500");
			}
		},
		
		success: function(data,Status){
			alert("成功");
		}
		
	});
}
function addmenber(){
	var str;
		
		$.ajax({
			type:"POST",
			
			url:"./addmenberservlet",
			
			data:{
				mid:$('#mid').val(),
				mname:$('#mname').val(),
				mposition:$('#mposition').val(),
				meducation:$('#meducation').val(),
				mskill:$('#mskill').val()},
			
			statusCode :{
				404:function(){
					alert("404");
					
				},
				500:function(){
					alert("500");
				}
			},
			
			success: function(data,Status){
				alert("成功");
			}
			
		});
	}

function xinxidelete(){
		var dxnumber=$('#dxnumber').val();
		$.ajax({
			type:"POST",
			
			url:"./test",
			
			data:{
				"dxnumber" : dxnumber
				},
			
			statusCode :{
				404:function(){
					alert("404");
					
				},
				500:function(){
					alert("500");
				}
			},
			
			success: function(data,Status){
				alert("成功");
			}
			
		});
}

function menberdelete(){
		
	var dmnumber=$('#dmnumber').val();
	$.ajax({
		type:"POST",
		
		url:"./dmenber",
		
		data:{
			"dmnumber" : dmnumber
			},
		
		statusCode :{
			404:function(){
				alert("404");
				
			},
			500:function(){
				alert("500");
			}
		},
		
		success: function(data,Status){
			alert("成功");
		}
		
	});
}

function userOperationRecordTableInit(){
	var str;
	$.ajax({
		type:"post",
		url:"./xinxiservlet",
		data:{key1:str},
		statusCode:{
		404:function(){
			alert("404");
		},
		500:function(){
			alert("500");
		}
	},
		success:function(data,Status){
			var obj=eval(data);
			 $('#userOperationRecordTable').bootstrapTable({
			      columns:[
			    	  {
			              field : 'id',
			              title : 'ID'
			          },{
			              field : 'name',
			              title : '机器名称'
			          },{
			              field : 'menber',
			              title : '管理人员'
			          },{
			              field : 'type',
			              title : '类型'
			          },{
			              field : 'remark',
			              title : '备注'
			          }],
			        data:obj,
			        
			          sortable: false,   
			          pageList : [ 5,10,20],
			          pageSize : 10,
			          sidePagination: "client",  
			          clickToSelect : true,
			          pagination : true,
			    });

		}
	});
    
  }
function getmenber(){
	var str;
	$.ajax({
		type:"post",
		url:"./menberservlet",
		data:{key1:str},
		statusCode:{
		404:function(){
			alert("404");
		},
		500:function(){
			alert("500");
		}
	},
		success:function(data,Status){
			var obj=eval(data);
			 $('#massge').bootstrapTable({
			      columns:[
			    	  {
			              field : 'mid',
			              title : 'ID'
			          },{
			              field : 'mname',
			              title : '姓名'
			          },{
			              field : 'mposition',
			              title : '地址'
			          },{
			              field : 'meducation',
			              title : '学历'
			          },{
			              field : 'mskill',
			              title : '技能'
			          }],
			        data:obj,
			          sortable: false,   
			          pageList : [ 5,10,20],
			          pageSize : 10,
			          sidePagination: "client",  
			          clickToSelect : true,
			          pagination : true,
			    });

		}
	});
    
  }
function chaxun() {
	var number=document.getElementById('xinxiname').value;
	window.location.href="xinxirs.html?index="+number;
}

function getMsg(){
	var url=location.href;
	var n1=url.length;
	var n2=url.indexOf("=");
	var str=url.substring(n2+1, n1);
	$.ajax({
		type:"post",
		url:"./upxinser",
		data:{key1:str},
		statusCode:{
		404:function(){
			alert("404");
		},
		500:function(){
			alert("500");
		}
	},
		success:function(data,Status){
			var obj=eval(data);
			var str1="";
			var str2="";
			for(var key in obj[0]){
			if(key=="id"){
			document.getElementById('i').value=obj[0][key];
			}
			else if(key=="name"){
			document.getElementById('a').value=obj[0][key];
			}else if(key=="menber"){
			document.getElementById('b').value=obj[0][key];
		    }else if(key=="type"){
		    document.getElementById('c').value=obj[0][key];
		    }else if(key=="remark"){
		    document.getElementById('d').value=obj[0][key];
		    }
			}
			
			
			
			 $('#massge').bootstrapTable({
			      columns:[
			    	  {
			              field : 'id',
			              title : 'ID'
			          },{
			              field : 'name',
			              title : '纺织机名称'
			          },{
			              field : 'menber',
			              title : '管理人员'
			          },{
			              field : 'type',
			              title : '类型'
			          },{
			              field : 'remark',
			              title : '备注'
			          }],
			        data:obj,
			        
			          sortable: false,   
			          pageList : [ 5,10,20],
			          pageSize : 10,
			          sidePagination: "client",  
			          clickToSelect : true,
			          pagination : true,
			    });

		}
	});

}
function upxin2(){
	$.ajax({
		type:"post",
		url:"./upxinser2",
		data:{
			i:$('#i').val(),
			a:$('#a').val(),
			b:$('#b').val(),
			c:$('#c').val(),
			d:$('#d').val(),
			},	
		statusCode:{
		404:function(){
			alert("404");
		},
		500:function(){
			alert("500");
		}
		
		},
		success: function(data,Status){
			alert("成功");
		},
		
		
	})
}

function upmen(){
	var url=location.href;
	var n1=url.length;
	var n2=url.indexOf("=");
	var str=url.substring(n2+1, n1);
	$.ajax({
		type:"post",
		url:"./upmenser",
		data:{key1:str},
		statusCode:{
		404:function(){
			alert("404");
		},
		500:function(){
			alert("500");
		}
	},
		success:function(data,Status){
			var obj=eval(data);
			var str1="";
			var str2="";
			for(var key in obj[0]){
			if(key=="mid"){
			document.getElementById('i').value=obj[0][key];
			}
			else if(key=="mname"){
			document.getElementById('a').value=obj[0][key];
			}else if(key=="mposition"){
			document.getElementById('b').value=obj[0][key];
		    }else if(key=="meducation"){
		    document.getElementById('c').value=obj[0][key];
		    }else if(key=="mskill"){
		    document.getElementById('d').value=obj[0][key];
		    }
			}
			
			
			
			 $('#massge').bootstrapTable({
			      columns:[
			    	  {
			              field : 'mid',
			              title : 'ID'
			          },{
			              field : 'mname',
			              title : '姓名'
			          },{
			              field : 'mposition',
			              title : '地址'
			          },{
			              field : 'meducation',
			              title : '学历'
			          },{
			              field : 'mskill',
			              title : '技能'
			          }],
			        data:obj,
			        
			          sortable: false,   
			          pageList : [ 5,10,20],
			          pageSize : 10,
			          sidePagination: "client",  
			          clickToSelect : true,
			          pagination : true,
			    });

		}
	});

}

function upmen2(){
	$.ajax({
		type:"post",
		url:"./upmenser2",
		data:{
			i:$('#i').val(),
			a:$('#a').val(),
			b:$('#b').val(),
			c:$('#c').val(),
			d:$('#d').val(),
			},	
		statusCode:{
		404:function(){
			alert("404");
		},
		500:function(){
			alert("500");
		}
		
		},
		success: function(data,Status){
			alert("成功");
		},
		
		
	})
}
function chaxun2() {
	var number=document.getElementById('xinximenber').value;
	window.location.href="menberrs.html?index="+number;
}

function xinxi(){
	window.location.href="xinxi.html";
}
function menber(){
	window.location.href="menber.html";
}

function tuichu(){
	window.location.href="index.html";
}
function main(){
	window.location.href="main.html";
}
function adm(){
	window.location.href="addmenber.html";
}
function adxin(){
	window.location.href="addxinxi.html";
}
function dele(){
	window.location.href="delete.html";
}
function up(){
	window.location.href="updatexinxi.html";
}
