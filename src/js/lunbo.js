$(function(){
	/*
		原理：出去一张，减掉拼接到尾部(核心)
		
		1.开启定时器，让ul往左边运动
		2.出去一张，就快速减掉拼接到尾部，ul归位
		3.点击上下按钮可以切换
	*/
	
	var iW=$('#imglist li').eq(0).outerWidth();
	
	//1.开启定时器，让ul往左边运动
	var timer=null;
	clearInterval(timer);
	timer=setInterval(next,2500);//间隔2秒切一个图
	
	function next(){
		//ul往左边运动一个图片距离：1000毫秒运动时间，匀速的
		$('#moveimg').animate({'left':-iW},500,'linear',function(){
			//回调：出去一张，就快速减掉拼接到尾部
			$('#moveimg li:first').insertAfter($('#moveimg li:last'));
			//ul归位
			$('#moveimg').css('left',0);
		});
	}
	
	function prev(){
		//把最后一张剪切作为ul的第一张
		$('#moveimg li:last').insertBefore($('#moveimg li:first'));
		//ul要给最后一张预留位置：隐藏在左侧 -iW
		$('#moveimg').css('left',-iW);
		//把最后一张挪进可视区
		$('#moveimg').animate({'left':0},500,'linear');
	}
	
	//3.点击上下按钮可以切换
	
	$('#lunbo').hover(function(){
		clearInterval(timer);
	},function(){
		clearInterval(timer);
		timer=setInterval(next,2500);//间隔2秒切一个图
	});
	
	//点击下一张
	$('#next').click(function(){
		next();
	});
	
	//点击上一张
	$('#prev').click(function(){
		prev();
	});
	
});
