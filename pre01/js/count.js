$('#count-up01').on('inview', function(event, isInView) {
	if (isInView) {
		//要素が見えたときに実行する処理
		$("#count-up01 .count-up-item").each(function(){
			$(this).prop('Counter',0).animate({//0からカウントアップ
		        Counter: $(this).text()
		    }, {
				// スピードやアニメーションの設定
		        duration: 1000,//数字が大きいほど変化のスピードが遅くなる。2000=2秒
		        easing: 'swing',//動きの種類。他にもlinearなど設定可能
		        step: function (now) {
		            $(this).text(Math.ceil(now));
		        }
		    });
            $('.canma').addClass('is-animated');
		});
	} else {
		$('.canma').removeClass('is-animated');
	}
});

$('#count-up02').on('inview', function(event, isInView) {
	if (isInView) {
		//要素が見えたときに実行する処理
		$("#count-up02 .count-up-item").each(function(){
			$(this).prop('Counter',0).animate({//0からカウントアップ
		        Counter: $(this).text()
		    }, {
				// スピードやアニメーションの設定
		        duration: 2000,//数字が大きいほど変化のスピードが遅くなる。2000=2秒
		        easing: 'swing',//動きの種類。他にもlinearなど設定可能
		        step: function (now) {
		            $(this).text(Math.ceil(now));
		        }
		    });
		});
	} else {
		$('.canma').removeClass('is-animated');
	}
});

$('#count-up03').on('inview', function(event, isInView) {
	if (isInView) {
		//要素が見えたときに実行する処理
		$("#count-up03 .count-up-item").each(function(){
			$(this).prop('Counter',0).animate({//0からカウントアップ
		        Counter: $(this).text()
		    }, {
				// スピードやアニメーションの設定
		        duration: 2000,//数字が大きいほど変化のスピードが遅くなる。2000=2秒
		        easing: 'swing',//動きの種類。他にもlinearなど設定可能
		        step: function (now) {
		            $(this).text(Math.ceil(now));
		        }
		    });
            $('.canma').addClass('is-animated');
		});
	} else {
		$('.canma').removeClass('is-animated');
	}
});

$('#count-up04').on('inview', function(event, isInView) {
	if (isInView) {
		//要素が見えたときに実行する処理
		$("#count-up04 .count-up-item").each(function(){
			$(this).prop('Counter',0).animate({//0からカウントアップ
		        Counter: $(this).text()
		    }, {
				// スピードやアニメーションの設定
		        duration: 2000,//数字が大きいほど変化のスピードが遅くなる。2000=2秒
		        easing: 'swing',//動きの種類。他にもlinearなど設定可能
		        step: function (now) {
		            $(this).text(Math.ceil(now));
		        }
		    });
            $('.canma').addClass('is-animated');
		});
	} else {
		$('.canma').removeClass('is-animated');
	}
});