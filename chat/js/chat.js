'use strict'
const connection = new WebSocket('wss://neto-api.herokuapp.com/chat');
const messageBox = document.querySelector('.messages-content');
//статус
const userStatus = document.querySelector('.message-status').cloneNode(true); 
//сообщение о печати
const messageLoading = document.querySelector('.loading').cloneNode(true);
//сообщение от собеседника
const message = document.querySelector('.messages .message-text').parentNode.cloneNode(true);
//мое сообщение
const myMessage = document.querySelector('.message-personal').cloneNode(true);

const button = document.querySelector('.message-submit');

button.addEventListener('click', sendMessage);


connection.addEventListener('open', () => {
  document.querySelector('.chat-status').textContent = document.querySelector('.chat-status').dataset.online;
  document.querySelector('.message-submit').disabled = false;
  userStatus.querySelector('.message-text').textContent = "Пользователь появился в сети";
  addMessage(userStatus);
});

connection.addEventListener('message', () => {
  if (event.data === '...') {
    messageLoading.querySelector('span').textContent = 'Печатает...';
    addMessage(messageLoading);
  }
  else {
    messageBox.removeChild(messageLoading);
    updateTime(message);
    message.querySelector('.message-text').textContent = event.data;
    addMessage(message);
  }
});

connection.addEventListener('close', () => {
  document.querySelector('.message-submit').disabled = true;
  document.querySelector('.chat-status').textContent = document.querySelector('.chat-status').dataset.offline;
  userStatus.querySelector('.message-text').textContent = "Пользователь не в сети";
  addMessage(userStatus);
});



function sendMessage() {
  event.preventDefault()
  let messageText = document.querySelector('.message-input').value
  connection.send(messageText);
  updateTime(myMessage);
  myMessage.querySelector('.message-text').textContent = messageText;
  addMessage(myMessage);
  document.querySelector('input').value ='';
};

function addMessage(text) {
  messageBox.appendChild(text);
};

function updateTime(node) {
    let now = new Date();
    let hours = now.getHours() <10 ? '0'+now.getHours() : now.getHours()
    let minutes = now.getHours() <10 ? '0'+now.getMinutes() : now.getMinutes()
    node.querySelector('.timestamp').textContent = hours + ':' + minutes
}


