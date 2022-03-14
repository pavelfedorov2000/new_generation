window.addEventListener('DOMContentLoaded', () => {
  new LazyLoad();

  const burgerMenu = document.querySelector('.burger-menu');
  const burgerMenuBack = document.querySelector('.burger-menu__back');
  const burgerMenuLabel = document.querySelector('.burger-menu__label');
  const burgerOpen = document.querySelector('.promo__btn');

  if (burgerOpen) {
    burgerOpen.addEventListener('click', () => {
      burgerMenu.classList.add('active');
      burgerMenuLabel.classList.add('active');
    });
  }

  burgerMenuBack.addEventListener('click', () => {
    burgerMenu.classList.remove('active');
    burgerMenuLabel.classList.remove('active');
  });

  new Swiper('.news-slider', {
    loop: true,
    //preloadImages: false,
    //lazy: true,
    slidesPerView: 2,
    spaceBetween: 60,
    speed: 1000,
    /* autoplay: {
      delay: 3000,
    }, */
    /* pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }, */
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    /* breakpoints: {
      576: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 4,
      }
    }, */
    on: {
      slideChange: function () {
        new LazyLoad();
      },
    },
  });
});
// Custom js select
/* let selectItem = document.querySelector('.select');
let selectTitle = selectItem.querySelector('.select__title');
let selectLabels = selectItem.querySelectorAll('.select__label');
// Toggle menu
selectTitle.addEventListener('click', () => {
    if ('active' === selectItem.getAttribute('data-state')) {
        selectItem.setAttribute('data-state', '');
    } else {
        selectItem.setAttribute('data-state', 'active');
    }
});
// Close when click to option
for (let i = 0; i < selectLabels.length; i++) {
    selectLabels[i].addEventListener('click', (e) => {
        selectTitle.textContent = e.target.textContent;
        selectItem.setAttribute('data-state', '');
    });
} */