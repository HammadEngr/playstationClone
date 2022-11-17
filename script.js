"use strict";
const slideTabsContainer = document.querySelector(".slide__tabs");
const slides = document.querySelectorAll(".slide");
const staticSlides = document.querySelectorAll(".static__slide");
const staticTabsContainer = document.querySelector(".static__tabs");

// Main Slider Section__1
let autoNextSLideTimer;
let repeatSlideShowTimer;
function startSlideShow() {
  const autoNextSLide = function () {
    for (let i = 0; i < slides.length; i++) {
      autoNextSLideTimer = setTimeout(() => {
        slides.forEach((slide) => slide.classList.add("hidden"));
        slides[i].classList.toggle("hidden");
      }, i * 3000);
    }
  };
  repeatSlideShowTimer = setInterval(autoNextSLide, 12000);
  return repeatSlideShowTimer;
}
// startSlideShow();

slideTabsContainer.addEventListener("click", function (e) {
  clearTimeout(autoNextSLideTimer);
  clearInterval(repeatSlideShowTimer);
  const el = e.target.closest(".slide__tab");
  const slideNumber = el.dataset.tab;
  slides.forEach((slide) => {
    slide.classList.add("hidden");
    slide.dataset.slide === slideNumber && slide.classList.remove("hidden");
  });
  // startSlideShow();
});

//Static tabs section__2
staticTabsContainer.addEventListener("click", function (e) {
  const el = e.target.closest(".static__tab");
  const slideNumber = el.dataset.static;

  staticSlides.forEach((slide) => {
    slide.classList.add("hidden");
    slide.dataset.staticslide === slideNumber &&
      slide.classList.remove("hidden");
  });
});

//Button slided Section__5

const rightBtnSec5 = document.querySelector(".section__5--btn-right");
const leftBtnSec5 = document.querySelector(".section__5--btn-left");
const sec5Btns = document.querySelector(".section__5--btns");
const slidesSec5 = document.querySelectorAll(".section__5--slide");
let curSlide = 0;
const maxSlide = slidesSec5.length;

const goToSlide = function (slide) {
  slidesSec5.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};
goToSlide(0);

const nextSlide = function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide += 1;
  }
  goToSlide(curSlide);
};

const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }
  goToSlide(curSlide);
};

rightBtnSec5.addEventListener("click", nextSlide);
leftBtnSec5.addEventListener("click", prevSlide);

/////////////////////////////////////////////////////////////
const navList = document.querySelector(".nav__list");
const gamesHeaderExpand = document.querySelector(".header__expand--games");
navList.addEventListener("click", function (e) {
  gamesHeaderExpand.classList.toggle("header__expand--inactive");
});
