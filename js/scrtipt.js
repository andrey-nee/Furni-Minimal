const body = document.querySelector('.page-body')
const burger = document.querySelector('.main-header__menu-burger')
const burgerNav = document.querySelector('.main-navigation')
const burgerLink = document.querySelector('.main-navigation__link')

// Меню бургер для мобилок
burger.addEventListener('click', function () {
  console.log('Открываем-Закрываем меню-бургер');
  burger.classList.toggle('active');
  burgerNav.classList.toggle('active');
  console.log('Выключаем прокрутку сайта');
  body.classList.toggle('lock'); // Запрещаем прокрутку всего сайта при открытом меню-бургере
});

// Закрываем меню-бургер при клике на ссылку в навигации
burgerLink.addEventListener('click', function () {
  if (burger.classList.contains('active')) {
    console.log('Закрываем меню-бургер');
    console.log('Включаем прокрутку сайта');
    burger.classList.remove('active');
    burgerNav.classList.remove('active');
    body.classList.remove('lock'); // Снимаем запрет на прокрутку всего сайта при открытом меню-бургере
  }
});

// Закрываем меню-бургер при клике за его пределами
// document.addEventListener( 'click', (e) => {
//   const withinBoundaries = e.composedPath().includes(burger);
//   if ( ! withinBoundaries ) {
//     console.log('Клик вне меню-бургер');
//     burger.classList.remove('active');
//     burgerNav.classList.remove('active');
//     body.classList.remove('lock'); // Снимаем запрет на прокрутку всего сайта при открытом меню-бургере
//   }
// });

// Закрываем меню-бургер при нажатии клавиши Escape
document.addEventListener('keydown', function(e) {
	if( e.keyCode == 27 ){ // код клавиши Escape, но можно использовать e.key
    console.log('Нажатие клавиши Escape');
    burger.classList.remove('active');
    burgerNav.classList.remove('active');
    body.classList.remove('lock'); // Снимаем запрет на прокрутку всего сайта при открытом меню-бургере
	}
});

// Используем SwiperJS для Промо
const catalogSwiper = new Swiper('.examples__catalog', {
  // Optional parameters
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  breakpoints: {
    425: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
  // If we need pagination
  pagination: {
    el: '.examples__container .swiper-pagination',
    clickable: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.controls__control--next',
    prevEl: '.controls__control--prew',
  },
});

// Используем SwiperJS для Каталога
const promoSwiper = new Swiper('.promo__slider', {
  // Optional parameters
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.promo__slider-conrol--next',
    prevEl: '.promo__slider-conrol--prew',
  },
});

// Используем SwiperJS для Отзывов
const testimonialsSwiper = new Swiper('.testimonials__catalog', {
  // Optional parameters
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  breakpoints: {
    768: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
  // If we need pagination
  pagination: {
    el: '.testimonials__container .swiper-pagination',
    clickable: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.testimonials__control--next',
    prevEl: '.testimonials__control--prew',
  },
});

