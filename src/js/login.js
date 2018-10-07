$(function(){
	// location.href="../index.html";
	// 登陆
    $('.btn_login').click(function(event) {
        // 获取输入框的值
        let user = $('.username').val();
        let psw = $('.password').val();
        // e.preventDefault();
        $.get('http://localhost:8899/login',{username:user,password:psw},function(res){
            if(res === 'yes'){
                document.cookie = 'username=' + user;
                window.location.reload();
            } 
        })
    });

    $('.btn_hide').click(function(){
        // $(this).css('background','red');
        // $('.login').css('display','none');
        $('.login').hide()
        $('.cover').hide(600)
    })
});