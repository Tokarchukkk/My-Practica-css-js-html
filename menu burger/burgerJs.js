let burger = document.querySelector('.header__burger');
let headerMenu = document.querySelector('.header__menu');
let body = document.querySelector('.body');
let buttons = document.querySelectorAll('.buttons');//получаем доступ к списку, через for получаем доступ к элементу

function activStyle(){
    burger.classList.toggle('activ');
    headerMenu.classList.toggle('activ');
    body.classList.toggle('lock');
}

burger.addEventListener('click', activStyle);// скобки тут не нужны с ними работать не будет

for (let i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click', activStyle);//
}
