const arrowTop = document.querySelector(".arrow-top");
const arrowBottom = document.querySelector(".arrow-bottom");

const arrowToSection = () => {
  window.scrollTo(0, 790);
};

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

const root = document.querySelector("html");
const wrapperModal = document.querySelector(".wrapper-modal");
const modal = document.querySelector(".modal");
const btnContact = document.querySelector(".contact");
const btnNo = document.querySelector(".btn-n");

const openModal = () => {
  root.style.overflow = "hidden";
  wrapperModal.classList.add("active");
};

const closeModal = () => {
  root.style.overflow = "overlay";
  wrapperModal.classList.remove("active");
};

btnContact.addEventListener("click", openModal);
btnNo.addEventListener("click", closeModal);

window.addEventListener("scroll", showArrowToTop);
arrowTop.addEventListener("click", arrowToTop);
arrowBottom.addEventListener("click", arrowToSection);
