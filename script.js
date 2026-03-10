"use strict";

const mobileNavBtn = document.querySelector(".mobile__nav-btn");
const navLinks = document.querySelector(".nav__links");
const projectFilters = document.querySelector(".header__filters");

//Utility Functions
function closeMenu() {
  if (!mobileNavBtn || !navLinks) return;
  mobileNavBtn.classList.remove("active");
  navLinks.classList.remove("active");
  mobileNavBtn.setAttribute("aria-expanded", "false");
}

function openMenu() {
  if (!mobileNavBtn || !navLinks) return;
  mobileNavBtn.classList.add("active");
  navLinks.classList.add("active");
  mobileNavBtn.setAttribute("aria-expanded", "true");
}


//Event Listeners
if (mobileNavBtn && navLinks) {
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
}

if (projectFilters) {
  projectFilters.addEventListener("click", (e) => {
    const button = e.target.closest("button[data-filter]");
    if (!button) return;

    const buttons = projectFilters.querySelectorAll("button[data-filter]");
    buttons.forEach((item) => {
      item.classList.remove("is-active");
      item.setAttribute("aria-pressed", "false");
    });

    button.classList.add("is-active");
    button.setAttribute("aria-pressed", "true");
  });
}
