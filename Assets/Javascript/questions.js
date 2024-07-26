// código para adicionar a classe a cada div especifica e abrir a caixa da div que recebeu a classe

const div1 = document.querySelector('.questions > div:first-of-type');
const div2 = document.querySelector('.questions > div:nth-of-type(2)');
const div3 = document.querySelector('.questions > div:nth-of-type(3)');
const div4 = document.querySelector('.questions > div:nth-of-type(4)');
const div5 = document.querySelector('.questions > div:nth-of-type(5)');
const div6 = document.querySelector('.questions > div:nth-of-type(6)');
const div7 = document.querySelector('.questions > div:last-of-type');

function openMenu1(){
    div1.classList.toggle('openQuestion');
};

function openMenu2(){
    div2.classList.toggle('openQuestion');
};

function openMenu3(){
    div3.classList.toggle('openQuestion');
};

function openMenu4(){
    div4.classList.toggle('openQuestion');
};

function openMenu5(){
    div5.classList.toggle('openQuestion');
};

function openMenu6(){
    div6.classList.toggle('openQuestion');
};

function openMenu7(){
    div7.classList.toggle('openQuestion');
};