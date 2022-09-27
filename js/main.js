// ARROW-TO-TOP
const arrowTop = document.querySelector(".arrow-top");

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

window.addEventListener("scroll", showArrowToTop);
arrowTop.addEventListener("click", arrowToTop);


// MODAL
const body = document.querySelector("body");
const wrapperModal = document.querySelector(".wrapper-modal");

const btnContact = document.querySelector(".contact");
const btnNo = document.querySelector(".btn-n");

const closeModal = () => {
  body.style.overflow = "visible";

  wrapperModal.classList.toggle("active");
  wrapperModal.style.display = "none";
};

const openModal = () => {
  body.style.overflow = "hidden";

  wrapperModal.classList.toggle("active");
  wrapperModal.style.display = "flex";
};

btnContact.addEventListener("click", openModal);
btnNo.addEventListener("click", closeModal);
