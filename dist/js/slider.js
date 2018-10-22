  $(".home").click(function() {
  $(".overlay-shape").css("-webkit-transform", "rotate(45deg)");
  $(".overlay-shape").css("transition", "transform 1s");
  $(".global-overlay").css("width", "100%");
  $(".header-nav").css("width", "330px");
  $(".header-nav").css("left", "inherit");
  $("body").css("overflow-y", "hidden");
});

$(".nav-tab").click(function() {
  $(".header-nav").animate({ left: "25%" }, 1000);
  //   $(".header-nav").css('left', '25%');
  // $(".overlay-shape").css("-webkit-transform", "rotate(0deg)");
  $(".overlay-shape").css("-webkit-transform", "none");
  $(".overlay-shape").css("transition", "transform 1s");
  $(".header-nav").css("width", "25%");
  $(".global-overlay").css("width", "50%");
  $("body").css("overflow-y", "auto");
});

$(".about").click(function() {
  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $("#about").offset().top
    },
    1000
  );
});

$(".skills").click(function() {
  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $("#skills").offset().top
    },
    1000
  );
});

$(".projects").click(function() {
  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $("#projects").offset().top
    },
    1000
  );
});

$(".contact").click(function() {
  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $("#contact").offset().top
    },
    1000
  );
});


$( window ).resize(function() {
  if(window.outerWidth < 951) {
    $('body').css('overflow-y', 'auto')
    $('.overlay-shape').css('-webkit-transform', 'none')
  }
});

// let current_nav_tab = $("a").click(function( e ){
//   //  e.preventDefault();
  
//       // return (jQuery(this).attr('href'));
//       console.log((jQuery(this).attr('href')))
//       return (jQuery(this).attr('href'));
  
//   });


$( window ).resize(function() {

  if(window.outerWidth > 950 && $('.header-nav')[0].style['left'] !== '25%') {
    $('body').css('overflow-y', 'hidden')
   
  }
});


$( window ).resize(function() {

  //  console.log($('.header-nav')[0].style)
  // console.log($('body')[0].style['overflow-y'])
  // console.log($('.header-nav')[0].style['left'] !== '25%')
    // if(window.outerWidth > 950 && ($('body')[0].style['overflow-y'] === 'hidden') && ($('.header-nav')[0].style['left'] !== '25%'))  {
    //   $('.overlay-shape').css('-webkit-transform', 'rotate(45deg)')
    // }
    if(window.outerWidth > 950 && ($('.header-nav')[0].style['left'] !== '25%'))  {
      $('.overlay-shape').css('-webkit-transform', 'rotate(45deg)')
    }
  });


$(".nav-toggle").click(function() {
  
  $("#nav").toggleClass('open-burger-nav');
  // $(".btn-line").toggleClass('btn-line-rotate');

  // $(".btn-line").toggleClass("btn-line-hide")
  // $(".x-btn").toggleClass("x-show")
});


$(".burger-nav ul li a").click(function() {
  
  $("#nav").toggleClass('open-burger-nav');
  // $(".btn-line").toggleClass('btn-line-rotate');
});

