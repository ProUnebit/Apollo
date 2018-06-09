// The selectors
const menuOpenBtn = document.querySelector('.header__menu-open');
const menuCloseBtn = document.querySelector('.header__menu-close');
const menuSectionsList = document.querySelector('.header__menu-sections-list');
const sliderArrowBack_1 = document.querySelector('.slider-1__arrow-back');
const sliderArrowNext_1 = document.querySelector('.slider-1__arrow-next');

// B L O C K S
// Header
// open menu
menuOpenBtn.addEventListener('click', () => {
    menuOpenBtn.style.display = 'none';
    menuCloseBtn.style.display = 'block';
    menuSectionsList.style.display = 'block';
});
// close menu
menuCloseBtn.addEventListener('click', () => {
    menuOpenBtn.style.display = '';
    menuCloseBtn.style.display = 'none';
    menuSectionsList.style.display = '';
});

// Slider-1
// obj options
let sliderOptions_1 = {
    stock: ['img/slider-1-photo-1.jpg', 'img/pexels-photo-234.jpg', 'img/pexels-photo-345.jpg', 'img/pexels-photo-108148.jpeg', 'img/pexels-photo-289796.jpeg', 'img/pexels-photo-298298.jpeg', 'img/pexels-photo-307847.jpeg', 'img/pexels-photo-320617.jpeg', 'img/pexels-photo-610293.jpeg', 'img/pexels-photo-850624.jpeg'],
    counter: 0,
    delay: 500,
    initSlide() {
        document.sliderOne.src = this.stock[this.counter];
        document.sliderOne.classList.add('slider-animation-1');
        setTimeout(() => { document.sliderOne.classList.remove('slider-animation-1'); }, this.delay);
    },
    backSlide() {
        if (sliderOptions_1.counter < 1) {
            sliderOptions_1.counter = sliderOptions_1.stock.length;
        }
        sliderOptions_1.counter--;
        sliderOptions_1.initSlide();
    },
    nextSlide() {
        if (sliderOptions_1.counter == sliderOptions_1.stock.length - 1) {
            sliderOptions_1.counter = 0;
        } else sliderOptions_1.counter++;
        sliderOptions_1.initSlide();
    }
};
// action - arrows listeners
sliderArrowBack_1.addEventListener('click', sliderOptions_1.backSlide);
sliderArrowNext_1.addEventListener('click', sliderOptions_1.nextSlide);

// Slider-2
// init 'Slick.js' slider
$(document).ready(function(){
  $('.slider-2__roundabout').slick({
      slidesToShow: 3,
      focusOnSelect: true,
      dots: true
  })
});

// Messenger
function blurInput(e) {
    this.value = (this.value == '') ? this.title : this.value;
};

function focusInput(e) {
    this.value = (this.value == this.title) ? '' : this.value;
};

// Onload
// auto load first slide for "sliderOne"
document.addEventListener("DOMContentLoaded", () => {
    document.sliderOne.src = sliderOptions_1.stock[0];
});
