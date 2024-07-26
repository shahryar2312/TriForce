let currentIndex = 0;
const gallery = document.querySelector('.gallery');
const images = document.querySelectorAll('.gallery img');
const totalImages = images.length;
const notification = document.querySelector('.swiper-notification');

document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalImages;
    updateGallery();
});

document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateGallery();
});

let startX = 0;
let currentTranslate = 0;
let prevTranslate = 0;

gallery.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    prevTranslate = currentTranslate;
});

gallery.addEventListener('touchmove', (e) => {
    const currentX = e.touches[0].clientX;
    currentTranslate = prevTranslate + currentX - startX;
    gallery.style.transform = `translateX(${currentTranslate}px)`;
});

gallery.addEventListener('touchend', (e) => {
    const endX = e.changedTouches[0].clientX;
    const diffX = startX - endX;
    if (diffX > 50) {
        // swipe left
        currentIndex = (currentIndex + 1) % totalImages;
    } else if (diffX < -50) {
        // swipe right
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    }
    updateGallery();
});

function updateGallery() {
    const translateXValue = -currentIndex * 100;
    gallery.style.transform = `translateX(${translateXValue}%)`;
    notification.textContent = `Slide ${currentIndex + 1} of ${totalImages}`;
}
