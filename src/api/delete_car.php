<?php
    include 'connect.php';
    //接收数据
    $id = isset($_GET['id']) ? $_GET['id'] : 1;
    $way = isset($_GET['way']) ? $_GET['way'] : 'del';
    // echo $num;
    if($way=='del'){
        $sql="DELETE FROM `cart` WHERE id=$id";//删除该行
    }
    if($way=='delAll'){
        $sql="DELETE FROM `cart`";//全部删除
    }

    $res=$conn->query($sql);//执行语句：得到结果集
    
    //用于检测是否删除成功
    if($res){
        //插入成功返回yes否则返回no
        echo 'yes';
    }else{
        echo 'no';
    }
    
    //关闭数据库
    $conn->close();
?>