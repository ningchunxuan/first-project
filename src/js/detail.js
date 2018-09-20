jQuery(function($){

    var id = window.location.search.slice(1).split('=')[1]*1;

    $.get('http://localhost:8899/detail.php',{id:id},function(res){
    	var detail = JSON.parse(res);
    	var bigImg = document.querySelector('.bigImg');

    	console.log(bigImg)
    	detail.forEach(function(obj,index){
			if(obj[detail[0]] == detail[1]){
				bigImg.src = '../'+obj.img;
				bigImg.dataBig= '../'+obj.img;
				
			}
		});

    })


    // 插件是否支持链式调用

    $('.big_img').lxzoom({width:500,height:200}).addClass('box');

    $('.img_box').on('click','img',function(){
        $('.bigImg').attr({
            'src':this.src,
            'dataBig':this.dataset.big
        });
    })

});