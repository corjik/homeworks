'use strict';
let count = localStorage.count;
const incr = document.querySelector('#increment');
const decr = document.querySelector('#decrement');
const reset = document.querySelector('#reset')
const counter = document.querySelector('#counter');

incr.addEventListener('click', increase);
decr.addEventListener('click', decrease);
reset.addEventListener('click', resetCounter);

if (count === undefined) {
  count = 0;
};

upgradeNumber(count);

function increase() {
  count++
  upgradeNumber(count);
};

function decrease() {
  if (count > 0) {
    count--   
  }
  upgradeNumber(count);
};

function resetCounter() {
  count = 0;
  upgradeNumber(count);
};

function upgradeNumber(number) {
  localStorage.count = count;
  counter.textContent = count;
};

