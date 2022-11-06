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

const body = document.querySelector("body");
const wrapperModal = document.querySelector(".wrapper-modal");
const modal = document.querySelector(".modal");
const btnContact = document.querySelector(".contact");
const btnNo = document.querySelector(".btn-n");

const openModal = () => {
  body.style.overflow = "hidden";
  wrapperModal.classList.add("active");
};

const closeModal = () => {
  body.style.overflow = "visible";
  wrapperModal.classList.remove("active");
};

btnContact.addEventListener("click", openModal);
btnNo.addEventListener("click", closeModal);

window.addEventListener("scroll", showArrowToTop);
arrowTop.addEventListener("click", arrowToTop);
arrowBottom.addEventListener("click", arrowToSection);
