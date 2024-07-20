// hover on design

let designImages = document.querySelectorAll('.facebook-banner, .yt-banner');

designImages.forEach((image) => {
  image.addEventListener('click', (e) => {
    // image source
    let imgSrc = image.querySelector('img').src;
    // Open the image in a new window
    window.open(imgSrc, '_blank');
  });
});

