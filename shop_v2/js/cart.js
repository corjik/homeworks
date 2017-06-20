'use strict';
const more = document.querySelector('.show-more');
more.addEventListener('click', showMoreFun);
cartBtn();

function cartBtn() {
  let links = document.querySelectorAll('main a');
  for (let link of links){
    link.addEventListener('click', makeItem);
  };
};

function makeItem (event) {
  event.preventDefault();
  let elem = event.target;
  let item = {};
  item.title = elem.dataset.title;
  item.price = elem.dataset.price;
  addToCart(item);
};

function showMoreFun (event) {
  event.preventDefault();
  cartBtn();
}