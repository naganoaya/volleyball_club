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
    
    /*3回生*/
    
    $('.btn_md').click(function() {
        $('.md_main').fadeIn(200);
        
        var id =  $(this).attr("id");
        
        if(id == "member1"){
          $('.md01').fadeIn(200);
        }
        else if(id == "member2"){
           $('.md02').fadeIn(200);
        }
        else if(id == "member3"){
           $('.md03').fadeIn(200);
        }
        else if(id == "member21"){
           $('.md21').fadeIn(200);
        }
        else if(id == "member22"){
           $('.md22').fadeIn(200);
        }
        else if(id == "member23"){
           $('.md23').fadeIn(200);
        }
        else if(id == "member24"){
           $('.md24').fadeIn(200);
        }
        else if(id == "member25"){
           $('.md25').fadeIn(200);
        }
        else if(id == "member26"){
           $('.md26').fadeIn(200);
        }
        else if(id == "member27"){
           $('.md27').fadeIn(200);
        }
        else if(id == "member31"){
           $('.md31').fadeIn(200);
        }
        else if(id == "member32"){
           $('.md32').fadeIn(200);
        }
        else if(id == "member33"){
           $('.md33').fadeIn(200);
        }
        else if(id == "member34"){
           $('.md34').fadeIn(200);
        }
        else if(id == "member35"){
           $('.md35').fadeIn(200);
        }
        
        
        
    })
    
    $('.md_main').click(function() {
        $('.md_contents').fadeOut(200);
        $('.md_main').fadeOut(200);
    })
    
});

    
