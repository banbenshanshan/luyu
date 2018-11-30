<?php
    header("content-type:text/html;charset=utf-8");
	include 'connect.php';
	$page = isset($_GET['page']) ? $_GET['page'] : '';
	$qty = isset($_GET['qty']) ? $_GET['qty'] : '';
	$sum = $page*$qty;
	$st=($page-1)*$qty;
	$sql="select * from shuju order by  price limit $st,$sum";
	
	$res = $conn->query($sql);
	//var_dump($res);
	//获取里面的结果集
	$row=$res->fetch_all(MYSQLI_ASSOC);
	
	//转成字符串
	//把字符串形式的json数据传给前端
	echo json_encode($row);
	//关闭数据库
	$res->close();//关闭结果集
    $conn->close();//关闭数据库的链接
?>