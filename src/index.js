import "./styles/main.scss";
import "./fonts/fonts.scss";
require("./icon_customImage.js");

// header
const header = document.querySelector("header");
const navToggle = header.querySelector(".nav-toggle");
const linksToggle = header.querySelector(".nav-links");

navToggle.addEventListener("click", () => {
  header.classList.toggle("active");
  navToggle.classList.toggle("active");
  linksToggle.classList.toggle("active");
});

// modal
const modalButtons = document.querySelectorAll(".modal-button");
const modalOverlay = document.querySelector(".modal-overlay");
const modalClose = document.querySelector(".modal-close");

modalButtons.forEach((modalButton) => {
  modalButton.addEventListener("click", () => {
    modalOverlay.classList.add("show");
  });
});

modalClose.addEventListener("click", () => {
  modalOverlay.classList.remove("show");
});
