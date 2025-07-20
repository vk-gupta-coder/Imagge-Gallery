let currentImageIndex = 0;
let images = [];

function openLightbox(imgElement) {
  const galleryImages = document.querySelectorAll('.gallery img');
  images = Array.from(galleryImages);
  currentImageIndex = images.indexOf(imgElement);

  document.getElementById('lightbox-img').src = imgElement.src;
  document.getElementById('lightbox').style.display = 'flex';
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  document.getElementById('lightbox-img').src = images[currentImageIndex].src;
}

function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  document.getElementById('lightbox-img').src = images[currentImageIndex].src;
}

function filterImages(category, button) {
  document.querySelectorAll('.filter-btns button').forEach(btn => {
    btn.classList.remove('active');
  });
  button.classList.add('active');

  const cards = document.querySelectorAll('.image-card');
  cards.forEach(card => {
    if (category === 'all' || card.classList.contains(category)) {
      card.classList.remove('hide');
    } else {
      card.classList.add('hide');
    }
  });
}

function searchImages() {
  const query = document.getElementById('searchInput').value.toLowerCase();
  const cards = document.querySelectorAll('.image-card');

  cards.forEach(card => {
    const altText = card.querySelector('img').alt.toLowerCase();
    if (altText.includes(query)) {
      card.classList.remove('hide');
    } else {
      card.classList.add('hide');
    }
  });
}