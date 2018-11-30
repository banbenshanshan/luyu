<?php
	
	//连接数据库
	
	include 'connect.php';
	
	//写插入语句
	$id=isset($_GET['id']) ? $_GET['id'] : '';
	$num=isset($_GET['num']) ? $_GET['num'] : '';
	$price=isset($_GET['price']) ? $_GET['price'] : '';
	$img=isset($_GET['img']) ? $_GET['img'] : '';
	$content=isset($_GET['content']) ? $_GET['content'] : '';
	//$sql="insert into order(cid,title,price,img,num) values('$cid','$title','$price','$img','$num')";
	//$sql="insert into order(cid,num,price,title,img) values('$cid','$num','$price','$title','$img')";
	$sql="insert into cart(number,price,content,img,id) values('$num','$price','$content','$img','$id')";
//echo($sql);

	//执行查询语句
	$res=$conn->query($sql);
	//var_dump($res);
//echo(res);
//
	if($res){
		echo '插入成功';
	}else {
		echo "插入失败";
	}
	//关闭连接数据库
    $conn->close();//关闭数据库的链接
?>
