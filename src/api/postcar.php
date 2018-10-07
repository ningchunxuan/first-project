<?php
    include 'connect.php';
    header('Access-Control-Allow-Origin: *');
    $id = isset($_GET['id']) ? $_GET['id'] : '';
    $img = isset($_GET['img']) ? $_GET['img'] : '';
    $title = isset($_GET['title']) ? $_GET['title'] : '';
    $price = isset($_GET['price']) ? $_GET['price'] : '';
    $num = isset($_GET['num']) ? $_GET['num'] : '';

    $sql = "select * from car where id='$id'";
    // 获取查询结果
    $result = $conn->query($sql);
    $row = $result->fetch_all(MYSQLI_ASSOC);
    if($result->num_rows>0){
        $count = $row[0]['num'] + $num;
        $sql = "update car SET num='$count' WHERE id='$id'";
        $result = $conn->query($sql);
    } else{
        $sql = "insert into car (id,img,title,price,num) values ('$id','$img','$title','$price','$num')";
        $result = $conn->query($sql);
    }
    if ($result) {
        echo "yes";
    } else {
        echo "Error";
    }

    // 释放查询内存(销毁)
    // $result->free();

    //关闭连接
    $conn->close();
?>