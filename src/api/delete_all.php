<?php

	include 'connect.php';
//	$id=$_GET['id'];
	$sql="delete from cart";
	$res=$conn->query($sql);
	echo 'yes';
//	$res->close();
	$conn->close();
?>
