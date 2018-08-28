// Menu toggle button
$(document).ready(function() {
  $(".menu-icon").on("click", function() {
    $("nav ul").toggleClass("showing");
  });
});
// Scrolling effect navbar
$(window).on("scroll", function() {
  if ($(window).scrollTop()) {
    $("nav").addClass("grey");
  } else {
    $("nav").removeClass("grey");
  }
});
