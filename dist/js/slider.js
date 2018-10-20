$(".home").click(function() {
  $(".overlay-shape").css("-webkit-transform", "rotate(45deg)");
  $(".overlay-shape").css("transition", "transform 1s");
  $(".global-overlay").css("width", "100%");
  $(".header-nav").css("width", "330px");
  $(".header-nav").css("left", "inherit");
  $('body').css('overflow', 'hidden')
});

$(".nav-tab").click(function() {
  $(".header-nav").animate({ left: "25%" }, 1000);
//   $(".header-nav").css('left', '25%');
  $(".overlay-shape").css("-webkit-transform", "rotate(0deg)");
  $(".overlay-shape").css("transition", "transform 1s");
  $(".header-nav").css("width", "25%");
  $(".global-overlay").css("width", "50%");
  $('body').css('overflow', 'auto')
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
