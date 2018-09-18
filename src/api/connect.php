<?php

    //配置参数
    $servername = 'localhost';
    $username = 'root';
    $password = '';
    $database = 'shopping';

    //连接数据库
    $conn = new mysqli($servername,$username,$password,$database);

    //检测连接
    if($conn->connect_error){
        die('连接失败：'.$conn->connect_errno);
    }

    //设置字符集
    $conn->set_charset('utf8');
    // echo "成功连接数据库";
?>