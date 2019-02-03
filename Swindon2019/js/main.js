$('#head .arrow-down').click(function() {
	$('html, body').animate({
     scrollTop: $("#venue").offset().top
    });
});

$('#venue .arrow-down').click(function() {
	$('html, body').animate({
     scrollTop: $("#find-us").offset().top
    });
});

$('#find-us .arrow-up').click(function() {
	$('html, body').animate({
     scrollTop: $("#head").offset().top
    });
});