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