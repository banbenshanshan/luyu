$page = 1;
$qty = 10;
function listx(page, qty, url) {
console.log(url)
	$.ajax({
		type: "get",
		url: url,
		async: true,
		data: {
			page: page,
			qty: qty
		},
		success: function(str) {
			console.log(str);
			var data = JSON.parse(str);
			console.log(data)
			var html2 = '';
			for(var i = 0; i < data.length; i++) {
				html2 += `<a href="../html/details.html?${data[i].id}"><li><img src="../${data[i].img}"/><p>${data[i].content}</p><h3>￥${data[i].price}</h3></li></a>`
			}
			$('#olist').html(html2);
			
		}
	});
}
listx($page, $qty, '../api/page.php');


//渲染页面以及分页效果
//渲染页面
var list = document.getElementById('olist');
var opage = document.getElementById('page');
var spans = opage.getElementsByTagName('span');

var xhr = new XMLHttpRequest();
xhr.open('GET', '../api/page.php?page=1&qty=10', true);
xhr.send();

xhr.onreadystatechange = function() {
	if(xhr.readyState == 4 && xhr.status == 200) {
		//数据渲染
		var all = JSON.parse(xhr.responseText);
		var data = all.list;
		//console.log(data);
		var html2 = '';
		for($i = 0; $i < data.length; $i++) {
			html2 += `<a href="../html/details.html?${data[$i].id}"><li><img src="../${data[$i].img}"/><p>${data[$i].content}</p><h3>￥${data[$i].price}</h3></li></a>`
		}
		$('#olist').html(html2);

		//创建分页节点
		var count = Math.ceil(all.total / 10);
		//console.log(count);
		var html2 = '';
		for(var i = 0; i < count; i++) {
			html2 += '<span>' + (i + 1) + '</span>';
		}
		opage.innerHTML = html2;
//		var index = parseInt(all.page) - 1;
		page.children[0].className='active';
		
	}
}

//绑定事件点击跳转
var now = 1;
function update(){
	if(now!=1){
		prev.style.color='#000';
	}else{
		prev.style.color='#ccc';
	}
	if(now!=5){
		next.style.color='#000';
	}else{
		next.style.color='#ccc';
	}
}
function creat(){
	var all = JSON.parse(xhr.responseText);
	var data = all.list;
		console.log(data);
		var html2 = '';
		for(var i = 0; i < data.length; i++) {
			html2 += `<a href="../html/details.html?${data[i].id}"><li><img src="../${data[i].img}"/><p>${data[i].content}</p><h3>￥${data[i].price}</h3></li></a>`
		}
		$('#olist').html(html2);
}
opage.onclick = function(ev) {
	var ev = ev || window.event;
	//点哪个是哪个
	if(ev.target.tagName.toLowerCase() == 'span') {
		//ev.target  等同  this
		now = ev.target.innerText; //获取页码
		//						console.log(num);
		//设置参数
		var url = `../api/page.php?page=${now}&qty=10&time=new Date()`;
		xhr.open('GET', url, true);
		xhr.send();
		xhr.onreadystatechange = function() {
			if(xhr.readyState == 4 && xhr.status == 200) {
				
				//数据渲染
				var all = JSON.parse(xhr.responseText);
				var data = all.list;
				console.log(data);
				var html2 = '';
				for($i = 0; $i < data.length; $i++) {
					html2 += `<a href="../html/details.html?${data[$i].id}"><li><img src="../${data[$i].img}"/><p>${data[$i].content}</p><h3>￥${data[$i].price}</h3></li></a>`
				}
				$('#olist').html(html2);
			}
		}
		//清空
		for(var i = 0; i < page.children.length; i++) {
			page.children[i].className = '';
		}
		page.children[now - 1].className = 'active';
	}
}
prev.onclick=function(){
	now--;
	if(now<=1){
		now=1;//最小第一页
	}
	
	update();
	
	var url=`../api/page.php?page=${now}&qty=10&time=new Date()`;
	xhr.open('GET',url,true);
	xhr.send();
	xhr.onreadystatechange=function(){
			if(xhr.readyState==4 && xhr.status==200){
				var str=xhr.responseText;
				var arr=JSON.parse(str);
				creat(arr);//渲染数据
				
				//清空
				for(var i=0;i<page.children.length;i++){
					page.children[i].className='';
				}
				page.children[now-1].className='active';
			}
		}
}
next.onclick=function(){
	now++;
	if(now>=5){
		now=5;//最大就是最后一页
		
	}	
	update();
	var url=`../api/page.php?page=${now}&qty=10&time=new Date()`;
	xhr.open('GET',url,true);
	xhr.send();
	xhr.onreadystatechange=function(){
			if(xhr.readyState==4 && xhr.status==200){
				var str=xhr.responseText;
				var arr=JSON.parse(str);
				creat(arr);//渲染数据
				
				//清空
				for(var i=0;i<page.children.length;i++){
					page.children[i].className='';
				}
				page.children[now-1].className='active';
			}
		}
}
//按价格升序
$('.mainhead .bb .up').click(function() {
	//console.log(listx)
	listx($page, $qty, '../api/order_by.php');
});
//按价格降序
$('.mainhead .bb .down').click(function() {
	//console.log(listx)
	listx($page, $qty, '../api/order_bydesc.php');
});