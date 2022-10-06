# Exercise 01

1) Create module:

In `color-generator.mjs` file create a module which will provide a color on demand, following the rules:
  - when a color is requested, then next available color is returned
  - it is possible to start requesting colors from the beginning
  - when reaching last color, and requesting the next color, the iterator starts from the first color

Example:

Available colors: red, green, blue

```ts
getNextColor(); // returns 'red'
getNextColor(); // returns 'green'
getNextColor(); // returns 'blue'
getNextColor(); // returns 'red'
reset();
getNextColor(); // returns 'red'
getNextColor(); // returns 'green'
reset();
getNextColor(); // returns 'red'
```

Implement:

a) Public methods:
  - `getNextColor(): string`;
  - `reset(): void`;

b) Private properties and methods:
  - `colors: Array<string>`
  - any other properties and methods you need

Export only public methods. Use **default export**.

2) Import module

Import module in `main.js` and test it. For example

```ts
console.log(
  getNextColor() === 'red'
);
```