// slick
$('.client-list').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  //   dots: true,
  prevArrow:
    "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left icon-prevArrow' aria-hidden='true'></i></button>",
  nextArrow:
    "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right icon-nextArrow' aria-hidden='true'></i></button>",
});

//menu
document.addEventListener('DOMContentLoaded', function () {
  const menuOpen = document.querySelector('.menu-toggle');
  const menuClose = document.querySelector('.menu-close');
  const menu = document.querySelector('.menu');
  if (!menuOpen || !menuClose || !menu) return;
  menuOpen.addEventListener('click', function () {
    menu.classList.add('is-active');
  });
  menuClose.addEventListener('click', function () {
    menu.classList.remove('is-active');
  });
  document.addEventListener('click', function (e) {
    if (
      !menu.contains(e.target) &&
      !e.target.matches('.menu-toggle')
    ) {
      menu.classList.remove('is-active');
    }
  });
});
