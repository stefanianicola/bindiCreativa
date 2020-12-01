$(document).ready(function () {
	// scroll menu nav
	$(".navbar-nav").on('click', '.nav-link', function (event) {
		if (this.hash !== "") {
			event.preventDefault();

			var hash = this.hash;

			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 800, function () {
				window.location.hash = hash;
				$('#navbarNav').removeClass('show');
			});
			
		}
	});

	// Paralax animation - aparecen los bloques
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

		if (bodyScroll > (slideH + usH + (firstServiceH / 4))) {
			jQuery('#origen').addClass('qa-parallax-active');
		}

		if (bodyScroll > (slideH + usH + firstServiceH + (secondServiceH / 4))) {
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

// envia formulario por post
	$(function () {
		$("body").on("click", ".sendForm", function () {
			var nombre = $('#nombre').val();
			var apellido = $('#apellido').val();
			var correo = $('#correo').val();
			var mensaje = $('#mensaje').val();

			// borrar todos los border
			$("input").css('border-color', 'transparent');

			//valida inputs
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

			// esconder boton enviar
			$('.sendForm').addClass('d-none');
			// mostrar un loading 
			$('.load').removeClass('d-none');


				var inputName = $('#nombre').val();
				var inputApellido = $('#apellido').val();
				var inputCorreo = $('#correo').val();
				var inputMensaje = $('#mensaje').val();
				var wrapperRespuesta = $('.respuesta-wrapper');
				var respuestaMsg;
				var data = {
					nombre: inputName,
					apellido: inputApellido,
					correo: inputCorreo,
					mensaje: inputMensaje
				}

				// Assign handlers immediately after making the request,
				// and remember the jqxhr object for this request
				$.post( "envio.php", data, function(data) {
					//wrapperRespuesta.addClass('alert-success');
					wrapperRespuesta.addClass('alert-success');
					respuestaMsg = "Su consulta se envio correctamente";
				})
				.fail(function() {
					//wrapperRespuesta.addClass('alert-danger');
					wrapperRespuesta.addClass('alert-danger');
					respuestaMsg = "Ocurrió un error, su consulta no pudo ser enviada."
				})
				.always(function(){
					// esconder loading
					$('.load').addClass('d-none');
					$('.sendForm').removeClass('d-none');
					// mostrar mensaje en var respuesta
					wrapperRespuesta.text(respuestaMsg).removeClass('d-none');
					$("input").val("");
					$("#mensaje").val("");
				})
			}
		});
		});
});