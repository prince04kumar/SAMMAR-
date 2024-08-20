// script.js
const sliderImages = document.querySelector('#block1');
const images = document.querySelectorAll('#block1 img');
let currentIndex = 0;
const imageCount = images.length;

function slideImages() {
    currentIndex++;
    if (currentIndex >= imageCount) {
        currentIndex = 0;
    }
    updateSliderPosition();
}

function updateSliderPosition() {
    sliderImages.style.transform = `translateX(${-currentIndex * 100}%)`;
}

// Slide every 3 seconds
function startSlider() {
    slideInterval = setInterval(slideImages, 2000);
}


function stopSlider() {
    clearInterval(slideInterval);
}

// Start the slider
startSlider();

// Stop the slider on mouse enter and restart on mouse leave
sliderImages.addEventListener('mouseenter', stopSlider);
sliderImages.addEventListener('mouseleave', startSlider);
