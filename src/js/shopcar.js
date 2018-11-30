//购物车渲染
function fn2(){
	$.ajax({
		type:"get",
		url:"../api/select_cart.php",
		async:true,
		success:function(str){
			//console.log(str);
			var data=JSON.parse(str);
			console.log(data);
			var html5='';
			for(var i=0;i<data.length;i++){
				var sum1=data[i].price*data[i].number;
				html5+=`<ul id="${data[i].id}" class="order_lists">
								<li class="list_chk ccc">
									<input type="checkbox" id="checkbox_2" class="son_check">
									<label for="checkbox_2"></label>
								</li>
								<li class="list_con">
									<div class="list_img">
										<a href="javascript:;"><img src="../${data[i].img}" alt=""></a>
									</div>
									<div class="list_text">
										<a href="javascript:;">${data[i].content}</a>
									</div>
								</li>
								<li class="list_info">
									<p>规格：默认</p>
									<p>尺寸：16*16*3(cm)</p>
								</li>
								<li class="list_price">
									<p class="price">￥${data[i].price}</p>
								</li>
								<li class="list_amount">
									<div class="amount_box">
										<a href="javascript:;" class="reduce reSty">-</a>
										<input type="text" value="${data[i].number}" class="sum">
										<a href="javascript:;" class="plus">+</a>
									</div>
								</li>
								<li class="list_sum">
									<p class="sum_price">￥<span>${sum1}</span></p>
								</li>
								<li class="list_op">
									<p class="del">
										<a href="javascript:;" class="delBtn">移除商品</a>
									</p>
								</li>
							</ul>`;
			}
			$('.order_content').html(html5);
		}
	});
}
fn2();

//购物车功能：加减数量、删除单行、小计、全选、总价和总数量、删除选中的多个商品、手动输入改变数量
var arr = [];//存被选中的复选框下标
//1.加数量
$('.order_content').on('click','.plus',function(){
	//用事件委托的方式给每个加号绑定事件
	var val=$(this).prev().val();//指加号前一个兄弟元素，即input框
	val++;//隐式转换
//	console.log(val);//检测是否拿到购物车的数据
    if(val>=100){
    	val=100;
    }
    //设置内容
    $(this).prev().val(val);
    var id=$(this).parent().parent().parent().attr('id');//设置内容返回id
//  console.log(id);//查看是否拿到了数据的id
    $.ajax({
		type:"get",
		url:"../api/add.php",
		async:true,
		data:{'id':id},
		success:function(str){
			console.log(str);
		}
	});
	//小计（已封装）
	price($(this));//把点击当前节点当成实参传过去
	fn2();
	updata();
});
	
	
//2.减数量
$('.order_content').on('click','.reduce',function(){
	//用事件委托的方式给每个加号绑定事件
	var val=$(this).next().val();//指加号前一个兄弟元素，即input框
	val--;//隐式转换
	console.log(val);//检测是否拿到购物车的数据
    if(val <= 1) { //库存量
		val = 1;
	}
    //设置内容
    $(this).next().val(val);
    var id=$(this).parent().parent().parent().attr('id');//设置内容返回id
//  console.log(id);//查看是否拿到了数据的id
    $.ajax({
		type:"get",
		url:"../api/delete_cart.php",
		async:true,
		data:{'id':id},
		success:function(str){
			console.log(str);
		}
	});
	//小计（已封装）
	price($(this));//把点击当前节点当成实参传过去
	fn2();
	updata();
});

//3、小计的封装
function price(now){
	var all=now.parent().find('input').val();//数量
	var pri=now.parent().prev().text();//拿到对应行的单价，￥ 99.99
	//console.log(pri);
	pri=$.trim(pri);//去掉前后空格
	pri=pri.substring(2);//字符串截取，￥&nbsp;65.99  单价处理好了
	console.log(all,pri);
	//获取数量
	var aprice=(pri*all).toFixed(2);//小计   .toFixed(2)保留两个小数
	now.parent().next().html('￥&nbsp;'+aprice);//赋值小计
	updateNum(arr);
}


//4、删除当行
$('.order_content').on('click','.del',function(){
	var res=confirm('您确定要删除该商品吗？');
	if(res){
		$(this).parent().parent().remove();
	}
	updata();
//	var arr=checked();//判断哪行被选中，存到该数组中
//	allnum(arr);//传被选中的行的下标过去，那边做累计处理
    updateNum();
	//总价
	allprice(arr);
	
	var ids = $(this).parent().parent().attr('id');
	console.log(ids);
	$.ajax({
		type:"get",
		url:"../api/delect_cart2.php",
		async:true,
		data:{'id':ids}

	});
});

