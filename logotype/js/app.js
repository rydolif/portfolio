document.addEventListener("DOMContentLoaded", function() {

//---------------------------modal-tabs-----------------------
	$('.modal--cards__tabs_item').hide();
	$('.modal--cards__tabs_item:first').show();
	$('.modal--cards__tabs ul a:first').addClass('active');
	$('.modal--cards__tabs ul a').click(function(event){
		event.preventDefault();
		$('.modal--cards__tabs ul a').removeClass('active');
		$(this).addClass('active');
		$('.modal--cards__tabs_item').hide();
		var selectTab = $(this).attr('href');
		$(selectTab).fadeIn();
	});

//------------------------slider-modal-----------------------------------
	$(".modal").each(function(index, el) {
		$(el).addClass('modal-' + index);
		
		var galleryThumbs = new Swiper('.modal-' + index + ' .gallery-thumbs', {
			spaceBetween: 15,
			slidesPerView: 4,
			loop: true,
			freeMode: true,
			loopedSlides: 5, //looped slides should be the same
			watchSlidesVisibility: true,
			watchSlidesProgress: true,
		});
		var galleryTop = new Swiper('.modal-' + index + ' .gallery-top', {
			spaceBetween: 15,
			loop:true,
			loopedSlides: 5, //looped slides should be the same
			thumbs: {
				swiper: galleryThumbs,
			},
		});
	});

//------------------------slider-hero-----------------------------------
	var swiper = new Swiper('.hero__slider', {
		slidesPerView: 1,
		effect: 'fade',
		// autoplay: {
		// 	delay: 5000,
		// 	disableOnInteraction: false,
		// },
		pagination: {
			el: '.hero__pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.hero__button_next',
			prevEl: '.hero__button_prev',
		},
		scrollbar: {
			el: '.hero__scrollbar',
		},
	});

//------------------------slider-cards-----------------------------------
	var swiper = new Swiper('.cards__slider', {
		slidesPerView: 1,
		spaceBetween: 15,
		pagination: {
			el: '.cards__nav_pagination',
			type: 'fraction',
		},
		navigation: {
			nextEl: '.cards__nav_next',
			prevEl: '.cards__nav_prev',
		},
		breakpoints: {
			400: {
				slidesPerView: 2,
			},
			767: {
				slidesPerView: 3,
			},
			992: {
				slidesPerView: 4,
				spaceBetween: 20,
			}
		}
	});

	var swiper = new Swiper('.cards__slider--three-block', {
		slidesPerView: 1,
		spaceBetween: 15,
		pagination: {
			el: '.cards__nav_pagination',
			type: 'fraction',
		},
		navigation: {
			nextEl: '.cards__nav_next',
			prevEl: '.cards__nav_prev',
		},
		breakpoints: {
			576: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 15,
			},
			1200: {
				slidesPerView: 3,
				spaceBetween: 30,
			}
		}
	});

//------------------------slider-catalog-----------------------------------
	$(".tabs__wrap").each(function(index, el) {
    $(el).addClass('tabs__wrap-' + index);

		var swiper = new Swiper('.tabs__wrap-' + index + ' .catalog__slider', {
			slidesPerView: 1,
			slidesPerColumn: 1,
			spaceBetween: 15,
			pagination: {
				el: '.tabs__wrap-' + index + ' .catalog__nav_pagination',
				type: 'fraction',
			},
			navigation: {
				nextEl: '.tabs__wrap-' + index + ' .catalog__nav_next',
				prevEl: '.tabs__wrap-' + index + ' .catalog__nav_prev',
			},
			breakpoints: {
				400: {
					slidesPerView: 2,
				},
				767: {
					slidesPerView: 3,
				},
				992: {
					slidesPerView: 3,
					slidesPerColumn: 2,
				},
				1200: {
					slidesPerView: 4,
					slidesPerColumn: 2,
				}
			}
		});

  });

//------------------------slider-reviews-----------------------------------
	var swiper = new Swiper('.reviews__slider', {
		slidesPerView: 3,
		spaceBetween: 15,
		// autoHeight: true, //enable auto height
		navigation: {
			nextEl: '.reviews__nav_next',
			prevEl: '.reviews__nav_prev',
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
			},
			767: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 3,
			},
		}
	});

//------------------------slider-developments-----------------------------------
	var swiper = new Swiper('.developments__slider', {
		slidesPerView: 1,
		spaceBetween: 15,
		pagination: {
			el: '.developments__nav_pagination',
			clickable: true,
		},
		breakpoints: {
			480: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
		}
	});

//------------------------slider-certified-----------------------------------
	var swiper = new Swiper('.certified__slider', {
		slidesPerView: 1,
		spaceBetween: 30,
		navigation: {
			nextEl: '.certified__nav_next',
			prevEl: '.certified__nav_prev',
		},
		breakpoints: {
			400: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
			767: {
				slidesPerView: 3,
			},
		}
	});

//------------------------slider-video-----------------------------------
	var swiper = new Swiper('.video__slider', {
		slidesPerView: 1,
		spaceBetween: 30,
		pagination: {
			el: '.video__pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.video__button_next',
			prevEl: '.video__button_prev',
		},
	});

