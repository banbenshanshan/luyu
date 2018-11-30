<?php
	header("content-type:text/html;charset=utf-8");
	include 'connect.php';
	$tel=isset($_POST['tel']) ? $_POST['tel'] : '';
	$password=isset($_POST['password']) ? $_POST['password'] : '';
	//写查询语句
	$sql="select * from user where tel='$tel' and password='$password'";
	
	//执行查询语句
	$res = $conn->query($sql);
	//获取里面的结果集
	//$row=$res->fetch_all(MYSQLI_ASSOC);
	if($res->num_rows>0){
    //有用户名存在
     echo 'no';
  	}
 	else{
    	 echo 'yes';
 	}

	//转成字符串
	//把字符串形式的json数据传给前端
	//echo json_encode($row);
	//关闭数据库
//	$res->close();//关闭结果集
//  $conn->close();//关闭数据库的链接
?>