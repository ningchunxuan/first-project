
$(function(){
    $.get('http://localhost:8899/getcar.php',function(res){
        var carlist = JSON.parse(res);
        console.log(carlist.length)
        var list = carlist.map(function(obj,idx){
            return  `<li>
                        <div class="fl">
                            <input type="checkbox" data-id="${obj.id}" value="${obj.price}" class="choose"/>
                            <img src="../${obj.img}" height="50" width="50" alt="" />
                            <p class="title">${obj.title}</p>
                        </div>
                        <div class="fr">
                            <span class="price">￥${obj.price}.00</span>
                            <button data-id="${obj.id}" data-price="${obj.price}" class="calculation">-</button>
                            <input value="${obj.num}" class="number"/>
                            <button data-id="${obj.id}" data-price="${obj.price}" class="calculation">+</button>
                            <span class="price p_sum">￥<b>${obj.num*obj.price}</b>.00</span>
                            <button data-id="${obj.id}" class="del_btn">删除</button>
                        </div>
                    </li>`
        }).join('');
        $('.goods').html(list);
        $('.calculation').click(function(){
            var number = $(this).parent('.fr').find('.number').val();
            var id = $(this).data('id')*1;
            var price = $(this).data('price')*1;
            if($(this).text()=== '-'){
                number--;
                if(number<1){
                    number = 1;
                }
            }
            else{
                number++;
            }

            $(this).parent('.fr').find('.number').val(number)
            $(this).parent('.fr').find('.p_sum b').text(price*number)
            $.get('http://localhost:8899/putcar.php',{id:id,num:number},function(res){

            })

            calculation()
            // window.location.reload();
        })
        // 删除单个
        $('.del_btn').click(function(){
            var id = $(this).data('id')*1;
            $.get('http://localhost:8899/delcar.php',{id:id},function(res){

            })
            window.location.reload();
        })

        // 删除多个
        $('.delete').click(()=>{
            if(confirm('您确定要删除选中的商品吗？')){
                $('.choose').each((idx,item)=>{
                    if(item.checked){
                        var id = $(item).data('id')*1;
                        $.get('http://localhost:8899/delcar.php',{id:id},function(res){

                        })
                        $(item).parents('li').remove();
                        // console.log($(item).parents('li')) 
                    }
                    
                })
            }
        })
        
        function calculation(){
            var total = 0;
            var number = 0;
            $('.choose').each(function(idx,item){
                var count = $(item).parents('li').find('.number').val()*1;
                // console.log($(item).parents('li'))
                if(item.checked){
                    total += item.value*count*1; 
                    number += $(this).parents('li').find('.number').val()*1;
                }
            })
            $('.total').text(total);
            $('.count').text(number)
            console.log(total)
        }

        var ischecked = true;
        $('.choose').click(function(event){
            calculation()
            if($(".choose[type='checkbox']:checked").length !== $('.choose').length){
                $('.allcheckbox')[0].checked = false;
                ischecked = true;  
            }
            
            // console.log($(".choose[type='checkbox']:checked").length)
        });
        //全选
        $('.allcheckbox').click(function() {
            //prop() 添加属性(行为的)  attr（）添加属性 
            if(ischecked) {
                $('.allcheckbox').prop('checked', 'checked');
                $('.choose').prop('checked', 'checked');
                var total = 0;
                $('.choose').each((idx,item)=>{
                    if(item.checked){
                        total += item.value*1; 
                    }
                })
                $('.total').text(total);
                calculation();
            } else {
                $('.choose').each(function(index, val) {
                    val.checked = false;
                });
                $('.total').text(0);
                $('.count').text(0);
            }
            ischecked = !ischecked;
        });

    })
    
});