require.config({
	baseUrl:"module",
	paths:{
		"reg":"reg1",
		"log":"log1",
		"ind":"ind1"
	}
})

require(["reg","log","ind"],function(reg,log,ind){
	console.log("模块加载成功")
	var myreg=new reg.reg1({
		ouser:document.getElementById("tel"),
		opass:document.getElementById("pass1"),
		obtn:document.getElementById("reg_btn"),
		ospan:document.getElementById("s")
})
})
	
	// var mylog=new log.log1({
	// 	ouser:document.getElementById("user")
	// 	opass:document.getElementById("pass")
	// 	obtn:document.getElementById("btn")
	// 	ospan:document.querySelector(".box span")
	// })
	// 
	// var myind=new ind.ind1({
	// 	op1 = document.querySelector(".p1")
	// 	op2 = document.querySelector(".p2")
	// 	ospan = document.querySelector(".p2 span")
	// 	oem = document.querySelector(".p2 em")
	// })
// })

