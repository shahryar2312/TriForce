document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.querySelector('.gallery');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    let index = 0;
    const items = gallery.children.length;
    const itemWidth = gallery.children[0].offsetWidth + 10; // Including margin

    function updateGallery() {
        const offset = -index * itemWidth;
        gallery.style.transform = `translateX(${offset}px)`;
    }

    prevButton.addEventListener('click', () => {
        index = (index > 0) ? index - 1 : items - 1;
        updateGallery();
    });

    nextButton.addEventListener('click', () => {
        index = (index < items - 1) ? index + 1 : 0;
        updateGallery();
    });
});

document.getElementById('hamburger').addEventListener('click', function() {
    const menuList = document.getElementById('menu-list');
    if (menuList.style.display === 'flex') {
        menuList.style.display = 'none';
    } else {
        menuList.style.display = 'flex';
    }
});