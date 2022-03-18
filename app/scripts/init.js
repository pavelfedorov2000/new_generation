window.addEventListener('DOMContentLoaded', () => {

  const burgerMenu = document.querySelector('.burger-menu');
  const backBtns = document.querySelectorAll('.back-btn');
  const burgerMenuLabel = document.querySelector('.burger-menu__label');
  const burgerOpen = document.querySelector('.burger-btn');
  const popupLinks = document.querySelectorAll('.js-popup-open');
  const passwordChangePopup = document.querySelector('#password-change');
  const passwordChangeForm = document.querySelector('#password-change-form');
  const passwordChangeSuccess = document.querySelector('#password-change-success');
  const forgotPasswordPopup = document.querySelector('#forgot-password');
  const forgotPasswordForm = document.querySelector('#forgot-password-form');
  const forgotPasswordSuccess = document.querySelector('#forgot-password-success');

  if (passwordChangeForm) {
    passwordChangeForm.addEventListener('submit', (e) => {
      e.preventDefault();
      passwordChangeSuccess.classList.add('active');
      setTimeout(() => {
        passwordChangePopup.classList.remove('active');
        passwordChangeSuccess.classList.remove('active');
        passwordChangeForm.querySelectorAll('input').forEach(input => {
          input.value = '';
        });
      }, 3000);
    });
  }

  if (forgotPasswordForm) {
    forgotPasswordForm.addEventListener('submit', (e) => {
      e.preventDefault();
      forgotPasswordSuccess.classList.add('active');
      setTimeout(() => {
        forgotPasswordSuccess.classList.remove('active')
        forgotPasswordPopup.classList.remove('active');
        passwordChangePopup.classList.remove('active');;
      }, 3000);
    });
  }

  popupLinks.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-popup');
      burgerMenu.classList.remove('active');
      burgerMenuLabel.classList.remove('active');
      document.getElementById(target).classList.add('active');
    });
  });

  if (burgerOpen) {
    burgerOpen.addEventListener('click', () => {
      burgerMenu.classList.add('active');
      burgerMenuLabel.classList.add('active');
    });
  }

  // Кнопки назад
  backBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      btn.parentElement.classList.remove('active');
      burgerMenuLabel.classList.remove('active');
    });
  });
});