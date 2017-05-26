/**********************************校淘网**************************************/
// 首页上下滚动
$(function(){
	
var dd = $(".aside-index-b dd").eq(0);
var ddSpan = $(".aside-index-b dd span").eq(0);
fnIndexSX()
var timer = setInterval(fnIndexSX, 100)
var i = 0;
function fnIndexSX(){
	ddSpan.css({"top" : i});
	i--;
	if(i <= -140)i=0;
}
ddSpan.mouseover(function(){
	clearInterval(timer)
})
ddSpan.mouseout(function(){
	timer = setInterval(fnIndexSX, 100);
})

// 购物车链接
$(".minicart>a").click(function(){
	window.location = "cart.html";
})
	
// 获取登录名
var loginuser = getCookie("loginuser");
if(loginuser != ""){
	loginuser = decodeURIComponent(loginuser);
	loginuser = JSON.parse(loginuser);
//	console.log(typeof loginuser +"\r\n"+ loginuser.loginuser);
	$("#login_25").html("您好"+loginuser.loginuser+ " ! <a href='./' class='loginout'> 退出</a>")
	$(".loginout").click(function(){
		setCookie("loginuser", "", -1);
	})
}

cartNum()
})

// 购物车数量
function cartNum(){
	var cook = document.cookie;
	cook = decodeURIComponent(cook);
	var regs = new RegExp("^g[0-9]*$");

	var ar = cook.split("; ");
	var gcook = [];
	for( var i in ar ){
		var col = ar[i].split("=");
		if(regs.test(col[0])){
			gcook.push(col[1])
		}
	}
	
	var gnum = 0;
	var gcookL = gcook.length;
	for(var i=0; i<gcookL; i++){
		var gcooki = JSON.parse(gcook[i])
		gnum += Number(gcooki.num);
	}
	if(!gnum)gnum=0;
	$(".minicart .icon-cart-a").next().html(gnum);
}