"use strict";

// ***** HEADER SCROLL *****
var header = document.querySelector(".header");
var img = document.querySelector(".logo__img");
window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 0);
  header.classList.toggle("sticky--contact", window.scrollY > 0);

  window.scrollY > 0
    ? img.setAttribute("src", "../img/logo-white.png")
    : img.setAttribute("src", "../img/logo.png");
});
