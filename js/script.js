//ファーストビューメイン画像 100ミリ秒後に1000ミリ秒かけてアニメーション完了
setTimeout(function(){
	$(".img-mv").stop().animate({opacity:'1'},1000);
},100);

//header_wrap
/*
setTimeout(function(){
	$('.header').animate({'top':'0px'},{ duration: 'slow', easing: 'swing', });
},3000);

$(window).scroll(function () {
	if($(window).scrollTop() > 400) {
		$('#header_wrap').animate({'top':'0px'},{ duration: 'fast', easing: 'swing', });
	}
});
*/


//メニューボタンアニメーション
$(".openbtn6").click(function () {
    $(this).toggleClass('active');
});


// TextTypingというクラス名がついている子要素（span）を表示から非表示にする定義
function TextTypingAnime() {
	$('.TextTyping').each(function () {
		var elemPos = $(this).offset().top - 50;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		var thisChild = "";
		if (scroll >= elemPos - windowHeight) {
			thisChild = $(this).children(); //spanタグを取得
			//spanタグの要素の１つ１つ処理を追加
			thisChild.each(function (i) {
				var time = 100;
				//時差で表示する為にdelayを指定しその時間後にfadeInで表示させる
				$(this).delay(time * i).fadeIn(time);
			});
		} else {
			thisChild = $(this).children();
			thisChild.each(function () {
				$(this).stop(); //delay処理を止める
				$(this).css("display", "none"); //spanタグ非表示
			});
		}
	});
}

// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
	//spanタグを追加する
	var element = $(".TextTyping");
	element.each(function () {
		var text = $(this).html();
		var textbox = "";
		text.split('').forEach(function (t) {
			if (t !== " " && t !== "<" && t !== "b" && t !== "r" && t !== ">") {
				textbox += '<span>' + t + '</span>';
			} else {
				textbox += t;
			}
		});
		$(this).html(textbox);

	});

	TextTypingAnime();
});

//アコーディオンをクリックした時の動作
$('.title').on('click', function() {//タイトル要素をクリックしたら
    var findElm = $(this).next(".box");//直後のアコーディオンを行うエリアを取得し
    $(findElm).slideToggle();//アコーディオンの上下動作
      
    if($(this).hasClass('close')){//タイトル要素にクラス名closeがあれば
      $(this).removeClass('close');//クラス名を除去し
    }else{//それ以外は
      $(this).addClass('close');//クラス名closeを付与
    }
  });

//目次を閉じるをクリックした時の動作
/*
$('.theory__index--close').on('click', function() {
    $('.box').slideToggle();//アコーディオンの上下動作
    $('.title').addClass('close');//クラス名closeを付与
  });
  */

  $('.theory__index--close').on('click', function() {
    var $title = $('.box').prev('.title'); // .boxの直前の.title要素を選択
    $('.box').slideToggle(); // アコーディオンの上下動作

    if($title.hasClass('close')){//タイトル要素にクラス名closeがあれば
        $title.removeClass('close');//クラス名を除去し
      }else{//それ以外は
        $title.addClass('close');// .boxの直前の.titleにcloseクラスを付与
      }
});
  
  //ページが読み込まれた際にopenクラスをつけ、openがついていたら開く動作※不必要なら下記全て削除
  /*
  $(window).on('load', function(){
    $('.accordion-area li:first-of-type section').addClass("open"); //accordion-areaのはじめのliにあるsectionにopenクラスを追加
    $(".open").each(function(index, element){ //openクラスを取得
      var Title =$(element).children('.title'); //openクラスの子要素のtitleクラスを取得
      $(Title).addClass('close');       //タイトルにクラス名closeを付与し
      var Box =$(element).children('.box'); //openクラスの子要素boxクラスを取得
      $(Box).slideDown(500);          //アコーディオンを開く
    });
  });
  */


// #で始まるアンカーをクリックした場合に処理 
$('a[href^="#"]').click(function(){
    // 移動先を90px上にずらす
    var adjust = -90;
    // スクロールの速度
    var speed = 400; // ミリ秒
    // アンカーの値取得
    var href= $(this).attr("href");
    // 移動先を取得
    var target = $(href == "#" || href == "" ? 'html' : href);
    // 移動先を調整
    var position = target.offset().top + adjust;
    // スムーススクロール
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });