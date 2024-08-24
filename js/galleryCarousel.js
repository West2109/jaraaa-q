let images = [
    {src: '/images/photo1.jpg', caption: '❤️'},
    {src: '/images/photo2.jpg', caption: 'Second Photo Caption'},
    {src: 'photo3.jpg', caption: 'Third Photo Caption'}
];

let currentIndex = 0;

function showImage(index) {
    const imageElement = document.getElementById('carouselImage');
    const captionElement = document.getElementById('carouselCaption');
    imageElement.src = images[index].src;
    captionElement.textContent = images[index].caption;
}

function prevImage() {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    showImage(currentIndex);
}

function nextImage() {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    showImage(currentIndex);
}

// Initialize with the first image
showImage(currentIndex);
