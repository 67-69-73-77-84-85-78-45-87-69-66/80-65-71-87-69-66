	$(document).ready(main);
		//Variables Slider
		var clickSlider = 0;
		var positionLeft = 0;

		//Variables Menu Boton
		var counterMenu = 1;

		function main(){

			//Movimiento al oprimir el menu
			$('.buttonMenu').click(function(){

				if(counterMenu == 1 ){
					$('nav.menu').animate({
						left:'0'
					});
					counterMenu = 0;
				} else {
					counterMenu = 1;
					$('nav.menu').animate({
						left:'-100%'
					});
				};
			});

			//Slider
			window.addEventListener('load',init);

			function init(){

				var pauseSlider = 0;

				//Botones de Posición
				$('.indicatorPosition').click(function(){

					clickSlider=$(this).attr('positionIndicator')-1;
					positionLeft=(-25*(clickSlider));
					pauseSlider=1;

					$('.sliderImage').animate({
						left: positionLeft + '%'
					});
					clearInterval(timeSlider);

					$('.indicatorPosition').css({
						'opacity' : '0.5'
					});
					$(this).css({
						'opacity' : '1'
					});
					//console.log(clickSlider);
				});
				
				//Botones flechas izqueirda y derecha	
				$('.sliderArrowRight').click(function(){

					clickSlider ++;
					if ( clickSlider > 0 && clickSlider < 3 ) {
						positionLeft = ( -25 * clickSlider );
					} else if ( clickSlider >= 3 ) {
						clickSlider = 2;
					};
					$('.sliderImage').animate({
						left: positionLeft + '%'
					});
					$('.indicatorPosition').css({
						'opacity' : '0.5'
					});
					$('.positionSlider li:nth-child(' + (clickSlider+1) + ')').css({
						'opacity' : '1'
					});
					//console.log(clickSlider);
					clearInterval(timeSlider);

				});


				$('.sliderArrowLeft').click(function(){
					clickSlider --;
					if ( clickSlider >= 0 && clickSlider < 3 ) {
						positionLeft = ( -25 * clickSlider );
					} else if ( clickSlider <= 0 ) {
						clickSlider = 0;
					};
					$('.sliderImage').animate({
						left: positionLeft + '%'
					});
					$('.indicatorPosition').css({
						'opacity' : '0.5'
					});
					$('.positionSlider li:nth-child(' + (clickSlider+1) + ')').css({
						'opacity' : '1'
					});


					pauseSlider = 1 ;

					console.log(clickSlider);

					clearInterval(timeSlider);

				});

				//Cambio de imagenes del slider en el tiempo
				var timeSlider = window.setInterval( function() { 

					clickSlider++; 

					if( clickSlider > 0 && clickSlider < 3){

						positionLeft = ( -25 * (clickSlider));
						$('.sliderImage').animate({
							left: positionLeft + '%'
						})
					} else if ( clickSlider >= 3) {

						clickSlider = 0 ;
						positionLeft = ( -25 * (clickSlider));
						$('.sliderImage').animate({
							left: '0' + '%'
						})
					}

					$('.indicatorPosition').css({
						'opacity' : '0.5'
					});
					$('.positionSlider li:nth-child(' + (clickSlider+1) + ')').css({
						'opacity' : '1'
					});

					//console.log(clickSlider)
				},5000 

				);
				
			};
		};

//Fondo Movimiento
	$(document).ready(function(){

		$(window).scroll(function(){

			var valueScroll = $(window).scrollTop();
			var position = (valueScroll * 0.10);
			$('body').css({
				'background-position' :'0 -' + position + 'px'
			});
		});
	});