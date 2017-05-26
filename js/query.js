/*
 * 功能：根据url，获取参数
 * 参数：
 * 	_name 表示参数名称
 * 返回值：
 * 	根据参数名所获得的参数值
 */
function query(_name){	
	var str = location.href;	// 把当前页面的url取出
	var arr = str.split("?");
	if( arr.length > 1 ){
		// 表示有问号，即有数据
		// arr[1] 表示所有的参数    例如："id=4&p=2&t=3"
		var col = arr[1].split("&");
		var l = col.length;
		for( var i=0; i<l; i++ ){
			// col[i] 表示其中一个数据，例如："id=4"
			var c = col[i].split("=");
			// c 表示其中一个数据的数组，例如：["id", "4"]
			if( c[0] == _name ){
				return c[1];
			}
		}
		return "";
	}else{
		// 表示没有问号，即没有数据
		return "";
	}
}