//---------------------------catalog-tabs-----------------------
	$('.tabs__wrap').hide();
	$('.tabs__wrap:first').show();
	$('.tabs ul a:first').addClass('active');
	$('.tabs ul a').click(function(event){
		event.preventDefault();
		$('.tabs ul a').removeClass('active');
		$(this).addClass('active');
		$('.tabs__wrap').hide();
		var selectTab = $(this).attr('href');
		$(selectTab).fadeIn();
	});

//-------------------------------modal---------------------------------------
	$('.modal').popup({transition: 'all 0.6s'});

//------------------------------hamburger-----------------------------
	$('.hamburger').click(function() {
	  $(this).toggleClass('hamburger--active');
	  $('.header__nav').toggleClass('header__nav--active');
	  $('.header').toggleClass('header--menu');
	});

//----------------------------------------fixed----------------------------------
  $(window).scroll(function(){
      if($(this).scrollTop()>20){
          $('.header').addClass('header--active');
      }
      else if ($(this).scrollTop()<20){
          $('.header').removeClass('header--active');
      }
	});

  if($(this).scrollTop()>20){
    $('.header').addClass('header--active');
	}

//------------------------------gallery-more--------------------------
	$(".gallery__item").slice(9).css({"display" : "none"});
  $(".gallery__more").on("click", function(){
		if ($(this).hasClass('gallery__more--active')) {
			$(".gallery__item").slice(9).slideUp("slow");
			$(".gallery__more--active").removeClass("gallery__more--active");
			$(".gallery__more span").html('Еще фото');
		}
		else {
			$(".gallery__item").slice(0).slideDown("slow");
			$(".gallery__more").addClass("gallery__more--active");
			$(".gallery__more span").html('Cкрыть фото');
		}
	});

	$(".click").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
				top = $(id).offset().top;
		$('body,html').animate({scrollTop: top - 90}, 'slow', 'swing');
	//--------------------закриття меню при кліку на ссилку якоря--------------------
     $('.hamburger').removeClass('hamburger--active');
     $('.header--menu').removeClass('header--menu');
     $('.header--active').removeClass('header--active');
     $('.header__nav--active').removeClass('header__nav--active');
	});

//------------------------------adout-more--------------------------
	$(".about__text_none").css({"display" : "none"});
  $(".about__text_more").on("click", function(){
		if ($(this).hasClass('about__text_more--active')) {
			$(".about__text_none").slideUp("slow");
			$(".about__text_more--active").removeClass("about__text_more--active");
			$(".about__text_more span").html('Читать полностью');
		}
		else {
			$(".about__text_none").slideDown("slow");
			$(".about__text_more").addClass("about__text_more--active");
			$(".about__text_more span").html('Cкрыть текст');
		}
	});

//------------------------------mask--------------------------
	$('input[type="tel"]').mask('+0 (000) 000-00-00');

  jQuery.validator.addMethod("phoneno", function(phone_number, element) {
     return this.optional(element) || phone_number.match(/\+[0-9]{1}\s\([0-9]{3}\)\s[0-9]{3}-[0-9]{2}-[0-9]{2}/);
	}, "Введите Ваш телефон");


//------------------------------video hero--------------------------
	var videoEl = document.getElementsByTagName('video')[0],
			playBtn = document.getElementById('playBtn'),
			vidControls = document.getElementById('controls'),
			volumeControl = document.getElementById('volume'),
			timePicker = document.getElementById('timer');
		
	// если браузер может воспроизводить видео удаляем класс
	videoEl.addEventListener('canplaythrough', function () {
			vidControls.classList.remove('hidden');
			videoEl.volume = volumeControl.value;
	}, false);
	// запускам или останавливаем воспроизведение
	playBtn.addEventListener('click', function () {
			if (videoEl.paused) {
					videoEl.play();
			} else {
					videoEl.pause();
			}
	}, false);
		
	videoEl.addEventListener('play', function () {
			playBtn.innerText = "❚❚";
	}, false);
		
	videoEl.addEventListener('pause', function () {
			playBtn.innerText = "►";
	}, false);
		
	volumeControl.addEventListener('input', function () {
		
			videoEl.volume = volumeControl.value;
	}, false);
		
	videoEl.addEventListener('ended', function () {
			videoEl.currentTime = 0;
	}, false);
		
	videoEl.addEventListener('timeupdate', function () {
			timePicker.innerHTML = secondsToTime(videoEl.currentTime);
	}, false);
		
	// рассчет отображаемого времени
	function secondsToTime(time){
				
			var h = Math.floor(time / (60 * 60)),
					dm = time % (60 * 60),
					m = Math.floor(dm / 60),
					ds = dm % 60,
					s = Math.ceil(ds);
			if (s === 60) {
					s = 0;
					m = m + 1;
			}
			if (s < 10) {
					s = '0' + s;
			}
			if (m === 60) {
					m = 0;
					h = h + 1;
			}
			if (m < 10) {
					m = '0' + m;
			}
			if (h === 0) {
					fulltime = m + ':' + s;
			} else {
					fulltime = h + ':' + m + ':' + s;
			}
			return fulltime;
	}
});
