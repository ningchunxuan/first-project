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
})