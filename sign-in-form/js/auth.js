'use strict';
const signInForm = document.querySelector('.sign-in-htm');
const signInBut = document.querySelector('.sign-in-htm .button');
const signUpForm=document.querySelector('.sign-up-htm');
const signUpBut=document.querySelector('.sign-up-htm .button');
let state;
const xhr = new XMLHttpRequest()

xhr.addEventListener('load', () => { 
  let errorMessage = JSON.parse(xhr.responseText);
  console.log(errorMessage);
  editErrorText(errorMessage,state);
});

signInBut.addEventListener('click',signIn);
signUpBut.addEventListener('click',signUp);


function signIn() {
  event.preventDefault();
  state = 0;
  dataToSend();
};
function signUp() {
  event.preventDefault();
  state = 1;
  dataToSend();
};

function sendItem(item) {
  if (state === 0){
    xhr.open('POST','https://neto-api.herokuapp.com/signin');
  }
  else {
    xhr.open('POST','https://neto-api.herokuapp.com/signup'); 
  };

  xhr.setRequestHeader('Content-Type', 'application/json')
  xhr.send(JSON.stringify(item));
};


function editErrorText(text,state) {
  let errorBox;
  if (state === 0) {
    errorBox = signInForm.querySelector('.error-message');
  }
  else{
    errorBox = signUpForm.querySelector('.error-message');
  };
  errorBox.textContent = text.message;
};

function dataToSend() {
  let toSend = {};
  const formData = new FormData(signInForm);
  for (const [k,v] of formData) {
    toSend[k] = v;
  };
  sendItem(toSend);
}