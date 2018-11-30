<?php
	header("content-type:text/html;charset=utf-8");
	include 'connect.php';
	$page = isset($_GET['page']) ? $_GET['page'] : '';
	$qty = isset($_GET['qty']) ? $_GET['qty'] : '';
	$sum = $page*$qty;
	$st=($page-1)*$qty;
	//写查询语句
	$sql="select * from shuju limit $st,$sum";
	
	//执行查询语句
	$res = $conn->query($sql);
	
	//获取里面的结果集
	$row=$res->fetch_all(MYSQLI_ASSOC);
	//var_dump($row);
	//转成字符串
	//把字符串形式的json数据传给前端
	echo json_encode($row);
	
	//关闭数据库
	$res->close();//关闭结果集
    $conn->close();//关闭数据库的链接
?>