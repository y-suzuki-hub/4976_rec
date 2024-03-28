//ファーストビューメイン画像 300ミリ秒後に1000ミリ秒かけてアニメーション完了
setTimeout(function(){
	$(".img-mv").stop().animate({opacity:'1'},1000);
},300);

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
$(".openbtn6").click(function () {//ボタンがクリックされたら
    $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
      $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
  });
  
  $("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
      $(".openbtn6").removeClass('active');//ボタンの activeクラスを除去し
      $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
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

//4976理論アコーディオンをクリックした時の動作
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
  $(window).on('load', function(){
    $('.accordion-area li:first-of-type section').addClass("open"); //accordion-areaのはじめのliにあるsectionにopenクラスを追加
    $(".open").each(function(index, element){ //openクラスを取得
      var Title =$(element).children('.title'); //openクラスの子要素のtitleクラスを取得
      $(Title).addClass('close');       //タイトルにクラス名closeを付与し
      var Box =$(element).children('.box'); //openクラスの子要素boxクラスを取得
      $(Box).slideDown(500);          //アコーディオンを開く
    });
  });
  

  $(function() {
    var offset = $('#nav-4976').offset();
    var scrollThreshold = offset.top - 65; // 65pxスクロールしたら固定にする

    $(window).scroll(function () {
        if ($(window).scrollTop() > scrollThreshold) {
            $('#nav-4976').addClass('fixed');
        } else {
            $('#nav-4976').removeClass('fixed');
        }
    });
});


//ページ上部へ　スクロールした際の動きを関数でまとめる
function PageTopAnime() {
    var scroll = $(window).scrollTop();
    if (scroll >= 1200){//上から1200pxスクロールしたら
      $('#page-top').removeClass('DownMove');//#page-topについているDownMoveというクラス名を除く
      $('#page-top').addClass('UpMove');//#page-topについているUpMoveというクラス名を付与
    }else{
      if($('#page-top').hasClass('UpMove')){//すでに#page-topにUpMoveというクラス名がついていたら
        $('#page-top').removeClass('UpMove');//UpMoveというクラス名を除き
        $('#page-top').addClass('DownMove');//DownMoveというクラス名を#page-topに付与
      }
    }
  }
  
  // 画面をスクロールをしたら動かしたい場合の記述
  $(window).scroll(function () {
    PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
  });
  
  // ページが読み込まれたらすぐに動かしたい場合の記述
  $(window).on('load', function () {
    PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
  });
  
  // #page-topをクリックした際の設定
  $('#page-top a').click(function () {
      $('body,html').animate({
          scrollTop: 0//ページトップまでスクロール
      }, 500);//ページトップスクロールの速さ。数字が大きいほど遅くなる
      return false;//リンク自体の無効化
  });


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