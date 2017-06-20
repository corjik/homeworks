'use strict';
function handleTableClick (event) {
let elem = event.target;
let table = event.currentTarget;
  if (elem.dataset.dir === undefined) {
    elem.dataset.dir = 1;
  };
  if (elem.tagName === "TH"){
    elem.dataset.dir = elem.dataset.dir * (-1);
    table.dataset.sortBy = elem.dataset.propName;
    sortTable(table.dataset.sortBy, elem.dataset.dir);
  };
};

