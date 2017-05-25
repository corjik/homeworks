const formInput = document.querySelectorAll('.contentform input');
const formText = document.querySelector('textarea');
const btn = document.querySelectorAll('button');
const outputs = document.querySelectorAll('output');
document.getElementsByName('zip')[0].setAttribute('type','number');

for (btns of btn) {
  if (btns.innerHTML === "Отправить сообщение") {
    sendBtn = btns;
  }
  else {
    editBtn = btns;
  };
};

for (elem of formInput) {
  elem.addEventListener('input', checkState);
};
formText.addEventListener('input', checkState);
sendBtn.addEventListener('click', changeState);
editBtn.addEventListener('click', changeState);




function checkState() {
  var counter = 0;
  for (elem of formInput) {
    if(elem.value){
      counter++;
    };

    if (counter === formInput.length && formText.value) {
      document.querySelector('.button-contact').removeAttribute('disabled');
    }
    else {
      if (document.querySelector('.button-contact').hasAttribute('disabled') ===false ) {
        document.querySelector('.button-contact').setAttribute('disabled','');  
      };
    };
  };
};

function changeState(event) {
  event.preventDefault();
  document.querySelector('.contentform').classList.toggle('hidden');
  document.querySelector('main').classList.toggle('hidden');
  if (document.querySelector('main').classList.contains('hidden') === false){
    changeText()
  };
};

function changeText() {
  for (output of outputs) {
    for (input of formInput) {
      if(output.id === input.name) {
        output.innerHTML = input.value;
      };
    };
  };
  document.getElementById('message').innerHTML = formText.value;
};