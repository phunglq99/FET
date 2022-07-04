/**
 *  <div class="lightbox">
      <div class="lightbox-content">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1353&q=80"
          alt=""
          class="light-image"
        />
      </div>
    </div>
 */
const element = document.querySelectorAll('.content img');
element.forEach(
  (item) =>
    //   item.addEventListener('click', handleZoomImage)
    (item.onclick = function (e) {
      //   console.log(e.target.parentNode);
      const img = e.target.src;
      const html = `<div class="lightbox">
      <div class="lightbox-content">
      <i class="fa fa-angle-left lightbox-prev"></i>
        <img
          src="${img}"
          alt=""
          class="light-image"
        />
        <i class="fa fa-angle-right lightbox-next"></i>
      </div>
    </div>`;
      document.body.insertAdjacentHTML('beforeend', html);
      let index = 0;
      document.body.onclick = function (e) {
        console.log(e.target.matches('.lightbox'));
        const lightboxImg = document.querySelector('.light-image');
        const lightNext = document.querySelector('.lightbox-next');
        const lightPrev = document.querySelector('.lightbox-prev');
        let lightSrc = '';

        if (e.target.matches('.lightbox')) {
          //remove light box out of dom
          e.target.parentNode.removeChild(e.target);
        } else if (e.target.matches('.lightbox-next')) {
          //handle next image

          lightSrc = lightboxImg.getAttribute('src');
          index = [...element].findIndex(
            (item) => item.getAttribute('src') === lightSrc
          );
          index = index + 1;
          if (index > element.length - 1) {
            lightNext.style.visibility = 'hidden';
            return;
          } else {
            lightNext.style.visibility = 'visible';
          }
          const newSrc = [...element][index].getAttribute('src');
          lightboxImg.setAttribute('src', newSrc);
          console.log(lightSrc);
        } else if (e.target.matches('.lightbox-prev')) {
          //handle prev image
          lightSrc = lightboxImg.getAttribute('src');
          index = [...element].findIndex(
            (item) => item.getAttribute('src') === lightSrc
          );
          index = index - 1;
          if (index < 0) {
            index = element.length - 1;
          }
          const newSrc = [...element][index].getAttribute('src');
          lightboxImg.setAttribute('src', newSrc);
        }
      };
    })
);
// function handleZoomImage(e) {
//   console.log(e.target);
//   const html = `<div class="lightbox">
//   <div class="lightbox-content">
//     <img
//       src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1353&q=80"
//       alt=""
//       class="light-image"
//     />
//   </div>
// </div>`;
//   document.body.insertAdjacentHTML('beforeend', html);
// }
