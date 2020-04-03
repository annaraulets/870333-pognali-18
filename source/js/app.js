var mainNav = document.querySelector('.main-popup');
var openMenu = document.querySelector('.main-menu__toggle');
var closeMenu = document.querySelector('.main-popup__toggle');

openMenu.addEventListener('click', function(evt) {
  evt.preventDefault();
  mainNav.classList.remove('main-popup--close');
});

closeMenu.addEventListener('click', function(evt) {
  evt.preventDefault();
  mainNav.classList.add('main-popup--close');
})
