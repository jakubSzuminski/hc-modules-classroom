const colorList = ['red', 'green', 'blue'];
let colorIndex = 0;

function getNextColor() {
  if(colorIndex >= colorList.length) {
    colorIndex = 0;
  }
  
  return colorList[colorIndex++];
}

function reset() {
  colorIndex = 0;
}

export { getNextColor, reset };