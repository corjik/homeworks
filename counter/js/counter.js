'use strict';
const wsConnect = new WebSocket('wss://neto-api.herokuapp.com/counter');

window.addEventListener('beforeunload', () => {
  wsConnect.close(1000,'happy end');
});

wsConnect.addEventListener('message', getMessage);

function getMessage () {
  let data = JSON.parse(event.data);
  document.querySelector('.counter').textContent = data.connections;
  document.querySelector('.errors').textContent = data.errors;
};