//刷新

function updata(){
	if($('.plus').size()==0){
		$('#del').remove();
	}
}

//全选

var isok=true;

$('#allchecked').on('click',function(){
	
	//attr()加普通属性      title    prop() 加有行为的属性
	if(isok){
		//全选
		$('.ccc input').prop('checked','checked');
		$('#allchecked input').prop('checked','checked');//第一个是属性，第二个是属性值
	}else{
		//不选
		$('.ccc input').removeAttr('checked');
		$('#allchecked input').removeAttr('checked');//去掉属性值checked
		
	}
	isok = !isok;//开关取反
	var arr=checked();//被选中的行
	updateNum(arr);
	allnum(arr)
});
	//复选框被勾选

$('.order_content').on('click', '.ccc input', function() {
		var arr=checked();//被选中的行
		updateNum(arr);
		if(arr.length==$('.ccc').size()){//控制是否全选勾上
			//证明全被勾选
			$('#allchecked input').prop('checked','checked');
			isok=false;
		}else{
			$('#allchecked input').removeAttr('checked');
			isok=true;
		}
		
		allnum(arr)
	});

//删除多行

$('.quanshan').on('click',function(){
	var arr=checked();//被选中的行
	updateNum(arr);
	
	console.log(arr);
	
	$.ajax({
		type:"get",
		url:"../api/delete_all.php",
		async:true,
		success:function(){
			var res=confirm('您确定要删除多行吗？');
			if(res){
				//删除arr下标对应的行
				for(var i=arr.length-1;i>=0;i--){
					//从后面开始删除
					$('.ccc').eq(arr[i]).parent().remove();
				}
			}
		}

	});
	updata();
});



//循环判断哪行被选中了
function checked(){
	var arr=[];//设置一个空数组，等会被选中的就把下标存起来
	var le=$('.ccc input').size();
	for(var i=0;i<le;i++){
		if($('.ccc input').eq(i).prop('checked')){
			//不为空证明被选中了
			arr.push(i);
		}
	}
	return arr;
}
//总数量

function allnum(arr){
	var num=0;//总数量
	//console.log($(".sum").length)
	for(var i=0;i<arr.length;i++){
		//console.log($('.sum').eq(arr[1]).val())
		num+=parseInt($('.sum').eq(arr[i]).val());
	}
	
	$('.piece').html('已选 '+num+' 件商品');
	$('.piece .piece_num').css('color','#FF7500');
}

//总价

function allprice(arr){
	var price=0;
	for(var i=0;i<arr.length;i++){
		var nowtotal=$('.sum_price').eq(arr[i]).text();
		nowtotal=$.trim(nowtotal);
		console.log(nowtotal);
		nowtotal=nowtotal.substring(2);//数据提取完成  255
		console.log(nowtotal);
		price+=nowtotal*1;
	}
	
	$('.totalMoney').html('总计（不含运费）：￥'+price.toFixed(2));
}


	function updateNum(arr) {
		//空数组：存被勾选的行的下标
//		arr.length = 0;
//		var le = $('.list_chk input').size(); //复选框的总个数
//		for(var i = 0; i < le; i++) {
//			if($('.list_chk input').eq(i).prop('checked')) {
//				//意味着这一行被勾选
//				arr.push(i);
//			}
//		}

		//		console.log(arr);

		//统计被勾选的行对应的数量，累加放到底部对应位置
		//统计被勾选的行对应的小计，累加放到底部对应位置
		var num = 0; //总数量
		var totalPrice = 0; //存总价
//		console.log(arr)
		for(var i = 0; i < arr.length; i++) {
			num += $('.sum').eq(arr[i]).val() * 1;
			var price = $('.sum_price span').eq(arr[i]).html(); //￥ 199.98
			console.log(price);
//		
			totalPrice += price*1;
		}

		//		console.log(num);

		$('.piece').html('已选 ' + num + ' 件商品');
//      $('.calBtn').css('background','orange');
		//		console.log(totalPrice.toFixed(2));
		$('.totalMoney').html('总计（不含运费）：￥ ' + totalPrice*1);

	}
		//手动输入价格
	$('.order_content').on('blur','.sum',function(){
//		console.log(12);
		price($(this));//小计变化

		updateNum();//刷新总数量和总价格
	});