
$(function(){
    // 注册
    $('.btnReg').click(function(){
        /*
        验证账号
            * 不能为空，
            * 不能使用特殊字符（数字、字母、下划线、横杠），
            * 必须以字母开头，
            * 长度6-20
        */
        var username = $('#username').val();
        if(!/^[a-z][\w\-]{5,19}$/.test(username)){
            alert('您输入的用户名不合法');
            // e.preventDefault();
            // return;
            return false;
        }

        /*
            密码  
                长度6-20 
                不能包含空格
         */
        var password = $('#password').val();
        if(!/^\S{6,20}$/.test(password)){
            alert('密码不能有空格');
            return false;
        }  

        /*
            手机号码
                11位
                158 8888 8888
                1 [34578]
         */
        var phone = $('#phone').val();
        if(!/^1[3-9]\d{9}$/.test(phone)){
            alert('手机号不合法');
            return false;
        }
        // console.log(username,password,phone)
        // var xhr = new XMLHttpRequest();
        // xhr.onreadystatechange = function(){
        //     if(xhr.readyState === 4){
        //         // console.log(xhr.response)
        //     }
        // }
        // xhr.open('get','http://localhost:8899/reg.php?username='+username+'&password='+password+'&phone='+phone,true);
        // xhr.send();

        $.get('http://localhost:8899/reg.php',{username:username,password:password,phone:phone},function(res){
            if(res === 'yes'){
                window.location.href="../html/detail.html";
            }
            
        })
    })
    $('.btn_hide').click(function(){
        // $('.register').css('display','none');
         $('.login').hide()
        $('.register').hide(600)
    })

});