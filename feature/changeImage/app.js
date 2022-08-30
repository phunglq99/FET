const image = document.querySelectorAll('.list img');
image.forEach(el => el.addEventListener('click', handleChangeImage))

function handleChangeImage(e) {
    //lấy ra src: URL khi click
    const source = e.target.getAttribute("src");
    const featureImage = document.querySelector('.feature-image');
    // Renew src = newURL và gán vào class được select 
    featureImage.setAttribute("src", source);
}