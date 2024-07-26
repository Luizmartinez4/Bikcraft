// Fazendo o menu receber a classe active ao ser clicado

const menu = document.querySelector(".header__menu-mobile");
const lista = document.querySelector(".header__list");

menu.addEventListener("click", () => {
    menu.classList.toggle('active');
    lista.classList.toggle('active');
})