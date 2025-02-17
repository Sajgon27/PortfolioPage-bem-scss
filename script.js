// TOGGLING MOBILE DROPDOWN
const navToggle = document.querySelector('.header__nav-toggle');
const header = document.querySelector('.header');

navToggle.addEventListener('click', () => {
  header.classList.toggle('menu-active');
});
