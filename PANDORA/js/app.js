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

$('.treatment').slick({
  dots: true,
  prevArrow:
    "<button type='button' class='slick-prev pull-left treatment-prev'><i class='fa-solid fa-angle-left' aria-hidden='true'></i></button>",
  nextArrow:
    "<button type='button' class='slick-next pull-right treatment-next'><i class='fa-solid fa-angle-right' aria-hidden='true'></i></button>",
});

const data = ['Nhan bac', 'Trang suc', 'Vong tay'];
const searchList = document.getElementById('search-lists');

const genProductList = (data) => {
  data.map((val) =>
    searchList.insertAdjacentHTML(
      'beforeend',
      `
        <li class="search-item">
          <a href="#" class="search-link">${val}</a>
        </li>
      `
    )
  );
};

genProductList(data);

// input search
var input = document.getElementById('input-search');

const removeElement = () => {
  searchList.innerHTML = '';
};

input.onkeyup = function () {
  var filter = input.value;
  // var lis = document.querySelectorAll('.search-item');
  // var serachList = document.querySelector('.search-lists');
  // for (var i = 0; i < lis.length; i++) {
  //   var name =
  //     lis[i].getElementsByClassName('search-link')[0].innerHTML;
  //   const inVis = name.includes(filter);

  //   serachList.classList.toggle('hide', !inVis);
  //   console.log(inVis);
  // }
  const result = data.filter((val) =>
    val.toLowerCase().trim().includes(filter.toLowerCase().trim())
  );

  if (!filter) {
    removeElement();
    genProductList(data);
  }

  if (!result.length) {
    searchList.classList.add('hide');
  } else {
    searchList.classList.remove('hide');
    removeElement();
    genProductList(result);
  }
};
