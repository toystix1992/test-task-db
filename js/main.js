"use strict";

$(document).ready(function () {
  $('.main-slider').slick({
    dots: true,
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    easing: "ease",
    autoplay: false,
    centerMode: false,
    arrows: false
  });
});