$(function() {

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
	    anchors: ['firstPage', 'secondPage', 'threePage', 'fourPage', 'lastPage'], // якори
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

