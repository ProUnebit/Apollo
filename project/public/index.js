// The selectors
const menuOpenBtn = document.querySelector('.header__menu-open');
const menuCloseBtn = document.querySelector('.header__menu-close');
const menuSectionsList = document.querySelector('.header__menu-sections-list');

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
    stock: ['slider-1-photo-1.jpg', 'pexels-photo-234.jpg', 'pexels-photo-345.jpg', 'pexels-photo-108148.jpeg', 'pexels-photo-289796.jpeg', 'pexels-photo-298298.jpeg', 'pexels-photo-307847.jpeg', 'pexels-photo-320617.jpeg', 'pexels-photo-610293.jpeg', 'pexels-photo-850624.jpeg'],
    counter: 0,
    delay: 2000,
    backSlide() {

    },
    nextSlide() {

    }
};

// Slider-2
// obj options
let sliderOptions_2 = {};

// Messenger
function blurInput(e) {
    this.value = (this.value == '') ? this.title : this.value;
};

function focusInput(e) {
    this.value = (this.value == this.title) ? '' : this.value;
};
