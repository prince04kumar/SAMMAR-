

const carousel = document.querySelector(".carousel");
const images = document.querySelectorAll(".carousel img");
const totalImages = images.length;
let index = 0;

const firstClone = images[0].cloneNode(true);
carousel.appendChild(firstClone);

function showNextImage() {
  index++;
  carousel.style.transition = "transform 1s ease";
  carousel.style.transform = `translateX(${-index * 100}%)`;

  if (index === totalImages) {
    setTimeout(() => {
      carousel.style.transition = "none";
      carousel.style.transform = `translateX(0)`;
      index = 0;
    }, 1000);
  }
}
setInterval(showNextImage, 4000);


// const carousel2 = document.querySelector(".carousel2");
// const images2 = document.querySelectorAll(".carousel2 img");
// const totalImages2 = images2.length;
// let index2 = 0;

// const firstClone2 = images2[0].cloneNode(true);
// carousel2.appendChild(firstClone2);

// function showNextImage2() {
//   index2++;
//   carousel2.style.transition = "transform 1s ease";
//   carousel2.style.transform = `translateX(${-index2 * 100}%)`;

//   if (index2 === totalImages2) {
//     setTimeout(() => {
//       carousel2.style.transition = "none";
//       carousel2.style.transform = `translateX(0)`;
//       index2 = 0;
//     }, 1000);
//   }
// }
// setInterval(showNextImage2, 4000);


// const carousel3 = document.querySelector(".carousel3");
// const images3= document.querySelectorAll(".carousel3 img");
// const totalImages3 = images3.length;
// let index3 = 0;

// const firstClone3 = images3[0].cloneNode(true);
// carousel3.appendChild(firstClone3);

// function showNextImage3() {
//   index3++;
//   carousel3.style.transition = "transform 1s ease";
//   carousel3.style.transform = `translateX(${-index3 * 100}%)`;

//   if (index3 === totalImages3) {
//     setTimeout(() => {
//       carousel3.style.transition = "none";
//       carousel3.style.transform = `translateX(0)`;
//       index3 = 0;
//     }, 1000);
//   }
// }
// setInterval(showNextImage3, 4000);
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
setInterval(showNextImageA, 4000);
});
