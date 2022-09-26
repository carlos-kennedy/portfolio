const body = document.querySelector("body");
const wrapperModal = document.querySelector(".wrapper-modal");

const btnContact = document.querySelector(".contact");
const btnNo = document.querySelector(".btn-n");

const closeModal = () => {
  body.style.overflow = "auto";

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
