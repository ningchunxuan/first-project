
$(function(){
    $.get('http://localhost:8899/getcar.php',function(res){
        var carlist = JSON.parse(res);
        var list = carlist.map(function(obj,idx){
            return  `<li>
                        <div class="fl">
                            <input type="checkbox" class="choose"/>
                            <img src="../${obj.img}" height="50" width="50" alt="" />
                            <p class="title">${obj.title}</p>
                        </div>
                        <div class="fr">
                            <span class="price">￥${obj.price}.00</span>
                            <button data-id="${obj.id}" class="calculation">-</button>
                            <input type="numder" value="${obj.num}" class="numder"/>
                            <button data-id="${obj.id}" class="calculation">+</button>
                            <span class="price p_sum">￥${obj.num*obj.price}.00</span>
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
        
        //全选
        var ischecked = true;
        $('.allcheckbox').on('click', function() {

            //prop() 添加属性(行为的)  attr（）添加属性 
            if(ischecked) {
                $('.allcheckbox input').prop('checked', 'checked');
                $('.choose').prop('checked', 'checked');
            } else {
                $('.allcheckbox input').removeAttr('checked');
                $('.choose').removeAttr('checked');
            }
            ischecked = !ischecked;
        });
    })
    
});