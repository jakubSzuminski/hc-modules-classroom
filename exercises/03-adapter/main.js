import { getNextColor, reset } from "./color-adapter.mjs";

console.log(getNextColor());
console.log(getNextColor());
console.log(getNextColor());
console.log(getNextColor());

reset();
console.log('reset');

console.log(getNextColor());
console.log(getNextColor());