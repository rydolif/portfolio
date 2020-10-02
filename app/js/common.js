$(function() {
	$('input[type="tel"]').mask('+0 (000) 000-00-00');

	jQuery.validator.addMethod("phoneno", function(phone_number, element) {
		return this.optional(element) || phone_number.match(/\+[0-9]{1}\s\([0-9]{3}\)\s[0-9]{3}-[0-9]{2}-[0-9]{2}/);
	}, "Введите Ваш телефон");
		
	$(".form").each(function(index, el) {
		$(el).addClass('form-' + index);

		$('.form-' + index).validate({
			rules: {
				phone: {
					required: true,
					phoneno: true
				},
				name: 'required',
			},
			messages: {
				name: "Введите Ваше имя",
				mail: "Введите Вашу почту",
			},
			submitHandler: function(form) {
				var t = {
					name: jQuery('.form-' + index).find("input[name=name]").val(),
					mail: jQuery('.form-' + index).find("input[name=mail]").val(),
					subject: jQuery('.form-' + index).find("input[name=subject]").val()
				};
				ajaxSend('.form-' + index, t);
			}
		});

	});

	function ajaxSend(formName, data) {
		jQuery.ajax({
			type: "POST",
			url: "sendmail.php",
			data: data,
			success: function() {
				let test = document.querySelectorAll('.modal');
				test.forEach(element => {
					element.style.display = 'none';
				});
				document.querySelector('#thanks').style.display = 'flex';
				setTimeout(function() {
					$(formName).trigger('reset');
				}, 2000);
			}
		});
	}
//-------------------------------preloader---------------------------------------
	$('body').addClass('no-scroll');
  
  setTimeout(function() {
    $('#ctn-preloader').addClass('loaded');
    // Una vez haya terminado el preloader aparezca el scroll
    
    if ($('#ctn-preloader').hasClass('loaded')) {
      // Es para que una vez que se haya ido el preloader se elimine toda la seccion preloader
      $('#preloader').delay(1000).queue(function() {
        $(this).remove();
        $('body').removeClass('no-scroll');
      });
    }
  }, 1000);
  

//-------------------------------hero slider---------------------------------------
	var swiper = new Swiper('.hero__slider', {
	  spaceBetween: 0,
	  effect: 'fade',
	  lazy: true,
	  speed: 2000,
	  autoplay: {
	    delay: 4500,
	    disableOnInteraction: false,
	  },
	});


//-------------------------------fullpage---------------------------------------
	$('#fullpage').fullpage({
	    // sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'], // фон цвет
	    anchors: ['onePage', 'twoPage', 'threePage', 'fourPage', 'fivePage', 'sixPage', 'sevenPage', 'eightPage'], // якори
	    menu: '#menu', // меню
	    lazyLoad: true, // оптимизация
	    navigation: true, // навигация
	    // navigationTooltips: ['Мы', 'Портфолио', 'Контакты'], // названия меню
	    showActiveTooltip: true, // меню
	    slidesNavigation: true, // стрелки
	    utoScrolling: false,
		fitToSection: false
	});

	// стрелки
	$('#moveSectionUp').click(function(e){
	    e.preventDefault();
	    $.fn.fullpage.moveSectionUp();
	});

	$('#moveSectionDown').click(function(e){
	    e.preventDefault();
	    $.fn.fullpage.moveSectionDown();
	});


//----------------------------wowJS-------------------------------
  var wow = new WOW(
    {
      boxClass:     'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset:       0,          // distance to the element when triggering the animation (default is 0)
      mobile:       true,       // trigger animations on mobile devices (default is true)
      live:         true,       // act on asynchronously loaded content (default is true)
      callback:     function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null // optional scroll container selector, otherwise use window
    }
  );
  wow.init();


});


	//----------------------MODAL-----------------------
	const modals = (triggerSelector, modalSelector, closeSelector) => {
		const trigger = document.querySelectorAll(triggerSelector),
					modal = document.querySelector(modalSelector),
					close = document.querySelector(closeSelector);

		trigger.forEach(item => {
			item.addEventListener('click', (e) => {
				if (e.target) {
					e.preventDefault();
				}
				modal.style.display = 'flex';
				document.body.classList.add('modal--open')
			});
		})

		close.addEventListener('click', () => {
			modal.style.display = 'none';
			document.body.classList.remove('modal--open');
		});

		modal.addEventListener('click', (e) => {
			if (e.target === modal) {
				modal.style.display = 'none';
				document.body.classList.remove('modal--open');
			}
		});

	};
	modals('.order__open', '.modal--order', '.modal--order .modal__close');

