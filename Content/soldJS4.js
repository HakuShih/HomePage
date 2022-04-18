var timer = 4000;

var i = 0;
var max = $('.e > li').length;
console.log(i, max);
$(".e > li").eq(i).addClass('active').css('left', '0');
$(".e > li").eq(i + 1).addClass('active').css('left', '25%');
$(".e > li").eq(i + 2).addClass('active').css('left', '50%');
$(".e > li").eq(i + 3).addClass('active').css('left', '75%');

setInterval(function () {

	$(".e > li").removeClass('active');
	   
	$(".e > li").eq(i).css("transition-delay", '0.25s');
	$(".e > li").eq(i + 1).css("transition-delay", '0.5s');
	$(".e > li").eq(i + 2).css("transition-delay", '0.75s');
	$(".e > li").eq(i + 3).css("transition-delay", '1s');

	if (i < max - 4) {
		i = i + 4;
	}
	else {
		i = 0;
	}

	$(".e > li").eq(i).css('left', '0').addClass('active').css('transition-delay', '1.25s');
	$(".e > li").eq(i + 1).css('left', '25%').addClass('active').css('transition-delay', '1.5s');
	$(".e > li").eq(i + 2).css('left', '50%').addClass('active').css('transition-delay', '1.75s');
	$(".e > li").eq(i + 3).css('left', '75%').addClass('active').css('transition-delay', '2s');
}, timer);
