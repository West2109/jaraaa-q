function openPhoto(photoNumber) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const lightboxCaption = document.getElementById("lightbox-caption");

    lightbox.style.display = "flex";
    lightboxImg.src = `/images/photo${photoNumber}.jpg`; // Assuming the images are named photo1.jpg, photo2.jpg, etc.
    lightboxCaption.innerHTML = `Photo ${photoNumber}`;
}

function closePhoto() {
    const lightbox = document.getElementById("lightbox");
    lightbox.style.display = "none";
}
