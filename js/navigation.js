const hamburgerBtn = document.querySelector('.hamburger');
const btnSpan = document.querySelector('.hamburger span');
const menu = document.querySelector('.menu');
const navHeader = document.querySelector('.hamburger h1');

hamburgerBtn.addEventListener('click', () => {
    btnSpan.classList.toggle('hamburgerAni');
    menu.classList.toggle('menuAni');
    navHeader.classList.toggle('h1Display');
});

window.addEventListener('scroll', () => {
    if(window.innerWidth < 500){
        if(scrollY > 300){
            navHeader.classList.add('h1Display');
        } 
        if(scrollY < 300){
            navHeader.classList.remove('h1Display');
        }
    } else{
        if(scrollY > 600){
            navHeader.classList.add('h1Display');
        } 
        if(scrollY < 600){
            navHeader.classList.remove('h1Display');
        }
    }
});