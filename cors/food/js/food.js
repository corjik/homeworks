'use strict';
function link(link) {
  return link.replace(/44133/,'');
};

function randomName() {
  return 'callback' + Math.round(10000 * Math.random());
};

function loadData(url) {
  const functionName = randomName();
  return new Promise ((done, fail) =>{
    window[functionName] = done
    const script = document.createElement('script');
    script.src = `${url}?jsonp=${functionName}`;
    document.body.appendChild(script)
  });
};

loadData('https://neto-api.herokuapp.com/food/42')
  .then(recipe)
loadData('https://neto-api.herokuapp.com/food/42/rating')
  .then(rate)
loadData('https://neto-api.herokuapp.com/food/42/consumers')
  .then(cons)

function recipe(data) {
  let ingr = data.ingredients.join(', ')
  document.querySelector('[data-title]').innerHTML = data.title;
  document.querySelector('[data-ingredients]').innerHTML = ingr;
  document.querySelector('[data-pic]').style.backgroundImage = `url(${link(data.pic)})`;
};

function rate(data) {
  document.querySelector('[data-rating]').innerHTML = data.rating.toFixed(2);
  document.querySelector('[data-votes]').innerHTML = `(${data.votes} оценок)`;
  document.querySelector('[data-star').style.width = `${data.rating/10*100}%`;
};

function cons(data) {
  let consumers = '';
  data.list.forEach(function(item,i){
    let info = `<img src="${link(item.pic)}" title="${item.name}">`
    consumers +=info
  });
  document.querySelector('[data-consumers]').innerHTML = consumers;
  let more = document.createElement('span');
  more.innerHTML = `(+${data.total})`
  document.querySelector('[data-consumers]').appendChild(more);
};