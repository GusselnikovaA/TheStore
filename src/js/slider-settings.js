$('.recommend-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: false,
  speed: 2000,
  dots: true,
  prevArrow: $('.recommend-arrows__left'),
  nextArrow: $('.recommend-arrows__right'),
  responsive: [{
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        arrows: false
      }
    },
    {
      breakpoint: 568,
      settings: {
        slidesToShow: 1
      }
    }]
});