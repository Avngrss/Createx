const linkLogin = document.querySelector(".account__link");
const wrap = document.querySelector(".wrapper__modal");
const btnClose = document.querySelector(".close");
const overlay = document.querySelector(".overlay");

linkLogin.addEventListener("click", () => {
  wrap.classList.add("active");
});

const closeModal = () => {
  wrap.classList.remove("active");
};
overlay.addEventListener("click", closeModal);
btnClose.addEventListener("click", closeModal);

///Two modal

const wraps = document.querySelector(".wrapper__modals");
const overlays = document.querySelector(".overlays");
const twoModal = document.querySelector(".two__modal");
const closes = document.querySelector(".closes");

twoModal.addEventListener("click", () => {
  wraps.classList.add("active");
});
const closeModals = () => {
  wraps.classList.remove("active");
};
overlays.addEventListener("click", closeModals);
closes.addEventListener("click", closeModals);
