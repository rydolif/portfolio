$(function() {

//-------------------------------активна ссилка на якій знаходишся для меню---------------------------------------
  $('.teacher__nav_list a').each(function () {
      var location = window.location.href;
      var link = this.href; 
      if(location == link) {
          $(this).addClass('active');
      }
  });

//---------------------------tabs mosal-----------------------
  $(".block__content").slideUp("slow");
  // $(".block").first().addClass('active');
  $(".active .block__content").slideDown("slow");

  $(".block__header").on("click", function(){
    if ($(this).parent().hasClass('active')) {
      $(this).parent().removeClass('active');
      $(".block__content").slideUp("slow");
      $(this).text("Показать описание");
    }
    else {
      $(".active .block__content").slideUp("slow");
      $(".active").removeClass('active');
      $(this).parent().addClass('active');
      $(this).text("Скрыть описание");
      $(".active .block__content").slideDown("slow");
    }
  });

//---------------------------tabs mosal-----------------------
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

//-------------------------------попандер---------------------------------------
  $('.modal').popup({
    escape: false,
    blur: false,
    scrolllock: true,
    transition: 'all 0.3s'
  });

//----------------------------------------fixed-header---------------------------------
  $(window).scroll(function(){
      if($(this).scrollTop()>20){
          $('.header').addClass('header--active');
      }
      else if ($(this).scrollTop()<20){
          $('.header').removeClass('header--active');
      }
  });

  if ($(this).scrollTop()<20){
    $('.header').addClass('header--active');
  }

//-------------------------скорость якоря menu---------------------------------------
  $(".menu__nav").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top - 120}, 'slow', 'swing');
  });

//-------------------------скорость якоря navigation---------------------------------------
  $(".navigation").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top - 120}, 'slow', 'swing');
  });

//-------------------------reviews slider---------------------------------------
    var swiper = new Swiper('.reviews__slider', {
      spaceBetween: 25,
      navigation: {
        nextEl: '.reviews__next',
        prevEl: '.reviews__prev',
      },
    });

//------------------------------гамбургер-----------------------------
  $('.hamburger').click(function() {
    $(this).toggleClass('hamburger--active');
    $('.header__nav').toggleClass('header__nav--active');
    $('.header').toggleClass('header--menu');
    $('body').toggleClass('no-scroll');
  });

//------------------------------гамбургер-teacher----------------------------
  $('.teacher__hamburger').click(function() {
    $(this).toggleClass('teacher__hamburger--active');
    $('.teacher__nav').toggleClass('teacher__nav--active');
    $('.header').toggleClass('header--menu');
  });

});

