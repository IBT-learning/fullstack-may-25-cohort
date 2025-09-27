# ES6 Tutorial: The Complete Guide with Examples

## 1. Let and Const

### `let` (block-scoped) and `const` (block-scoped + immutable reference)

```js
let x = 10;
x = 20; // ✅

const y = 30;
// y = 40; ❌ TypeError
```

### Scope Example

```js
if (true) {
  let a = 1;
  const b = 2;
}
// console.log(a, b); ❌ ReferenceError
```

## 2. Arrow Functions

Simplified function syntax and lexical `this`.

```js
// Traditional
function add(a, b) {
  return a + b;
}

// ES6 Arrow
const add = (a, b) => a + b;
```

### More Examples

```js
const square = n => n * n;
const greet = () => console.log("Hello!");
```

## 3. Template Literals

Multiline strings and string interpolation.

```js
const name = "Alice";
const msg = `Hello, ${name}!
Welcome to ES6.`;

console.log(msg);
```

## 4. Destructuring Assignment

### Array Destructuring

```js
const [a, b] = [1, 2];
console.log(a, b); // 1 2
```

### Object Destructuring

```js
const user = { name: "Bob", age: 30 };
const { name, age } = user;
console.log(name, age);
```

## 5. Default Parameters

```js
function greet(name = "Guest") {
  console.log(`Hello, ${name}`);
}
greet(); // Hello, Guest
```

## 6. Rest Parameters

```js
function sum(...numbers) {
  return numbers.reduce((acc, val) => acc + val, 0);
}
console.log(sum(1, 2, 3)); // 6
```

## 7. Spread Operator

```js
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4]; // [1, 2, 3, 4]

const obj1 = { a: 1 };
const obj2 = { ...obj1, b: 2 }; // {a: 1, b: 2}
```

## 8. Object Literal Enhancements

```js
const name = "Eve";
const age = 25;

const person = {
  name,
  age,
  greet() {
    console.log("Hi!");
  }
};
```

## 9. Classes

```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

const d = new Dog("Rex");
d.speak(); // Rex barks.
```

## 10. Modules

### Exporting (in `math.js`)

```js
export const add = (a, b) => a + b;
export default function multiply(a, b) {
  return a * b;
}
```

### Importing

```js
import multiply, { add } from './math.js';
console.log(add(2, 3), multiply(2, 3));
```

## 11. Promises

```js
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data loaded!"), 1000);
  });
};

fetchData().then(data => console.log(data));
```

## 12. Async/Await

```js
async function getData() {
  const data = await fetchData();
  console.log(data);
}
getData();
```

## 13. Map and Set

### Map

```js
const map = new Map();
map.set("name", "John");
console.log(map.get("name")); // John
```

### Set

```js
const set = new Set([1, 2, 2, 3]);
console.log([...set]); // [1, 2, 3]
```

## 14. For...of Loop

```js
const arr = ["a", "b", "c"];
for (const item of arr) {
  console.log(item);
}
```

## 15. Symbol

Unique, immutable primitive values.

```js
const id = Symbol("id");
const user = {
  [id]: 123,
  name: "Alice"
};
```

## 16. Iterators and Generators

### Generator Example

```js
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

const g = gen();
console.log(g.next().value); // 1
```

## 17. Array Methods

### map
```js
const nums = [1, 2, 3];
const doubled = nums.map(n => n * 2);
console.log(doubled); // [2, 4, 6]
```

### forEach
```js
nums.forEach(n => console.log(n));
```

### filter
```js
const evens = nums.filter(n => n % 2 === 0);
console.log(evens); // [2]
```

### reduce
```js
const sum = nums.reduce((acc, val) => acc + val, 0);
console.log(sum); // 6
```

### find
```js
const firstEven = nums.find(n => n % 2 === 0);
console.log(firstEven); // 2
```

### some
```js
const hasEven = nums.some(n => n % 2 === 0);
console.log(hasEven); // true
```

### every
```js
const allPositive = nums.every(n => n > 0);
console.log(allPositive); // true
```

## 18. Includes

```js
const fruits = ["apple", "banana"];
console.log(fruits.includes("apple")); // true
```

## 19. Object.entries(), Object.values(), Object.keys()

```js
const obj = { a: 1, b: 2 };

console.log(Object.entries(obj)); // [['a', 1], ['b', 2]]
console.log(Object.values(obj));  // [1, 2]
console.log(Object.keys(obj));    // ['a', 'b']
```

## 20. Optional Chaining & Nullish Coalescing

```js
const user = { profile: { name: "Sam" } };
console.log(user.profile?.name); // "Sam"
console.log(user.age ?? 18); // 18
```

