//ファーストビューメイン画像
setTimeout(function(){
	$(".img-mv").stop().animate({opacity:'1'},1000);
},100);

//header_wrap
$(window).scroll(function () {
	if($(window).scrollTop() > 400) {
		$('#header_wrap').animate({'top':'0px'},{ duration: 'fast', easing: 'swing', });
	}
});

$(".openbtn6").click(function () {
    $(this).toggleClass('active');
});