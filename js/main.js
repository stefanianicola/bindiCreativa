$(document).ready(function() {
	// One Page Animation
    $("a").on('click', function(event) {
        if (this.hash !== "") {
          event.preventDefault();
    
          var hash = this.hash;

          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){
            window.location.hash = hash;
          });
        } 
      });

 	// Paralax animation
   var playScroll = function(){
		bodyScroll = jQuery(window).scrollTop();
		slideH = jQuery('.comunicacion').length > 0 ? jQuery('.comunicacion').outerHeight() : 0;
		usH = jQuery('#escuchanos').length > 0 ? jQuery('#escuchanos').outerHeight( true ) : 0;
		firstServiceH = jQuery('#services').length > 0 ? jQuery('#services').outerHeight( true ) : 0;
		secondServiceH = jQuery('#origen').length > 0 ? jQuery('#origen').outerHeight( true ) : 0;
		thirdServiceH = jQuery('#credenciales').length > 0 ? jQuery('#credenciales').outerHeight( true ) : 0;
		//fourthServiceH = jQuery('#qa-fourth-service').length > 0 ? jQuery('#qa-first-service').outerHeight( true ) : 0;
		
		// items homepage animation
		if(bodyScroll > (slideH/2)) {
			jQuery('#escuchanos').addClass('qa-parallax-active');
		}else{
			//jQuery('#usPage').removeClass('qa-parallax-active');
		}

		if(bodyScroll > (slideH+(usH/2))) {
			jQuery('#services').addClass('qa-parallax-active');
		}else{
      // jQuery('#services').removeClass('qa-parallax-active');
      // jQuery('#services').addClass('qa-parallax');
		}

		if(bodyScroll > (slideH+usH+(firstServiceH/3))) {
			jQuery('#origen').addClass('qa-parallax-active');
		}else{
			//jQuery('#qa-second-service').removeClass('qa-parallax-active');
		}

		if(bodyScroll > (slideH+usH+firstServiceH+(secondServiceH/3))) {
			jQuery('#credenciales').addClass('qa-parallax-active');
		}else{
			//jQuery('#qa-third-service').removeClass('qa-parallax-active');
		}

	// 	if(bodyScroll > (slideH+usH+firstServiceH+secondServiceH+(thirdServiceH/4))) {
	// 		jQuery('#qa-fourth-service').addClass('qa-parallax-active');
	// 	}else{
	// 		//jQuery('#qa-fourth-service').removeClass('qa-parallax-active');
	// 	}
	 }

	$( window).scroll(function() {
		var winWidth = window.outerWidth;
		if (winWidth > 1024) {
			playScroll();
		}
	});


});