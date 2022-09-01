import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

//меню бургер
const burgerButton = document.querySelector('.header__burger');
const burgerMenu = document.querySelector('.menu');

burgerButton.addEventListener('click', () => {

    if (burgerMenu.classList.contains('hidden')) {
        burgerMenu.classList.remove('hidden');
        burgerButton.classList.add('open-burger');
    } else {
        burgerMenu.classList.add('hidden');
        burgerButton.classList.remove('open-burger');
    }
})

//слайдер
let slideIndex = 1;

function showSlides(n) {

    slideIndex = n;
    let slides = document.getElementsByClassName("slider__slide");

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }

    for (let slide of slides) {
        slide.style.display = "none";
    }

    slides[slideIndex - 1].style.display = "flex";
}

showSlides(slideIndex);


const arrowRigth = document.querySelector('.arrow-right');
const arrowLeft = document.querySelector('.arrow-left');

arrowRigth.addEventListener('click', () => {
    showSlides(slideIndex += 1);
})

arrowLeft.addEventListener('click', () => {
    showSlides(slideIndex -= 1);
})