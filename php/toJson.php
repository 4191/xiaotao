<?php  
header("Content-type:text/html;charset=utf-8");//字符编码设置  
$servername = "localhost";  
$username = "root";  
$password = "root";  
$dbname = "xiaotao";  

// 创建连接  
$con =mysqli_connect($servername, $username, $password, $dbname);  

// 检测连接  

  
$sql = "SELECT * FROM goods";  
$result = mysqli_query($con,$sql);  
if (!$result) {
    printf("Error: %s\n", mysqli_error($con));
    exit();
}

$jarr = array();

while ($rows=mysqli_fetch_array($result,MYSQL_ASSOC)){
    $count=count($rows);//不能在循环语句中，由于每次删除 row数组长度都减小  
    for($i=0;$i<$count;$i++){  
    	unset($rows[$i]);//删除冗余数据  
    }
    array_push($jarr,$rows);
}
//print_r($jarr);//查看数组
//echo "<br/>";
//echo '<hr>';
//echo json_encode($jarr);

$jobj=new stdclass();//实例化stdclass，这是php内置的空类，可以用来传递数据，由于json_encode后的数据是以对象数组的形式存放的，

//所以我们生成的时候也要把数据存储在对象中

foreach($jarr as $key=>$value){
	$jobj->$key=$value;
}

//echo '传递属性后的对象：';
//print_r($jobj);//打印传递属性后的对象
//echo '<br>';
//echo '编码后的json字符串：'.json_encode($jobj).'<br>';//打印编码后的json字符串

echo json_encode($jobj);//打印编码后的json字符串

mysqli_close($con);
?> 