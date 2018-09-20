<?php
    include 'connect.php';
    header('Access-Control-Allow-Origin: *');
    $id = isset($_GET['id']) ? $_GET['id'] : '';
    // $password = isset($_GET['password']) ? $_GET['password'] : '';

    // 密码md5加密
    // $password = md5($password);
    
    $sql = "select * from goodslist where id=$id";

    $result = $conn->query($sql);

    //使用查询结果集
    $row = $result->fetch_all(MYSQLI_ASSOC);
    if($row[0]){
        echo json_encode($row,JSON_UNESCAPED_UNICODE);
    }else{
        echo "{code:0,message:'请求失败'}";
    }

    // 释放查询内存(销毁)
    $result->free();

    //关闭连接
    $conn->close();
?>