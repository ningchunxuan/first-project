<?php
    include 'connect.php';
    header('Access-Control-Allow-Origin: *');
    $username = isset($_GET['username']) ? $_GET['username'] : '';
    $password = isset($_GET['password']) ? $_GET['password'] : '';
    $phone = isset($_GET['phone']) ? $_GET['phone'] : '';

    //查看用户名是否已经存在
    $sql = "select * from user where username='$username'";

    $result = $conn->query($sql);
    if($result->num_rows>0){
        echo "{code:0,message:'用户名或手机号已经注册'}";
    }else{
        if($username===''&&$password===''&&$phone===''){
            echo "{code:0,message:'用户名或手机号或密码不能为空'}";
        } else {
            $sql = "insert into user (username,password,phone) values('$username','$password','$phone')";
            // 获取查询结果
            $result = $conn->query($sql);
            if ($result) {
                echo "yes";
            } else {
                echo "Error: " . $sql . "<br>" . $conn->error;
            }
        }
        
    }
    

    // 释放查询内存(销毁)
    // $result->free();

    //关闭连接
    $conn->close();
?>