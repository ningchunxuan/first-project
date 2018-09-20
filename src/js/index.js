$(function(){
	$.get('http://localhost:8899/goodslist.php',function(res){
		var goodslist = JSON.parse(res);

		var list = goodslist.map(function(obj,idx){
			return `<li>
						<a href="html/detail.html?id=${obj.id}">
							<img src="${obj.img}">
							<p class="price">￥${obj.price}</p>
							<p class="title">${obj.title}</p>
							<span class="num">总销量：${obj.num}</span>
	                        <span class="hot">评价：${obj.hot}</span>
                        </a>
					</li>`
		}).join('');
		$('.goodslist').html(list);
	})

	// 注册
    // $('.btnReg').click(function(){
    //     // 获取输入框的值
    //     let user = $('#username1').val();
    //     let psw = $('#password1').val();
    //     console.log(user,psw)
    //     var xhr = new XMLHttpRequest();
    //     xhr.onreadystatechange = function(){
    //         if(xhr.readyState === 4){
    //             console.log(xhr.response)
    //         }
    //     }
    //     xhr.open('get','http://localhost:8899/reg.php?username='+user+'&password='+psw,true);
    //     xhr.send();
        // $.get('http://localhost:8899/reg.php',{username:user,password:psw},function(res){
        //     console.log(res)
        // })

    // })


    // 登陆
    // $('#btnLogin').click(function(event) {
    //     // 获取输入框的值
    //     let user = $('#username2').val();
    //     let psw = $('#password2').val();
    //     $.get('http://localhost:8899/login',{username:user,password:psw},function(res){
    //         console.log(res)
    //     })
	



});
// jQuery(function($){
//             // 插件是否支持链式调用

//             $('.big_img').lxzoom({width:500,height:200}).addClass('box');

//             $('.img_box').on('click','img',function(){
//                 $('.big_img img').attr({
//                     'src':this.src,
//                     'data-big':this.dataset.big
//                 });
//             })
//         });