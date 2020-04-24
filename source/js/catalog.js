var filterItems = document.querySelectorAll('.filter-travel__item');

filterItems.forEach(function (filterItem) {
  var filterClick = filterItem.querySelector('.filter-travel__wrap');
  filterClick.addEventListener('click', function(evt) {
    evt.preventDefault();
    filterItem.classList.toggle('closed');
  })
})


var filterBlock = document.querySelector('.filter');
var filterBlockClickHandler = function(evt) {
  evt.preventDefault();
  filterBlock.classList.toggle('filter-opened');
}

var openBtn = filterBlock.querySelector('.open-btn');
var closeBtn = filterBlock.querySelector('.close-btn');
var closeBtnBottom = filterBlock.querySelector('.filter__btn');

openBtn.addEventListener('click', filterBlockClickHandler);
closeBtn.addEventListener('click', filterBlockClickHandler);
closeBtnBottom.addEventListener('click', filterBlockClickHandler);



// var tabletFilterOpen = filterBlock.querySelector('.filter__list');
// var filterClose = filterBlock.querySelector('.filter__close');


