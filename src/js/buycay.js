// document.addEventListener('DOMContentLoaded',()=>{
//     addcar();
// })


// function addcar(){
// 	var ul = document.querySelector('.goods');
// 	var cookies = document.cookie;       
//     cookies = cookies.split('=')[1];
//     var buycar = JSON.parse(cookies);
//     console.log(buycar)
//     var li = document.createElement('li');
//     var div = document.createElement('div');
//     div.className = 'fl';
//     // var div = document.createElement('div');
//     // div.className = 'fr';
    
//     var img = document.createElement('img');
//     img.src = '../'+buycar.img;
//     div.appendChild(img);
//     li.appendChild(div);
//     ul.appendChild(li);
//     console.log(li)
//     // var lists = buycar.map(function(obj, index){
//     // 	return`	<li>
// 	   //              <div class="fl">
// 	   //                  <input type="checkbox" />
// 	   //                 	<img src="../${obj.img}" height="50" width="50" alt="" />
// 	   //                 	<span class="title">${obj.title}</span>
// 	   //             	</div>
// 	   //             	<div class="fr">
// 		  //               <span class="price">￥${obj.price}</span>
// 	   //                 	<input type="numder" value="1" />
// 	   //                 	<span class="price">￥${obj.price}</span>
// 	   //                 	<button>删除</button>
// 	   //             	</div>
// 	   //         	</li>`
//     // }).join('');
//     // ul.innerHTML = lists;
// }
$(function(){
    $.get('http://localhost:8899/getcar.php',function(res){
        var carlist = JSON.parse(res);
        var list = carlist.map(function(obj,idx){
            return  `<li>
                        <div class="fl">
                            <input type="checkbox" />
                            <img src="../${obj.img}" height="50" width="50" alt="" />
                            <span class="title">${obj.title}</span>
                        </div>
                        <div class="fr">
                            <span class="price">￥${obj.price}</span>
                            <button data-id="${obj.id}" class="calculation">-</button>
                            <input type="numder" value="${obj.num}" class="numder"/>
                            <button data-id="${obj.id}" class="calculation">+</button>
                            <span class="price">￥${obj.num*obj.price}</span>
                            <button data-id="${obj.id}" class="del_btn">删除</button>
                        </div>
                    </li>`
        }).join('');
        $('.goods').html(list);


        var total = 0;
        carlist.forEach(function(obj,idx){
            total += obj.num*obj.price
        });
        $('.total').text(total);

        $('.calculation').click(function(){
            var numder = $(this).parent('.fr').find('.numder').val();
            var id = $(this).data('id')*1;
            if($(this).text()=== '-'){
                numder--;
                if(numder<1){
                    numder = 1;
                }
            }
            else{
                numder++;
            }
            $(this).parent('.fr').find('.numder').val(numder)
            $.get('http://localhost:8899/putcar.php',{id:id,num:numder},function(res){

            })
            window.location.reload();
        })
        $('.del_btn').click(function(){
            var id = $(this).data('id')*1;
            $.get('http://localhost:8899/delcar.php',{id:id},function(res){

            })
            window.location.reload();
        })
    })
    
});