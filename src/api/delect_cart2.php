<?php

	include 'connect.php';
	$id=$_GET['id'];
	$sql="delete from cart where id='$id'";
	$res=$conn->query($sql);
	echo 'yes';
	$res->close();
	$conn->close();
?>
