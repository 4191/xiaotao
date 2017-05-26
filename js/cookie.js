// 设置cookie（增删改）
/*
增	setCookie("a", "123", 5)		setCookie("a", "123")
删	setCookie("a", "", -1)
改	setCookie("a", "456", 5)
*/

function setCookie(_name, _value, _date){
	if( _date ){
		var d = new Date();
		d.setDate(d.getDate()+_date);	
		document.cookie = _name+"="+encodeURIComponent(_value)+"; path=/; expires="+d.toGMTString();
	}else{
		document.cookie = _name+"="+encodeURIComponent(_value)+"; path=/;";
	}
}

// 读取cookie（查）
/*
查	getCookie("a")
*/
function getCookie(_name){
	var str = document.cookie;	// "a=1; b=2; c=3"
	var arr = str.split("; ");	// 一定要注意多一个空格
	var l = arr.length;
	for( var i=0; i<l; i++ ){
		var col = arr[i].split("=");	// "a=1" 在该字符串中，根据等号拆分成数组
		if( col[0] == _name ){
			return decodeURIComponent(col[1]);
		}
	}
	return "";
}