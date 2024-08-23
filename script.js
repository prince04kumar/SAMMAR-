// //for sixes and fores.
const carousels = document.querySelectorAll(".carousel-containerA");
carousels.forEach((carousel) => {
const carouselA = carousel.querySelector(".carouselA");
const imagesA= carousel.querySelectorAll(".carouselA section");
const totalImagesA = imagesA.length;
let indexA = 0;

const firstCloneA = imagesA[0].cloneNode(true);
carouselA.appendChild(firstCloneA);

function showNextImageA() {
  indexA++;
  carouselA.style.transition = "transform 1s ease";
  carouselA.style.transform = `translateX(${-indexA * 100}%)`;

  if (indexA === totalImagesA) {
    setTimeout(() => {
      carouselA.style.transition = "none";
      carouselA.style.transform = `translateX(0)`;
      indexA = 0;
    }, 1000);
  }
}
function startCarousel() {
  motion = setInterval(showNextImageA, 4000);
}

function stopCarousel() {
  clearInterval(motion);
}

startCarousel();
carouselA.addEventListener('mouseenter', stopCarousel);
carouselA.addEventListener('mouseleave', startCarousel);
});


//Classes for images
class Carousel {
  constructor(selector,innerselector,interval) {
    this.carousel = document.querySelector(selector);
    this.images = this.carousel.querySelectorAll(innerselector);
    this.totalImages = this.images.length;
    this.index = 0;
    this.interval = interval;

    const firstClone = this.images[0].cloneNode(true);
    this.carousel.appendChild(firstClone);

    this.startCarousel();
    this.carousel.addEventListener('mouseenter', () => this.stopCarousel());
    this.carousel.addEventListener('mouseleave', () => this.startCarousel());
  }

  showNextImage() {
    this.index++;
    this.carousel.style.transition = "transform 1s ease";
    this.carousel.style.transform = `translateX(${-this.index * 100}%)`;

    if (this.index === this.totalImages) {
      setTimeout(() => {
        this.carousel.style.transition = "none";
        this.carousel.style.transform = `translateX(0)`;
        this.index = 0;
      }, 1000);
    }
  }

  startCarousel() {
    this.intervalId = setInterval(() => this.showNextImage(), this.interval);
  }

  stopCarousel() {
    clearInterval(this.intervalId);
  }
}
new Carousel(".carousel","img",5000);
new Carousel(".carousel2","img",4000);
new Carousel(".carousel3","img",4000);


