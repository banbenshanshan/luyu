$('#btn').click(function() {
	$tel = $('#input1').val();
	$password = $('#input2').val();
	$.ajax({
		type: "post",
		url: "../api/select_login.php",
		async: true,
		data: {
			tel: $tel,
			password: $password
		},
		success: function(str) {
			//			console.log(str);
			if(str == 'no') {
				if(confirm('登录成功')) {
					location.href = '../index.html';
				}
			} else {
				$.ajax({
					type: "post",
					url: "../api/select_user.php",
					async: true,
					data: {
						tel: $tel
					},
					success: function(str) {
						console.log(str)
						if(str == 'yes') {
							if(confirm('您还没有注册，是否需要注册')) {
								location.href = 'reg.html';
							}
						} else if(str == 'no') {
							alert('密码错误');
						}
					}
				});

			}

		}
	});
});