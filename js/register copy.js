var otel=document.getElementById('tel');
var opass1=document.getElementById('pass1');
var opass2=document.getElementById('pass2');
var ousername=document.getElementById('username');
var oidcard=document.getElementById('idcard');
var oyzm=document.getElementById('yzm');
var odxyzm=document.getElementById('dxyzm');
var oreg_btn=document.getElementById('reg_btn');
var oranyzm=document.getElementById('ranyzm');
var onoclear=document.getElementById('noclear');
var ra=false;
var rb=false;
var rc=false;
var rd=false;
var re=false;
var rf=false;
var rg=false;

//手机号验证
otel.onfocus=function(){
	this.value=""
}
otel.onblur=function(){
	var regt=/^1[3578]\d{3}$/
	var telObjV=this.value;
	if(regt.test(telObjV)){
		this.nextElementSibling.innerHTML='<i id="green">格式正确</i>'
		ra=true;
	}else{
		this.nextElementSibling.innerHTML='请填写正确手机号'
		ra=false;
	}
}
//密码的判断
opass1.onblur=function(){
	if(opass1.value!=opass2.value&&opass2.value!=""){
		opass2.nextElementSibling.innerHTML='两次密码不一致'
		rc=false;
	}
	if(this.value.length>=6&&this.value.length<=20){
		var a=0;
		var b=0;
		var c=0;
		var regaa=/\d+/g;
		a=regaa.test(this.value)?1:0;
		var regbb=/[a-zA-Z]+/g
		b=regbb.test(this.value)?1:0;
		var regcc=/[^a-zA-Z\d]+/g
		c=regcc.test(this.value)?1:0;
		var str='';
		switch(a+b+c){
			case 1:
			str='弱';break;
			case 2:
			str='中等';break;
			case 3:str='<i id="green">强</i>';
			break;
		}
		opass1.nextElementSibling.innerHTML=str;
		rb=true;
	}else{
		opass1.nextElementSibling.innerHTML='密码长度在6到20位之间'
		rb=false;
	}
}
//第二次密码判断
opass2.onblur=function(){
	if (opass2.value==""){
		opass2.nextElementSibling.innerHTML='确认密码不能为空'
		return;
	}
	if(opass1.value==opass2.value){
		opass2.nextElementSibling.innerHTML='<i id="green">一致</i>'
		rc=true;
	}else{
		opass2.nextElementSibling.innerHTML='两次密码不一致'
		rc=false;
	}
}
//判断姓名
ousername.onblur=function(){
	var reg1=/^[\u4e00-\u9fa5]{2,5}$/;
	var userObjV=this.value;
	if(reg1.test(userObjV)){
		this.nextElementSibling.innerHTML='<i id="green">姓名有效</i>';
		rd=true;//为了最后提交时判断,在这里提前写好
	}else{
		this.nextElementSibling.innerHTML='请填写真实姓名';
		rd=false;
	}
}
//身份证
oidcard.onblur=function(){
	var rege=/^\d{17}[\dXx]$/
	var idcardV=this.value;
	if(rege.test(idcardV)){
		this.nextElementSibling.innerHTML='<i id="green">格式正确</i>'
		re=true;
	}else{
		this.nextElementSibling.innerHTML='请填写有效身份证'
		re=false;
	}
}
//验证码验证
//短信验证码验证
function yzm(){
	var str=''
	for(var i=0;i<4;i++){//循环四次是为了输出公平,有三种数据,要输出四个,库中要有3和4的公倍数个元素
		var az=String.fromCharCode(random(122,97))
		var AZ=String.fromCharCode(random(90,65))
		var num=random(0,9)
		str+=az+AZ+num;
	}
	//将库中的数据随机取四个,也就是随机取四个下标,把元素输出
	var yzm='';
	for(var j=0;j<4;j++){
		yzm+=str[random(0,str.length-1)]//随机取出下标,通过下标找到元素
	}
	//生成随机数函数
	function random(max,min){
		return Math.round(Math.random()*(max-min)+min);
	}
	oranyzm.innerHTML=yzm;
}
yzm()
onoclear.onclick=function(){
	oyzm.value="";
	yzm()
}
oyzm.onblur=function(){
	var rege=oranyzm.innerHTML;
	var yzmV=this.value;
	if(rege==yzmV){
		this.parentNode.lastElementChild.innerHTML='<i id="green">格式正确</i>'
		rf=true;
	}else{
		this.parentNode.lastElementChild.innerHTML='验证码有误'
		rf=false;
	}
}


oreg_btn.onclick=function(){
	
	if(ra && rb && rc && rd && re && rf){
		alert('注册成功')
	}else{
		otel.onblur()
		oyzm.onblur();
		opass1.onblur()
		opass2.onblur()
		ousername.onblur()
		oidcard.onblur()
	}
}

//  class Register{
//         constructor(){
//             this.tel = document.getElementById("tel")
//             this.pass1 = document.getElementById("pass1")
//             this.btn = document.getElementById("btn")
//             this.span = document.querySelector(".box span")
// 
//             this.addEvent()
//         }
//         addEvent(){
//             var that = this;
//             this.btn.onclick = function(){
//                 that.setLocal()
//             }
//         }
//         setLocal(){
//             // 之前有没有
//             this.userMsg = localStorage.getItem("userMsg");
//             this.userMsg = this.userMsg ? JSON.parse(this.userMsg) : [];
// 
//             // 之前没有，直接存
//             if(this.userMsg.length<1){
//                 this.userMsg.push({
//                     user:this.user.value,
//                     pass:this.pass.value,
//                     onoff:0
//                 })
//             }else{
//                 // 之前有，判断是否重名
//                 var o = this.userMsg.some(val=>{
//                     return val.user === this.user.value;
//                 })
//                 if(o){
//                     this.span.innerHTML = "重名";
//                 }else{
//                     this.span.innerHTML = "";
//                     this.userMsg.push({
//                         user:this.user.value,
//                         pass:this.pass.value,
//                         onoff:0
//                     })
//                 }
//             }
// 
//             localStorage.setItem("userMsg",JSON.stringify(this.userMsg))
//         }
//     }
// 
//     new Register();
// 
// 









// require.config({
// 	baseUrl:"module",
// 	paths:{
// 		"reg":"reg1",
// 		"log":"log1",
// 		"ind":"ind1"
// 	}
// })
// 
// require(["reg","log","ind"],function(reg,log,ind){
// 	console.log("模块加载成功")
// 	var myreg=new reg.reg1({
// 		ouser:document.getElementById("tel"),
// 		opass:document.getElementById("pass1"),
// 		obtn:document.getElementById("reg_btn"),
// 		ospan:document.getElementById("s")
// })
// })