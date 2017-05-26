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
		// 获得url传过来的参数（get方法）
		$username = isset($_POST["username"]) ? $_POST["username"] : "";
		$password = isset($_POST["password"]) ? $_POST["password"] : "";
		$ip = $_SERVER["REMOTE_ADDR"];// 获取ip
		
		// sql插入语句
		$sql = "insert into users (username, password, ip, addTime) values ('".$username."', '".$password."', '".$ip."', now())";		
		$conn->query($sql);
		echo mysqli_insert_id($conn);//取出插入的数据的编号
		break;
	case "1":
		//查询
		$username = isset($_GET["username"]) ? $_GET["username"] : "";
		$sql = "select count(*) as num from users where username='".$username."'";
		$result = $conn->query($sql);//得到结果集（二维数组）
		$row = $result->fetch_assoc();//获取一行
		echo $row["num"];
		break;
	case "2":
		$loginuser = isset($_POST["loginuser"]) ? $_POST["loginuser"] : "";
//		$loginpwd = isset($_POST["loginpwd"]) ? $_POST["loginpwd"] : "";
		$sql = "select password from users where username='".$loginuser."'";
		$result = $conn->query($sql);
		$row = $result->fetch_assoc();
		echo $row["password"];
//		echo $loginuser;
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


//$sql = "select count(*) as num from regist_p where phone='".$phone."' and password='".$password."'";


?>