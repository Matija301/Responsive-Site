const btnOpen = document.querySelector (".menu-open")
const btnClosed = document.querySelector (".menu-closed")
const btn= document.querySelector(".header-button")
const headerTex = document.querySelector(".header-tex")

btn.addEventListener("click",(e) =>{
    btnOpen.classList.toggle("hidden")
    btnClosed.classList.toggle("hidden")
    headerTex.classList.toggle("header-tex-open")
})