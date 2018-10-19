
// var cssProperties = { left: '-200px', background: "red", display: "block" }
var cssProperties = { left: '25%' }

// var shapeToggle = {webkitTransform: 'rotateY(0deg)'}


// $('#home').click(function() {
//   $('.nav-content-block').animate(cssProperties);
//   console.log("clicked")
// });

$('.home').click(function() {
  
  $('.overlay-shape').css('-webkit-transform', 'rotate(45deg)');
  $('.global-overlay').css('width', '100%')
  $('.header-nav').css('width', '330px')
  $('.header-nav').css('left', 'inherit');
});

$('.nav-tab').click(function() {
  $('.header-nav').animate(cssProperties, 1000);
  $('.overlay-shape').css('-webkit-transform', 'rotate(0deg)');
  $('.header-nav').css('width', '25%');
// $('.overlay-shape').toggleClass('shapeToggle');
  $('.global-overlay').css('width', '50%')
});

$(".about").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#about").offset().top
    }, 1500);
});

$(".skills").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#skills").offset().top
    }, 1500);
});

$(".projects").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#projects").offset().top
    }, 1500);
});

$(".contact").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#contact").offset().top
    }, 1500);
});

$(".resume").click(function() {
  $([document.documentElement, document.body]).animate({
      scrollTop: $("#resume").offset().top
  }, 1500);
});