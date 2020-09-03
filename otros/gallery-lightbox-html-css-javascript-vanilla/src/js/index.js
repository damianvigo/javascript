const d = document;

const $images = d.querySelectorAll('.img'),
  $containerImage = d.querySelector('.container-img'),
  $imageContainer = d.querySelector('.img-show'),
  $copy = d.querySelector('.copy'),
  $closeModal = d.querySelector('.bx.bx-x');

$images.forEach((image) => {
  image.addEventListener('click', () => {
    // console.log(image.getAttribute('src'));
    addImage(image.getAttribute('src'), image.getAttribute('alt'));
  });
});

const addImage = (srcImage, altImage) => {
  $containerImage.classList.toggle('move');
  $imageContainer.classList.toggle('show');
  $imageContainer.src = srcImage;
  $imageContainer.alt = altImage;
  $copy.innerHTML = altImage;
};

/* Cerrando Container */
$closeModal.addEventListener('click', () => {
  $containerImage.classList.toggle('move');
  $imageContainer.classList.toggle('show');
});
