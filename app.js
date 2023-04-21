const zoomBtn = document.querySelectorAll('.zoom-text');
const allImages = document.querySelectorAll('.img-container img');
const imageView = document.querySelector('.image-view');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const imageBox = document.querySelector('.image-box');

let currentImageIdx = 0;

imageView.addEventListener('click', function() {
  this.style.display = "none";
  imageBox.style.display = "none";
});

zoomBtn.forEach(function(btn, index) {
  btn.addEventListener('click', function() {
    imageView.style.display = "block";
    imageBox.style.display = "block";
    currentImageIdx = index;
    currentImageDisplay(currentImageIdx);
  })
});

function currentImageDisplay(position) {
  imageBox.style.background = `url(${allImages[position].src}) center/cover no-repeat`;
}

prevBtn.addEventListener('click', function() {
  currentImageIdx--;
  if (currentImageIdx < 0) {
    currentImageIdx = allImages.length - 1;
  }
  currentImageDisplay(currentImageIdx);
});

nextBtn.addEventListener('click', function() {
  currentImageIdx++;
  if (currentImageIdx === allImages.length) {
    currentImageIdx = 0;
  }
  currentImageDisplay(currentImageIdx);
});