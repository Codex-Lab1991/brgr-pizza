"use strict";

// ***** HEADER SCROLL *****

window.addEventListener("scroll", () => {
  var header = document.querySelector(".header");
  header.classList.toggle("sticky", window.scrollY > 0);
  header.classList.toggle("sticky--menu", window.scrollY > 0);
});

// ABOUT PAGE MOST POPULAR BURGERS
const popular = [
  {
    id: 1,
    shape: "./img/shape.png",
    img: "./img/menu-items/burger-1.png",
    tittle: "Burger king",
    desc: "Lorem ipsum dolot sit.",
    rating: "&#9733 &#9733 &#9733 &#9733 &#9734",
    price: "10,10 $",
  },
  {
    id: 2,
    shape: "./img/shape.png",
    img: "./img/menu-items/burger-2.png",
    tittle: "Angus burger",
    desc: "Lorem ipsum dolot sit.",
    rating: "&#9733 &#9733 &#9733 &#9733 &#9734",
    price: "6,00 $",
  },
  {
    id: 3,
    shape: "./img/shape.png",
    img: "./img/menu-items/burger-3.png",
    tittle: "Bacon cheesy",
    desc: "Lorem ipsum dolot sit.",
    rating: "&#9733 &#9733 &#9733 &#9733 &#9734",
    price: "5,00 $",
  },
  {
    id: 4,
    shape: "./img/shape.png",
    img: "./img/menu-items/burger-4.png",
    tittle: "Buffalo burger",
    desc: "Lorem ipsum dolot sit.",
    rating: "&#9733 &#9733 &#9733 &#9733 &#9734",
    price: "8,00 $",
  },
];
const containerPopular = document.querySelector(".popular__cards");
window.addEventListener("DOMContentLoaded", displayPopularItems);

function displayPopularItems() {
  const displayPopular = popular
    .map((item) => {
      return `<div class="card card--sm">
                  <img src=${item.shape} class="card__shape card__shape--sm" alt="new product">
                  <img  src=${item.img}  class="card__img card__img--moved" alt="${item.tittle}">
                  <h4 class="tittle--card mt-sm">${item.tittle}</h4>
                  <p class="paragraph--sm">${item.desc}</p>
                  <p class="paragraph paragraph--stars mt-sm">${item.rating}</p>
                  <p class="card__price">${item.price}</p>
                  <button class="btn btn--sm btn--card add">Buy now</button>
              </div>`;
    })
    .join("");
  containerPopular.innerHTML = displayPopular;
}
