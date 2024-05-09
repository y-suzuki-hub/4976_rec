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
            $('#count-up01 .canma').addClass('is-animated');
		});
	} else {
		$('#count-up01 .canma').removeClass('is-animated');
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
			$('#count-up02 .canma').addClass('is-animated');
		});
	} else {
		$('#count-up02 .canma').removeClass('is-animated');
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
            $('#count-up03 .canma').addClass('is-animated');
		});
	} else {
		$('#count-up03 .canma').removeClass('is-animated');
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
            $('#count-up04 .canma').addClass('is-animated');
		});
	} else {
		$('#count-up04 .canma').removeClass('is-animated');
	}
});

$('#count-up05').on('inview', function(event, isInView) {
	if (isInView) {
		//要素が見えたときに実行する処理
		$("#count-up05 .count-up-item").each(function(){
			$(this).prop('Counter',0).animate({//0からカウントアップ
		        Counter: $(this).text()
		    }, {
				// スピードやアニメーションの設定
		        duration: 10000,//数字が大きいほど変化のスピードが遅くなる。2000=2秒
		        easing: 'swing',//動きの種類。他にもlinearなど設定可能
		        step: function (now) {
		            $(this).text(Math.ceil(now));
		        }
		    });
            $('#count-up05 .canma').addClass('is-animated');
		});
	} else {
		$('#count-up05 .canma').removeClass('is-animated');
	}
});