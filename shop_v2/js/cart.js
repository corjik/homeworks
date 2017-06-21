'use strict';
const itemsList = document.querySelector('.items-list')
itemsList.addEventListener('click', makeItemNew)

function makeItemNew(event) {
  event.preventDefault();
  let elem = event.target;
  let elemName = event.target.nodeName;
  if ( elemName === 'A') {
    let item = {};
    item.title = elem.dataset.title;
    item.price = elem.dataset.price;
    addToCart(item);
  };
};
