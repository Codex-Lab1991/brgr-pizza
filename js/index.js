"use strict";

// ***** HEADER SCROLL *****
window.addEventListener("scroll", () => {
  var header = document.querySelector(".header");
  header.classList.toggle("sticky", window.scrollY > 0);
  header.classList.toggle("sticky--home", window.scrollY > 0);
});

// ***** CAROUSEL *****
const testimonials = [
  {
    id: 1,
    img: "img/person-0.jpg",
    name: "Jonas Ford",
    text: "Ipsum dolor sit amet. Nemo, quos quasi voluptatum elitis.",
  },
  {
    id: 2,
    img: "img/person-1.jpg",
    name: "Hellen Smith",
    text: "Corporis veritatis repudiandae nobis praesentium voluptatum.",
  },
  {
    id: 3,
    img: "img/person-2.jpg",
    name: "Sarah William",
    text: "Sequi distinctio magni asperiores saepe quisquam.",
  },
  {
    id: 4,
    img: "img/person-3.jpg",
    name: "Josh Osbourne",
    text: "Ipsum dolor sit amet. Nemo, quos quasi voluptatum elitis.",
  },
  {
    id: 5,
    img: "img/person-4.jpg",
    name: "Kelly Bundy",
    text: "Corporis veritatis repudiandae nobis praesentium voluptatum.",
  },
  {
    id: 6,
    img: "img/person-5.png",
    name: "Tom Green",
    text: "Sequi distinctio magni asperiores saepe quisquam.",
  },
  {
    id: 7,
    img: "img/person-6.jpg",
    name: "Keisha Mac",
    text: "Corporis veritatis repudiandae nobis praesentium voluptatum.",
  },
  {
    id: 8,
    img: "img/person-0.jpg",
    name: "Jonas Ford",
    text: "Ipsum dolor sit amet. Nemo, quos quasi voluptatum elitis.",
  },
  {
    id: 9,
    img: "img/person-1.jpg",
    name: "Jonas Ford",
    text: "Corporis veritatis repudiandae nobis praesentium voluptatum.",
  },
  {
    id: 10,
    img: "img/person-2.jpg",
    name: "Jonas Ford",
    text: "Sequi distinctio magni asperiores saepe quisquam.",
  },
];
const carouselSlide = document.querySelector(".carousel__slide");
const carouselNum = document.querySelector(".testimonials__nr");
// Button
const nextBtn = document.querySelector("#nextBtn");

window.addEventListener("DOMContentLoaded", () => {
  displayTestimonialsItem(testimonials);
  moveCarousel();
});

function displayTestimonialsItem(items) {
  const displayTestimonials = items
    .map((item) => {
      return `<div class="carousel__item">
                <img src=${item.img}  class="testimonials__img" alt="reviewer 0">
                <svg class="testimonials__icon">
                  <use xlink:href="img/sprite.svg#icon-quotes-right"></use>
                </svg>
                <h4 class="tittle__testimonials">${item.name}</h4>
                <p class="paragraph--testimonial mb-sm">${item.text}</p>
                <a href="#" class="btn btn--sm btn--outline">read more</a>
             </div>`;
    })
    .join("");
  carouselSlide.innerHTML = displayTestimonials;
}

function moveCarousel() {
  // Counter
  let counter = 1;
  const carouselItems = document.querySelectorAll(".carousel__item");
  let size = carouselItems[0].clientWidth + 50;
  carouselItems[counter + 1].classList.add("carousel__item--active");
  carouselSlide.style.transform = "translateX(" + -size * counter + "px)";

  //Button Listener
  nextBtn.addEventListener("click", () => {
    if (counter >= carouselItems.length - 3) return;
    carouselSlide.style.transition = "transform .3s linear";
    carouselItems[counter + 1].classList.remove("carousel__item--active");
    if (counter != carouselItems.length - 4) {
      carouselItems[counter + 2].classList.add("carousel__item--active");
    }
    counter++;
    carouselNum.innerHTML = `<span class = "tittle__span--border">0</span>${counter}`;
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  });

  carouselItems[carouselItems.length - 3].setAttribute(
    "id",
    "firstTestimonial"
  );

  carouselSlide.addEventListener("transitionend", () => {
    if (carouselItems[counter].id === "firstTestimonial") {
      carouselSlide.style.transition = "none";
      counter = carouselItems.length - 3 - counter;
      carouselItems[counter + 1].classList.add("carousel__item--active");
      carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
    }
  });
}
