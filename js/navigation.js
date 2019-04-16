const hamburgerBtn = document.querySelector('.hamburger');
const btnSpan = document.querySelector('.hamburger span');
const menu = document.querySelector('.menu');
const links = document.querySelector('.menu ul');

hamburgerBtn.addEventListener('click', () => {
    btnSpan.classList.toggle('hamburgerAni');
    menu.classList.toggle('menuAni');
});