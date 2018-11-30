<?php

	include 'connect.php';
	$id=$_GET['id'];
	$sql="select number from cart where id=$id";
	$res=$conn->query($sql);
	$row=$res->fetch_all(MYSQLI_ASSOC);
	$num=$row[0]['number']+1;
	$sql2 ="update cart set number='$num' where id=$id";
	$res2=$conn->query($sql2);
//	echo $res2;
	if($res2){
		echo "yes";
	}else{
		echo "no";
	}
	$res->close();
	$conn->close();
?>