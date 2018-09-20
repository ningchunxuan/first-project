<?php
    include 'connect.php';
    header('Access-Control-Allow-Origin: *');
    $img = isset($_GET['img']) ? $_GET['img'] : '';
    $title = isset($_GET['title']) ? $_GET['title'] : '';
    $price = isset($_GET['price']) ? $_GET['price'] : '';
    $num = isset($_GET['num']) ? $_GET['num'] : '';

    $sql = "insert into car (img,title,price,num) values ('$img','$title','$price','$num')";
    // 获取查询结果
    $result = $conn->query($sql);
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