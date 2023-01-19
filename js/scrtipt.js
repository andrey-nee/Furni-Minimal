var burger = document.querySelector('.main-header__menu-burger')
var nav = document.querySelector('.main-navigation')
var bosy = document.getElementsByTagName('body')

// Меню бургер для мобилок
burger.addEventListener('click', function () {
  burger.classList.toggle('active');
  nav.classList.toggle('active');
  body.classList.toggle('lock');
});
