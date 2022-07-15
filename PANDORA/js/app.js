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

// input search
var input = document.getElementById('input-search');
var hisEL = document.querySelector('.search-lists');
var itemEL = document.querySelectorAll('.search-item');
var linkEL = document.querySelectorAll('.search-link');

input.onkeyup = function () {
  var filter = input.value.toUpperCase();

  var lis = document.getElementsByTagName('li');
  for (var i = 0; i < lis.length; i++) {
    var name =
      lis[i].getElementsByClassName('search-link')[0].innerHTML;
    if (name.indexOf(filter) == 0) {
      lis[i].style.display = 'block';
    } else {
      lis[i].style.display = 'none';
    }
  }
};
