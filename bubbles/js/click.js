'use strinct';
const connection = new WebSocket('wss://neto-api.herokuapp.com/mouse');

connection.addEventListener('open', () => {showBubbles(connection)}); 
document.addEventListener('click', sendCoord);

function sendCoord () {
  let coordinate = {};
  coordinate.x = event.clientX;
  coordinate.y = event.clientY;
  coordinate = JSON.stringify(coordinate);
  connection.send(coordinate);
};