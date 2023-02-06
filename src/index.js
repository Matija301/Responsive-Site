const btnOpen = document.querySelector(".menu-open");
const btnClosed = document.querySelector(".menu-closed");
const btn = document.querySelector(".header-button");
const headerTex = document.querySelector(".header-tex");

btn.addEventListener("click", () => {
  btnOpen.classList.toggle("hidden");
  btnClosed.classList.toggle("hidden");
  btnOpen.classList.toggle("sticky");
  headerTex.classList.toggle("header-tex-open");
});
