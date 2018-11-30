<?php
    header("content-type:text/html;charset=utf-8");
	include 'connect.php';
	
	$tel=isset($_POST['tel']) ? $_POST['tel'] : '';
	$password=isset($_POST['password']) ? $_POST['password'] : '';
	//写插入语句
	$sql="insert into user(tel,password) values('$tel','$password')";
	
	//执行语句
	$res=$conn->query($sql);
	
	var_dump($res);
//	if($res){
//		echo '0';
//	}
	
	//关闭连接数据库
	
    $conn->close();//关闭数据库的链接
?>