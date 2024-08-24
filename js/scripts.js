document.addEventListener('DOMContentLoaded', function() {
    const galleryItem = document.querySelector('.gallery-item');
    const caption = document.querySelector('.gallery-item p');

    // Scale in the gallery item (photo)
    setTimeout(() => {
        galleryItem.style.transform = 'scale(1)';
    }, 300); // Delay before scaling in

    // Fade in the caption text after the photo scales in
    setTimeout(() => {
        caption.style.opacity = 100;
    }, 1300); // Delay before fading in the caption
});
