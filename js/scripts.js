"use strict";

const menuToggle = document.querySelector(".menu-toggle");
const siteMenu = document.getElementById("site-menu");

if (menuToggle && siteMenu) {
  const compactLayout = window.matchMedia("(max-width: 639px)");

  function setMenuOpen(open) {
    menuToggle.setAttribute("aria-expanded", String(open));
    siteMenu.hidden = compactLayout.matches && !open;
  }

  function updateLayout() {
    menuToggle.hidden = !compactLayout.matches;

    if (compactLayout.matches && siteMenu.contains(document.activeElement)) {
      menuToggle.focus();
    }

    setMenuOpen(false);
  }

  menuToggle.addEventListener("click", () => {
    setMenuOpen(menuToggle.getAttribute("aria-expanded") !== "true");
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
      setMenuOpen(false);
      menuToggle.focus();
    }
  });

  compactLayout.addEventListener("change", updateLayout);
  updateLayout();
}
