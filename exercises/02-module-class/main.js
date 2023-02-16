import ColorGenerator from "./color-generator-2.0.mjs";

const input = document.getElementById('number-input'),
  sliderValueText = document.getElementById('slider-value'),
  requestColorButton = document.getElementById('request-color'),
  resetButton = document.getElementById('reset'),
  colorList = document.getElementById('color-list');

const colorGenerator = new ColorGenerator();

function addToList(text) {
  const listItem = document.createElement('li');
  listItem.appendChild(document.createTextNode(text));
  colorList.appendChild(listItem);
}

requestColorButton.addEventListener('click', () => addToList(colorGenerator.get(input.value)));

resetButton.addEventListener('click', () => {
  colorGenerator.reset();
  addToList('reset!');
});

input.addEventListener('input', function() { 
  sliderValueText.innerHTML = `Request ${this.value} elements`;
});