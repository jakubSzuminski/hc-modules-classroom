# Exercise 02

1) Create module:

In `color-generator-2.0.mjs` file create a module which allows creating a Class generating colors, following the rules:
  - when a color is requested, then next available color is returned
  - when multiple colors are requested, a subset of built-in colors is returned, starting from the first color
  - requesting multiple colors doesn't reset iterator of colors
  - when reaching last color, and requesting the next color, the iterator starts from the first color

Example:

Available colors: red, green, blue

```ts
const colorsGenerator = new ColorGenerator();
colorsGenerator.get(); // returns ['red']
colorsGenerator.get(); // returns ['green']
colorsGenerator.get(); // returns ['blue']
colorsGenerator.get(); // returns ['red']
colorsGenerator.get(2); // returns ['red', 'green']
colorsGenerator.get(); // returns ['red']
colorsGenerator.get(1); // returns ['green']
colorsGenerator.get(1); // returns ['blue']
```

Note:
`get()` and `get(1)` are equivalent

Implement a Class with:

a) Public methods:
  - `get(n?: number): Array<string>`;

b) Private properties and methods:
  - `colors: Array<string>`
  - any other properties and methods you need

Export Class only. Use **default export**.

2) Import module

Import module in `main.js` and test it. For example

```ts
console.log(
  colorsGenerator.get().length === 1,
  colorsGenerator.get()[0] === 'green'
);
```