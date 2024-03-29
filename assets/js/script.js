"use strict";

// add events on multiple alements

const addEventonElement = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
};

// Navbar toggle for mobile

const navbar = document.querySelector("[data-navbar]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggleBtn.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
};

addEventonElement([navToggleBtn, overlay], "click", toggleNavbar);

// PARALLAX EFFECT--------------

const parallaxElemnts = document.querySelectorAll("[data-parallax]");

window.addEventListener("mousemove", (event) => {
  for (let i = 0, len = parallaxElemnts.length; i < len; i++) {
    const movementX =
      (event.clientX / window.innerWidth) *
      Number(parallaxElemnts[i].dataset.parallaxSpeed);

    const movementy =
      (event.clientY / window.innerHeight) *
      Number(parallaxElemnts[i].dataset.parallaxSpeed);

    parallaxElemnts[i].animate(
      {
        transform: `translate(${movementX}px, ${movementy}px)`,
      },
      { duration: 500, fill: "forwards" }
    );
  }
});
