'use strict';
const addToCartBtn = document.querySelector('#AddToCart');
addToCartBtn.addEventListener('click', sendCart);

// Обновление данных
fetch('https://neto-api.herokuapp.com/cart/colors')
  .then((res) => {
    return res.json()
  })
  .then(updateColor);

fetch('https://neto-api.herokuapp.com/cart/sizes')
  .then((res) => {
    return res.json()
  })
  .then(updateSize);


fetch('https://neto-api.herokuapp.com/cart')
.then((res) => {
    return res.json();
})
.then(updateCart);
//Конец обновления данных

//Получение цветов, размеров и корзины
function updateColor (colorData) {
  let placeToInsert = 'colorSwatch';
  colorData.forEach(function (item, i) {
    let snippet = `
      <div data-value="${colorData[i].code}" class="swatch-element color ${colorData[i].code}">
          <div class="tooltip">${colorData[i].title}</div>
          <input quickbeam="color" id="swatch-1-${colorData[i].code}" type="radio" name="color" value="${colorData[i].code}">
          <label for="swatch-1-${colorData[i].code}" style="border-color: ${colorData[i].code};">
            <span style="background-color: ${colorData[i].code};"></span>
            <img class="crossed-out" src="https://neto-api.herokuapp.com/hj/3.3/cart/soldout.png?10994296540668815886">
          </label>
        </div>`;
      let colorName = colorData.title;
      let isAvailable = colorData[i].isAvailable;
      addElement(placeToInsert, snippet, isAvailable);
  });
  updateLocal();
};

function updateSize (sizeData) {
  let placeToInsert = 'sizeSwatch';
  sizeData.forEach(function (item, i) {
    let snippet = `
      <div data-value="${sizeData[i].type}" class="swatch-element plain ${sizeData[i].type}">
         <input id="swatch-0-${sizeData[i].type}" type="radio" name="size" value="${sizeData[i].type}">
         <label for="swatch-0-${sizeData[i].type}">
           ${sizeData[i].title}
           <img class="crossed-out" src="https://neto-api.herokuapp.com/hj/3.3/cart/soldout.png?10994296540668815886">
         </label>
       </div>`;
    let sizeName = sizeData.title;
    let isAvailable = sizeData[i].isAvailable;
    addElement(placeToInsert, snippet, isAvailable);
  });
  updateLocal();
};

function updateCart(cartData) {
  let cart = '';
  let price = 0;
  cartData.forEach(function (item, i) {
    let snippet = `
    <div class="quick-cart-product quick-cart-product-static" id="quick-cart-product-${cartData[i].id}" style="opacity: 1;">
      <div class="quick-cart-product-wrap">
        <img src="${cartData[i].pic}" title="${cartData[i].title}">
        <span class="s1" style="background-color: #000; opacity: .5">$${cartData[i].price}.00</span>
        <span class="s2"></span>
      </div>
      <span class="count hide fadeUp" id="quick-cart-product-count-${cartData[i].id}">${cartData[i].quantity}</span>
      <span class="quick-cart-product-remove remove" data-id="${cartData[i].id}"></span>
    </div>`;
    price += cartData[i].price * cartData[i].quantity ;
    cart += snippet;
  });
  let cartSnippet = `
      <a id="quick-cart-pay" quickbeam="cart-pay" class="cart-ico open">
        <span>
          <strong class="quick-cart-text">Оформить заказ<br></strong>
          <span id="quick-cart-price">$${price}</span>
        </span>
      </a>`;
  cart += cartSnippet;
  addCart(cart);
};
// Конец обновления данных

//Изменение HTML в DOM
function addElement(insertPlace, insertText, isAvailable) {
  let insert = document.querySelector(`#${insertPlace}`);
  let text = insert.innerHTML;
  text += insertText;
  insert.innerHTML = text;
  if ( isAvailable ) {
    insert.lastElementChild.classList.add('available');
  }
  else {
    insert.lastElementChild.classList.add('soldout');
    insert.lastElementChild.querySelector('input').disabled = true;
  };
};
//Конец изменения в DOM

//Работа с localStorage
function updateLocal() {
  let sizesBtn = document.querySelectorAll('#sizeSwatch .swatch-element input');
  let colorsBtn = document.querySelectorAll('#colorSwatch .swatch-element input');
  Array.prototype.slice.call(sizesBtn).forEach((element) => {
    element.addEventListener('click', function(){ localStorage.size = this.id; });
  });

  Array.prototype.slice.call(colorsBtn).forEach((element) => {
    element.addEventListener('click', function(){ localStorage.color = this.id; });
  });
  userSelection();
};

function userSelection() {
  if (localStorage.size != null && document.querySelector(`#${localStorage.size}`) !=null){
    document.querySelector(`#${localStorage.size}`).checked = true;
  };
  if (localStorage.color != null && document.querySelector(`#${localStorage.color}`) !=null){
    document.querySelector(`#${localStorage.color}`).checked = true;
  };
};
//Конец работы с localStorage

//Работа с корзиной
function sendCart() {
  event.preventDefault();
  let cartForm = document.querySelector('#AddToCartForm');
  let dataForm = new FormData(cartForm);
  dataForm.append('productId', cartForm.dataset.productId);
  fetch('https://neto-api.herokuapp.com/cart', 
    {
    method: 'POST',
    body: dataForm,
    })
    .then((res) =>{
        return res.json();
    })
    .then(updateCart);
};

function addCart(text) {
  let cart = document.querySelector('#quick-cart');
  cart.innerHTML = text;
  if ( cart.children.length === 1 ) {
    document.querySelector('#quick-cart-pay').classList.remove('open');
  }
  let deleteBtns = cart.querySelectorAll('.remove');
  Array.prototype.slice.call(deleteBtns).forEach((element) => {
    element.addEventListener('click', function(element){removeItemCart(element, cart)});
  })
};

function removeItemCart(element, cart) {
    let dataForm = new FormData();
    dataForm.append('productId', element.target.dataset.id);
    fetch('https://neto-api.herokuapp.com/cart/remove', {
      method: 'POST',
      body: dataForm,
    })
    .then(() => {
        return fetch('https://neto-api.herokuapp.com/cart')
    })
    .then((res) => {
        return res.json();
    })
    .then(updateCart)
};

userSelection();