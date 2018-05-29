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

// Info Block
