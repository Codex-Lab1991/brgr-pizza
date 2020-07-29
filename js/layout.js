"use strict";

// ***** HEADER TOGGLE *****
const navMenu = document.querySelector(".nav__menu");
const navToggler = document.querySelector(".navigation__toggler");
navToggler.addEventListener("click", (e) => {
  navToggler.classList.toggle("checked");
  navMenu.classList.toggle("toggled");
});

// FOOTER DATE
const themeDate = document.querySelector("#date");
themeDate.textContent = new Date().getFullYear();
