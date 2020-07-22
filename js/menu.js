"use strict";

// ***** HEADER SCROLL *****

window.addEventListener("scroll", () => {
  var header = document.querySelector(".header");
  header.classList.toggle("sticky", window.scrollY > 0);
  header.classList.toggle("sticky--menu", window.scrollY > 0);
});

// ***** MENU ITEMS *****
const menu = [
  {
    id: 1,
    category: "Burgers",
    img: "./img/menu-items/burger-1.png",
    tittle: "Burger king",
    onStock: "Available",
    rating: "&#9733 &#9733 &#9733 &#9733 &#9734",
    price: "10,10 $",
  },
  {
    id: 2,
    category: "Burgers",
    img: "./img/menu-items/burger-2.png",
    tittle: "Angus Burger",
    onStock: "Available",
    rating: "&#9733 &#9733 &#9733 &#9733 &#9734",
    price: "6,00 $",
  },
  {
    id: 3,
    category: "Burgers",
    img: "./img/menu-items/burger-3.png",
    tittle: "Bacon cheesy",
    onStock: "Available",
    rating: "&#9733 &#9733 &#9733 &#9733 &#9734",
    price: "5,00 $",
  },
  {
    id: 4,
    category: "Burgers",
    img: "./img/menu-items/burger-4.png",
    tittle: "Buffalo burger",
    onStock: "Available",
    rating: "&#9733 &#9733 &#9733 &#9733 &#9734",
    price: "8,00 $",
  },
  {
    id: 5,
    category: "Burgers",
    img: "./img/menu-items/burger-5.png",
    tittle: "Beef burger",
    onStock: "Available",
    rating: "&#9733 &#9733 &#9733 &#9733 &#9734",
    price: "5,00 $",
  },
  {
    id: 6,
    category: "Burgers",
    img: "./img/menu-items/burger-6.png",
    tittle: "Veggie burger",
    onStock: "Available",
    rating: "&#9733 &#9733 &#9733 &#9733 &#9734",
    price: "2,40 $",
  },
  {
    id: 7,
    category: "Burgers",
    img: "./img/menu-items/burger-7.png",
    tittle: "Lucy Burger",
    onStock: "Available",
    rating: "&#9733 &#9733 &#9733 &#9733 &#9734",
    price: "7,00 $",
  },
  {
    id: 8,
    category: "Burgers",
    img: "./img/menu-items/burger-8.png",
    tittle: "Kiwi burger",
    onStock: "Available",
    rating: "&#9733 &#9733 &#9733 &#9733 &#9734",
    price: "7,00 $",
  },
  {
    id: 9,
    category: "Burgers",
    img: "./img/menu-items/burger-9.png",
    tittle: "Steak burger",
    onStock: "Available",
    rating: "&#9733 &#9733 &#9733 &#9733 &#9734",
    price: "10,00 $",
  },
  {
    id: 10,
    category: "Burgers",
    img: "./img/menu-items/burger-10.png",
    tittle: "Steamed burger",
    onStock: "Available",
    rating: "&#9733 &#9733 &#9733 &#9733 &#9734",
    price: "9,00 $",
  },
  {
    id: 11,
    category: "Burgers",
    img: "./img/menu-items/burger-11.png",
    tittle: "Teriyaki burger",
    onStock: "Available",
    rating: "&#9733 &#9733 &#9733 &#9733 &#9734",
    price: "7,00 $",
  },
  {
    id: 12,
    category: "Burgers",
    img: "./img/menu-items/burger-12.png",
    tittle: "Veggie burger",
    onStock: "Available",
    rating: "&#9733 &#9733 &#9733 &#9733 &#9734",
    price: "3,00 $",
  },
  {
    id: 13,
    category: "Burgers",
    img: "./img/menu-items/burger-13.png",
    tittle: "Crispy burger",
    onStock: "Available",
    rating: "&#9733 &#9733 &#9733 &#9733 &#9734",
    price: "5,00 $",
  },
  {
    id: 14,
    category: "Burgers",
    img: "./img/menu-items/burger-14.png",
    tittle: "Tower burger",
    onStock: "Available",
    rating: "&#9733 &#9733 &#9733 &#9733 &#9734",
    price: "9,20 $",
  },
  {
    id: 15,
    category: "Burgers",
    img: "./img/menu-items/burger-15.png",
    tittle: "Hawaii burger",
    onStock: "Available",
    rating: "&#9733 &#9733 &#9733 &#9733 &#9734",
    price: "5,00 $",
  },
  {
    id: 16,
    category: "Burgers",
    img: "./img/menu-items/burger-16.png",
    tittle: "Crispy cheesy",
    onStock: "Available",
    rating: "&#9733 &#9733 &#9733 &#9733 &#9734",
    price: "4,00 $",
  },
  {
    id: 17,
    category: "Burgers",
    img: "./img/menu-items/burger-17.png",
    tittle: "Juicy burger",
    onStock: "Available",
    rating: "&#9733 &#9733 &#9733 &#9733 &#9734",
    price: "5,00 $",
  },
  {
    id: 18,
    category: "Pizza",
    img: "./img/menu-items/pizza-1.png",
    tittle: "Pizza roma",
    onStock: "Available",
    rating: "&#9733 &#9733 &#9733 &#9733 &#9734",
    price: "9,10 $",
  },
  {
    id: 19,
    category: "Pizza",
    img: "./img/menu-items/pizza-2.png",
    tittle: "Pizza capriciosa",
    onStock: "Available",
    rating: "&#9733 &#9733 &#9733 &#9733 &#9734",
    price: "9,00 $",
  },
  {
    id: 20,
    category: "Pizza",
    img: "./img/menu-items/pizza-3.png",
    tittle: "Sicilian pizza",
    onStock: "Available",
    rating: "&#9733 &#9733 &#9733 &#9733 &#9734",
    price: "8,40 $",
  },
  {
    id: 21,
    category: "Pizza",
    img: "./img/menu-items/pizza-4.png",
    tittle: "Pizza pisana",
    onStock: "Available",
    rating: "&#9733 &#9733 &#9733 &#9733 &#9734",
    price: "9,00 $",
  },
  {
    id: 22,
    category: "Pizza",
    img: "./img/menu-items/pizza-5.png",
    tittle: "Pizza tomato",
    onStock: "Available",
    rating: "&#9733 &#9733 &#9733 &#9733 &#9734",
    price: "6,50 $",
  },
  {
    id: 23,
    category: "Pizza",
    img: "./img/menu-items/pizza-6.png",
    tittle: "Pizza funghi",
    onStock: "Available",
    rating: "&#9733 &#9733 &#9733 &#9733 &#9734",
    price: "9,20 $",
  },
  {
    id: 24,
    category: "Pizza",
    img: "./img/menu-items/pizza-7.png",
    tittle: "Sweet pizza",
    onStock: "Available",
    rating: "&#9733 &#9733 &#9733 &#9733 &#9734",
    price: "6,90 $",
  },
  {
    id: 25,
    category: "Pizza",
    img: "./img/menu-items/pizza-8.png",
    tittle: "Pizza margherita",
    onStock: "Available",
    rating: "&#9733 &#9733 &#9733 &#9733 &#9734",
    price: "9,00 $",
  },
  {
    id: 26,
    category: "Pizza",
    img: "./img/menu-items/pizza-9.png",
    tittle: "Pizza formaggi",
    onStock: "Available",
    rating: "&#9733 &#9733 &#9733 &#9733 &#9734",
    price: "10,40 $",
  },
  {
    id: 27,
    category: "Pizza",
    img: "./img/menu-items/pizza-10.png",
    tittle: "Pizza rucola",
    onStock: "Available",
    rating: "&#9733 &#9733 &#9733 &#9733 &#9734",
    price: "8,50 $",
  },
  {
    id: 28,
    category: "Pizza",
    img: "./img/menu-items/pizza-11.png",
    tittle: "Cheesy pizza",
    onStock: "Available",
    rating: "&#9733 &#9733 &#9733 &#9733 &#9734",
    price: "10,00 $",
  },
  {
    id: 29,
    category: "Pizza",
    img: "./img/menu-items/pizza-12.png",
    tittle: "Pizza napolitana",
    onStock: "Available",
    rating: "&#9733 &#9733 &#9733 &#9733 &#9734",
    price: "10,10 $",
  },
  {
    id: 30,
    category: "Pizza",
    img: "./img/menu-items/pizza-13.png",
    tittle: "Pizza House",
    onStock: "Available",
    rating: "&#9733 &#9733 &#9733 &#9733 &#9734",
    price: "9,00 $",
  },
  {
    id: 31,
    category: "Pizza",
    img: "./img/menu-items/pizza-14.png",
    tittle: "Pizza mozzarela",
    onStock: "Available",
    rating: "&#9733 &#9733 &#9733 &#9733 &#9734",
    price: "9,00 $",
  },
  {
    id: 32,
    category: "Pizza",
    img: "./img/menu-items/pizza-15.png",
    tittle: "Pizza peperoni",
    onStock: "Available",
    rating: "&#9733 &#9733 &#9733 &#9733 &#9734",
    price: "12,00 $",
  },
  {
    id: 33,
    category: "French fries",
    img: "./img/menu-items/ff-sm.png",
    tittle: "Frech fries x2",
    onStock: "Available",
    rating: "&#9733 &#9733 &#9733 &#9733 &#9734",
    price: "3,00 $",
  },
  {
    id: 34,
    category: "French fries",
    img: "./img/menu-items/ff-lg.png",
    tittle: "Frech fries",
    onStock: "Available",
    rating: "&#9733 &#9733 &#9733 &#9733 &#9734",
    price: "1,90 $",
  },
  {
    id: 35,
    category: "Drinks",
    img: "./img/menu-items/apa.png",
    tittle: "Water",
    onStock: "Available",
    rating: "&#9733 &#9733 &#9733 &#9733 &#9734",
    price: "0,90 $",
  },
  {
    id: 36,
    category: "Drinks",
    img: "./img/menu-items/cola.png",
    tittle: "Coca Cola",
    onStock: "Available",
    rating: "&#9733 &#9733 &#9733 &#9733 &#9734",
    price: "1,30 $",
  },
  {
    id: 37,
    category: "Drinks",
    img: "./img/menu-items/fanta.png",
    tittle: "Fanta",
    onStock: "Available",
    rating: "&#9733 &#9733 &#9733 &#9733 &#9734",
    price: "1,30 $",
  },
  {
    id: 38,
    category: "Drinks",
    img: "./img/menu-items/sprite.png",
    tittle: "Sprite",
    onStock: "Available",
    rating: "&#9733 &#9733 &#9733 &#9733 &#9734",
    price: "1,30 $",
  },
];

