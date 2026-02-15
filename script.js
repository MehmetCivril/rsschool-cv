"use strict";

const mobileNavBtn = document.querySelector(".mobile__nav-btn");
const navLinks = document.querySelector(".nav__links");

//Utility Functions
function closeMenu() {
  mobileNavBtn.classList.remove("active");
  navLinks.classList.remove("active");
  mobileNavBtn.setAttribute("aria-expanded", "false");
}

function openMenu() {
  mobileNavBtn.classList.add("active");
  navLinks.classList.add("active");
  mobileNavBtn.setAttribute("aria-expanded", "true");
}


//Event Listeners
mobileNavBtn.addEventListener("click", () => {
  mobileNavBtn.classList.toggle("active");
  navLinks.classList.toggle("active");
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 769) closeMenu();
});

document.addEventListener("click", (e) => {
  if (mobileNavBtn.contains(e.target)) return;
  closeMenu();
});
