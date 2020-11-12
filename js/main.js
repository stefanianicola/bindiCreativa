$(document).ready(function () {
	// One Page Animation
	$("a").on('click', function (event) {
		if (this.hash !== "") {
			event.preventDefault();

			var hash = this.hash;

			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 800, function () {
				window.location.hash = hash;
			});
		}
	});

	// Paralax animation
	var playScroll = function () {
		bodyScroll = jQuery(window).scrollTop();
		slideH = jQuery('.comunicacion').length > 0 ? jQuery('.comunicacion').outerHeight() : 0;
		usH = jQuery('#escuchanos').length > 0 ? jQuery('#escuchanos').outerHeight(true) : 0;
		firstServiceH = jQuery('#services').length > 0 ? jQuery('#services').outerHeight(true) : 0;
		secondServiceH = jQuery('#origen').length > 0 ? jQuery('#origen').outerHeight(true) : 0;
		thirdServiceH = jQuery('#credenciales').length > 0 ? jQuery('#credenciales').outerHeight(true) : 0;

		// items homepage animation
		if (bodyScroll > (slideH / 2)) {
			jQuery('#escuchanos').addClass('qa-parallax-active');
		}

		if (bodyScroll > (slideH + (usH / 2))) {
			jQuery('#services').addClass('qa-parallax-active');
		}

		if (bodyScroll > (slideH + usH + (firstServiceH / 3))) {
			jQuery('#origen').addClass('qa-parallax-active');
		}

		if (bodyScroll > (slideH + usH + firstServiceH + (secondServiceH / 3))) {
			jQuery('#credenciales').addClass('qa-parallax-active');
		}
		if (bodyScroll > 0) {
			$('.wrapper-nav').addClass('contrain');
		} else {
			$('.wrapper-nav').removeClass('contrain');
		}
	}

	var winWidth = window.outerWidth;

	$(window).scroll(function () {
		
		if (winWidth > 1024) {
			playScroll();
		}
	});

	var image = document.getElementsByClassName('thumbnail');
	new simpleParallax(image, {
		overflow: true
	});

	if (winWidth < 600) {
		new simpleParallax(image, {
			scale: 1.5
		});
	}


	$(function () {
		$("body").on("submit", "form", function () {
			var nombre = document.getElementById("nombre").value;
			var apellido = document.getElementById("apellido").value;
			var correo = document.getElementById("correo").value;
			var mensaje = document.getElementById("mensaje").value;
			if (nombre == "") {
				$('#nombre').focus();
				$('#nombre').css('border-color', 'red');
				return false;
			} else if (apellido == "") {
				$('#apellido').focus();
				$('#apellido').css('border-color', 'red');
				return false;
			} else if (correo == "") {
				$('#correo').focus();
				$('#correo').css('border-color', 'red');
				return false;
			} else if (mensaje == "") {
				$('#mensaje').focus();
				$('#mensaje').css('border-color', 'red');
				return false;
			} else {
				var formData = new FormData(this);
				$('input').val('');
				$('textarea').val('');
				$.ajax({
					url: '../envio.php',
					data: formData,
					processData: false,
					contentType: false,
					type: 'POST',
					success: function () {
					},
					error: function (xhr, ajaxOptions, thrownError) {
						$('.msg').text(thrownError);
					}
				});
				return false;
			}
		});
		});

});