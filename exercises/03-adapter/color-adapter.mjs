import ColorGenerator from './color-generator-2.0.mjs';

const colorGenerator = new ColorGenerator();

function getNextColor() {
  return colorGenerator.get()[0];
}

function reset() {
  return colorGenerator.reset();
}

export { getNextColor, reset };