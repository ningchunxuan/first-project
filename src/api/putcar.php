<?php
    include 'connect.php';
    header('Access-Control-Allow-Origin: *');
    $num = isset($_GET['num']) ? $_GET['num'] : '';
    $id = isset($_GET['id']) ? $_GET['id'] : '';
    // $phone = isset($_GET['phone']) ? $_GET['phone'] : '';

    $sql = "update car SET num='$num' WHERE id='$id'";
    // 获取查询结果
    $result = $conn->query($sql);
    if ($result) {
        echo "yes";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
    

    // 释放查询内存(销毁)
    // $result->free();

    //关闭连接
    $conn->close();
?>