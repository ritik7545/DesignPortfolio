function showImage(imageSrc) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    lightbox.style.display = 'flex';
    lightboxImage.src = imageSrc;
}

function hideImage() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}
