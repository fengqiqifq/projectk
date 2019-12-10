

require(["http://localhost/project/module/log1.js"],function(log){
	console.log("模块加载成功")
	var mylog=new log.log1({
		ouser:document.getElementById("user"),
		opass:document.getElementById("pass"),
		obtn:document.getElementById("sub"),
		ospan:document.getElementById("s")
	})
})
