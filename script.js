"use strict";

const projectFilters = document.querySelector(".header__filters");
const projectCards = document.querySelectorAll(".project-card");

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

    const filter = button.dataset.filter;
    projectCards.forEach((card) => {
      const category = card.dataset.category;
      const isVisible = filter === "all" || category === filter;
      if (isVisible) card.classList.remove("hidden");
      else card.classList.add("hidden");
    });
  });
}
