const mobileMenu = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");

mobileMenu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// // script.js
// function showImage(src) {
//     const lightbox = document.getElementById('lightbox');
//     const lightboxImage = document.getElementById('lightbox-image');
//     lightboxImage.src = src;
//     lightbox.style.display = 'flex'; // Show lightbox
// }

// function hideImage() {
//     const lightbox = document.getElementById('lightbox');
//     lightbox.style.display = 'none'; // Hide lightbox
// }

// // Optional: Close lightbox when clicking outside the image
// document.getElementById('lightbox').onclick = hideImage;

// script.js
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        // Center the image on hover
        item.style.transform = 'translateX(calc(50vw - 75px))'; // Adjust translate value based on image width
        item.style.zIndex = '10'; // Bring hovered item to front
    });

    item.addEventListener('mouseleave', () => {
        // Return to original position
        item.style.transform = 'translateX(0)';
        item.style.zIndex = '1'; // Reset z-index
    });

    item.addEventListener('click', () => {
        const imgSrc = item.querySelector('img').src;
        showImage(imgSrc);
    });
});

function showImage(src) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    lightboxImage.src = src;
    lightbox.style.display = 'flex'; // Show lightbox
}

function hideImage() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none'; // Hide lightbox
}

// Optional: Close lightbox when clicking outside the image
document.getElementById('lightbox').onclick = hideImage;
