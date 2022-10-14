const arrowTop = document.querySelector(".arrow-top");
const arrowBottom = document.querySelector(".arrow-bottom");

// ARROW-TO-SECTION
const arrowToSection = () => {
  window.scrollTo(0, 800);
};

// ARROW-TO-TOP
const showArrowToTop = () => {
  if (scrollY > 650) {
    arrowTop.classList.add("active");
  } else {
    arrowTop.classList.remove("active");
  }
};

const arrowToTop = () => {
  window.scrollTo(0, 0);
};

// MODAL
const body = document.querySelector("body");
const wrapperModal = document.querySelector(".wrapper-modal");
const modal = document.querySelector(".modal");
const btnContact = document.querySelector(".contact");
const btnNo = document.querySelector(".btn-n");

const openModal = () => {
  body.style.overflow = "hidden";
  modal.style.visibility = "visible";
  wrapperModal.classList.add("active");
};

const closeModal = () => {
  body.style.overflow = "visible";
  modal.style.visibility = "hidden";
  wrapperModal.classList.remove("active");
};

// BTN-EVENTS
btnContact.addEventListener("click", openModal);
btnNo.addEventListener("click", closeModal);

// ARROW-EVENTS
window.addEventListener("scroll", showArrowToTop);
arrowTop.addEventListener("click", arrowToTop);
arrowBottom.addEventListener("click", arrowToSection);
