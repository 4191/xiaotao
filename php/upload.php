<?php
//header('Access-Control-Allow-Origin: *');   // 访问 控制 允许 起源

//连接数据库//mysql账户
$servername = "localhost";		//服务器名称
$username = "root";				//数据库账户名称
$password = "root";			//数据库账户密码
$dbname = "xiaotao";				//数据库名称
$conn = new mysqli($servername, $username, $password, $dbname);


// 解决中文乱码问题
//设置连接字符集编码
$sql = "SET CHARACTER SET 'UTF8'";
$conn->query($sql);
//告诉服务器将来从这个客户端传来的信息采用字符集utf8
$sql = "SET NAMES 'UTF8'";
$conn->query($sql);


$ac = isset($_GET["ac"]) ? $_GET["ac"] : "";
//$ac = isset($_POST["ac"]) ? $_POST["ac"] : "";
switch( $ac ){
	case "0":
		//插入数据
		$title = isset($_POST["title"]) ? $_POST["title"] : "";	// 标题
		$price = isset($_POST["price"]) ? $_POST["price"] : "";	// 价格
		$volume = isset($_POST["volume"]) ? $_POST["volume"] : "";	// 数量，卖了多少
		$score = isset($_POST["score"]) ? $_POST["score"] : "";	// 评价的得分
		$options = isset($_POST["options"]) ? $_POST["options"] : "";	// 选项，颜色、型号等
		$shop = isset($_POST["shop"]) ? $_POST["shop"] : "";	// 店名
		$img = isset($_POST["img"]) ? $_POST["img"] : "";	// 主图
		$imgs = isset($_POST["imgs"]) ? $_POST["imgs"] : "";	// 小图
		$detail = isset($_POST["detail"]) ? $_POST["detail"] : "";	// 详情的图片
		$comment = isset($_POST["comment"]) ? $_POST["comment"] : "";	// 评价
		$ip = $_SERVER["REMOTE_ADDR"];	// 获取ip
		
		// sql插入语句
		$sql = "insert into goods (title, price, volume, score, options, shop, img, imgs, detail, comment, ip, addTime) values ('".$title."','".$price."','".$volume."','".$score."','".$options."','".$shop."', '".$img."','".$imgs."','".$detail."','".$comment."','".$ip."', now())";
		//echo $sql;
		
		$conn->query($sql);
		echo mysqli_insert_id($conn);//取出插入的数据的编号
		
		break;
	case "1":
		//查询
		$username = isset($_GET["username"]) ? $_GET["username"] : "";
		$sql = "select count(*) as num from goods where title='".$title."'";
		$result = $conn->query($sql);//得到结果集（二维数组）
		$row = $result->fetch_assoc();//获取一行
		echo $row["num"];
		
		break;	
}
//echo $username;




/*
if( $conn->query($sql) === true ){
	echo "数据插入成功";
}else{
	echo "数据插入失败";
}
*/



?>