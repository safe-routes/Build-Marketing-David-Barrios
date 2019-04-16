const hamburgerBtn = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburgerBtn.addEventListener('click', () => {
    menu.classList.toggle('navAnimation');
    hamburgerBtn.classList.toggle('hamburgerAni');
});