<?php
	include 'connect.php';
	header('Access-Control-Allow-Origin: *');
	$username = isset($_GET['username']) ? $_GET['username'] : '';
	$password = isset($_GET['password']) ? $_GET['password'] : '';
	// $phone = isset($_GET['phone']) ? $_GET['phone'] : '';
	// die();
	// 密码md5加密
	// $password = md5($password);

	$sql = "select * from user where username='$username' and password='$password'";


	// 获取查询结果
	$result = $conn->query($sql);
	$row = $result->fetch_row();
	
	if($row[0]){
    	echo "yes";
    }
    else{
    	echo "no";
    }
	

	// 释放查询内存(销毁)
	$result->free();

	//关闭连接
	$conn->close();
?>