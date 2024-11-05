$(".sliderPart").slick({
  arrows: false,
  dots: true,
});
$(".slider").slick({
  slidesToShow: 3,
  prevArrow: `<i class="fa-solid fa-angle-left prev"></i>`,
  nextArrow: `<i class="fa-solid fa-angle-right next"></i>`,
  centerMode: true,
  centerPadding: `0px`,
  responsive: [
    {
      breakpoint: 575.99,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 767.99,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: false,
      },
    },
  ],
});
