"use strict";

// ***** HEADER SCROLL *****
window.addEventListener("scroll", () => {
  var header = document.querySelector(".header");
  header.classList.toggle("sticky", window.scrollY > 0);
  header.classList.toggle("sticky--home", window.scrollY > 0);
});

// ***** TESTIMONIALS *****
const testimonials = [
  {
    id: 1,
    img: "img/person-0.jpg",
    name: "Jonas Ford",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente non quaerat sint iure voluptate. Sapiente voluptatem aliquid unde minima neque.",
  },
  {
    id: 2,
    img: "img/person-1.jpg",
    name: "Hellen Smith",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi magni maxime blanditiis cum? Quaerat omnis quae, animi repellendus porro enim.",
  },
  {
    id: 3,
    img: "img/person-2.jpg",
    name: "Sarah William",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut odio architecto veniam quos veritatis reiciendis tempore doloremque excepturi quia aspernatur.",
  },
  {
    id: 4,
    img: "img/person-3.jpg",
    name: "Josh Osbourne",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente non quaerat sint iure voluptate. Sapiente voluptatem aliquid unde minima neque.",
  },
  {
    id: 5,
    img: "img/person-4.jpg",
    name: "Kelly Bundy",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi magni maxime blanditiis cum? Quaerat omnis quae, animi repellendus porro enim.",
  },
  {
    id: 6,
    img: "img/person-5.png",
    name: "Tom Green",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut odio architecto veniam quos veritatis reiciendis tempore doloremque excepturi quia aspernatur.",
  },
  {
    id: 7,
    img: "img/person-6.jpg",
    name: "Keisha Mac",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente non quaerat sint iure voluptate. Sapiente voluptatem aliquid unde minima neque..",
  },
];

// ! Buttons
const backBTN = document.querySelector("#backBtn");
const nextBtn = document.querySelector("#nextBtn");

// ! Items
const testimonialNum = document.querySelector(".testimonials__nr");
const destination = document.querySelector(".testimonials__card");
const img = document.querySelector(".testimonials__img");
const name = document.querySelector(".tittle__testimonials");
const text = document.querySelector(".paragraph--testimonial");

// ! Set starting testimonial
let currentItem = 0;

// ! load initial testimonial
window.addEventListener("DOMContentLoaded", () => {
  showTestimonial(currentItem);
});

// ! show testimonial based on item
function showTestimonial() {
  const item = testimonials[currentItem];
  img.src = item.img;
  name.textContent = item.name;
  text.textContent = item.text;
  testimonialNum.innerHTML = `<span class="tittle__span--border">0</span>${
    currentItem + 1
  }`;
}

// ! show next testimonial
nextBtn.addEventListener("click", () => {
  currentItem++;
  if (currentItem > testimonials.length - 1) {
    currentItem = 0;
  }
  showTestimonial(currentItem);
});

// ! show next testimonial
backBtn.addEventListener("click", () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = testimonials.length - 1;
  }
  showTestimonial(currentItem);
});
