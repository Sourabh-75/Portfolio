// function images loading one by one
const imagesArray = document.querySelectorAll('.loading-image img');

let images = Array.from(imagesArray)

function loadImagesSequentially() {
  let index = 0;

  function loadNextImage() {
    if (index < images.length) {
      const image = images[index];
      image.src = image.dataset.src;
      index++;

      globalThis.setTimeout(loadNextImage, 250);
    }
  }

  // Start loading the first image
  loadNextImage();
}

images.forEach((image) => {
  const src = image.src;
  image.src = '';
  image.dataset.src = src;
});

loadImagesSequentially();