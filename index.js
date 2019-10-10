$(function () {
	
	var page = 0;

	
	var lastPage = parseInt($("#slide img").length - 1);

	
	$("#slide img").css("display", "none");

	
	$("#slide img").eq(page).css("display", "block");

	
	function changePage() {
		$("#slide img").fadeOut(1000);
		$("#slide img").eq(page).fadeIn(1000);
	};

	
	var Timer;

	function startTimer() {
		Timer = setInterval(function () {
			if (page === lastPage) {
				page = 0;
				changePage();
			} else {
				page++;
				changePage();
			};
		}, 5000);
	}
	
	function stopTimer() {
		clearInterval(Timer);
	}

	
	startTimer();
});


jQuery(function () {
	jQuery(window).scroll(function () {
		jQuery('.fadein').each(function () {
			var elemPos = jQuery(this).offset().top;
			var scroll = jQuery(window).scrollTop();
			var windowHeight = jQuery(window).height();
			if (scroll > elemPos - windowHeight + 100) {
				jQuery(this).addClass('scrollin');
			}
		});
	});
	jQuery(window).scroll();
});