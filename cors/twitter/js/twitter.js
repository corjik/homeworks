'use strict';
const script = document.createElement('script');
script.src = 'https://neto-api.herokuapp.com/twitter/jsonp';
document.body.appendChild(script);

let callback = function (data){
  let pic = link(data.pic);
  let wp = link(data.wallpaper);
  document.querySelector('[data-username]').innerHTML = data.username;
  document.querySelector('[data-description]').innerHTML = data.description;
  document.querySelector('[data-pic]').setAttribute('src', pic);
  document.querySelector('[data-tweets]').innerHTML = data.tweets;
  document.querySelector('[data-followers]').innerHTML = data.followers;
  document.querySelector('[data-following]').innerHTML =  data.following; 
  document.querySelector('.bg').setAttribute('src', wp);
};

function link(link) {
  return link.replace(/44889/,'');
};