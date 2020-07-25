"use strict";
// ***** HEADER SCROLL *****

window.addEventListener("scroll", () => {
  var header = document.querySelector(".header");
  header.classList.toggle("sticky", window.scrollY > 0);
  header.classList.toggle("sticky--contact", window.scrollY > 0);
  if (window.scrollY > 0) {
    header
      .querySelector(".logo__img")
      .setAttribute("src", "img/logo-white.png");
  } else {
    header.querySelector(".logo__img").setAttribute("src", "img/logo.png");
  }
});

// ***** HEADER TOGGLE *****
const navMenu = document.querySelector(".nav__menu");
const navToggler = document.querySelector(".navigation__toggler");
navToggler.addEventListener("click", (e) => {
  navToggler.classList.toggle("checked");
  navMenu.classList.toggle("toggled");
});
