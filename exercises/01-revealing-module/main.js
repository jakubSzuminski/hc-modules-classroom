import { getNextColor, reset } from "./color-generator.mjs";

const requestColorButton = document.getElementById('request-color'),
  resetButton = document.getElementById('reset'),
  colorList = document.getElementById('color-list');

function addToList(text) {
  const listItem = document.createElement('li');
  listItem.appendChild(document.createTextNode(text));
  colorList.appendChild(listItem);
}

requestColorButton.addEventListener('click', () => addToList(getNextColor()));

resetButton.addEventListener('click', () => {
  reset();
  addToList('reset!');
});