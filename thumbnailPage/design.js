// add event listener to gallery items
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach((item) => {
  item.addEventListener('mouseover', () => {
    item.classList.add('hover');
  });

  item.addEventListener('mouseout', () => {
    item.classList.remove('hover');
  });
});

// hover on design

let designImages = document.querySelectorAll('.yt-thumbnail');

designImages.forEach((image) => {
  image.addEventListener('click', (e) => {
    // image source
    let imgSrc = image.querySelector('img').src;
    // Open the image in a new window
    window.open(imgSrc, '_blank');
  });
});