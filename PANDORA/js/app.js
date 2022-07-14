$('.banner').slick({
  dots: false,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
});

$('.trend-lists').slick({
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  centerMode: true,
  variableWidth: true,
  prevArrow:
    "<button type='button' class='slick-prev pull-left trend-prev'><i class='fa-solid fa-angle-left' aria-hidden='true'></i></button>",
  nextArrow:
    "<button type='button' class='slick-next pull-right trend-next'><i class='fa-solid fa-angle-right' aria-hidden='true'></i></button>",
});
