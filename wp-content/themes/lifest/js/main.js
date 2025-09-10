/*-----------------------------------------------------------------------------------

    Theme Name: Lifest - Insurance Agency WordPress Theme
    Description: Insurance Agency WordPress Theme
    Author: Website Layout
    Version: 1.3

    /* ----------------------------------

    JS Active Code Index
            
        01. Preloader
        02. Sticky Header
        03. Scroll To Top
        04. Wow animation - on scroll
        05. Parallax
        06. MagnificPopup
        07. Current Year
        08. Resize function
        09. FullScreenHeight function
        10. ScreenFixedHeight function
        11. FullScreenHeight and screenHeight with resize function
        12. Copy to clipboard
        13. Sliders
        14. Tabs
        15. CountUp
        16. Countdown
        17. Isotop
        
    ---------------------------------- */

(function ($) {
  'use strict';

  var $window = $(window);

  /*------------------------------------
            01. Preloader
        --------------------------------------*/

  $('#preloader').fadeOut('normall', function () {
    $(this).remove();
  });

  /*------------------------------------
            02. Sticky Header
        --------------------------------------*/

  $window.on('scroll', function () {
    var scroll = $window.scrollTop();
    var offsetTop = $('.navbar-default').outerHeight();
    var offsetTopAnimation = offsetTop + 200;
    if (scroll < offsetTopAnimation) {
      $('header').removeClass('scrollHeader').addClass('fixedHeader');
    } else {
      $('header').removeClass('fixedHeader').addClass('scrollHeader');
      $('.fixed-header header')
        .removeClass('scrollHeader')
        .addClass('fixedHeader');
    }
  });

  /*------------------------------------
            03. Scroll To Top
        --------------------------------------*/

  $window.on('scroll', function () {
    if ($(this).scrollTop() > 500) {
      $('.scroll-to-top').fadeIn(400);
    } else {
      $('.scroll-to-top').fadeOut(400);
    }
  });

  $('.scroll-to-top').on('click', function (event) {
    event.preventDefault();
    $('html, body').animate(
      {
        scrollTop: 0,
      },
      600
    );
  });

  /*------------------------------------
            04. Wow animation - on scroll
        --------------------------------------*/

  var wow = new WOW({
    boxClass: 'wow', // default
    animateClass: 'animated', // default
    offset: 0, // default
    mobile: false, // default
    live: true, // default
  });
  wow.init();

  /*------------------------------------
            05. Parallax
        --------------------------------------*/

  // sections background image from data background
  var pageSection = $('.parallax,.bg-img');
  pageSection.each(function (indx) {
    if ($(this).attr('data-background')) {
      $(this).css(
        'background-image',
        'url(' + $(this).data('background') + ')'
      );
    }
  });

  /*------------------------------------
            06. MagnificPopup
        --------------------------------------*/

  $('.story-video').magnificPopup({
    delegate: '.video',
    type: 'iframe',
  });

  $('.source-modal').magnificPopup({
    type: 'inline',
    mainClass: 'mfp-fade',
    removalDelay: 160,
  });

  /*------------------------------------
            07. Current Year
        --------------------------------------*/

  $('.current-year').text(new Date().getFullYear());

  /*------------------------------------
            08. Resize function
        --------------------------------------*/

  $window.resize(function (event) {
    setTimeout(function () {
      SetResizeContent();
    }, 500);

    event.preventDefault();
  });

  /*------------------------------------
            09. FullScreenHeight function
        --------------------------------------*/

  function fullScreenHeight() {
    var element = $('.full-screen');
    var $minheight = $window.height();
    element.css('min-height', $minheight);
  }

  /*------------------------------------
            10. ScreenFixedHeight function
        --------------------------------------*/

  function ScreenFixedHeight() {
    var $headerHeight = $('header').height();
    var element = $('.screen-height');
    var $screenheight = $window.height() - $headerHeight;
    element.css('height', $screenheight);
  }

  /*------------------------------------
            11. FullScreenHeight and screenHeight with resize function
        --------------------------------------*/

  function SetResizeContent() {
    fullScreenHeight();
    ScreenFixedHeight();

    if ($(window).width() < 992) {
      $('.navbar-nav .dropdown-menu.sub-menu').css('display', 'none');
    }
  }

  SetResizeContent();

  // === when document ready === //
  $(document).ready(function () {
    /*------------------------------------
            13. Sliders
        --------------------------------------*/

    // testmonial-carousel
    $('.testimonial-carousel').owlCarousel({
      loop: true,
      responsiveClass: true,
      autoplay: true,
      smartSpeed: 1500,
      nav: false,
      dots: true,
      center: false,
      margin: 0,
      responsive: {
        0: {
          items: 1,
          margin: 0,
        },
        768: {
          items: 1,
        },
        992: {
          items: 1,
        },
        1200: {
          items: 1,
        },
      },
    });

    // testmonial-carousel-one
    $('.testimonial-carousel-one').owlCarousel({
      loop: true,
      responsiveClass: true,
      autoplay: true,
      smartSpeed: 1500,
      nav: false,
      dots: true,
      center: false,
      margin: 30,
      responsive: {
        0: {
          items: 1,
          margin: 10,
        },
        768: {
          items: 1,
        },
        992: {
          items: 1,
        },
        1200: {
          items: 1,
        },
      },
    });

    // testmonial-carousel-02
    $('.testimonial-carousel-02').owlCarousel({
      loop: true,
      responsiveClass: true,
      autoplay: true,
      smartSpeed: 1500,
      nav: false,
      dots: true,
      center: false,
      margin: 0,
      responsive: {
        0: {
          items: 1,
          margin: 0,
        },
        768: {
          items: 1,
        },
        992: {
          items: 1,
        },
        1200: {
          items: 1,
        },
      },
    });

    // testimonial-carousel-three
    $('.testimonial-carousel-three').owlCarousel({
      loop: false,
      responsiveClass: true,
      autoplay: true,
      autoplayTimeout: 5000,
      smartSpeed: 1500,
      nav: false,
      navText: [
        "<i class='ti-arrow-left'></i>",
        "<i class='ti-arrow-right'></i>",
      ],
      dots: true,
      center: true,
      margin: 30,
      responsive: {
        0: {
          items: 1,
        },
        992: {
          items: 1,
          nav: true,
        },
        1200: {
          items: 1,
          nav: true,
        },
      },
    });

    // feature-carousel
    $('.feature-carousel').owlCarousel({
      loop: true,
      responsiveClass: true,
      autoplay: true,
      smartSpeed: 1500,
      nav: false,
      dots: true,
      center: false,
      margin: 0,
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 2,
        },
        992: {
          items: 2,
        },
        1200: {
          items: 3,
        },
      },
    });

    // clients-carousel
    $('.clients-carousel').owlCarousel({
      loop: true,
      responsiveClass: true,
      autoplay: true,
      smartSpeed: 1500,
      nav: false,
      dots: false,
      center: false,
      margin: 10,
      responsive: {
        0: {
          items: 2,
        },
        768: {
          items: 4,
          margin: 30,
        },
        992: {
          items: 5,
          margin: 40,
        },
        1200: {
          items: 6,
          margin: 40,
        },
      },
    });

    // portfolio-carousel
    $('.portfolio-carousel').owlCarousel({
      loop: true,
      responsiveClass: true,
      autoplay: true,
      smartSpeed: 1500,
      nav: false,
      dots: false,
      center: false,
      margin: 20,
      responsive: {
        0: {
          items: 1,
        },
        576: {
          items: 2,
        },
        992: {
          items: 3,
        },
        1200: {
          items: 4,
        },
      },
    });

    // about-carousel
    $('.about-carousel').owlCarousel({
      loop: true,
      responsiveClass: true,
      autoplay: true,
      autoplayTimeout: 6000,
      smartSpeed: 1500,
      nav: true,
      navText: [
        "<i class='ti-arrow-left'></i>",
        "<i class='ti-arrow-right'></i>",
      ],
      dots: false,
      center: false,
      margin: 80,
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 1,
          margin: 30,
        },
        992: {
          items: 1,
          margin: 40,
        },
        1200: {
          items: 1,
        },
      },
    });

    // portfolio-carousel-02
    $('.portfolio-carousel-02').owlCarousel({
      loop: true,
      responsiveClass: true,
      autoplay: true,
      smartSpeed: 1500,
      nav: false,
      dots: false,
      center: true,
      margin: 30,
      responsive: {
        0: {
          items: 1,
          margin: 0,
        },
        768: {
          items: 2,
        },
        992: {
          items: 3,
        },
        1200: {
          items: 4,
        },
      },
    });

    // services-carousel-one
    $('.services-carousel-one').owlCarousel({
      loop: true,
      responsiveClass: true,
      autoplay: true,
      autoplayTimeout: 6000,
      smartSpeed: 1500,
      nav: false,
      dots: false,
      center: false,
      margin: 30,
      responsive: {
        0: {
          items: 1,
          dots: false,
        },
        576: {
          items: 2,
        },
        768: {
          items: 2,
        },
        992: {
          items: 3,
        },
        1200: {
          items: 4,
        },
      },
    });

    // services-carousel-two
    $('.services-carousel-two').owlCarousel({
      loop: true,
      responsiveClass: true,
      autoplay: true,
      smartSpeed: 1500,
      autoplayTimeout: 6000,
      nav: false,
      navText: [
        "<i class='ti-arrow-left'></i>",
        "<i class='ti-arrow-right'></i>",
      ],
      dots: false,
      center: false,
      margin: 0,
      responsive: {
        0: {
          items: 1,
        },
        576: {
          items: 1,
          nav: true,
        },
        992: {
          items: 2,
          nav: true,
        },
        1200: {
          items: 3,
          nav: true,
        },
      },
    });

    // services-carousel-three
    $('.services-carousel-three').owlCarousel({
      loop: true,
      responsiveClass: true,
      autoplay: true,
      smartSpeed: 1500,
      autoplayTimeout: 6000,
      nav: false,
      navText: [
        "<i class='ti-arrow-left'></i>",
        "<i class='ti-arrow-right'></i>",
      ],
      dots: false,
      center: false,
      margin: 0,
      responsive: {
        0: {
          items: 1,
        },
        576: {
          items: 1,
          nav: true,
        },
        992: {
          items: 2,
          nav: true,
        },
        1200: {
          items: 3,
          nav: true,
        },
      },
    });

    // services-carousel-four
    $('.services-carousel-four').owlCarousel({
      loop: true,
      responsiveClass: true,
      autoplay: true,
      autoplayTimeout: 6000,
      smartSpeed: 1500,
      nav: true,
      navText: [
        "<i class='ti-angle-left'></i>",
        "<i class='ti-angle-right'></i>",
      ],
      dots: false,
      center: false,
      margin: 40,
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        576: {
          items: 1,
          nav: false,
        },
        768: {
          items: 2,
        },
        992: {
          items: 3,
        },
        1200: {
          items: 3,
        },
      },
    });

    // Sliderfade
    $('.slider-fade').owlCarousel({
      items: 1,
      loop: true,
      dots: true,
      margin: 0,
      nav: false,
      navText: [
        "<i class='ti-angle-left'></i>",
        "<i class='ti-angle-right'></i>",
      ],
      autoplay: true,
      autoplayTimeout: 6000,
      smartSpeed: 1500,
      mouseDrag: false,
      animateIn: 'fadeIn',
      animateOut: 'fadeOut',
      responsive: {
        992: {
          nav: false,
        },
      },
    });

    // Sliderfade
    $('.slider-fade2').owlCarousel({
      items: 1,
      loop: true,
      dots: true,
      margin: 0,
      nav: false,
      navText: [
        "<i class='ti-angle-left'></i>",
        "<i class='ti-angle-right'></i>",
      ],
      autoplay: true,
      autoplayTimeout: 6000,
      smartSpeed: 1500,
      mouseDrag: false,
      animateIn: 'fadeIn',
      animateOut: 'fadeOut',
      responsive: {
        992: {
          nav: true,
          dots: false,
        },
      },
    });

    // Sliderfade-four
    $('.slider-fade3').owlCarousel({
      items: 1,
      loop: true,
      dots: true,
      margin: 0,
      nav: false,
      navText: [
        "<i class='ti-arrow-left'></i>",
        "<i class='ti-arrow-right'></i>",
      ],
      autoplay: true,
      autoplayTimeout: 7000,
      smartSpeed: 1500,
      animateIn: 'fadeIn',
      animateOut: 'fadeOut',
      responsive: {
        992: {
          nav: true,
          dots: false,
        },
      },
    });

    // Default owlCarousel
    $('.owl-carousel').owlCarousel({
      items: 1,
      loop: true,
      dots: false,
      margin: 0,
      autoplay: true,
      smartSpeed: 500,
    });

    // Slider text animation
    var owl = $('.slider-fade');
    owl.on('changed.owl.carousel', function (event) {
      var item = event.item.index - 2; // Position of the current item
      $('span').removeClass('animated fadeInUp');
      $('h1').removeClass('animated fadeInUp');
      $('p').removeClass('animated fadeInUp');
      $('a').removeClass('animated fadeInUp');
      $('.owl-item')
        .not('.cloned')
        .eq(item)
        .find('span')
        .addClass('animated fadeInUp');
      $('.owl-item')
        .not('.cloned')
        .eq(item)
        .find('h1')
        .addClass('animated fadeInUp');
      $('.owl-item')
        .not('.cloned')
        .eq(item)
        .find('p')
        .addClass('animated fadeInUp');
      $('.owl-item')
        .not('.cloned')
        .eq(item)
        .find('a')
        .addClass('animated fadeInUp');
    });

    // Slider text animation
    var owlTwo = $('.slider-fade2');
    owlTwo.on('changed.owl.carousel', function (event) {
      var item = event.item.index - 2; // Position of the current item
      $('span').removeClass('animated fadeInUp');
      $('h1').removeClass('animated fadeInUp');
      $('p').removeClass('animated fadeInUp');
      $('a').removeClass('animated fadeInUp');
      $('.owl-item')
        .not('.cloned')
        .eq(item)
        .find('span')
        .addClass('animated fadeInUp');
      $('.owl-item')
        .not('.cloned')
        .eq(item)
        .find('h1')
        .addClass('animated fadeInUp');
      $('.owl-item')
        .not('.cloned')
        .eq(item)
        .find('p')
        .addClass('animated fadeInUp');
      $('.owl-item')
        .not('.cloned')
        .eq(item)
        .find('a')
        .addClass('animated fadeInUp');
    });

    // Slider text animation
    var owl = $('.slider-fade3');
    owl.on('changed.owl.carousel', function (event) {
      var item = event.item.index - 2; // Position of the current item
      $('.small-title').removeClass('animated fadeInUp');
      $('h1').removeClass('animated fadeInUp');
      $('p').removeClass('animated fadeInUp');
      $('a').removeClass('animated fadeInUp');
      $('.banner-button').removeClass('animated fadeInUp');
      $('.owl-item')
        .not('.cloned')
        .eq(item)
        .find('.small-title')
        .addClass('animated fadeInUp');
      $('.owl-item')
        .not('.cloned')
        .eq(item)
        .find('h1')
        .addClass('animated fadeInUp');
      $('.owl-item')
        .not('.cloned')
        .eq(item)
        .find('p')
        .addClass('animated fadeInUp');
      $('.owl-item')
        .not('.cloned')
        .eq(item)
        .find('a')
        .addClass('animated fadeInUp');
      $('.owl-item')
        .not('.cloned')
        .eq(item)
        .find('.banner-button')
        .addClass('animated fadeInUp');
    });

    /*------------------------------------
            14. Tabs
        --------------------------------------*/

    //Horizontal Tab
    if ($('.horizontaltab').length !== 0) {
      $('.horizontaltab').easyResponsiveTabs({
        type: 'default', //Types: default, vertical, accordion
        width: 'auto', //auto or any width like 600px
        fit: true, // 100% fit in a container
        tabidentify: 'hor_1', // The tab groups identifier
        activate: function (event) {
          // Callback function if tab is switched
          var $tab = $(this);
          var $info = $('#nested-tabInfo');
          var $name = $('span', $info);
          $name.text($tab.text());
          $info.show();
        },
      });
    }

    /*------------------------------------
            15. CountUp
        --------------------------------------*/

    $('.countup').counterUp({
      delay: 25,
      time: 2000,
    });

    /*------------------------------------
            16. Countdown
        --------------------------------------*/

    // CountDown for coming soon page
    $('.countdown').countdown({
      date: '01 Jan 2027 00:01:00', //set your date and time. EX: 15 May 2014 12:00:00
      format: 'on',
    });

    $('.navbar-nav li.has-sub').removeClass('active');

    if ($('header').hasClass('header-style1')) {
      $('body').addClass('header-style1');
    }

    if ($('header').hasClass('header-style2')) {
      $('body').addClass('header-style2');
    }

    if ($('header').hasClass('header-style3')) {
      $('body').addClass('header-style3');
    }
  });

  // === when window loading === //
  $window.on('load', function () {
    /*------------------------------------
            17. Isotop
        --------------------------------------*/

    var $PortfolioGallery = $('.portfolio-gallery-isotope').isotope({
      // options
    });

    // filter items on button click
    $('.filtering').on('click', 'span', function () {
      var filterValue = $(this).attr('data-filter');
      $PortfolioGallery.isotope({
        filter: filterValue,
      });
    });

    $('.filtering').on('click', 'span', function () {
      $(this).addClass('active').siblings().removeClass('active');
    });

    $('.portfolio-gallery,.portfolio-gallery-isotope').lightGallery();

    $('.portfolio-link').on('click', (e) => {
      e.stopPropagation();
    });
  });
})(jQuery);
