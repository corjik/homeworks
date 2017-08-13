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

function info(data) {
  let pic = data.pic;
  document.querySelector('[data-name]').innerHTML = data.name;
  document.querySelector('[data-description]').innerHTML = data.description;
  document.querySelector('[data-pic]').setAttribute('src', link(pic));
  document.querySelector('[data-position]').innerHTML = data.position;
  loadData(`https://neto-api.herokuapp.com/profile/${data.id}/technologies`)
    .then(skills)
    .then(visible)
};

function skills(data) {
  let skill = '';
  data.forEach(function(item,i){
    let span = `<span class="devicons devicons-${data[i]}"></span>`
    skill +=span
  });
  document.querySelector('.badgescard').innerHTML = skill;
};

function visible(){
  document.querySelector('.content').style.display = 'initial';
};

loadData('https://neto-api.herokuapp.com/profile/me')
  .then(info)