const containerMenu = document.querySelector(".menu__cards");
// DROPDOWN
const categoryInput = document.querySelector(".category__box");
const categoryText = categoryInput.querySelector(".category__tittle");

window.addEventListener("DOMContentLoaded", () => {
  displayMenuItems(menu);
});

categoryInput.addEventListener("click", (e) => {
  openMenu();
  if (e.target.tagName === "LI") {
    let inputValue = e.target.textContent;
    categoryText.textContent = inputValue;
    const menuCategory = menu.filter((item) => {
      if (item.category === inputValue) {
        return item;
      }
    });
    if (inputValue === "All") {
      displayMenuItems(menu);
    } else {
      displayMenuItems(menuCategory);
    }
  }
});

// FUNCTIONS

function openMenu() {
  document.getElementById("category").classList.toggle("active");
  document.getElementById("rotate").classList.toggle("animate");
}

function displayMenuItems(menuItems) {
  const displayMenu = menuItems
    .map((item) => {
      return `<div class="card card--sm">
                <img src=${item.img} class="card__img card__img--moved" alt=${item.tittle}>
                <h4 class="tittle--card mt-sm">${item.tittle}</h4>
                <p class="paragraph--sm paragraph--colored">${item.onStock}</p>
                <p class="paragraph paragraph--stars mt-sm">${item.rating}</p>
                <p class="card__price">${item.price}</p>
                <button class="btn btn--sm btn--card add">Buy now</button>
              </div>`;
    })
    .join("");
  containerMenu.innerHTML = displayMenu;
}
