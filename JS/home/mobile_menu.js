const mobMenuOpenBtn = document.querySelector('.mob-menu-btn');
const mobMenuCloseBtn = document.querySelector('.mob-menu-btn-close');
const mobileMenu = document.querySelector('.mobile-menu');

mobMenuOpenBtn.addEventListener('click', function() {
  mobileMenu.classList.toggle('open');
});

mobMenuCloseBtn.addEventListener('click', function() {
  mobileMenu.classList.remove('open');
});