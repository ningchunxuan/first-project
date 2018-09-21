jQuery(function($){
    // 列表页信息写到详情页
    var id = window.location.search.slice(1).split('=')[1]*1;
    $.get('http://localhost:8899/detail.php',{id:id},function(res){
        
      	var detail = JSON.parse(res);
        console.log(detail)
      	var bigImg = document.querySelector('.bigImg');
        var si1 = document.querySelector('.si1');
        var si2 = document.querySelector('.si2');
        var si3 = document.querySelector('.si3');
        var si4 = document.querySelector('.si4');
        var si5 = document.querySelector('.si5');
      	var title = document.querySelector('.information .title');
      	var promotion = document.querySelector('.promotion');
      	var b1 = document.querySelector('.information .b1');
      	var b2 = document.querySelector('.information .b2');
      	var brand = document.querySelector('.brand');
        var btn_add = document.querySelector('.btn_add');
        var currenGoods = null;
      	// console.log(detail);
        let obj = detail[0];
        // $('.si1').attr('src') = '../'+obj.smallImg1;
         // $('.si1').data('big') = '../'+obj.smallImg1;
        bigImg.src = '../'+obj.img;
        bigImg.setAttribute('data-big','../'+obj.img);
        si1.src = '../'+obj.smallImg1;
        si1.setAttribute('data-big','../'+obj.smallImg1);
        si2.src = '../'+obj.smallImg2;
        si2.setAttribute('data-big','../'+obj.smallImg2);
        si3.src = '../'+obj.smallImg3;
        si3.setAttribute('data-big','../'+obj.smallImg3);
        si4.src = '../'+obj.smallImg4;
        si4.setAttribute('data-big','../'+obj.smallImg4);
        si5.src = '../'+obj.smallImg5;
        si5.setAttribute('data-big','../'+obj.smallImg5);
        title.innerHTML = obj.title;
        promotion.innerHTML = obj.price;
        b1.innerHTML = obj.num;
        b2.innerHTML = obj.hot;
        brand.innerHTML = obj.goodsName;
        currenGoods = obj;
    })
    
    $('.btn_add').click(function(){
        var obj
        $.get('http://localhost:8899/selectid.php',{id:id},function(res){
            var alone = JSON.parse(res);
            obj = alone[0];
            $.get('http://localhost:8899/postcar.php',{img:obj.img,title:obj.title,price:obj.price,num:1},function(res){
                console.log(res)
                if(res === 'yes'){
                    alert('已经添加到购物车');
                    window.location.href = "../html/buycar.html";
                }
            })
        })   
    })
    $('.mt_btn').click(function(){
        var obj
        $.get('http://localhost:8899/selectid.php',{id:id},function(res){
            var alone = JSON.parse(res);
            obj = alone[0];
            $.get('http://localhost:8899/postcar.php',{img:obj.img,title:obj.title,price:obj.price,num:1},function(res){
                console.log(res)
                if(res === 'yes'){
                    alert('已经添加到购物车');
                    window.location.href = "../html/buycar.html";
                }
            })
        })
    })


    // 吸顶菜单
    var header = document.querySelector('#header');
    var main = document.querySelector('#main');
    var btn = document.querySelector('.mt_btn');
    console.log(btn)
    var mas_top = document.getElementsByClassName('mas_top')[0];
    window.onscroll = function(){
        var hight = header.offsetHeight + main.offsetHeight;
        // 获取滚动条滚动过的距离
        var scrollY = window.scrollY;
        if(scrollY>=897){
            mas_top.className = 'mas_top fixed';
            btn.style.display ='block';
            // hight.className = 'hight mgb';
        }else{
            mas_top.className = 'mas_top';
            btn.style.display ='none';
            // hight.className = 'hight';
        }
    }



    // 放大镜

    $('.big_img').lxzoom({width:500,height:200}).addClass('box');

    $('.img_box').on('click','img',function(){
        $('.bigImg').attr({
            'src':this.src,
            'data-big':this.dataset.big
        });
    })

});