'use strict';

//正则验证
$isok1 = false;
$isok2 = false;
function user(now) {
	var reg2 = /^1[34578]\d{9}$/;
	if (!reg2.test($('#input1').val())) {
		$('#span1').html("请输入手机号");
		$('#span1').css('color', 'red');
		$isok1 = false;
	} else {
		$('#span1').html("合法");
		$('#span1').css('color', 'green');

		$isok1 = true;
		console.log($isok1);
	}
}
$('#input1').blur(function () {
	now = $(this);
	user(now);
});
function paswd(psw) {
	var pas1 = /(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{6,16}$/;
	if (!pas1.test($('#input2').val())) {
		$('#span2').html("请输入密码");
		$('#span2').css('color', 'red');
		$isok2 = false;
	} else {
		$('#span2').html("合法");
		$('#span2').css('color', 'green');
		$isok2 = true;
		console.log($isok2);
	}
}

$('#input2').blur(function () {
	psw = $(this);
	paswd(psw);
});

//注册
$('#btn').click(function () {
	$tel = $('#input1').val();
	//console.log($tel);
	if ($isok1 && $isok2 && $isok3) {
		$.ajax({
			type: "post",
			url: "../api/select_user.php",
			async: true,
			data: {
				tel: $tel
			},
			success: function success(str) {
				$password = $('#input2').val();
				if (str == 'yes') {
					$.ajax({
						type: "post",
						url: "../api/insert_user.php",
						async: true,
						data: {
							tel: $tel,
							password: $password
						},
						success: function success(str) {
							if (confirm('注册成功')) {
								$('#input1').val('');
								$('#input2').val('');
								location.href = 'login.html';
							} else {
								$('#input1').val('');
								$('#input2').val('');
								console(456);
							}
						}
					});
				} else {
					alert('该手机号已被注册');
					console(123);
				}
			}
		});
	} else {
		alert('请正确填入信息！');
	}
});