<?php
	//echo '123';
    //编码设置
	header("content-type:text/html;charset=utf-8");
	include 'connect.php';
	$sql="select * from shuju";
//	//	执行语句
	$res=$conn->query($sql);
//	//通过fetch_all(MYSQLI_ASSOC)方法得到数据，是一个数组类型
	$row=$res->fetch_all(MYSQLI_ASSOC);
//	
//	//  把数组转成字符串，echo给前端
    echo json_encode($row,JSON_UNESCAPED_UNICODE);
//	$res->close();
//	$conn->close();
?>