//数量加减
$('#btnright').click(function(){
	var val=$(this).prev().val();
	val++;
	console.log(val);
	if(val>=100){
			val=100;//库存最大值
		}
		$(this).prev().val(val);
})
$('#btnleft').click(function(){
	var val=$(this).next().val();
	val--;
	console.log(val);
	if(val<=1){
			val=1;//库存最小值
		}
		$(this).next().val(val);
})

//渲染后台传id后要改变的样式(放大镜 、商品内容、价格)
function fn(){
	$.ajax({
		type:"post",
		url:"../api/getshuju.php",
		async:true,
		success: function(str) {
			console.log(str);
		}
	});
	
}

var url1=document.location.search;//document.location 这个对象包含了当前URL的信息,location.search 设置或获取href属性中跟在问号后面的部分
var gid=url1.split('?')[1];
console.log(gid)
function getgs(){
	$.ajax({
		type:"get",
		url:"../api/select_id.php",
		async:true,
		data:{
			gid:gid
		},
		success:function(str){
			var data=JSON.parse(str);
			console.log(data);
			var html1='';
			var html2='';
			for(var i =0;i<data.length;i++){
				html1+=`<div class="imgdet wrap">
											<div class="imgpart">
												<!-- 图片展示 -->
												<div class="pic">
													<img src="../${data[i].img}" alt="">
													<!-- 镜片 -->
													<div class="magnify"></div>
												</div>
												<!-- 放大后的图片, 放大后的图片的尺寸要设置为展示图片的倍数（2倍）-->
												<div class="bigpic">
													<img src="../${data[i].img}" alt="">
												</div>
											</div>
											<!-- 左侧图片列表 -->
											<div class="imglist">
												<ul>
													<li class="active">
														<img src="../${data[i].img}" alt="">
													</li>
													<li>
														<img src="../img/sj1.jpg" alt="">
													</li>
													<li>
														<img src="../${data[i].img}" alt="">
													</li>
													<li>
														<img src="../${data[i].img}" alt="">
													</li>
													<li>
														<img src="../${data[i].img}" alt="">
													</li>
												</ul>
											</div>
										</div>`;
				html2+=`<p class="content">${data[i].content}</p>
							<P class="price">￥${data[i].price}</P>`;						
			}
			$('.mainl').html(html1);
			$('#mainmain').html(html2);
		}
	});
}
getgs();

//放大镜
$('.mainl').on("mouseenter", "li", function() {
	$imgsrc = $(this).children("img").attr("src");
	$(this).addClass("active").siblings().removeClass("active");
	$('.mainl .imgpart .pic img').attr("src", $imgsrc);
	$('.mainl .imgpart .bigpic img').attr("src", $imgsrc)
});
 
$('.mainl').on('mousemove', '.imgpart .pic', function(e) {
	//		pic.mousemove(function(e) {
	$('.mainl .imgpart .pic .magnify').show();
	$('.mainl .imgpart .bigpic').show();
	$pagex = e.pageX;
	$pagey = e.pageY;
	$pictop = $('.mainl .imgpart .pic').offset().top;
	$picleft = $('.mainl .imgpart .pic').offset().left;
	$magnifyw = $('.mainl .imgpart .pic .magnify').width();
	$magnifyh = $('.mainl .imgpart .pic .magnify').height();
	$magnifytop = $pagey - $pictop - $magnifyh / 2;
	
	$magnifyleft = $pagex - $picleft - $magnifyw / 2;
	
	$picw = $('.mainl .imgpart .pic').width() - $magnifyw;
	//console.log($picw);
	$pich = $('.mainl .imgpart .pic').height() - $magnifyh;
	//console.log($pich);
	$magnifytop = $magnifytop < 0 ? 0 : $magnifytop;
	//console.log($magnifytop);
	$magnifyleft = $magnifyleft < 0 ? 0 : $magnifyleft;
	//console.log($magnifyleft);
	$magnifytop = $magnifytop > $pich ? $pich : $magnifytop;
	//console.log($magnifytop);
	$magnifyleft = $magnifyleft > $picw ? $picw : $magnifyleft;
	//console.log($magnifyleft);
	$('.mainl .imgpart .pic .magnify').css({
		top: $magnifytop,
		left: $magnifyleft
	});
	$minl = $('.mainl .imgpart .bigpic').width() - $('.mainl .imgpart .bigpic img').width();
	$mint = $('.mainl .imgpart .bigpic').height() - $('.mainl .imgpart .bigpic img').height();
	$objimgl = -$magnifyleft * 2;
	//console.log($objimgl);
	$objimgt = -$magnifytop * 2;
	//console.log($objimgt);
	$objimgl = $objimgl < $minl ? $minl : $objimgl;
	//console.log($objimgl);
	$objimgt = $objimgt < $mint ? $mint : $objimgt;
	//console.log($objimgt);
	$('.mainl .imgpart .bigpic img').css({
		top: $objimgt,
		left: $objimgl
	});
});
$('.mainl').on('mouseleave', '.imgpart .pic', function(e) {
	//		pic.mouseleave(function() {
	$('.mainl .imgpart .pic .magnify').hide();
	$('.mainl .imgpart .bigpic').hide()
});

//点击加入购物车加入数据库
$('.waitb').click(function(){
	$.ajax({
		type:"get",
		url:"../api/select_id.php",
		async:true,
		data:{
			gid:gid
		},
		success:function(str){
			//console.log(str)
			var data=JSON.parse(str);
			console.log(data);
			var id=data[0].id;
			var price=data[0].price;
			var img = data[0].img;
			var content = data[0].content;
			var num = $('#shu').val();
			console.log(num)
			$.ajax({
				type:"get",
				url:"../api/insert_cart.php",
				async:true,
				data:{
					id:id,
					price:price,
					img:img,
					content:content,
					num:num
				},
				success:function(str){
					console.log(str);
					if(confirm('添加成功，是否跳转至购物车')) {
					location.href ="shopcar.html";
				}
				}
			});

		}
	});

});




//渲染详情页右边的商品推荐
function list1(){
	$.ajax({
		type:"get",
		url:"../api/getshuju.php",
		async:true,
		success:function(str){
//			console.log(str)
            var data = JSON.parse(str);
            var html1= '';
            for($i=28;$i<36;$i++){
            	html1 +=`<li><img src="../${data[$i].img}"/><h3>￥${data[$i].price}</h3><p>${data[$i].content}</p></li>`
            }
            $('.cardl_hl').html(html1);
		}
	});
}
list1();


