// Click events for home button
$(".home").click(function() {
  $(".overlay-shape").css("-webkit-transform", "rotate(45deg)");
  $(".overlay-shape").css("transition", "transform 1s");
  $(".global-overlay").css("width", "100%");
  $(".header-nav").css("width", "330px");
  $(".header-nav").css("left", "inherit");
  $("body").css("overflow-y", "hidden");
});

// Click events for nav buttons
$(".nav-tab").click(function() {
  $(".header-nav").css("left", "25%");
  $(".overlay-shape").css("-webkit-transform", "none");
  $(".overlay-shape").css("transition", "transform 1s");
  $(".header-nav").css("width", "25%");
  $(".global-overlay").css("width", "50%");
  $("body").css("overflow-y", "auto");
});

// Scroll Animation
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

// Scroll animation for round scroll-up button
$(".scroll-up-btn").click(function() {
  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $("#home").offset().top
    },
    1000
  );
});

$(window).resize(function() {
  if (window.outerWidth < 951) {
    $("body").css("overflow-y", "auto");
    $(".overlay-shape").css("-webkit-transform", "none");
  }
});

// Adjusts vertical scroll bar visibility at various viewport widths / views
$(window).resize(function() {
  if (window.outerWidth > 950 && $(".header-nav")[0].style["left"] !== "25%") {
    $("body").css("overflow-y", "hidden");
  }
});

// $(window).resize(function() {
//   if (window.outerWidth < 450 && $(".header-nav")[0].style["left"] !== "25%") {
//     $("body").css("overflow-y", "hidden");
//   }
// });

/* Overlay shape remains rotated 45deg as long as viewport width is greater than 950px
 and the side nav is at it's original location, i.e. user is at home page */
$(window).resize(function() {
  if (window.outerWidth > 950 && $(".header-nav")[0].style["left"] !== "25%") {
    $(".overlay-shape").css("-webkit-transform", "rotate(45deg)");
  }
});

// Open / Close toggle for burger nav at tablet and mobile widths
// $(".burger-nav-btn").click(function() {
//   $("#nav").toggleClass("open-burger-nav");
// });

$(".burger-nav-btn").on("click", function(){
  $(".burger-nav").slideToggle()
})



$(".burger-nav ul li a").click(function() {
  $("#nav").toggleClass("open-burger-nav");
});

// Copy email
function copyToClipBoard() {
  /* Get the text field */
  var copyText = document.getElementById("email");

  /* Select the text field */
  copyText.select();

  /* Copy the text inside the text field */
  document.execCommand("copy");
}
