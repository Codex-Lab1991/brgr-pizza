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
