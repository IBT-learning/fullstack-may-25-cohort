
# LESSON: JavaScript Essentials - Objects, Conditionals, Switch, Loops, and Functions

## 1. OBJECTS IN JAVASCRIPT

### What is an Object?

An object in JavaScript is a collection of key-value pairs. It allows you to store multiple related values in one variable.

```js
let person = {
  name: "Alice",
  age: 25,
  isStudent: true,
  greet: function () {
    console.log("Hello, I'm " + this.name);
  }
};
```

### Accessing Object Properties

```js
console.log(person.name);      // Dot notation => "Alice"
console.log(person["age"]);    // Bracket notation => 25
```

### Adding/Modifying Properties

```js
person.age = 26;             // Modify
person.city = "New York";    // Add new property
```

### Deleting Properties

```js
delete person.isStudent;
```

### Looping through an Object

```js
for (let key in person) {
  console.log(key + ": " + person[key]);
}
```

## 2. CONDITIONALS

Conditional statements help control the flow of a program based on true/false decisions.

### if Statement

```js
let age = 18;

if (age >= 18) {
  console.log("You can vote.");
}
```

### if...else

```js
if (age < 18) {
  console.log("You are a minor.");
} else {
  console.log("You are an adult.");
}
```

### if...else if...else

```js
let score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else {
  console.log("Grade: C or lower");
}
```

## 3. SWITCH STATEMENT

The switch statement is used to perform different actions based on different conditions (especially for discrete values).

```js
let day = "Tuesday";

switch (day) {
  case "Monday":
    console.log("Start of the week");
    break;
  case "Tuesday":
    console.log("Second day");
    break;
  case "Friday":
    console.log("Weekend is near");
    break;
  default:
    console.log("Just another day");
}
```

## 4. LOOPS IN JAVASCRIPT

Loops allow us to repeat a block of code multiple times.

### for Loop

```js
for (let i = 1; i <= 5; i++) {
  console.log("Number: " + i);
}
```

### while Loop

```js
let count = 1;

while (count <= 5) {
  console.log("Count: " + count);
  count++;
}
```

### do...while Loop

```js
let number = 1;

do {
  console.log("Number: " + number);
  number++;
} while (number <= 3);
```

### for...of Loop

Used to iterate over iterable objects like arrays.

```js
let fruits = ["apple", "banana", "orange"];

for (let fruit of fruits) {
  console.log(fruit);
}
```

### for...in Loop

Used to iterate over object properties.

```js
let student = {
  name: "Emma",
  grade: "A",
  age: 16
};

for (let key in student) {
  console.log(key + ": " + student[key]);
}
```

## 5. FUNCTIONS IN JAVASCRIPT

Functions are reusable blocks of code that perform a specific task.

### Declaring a Function

```js
function greet(name) {
  console.log("Hello, " + name);
}

greet("John"); // Output: Hello, John
```

### Function with Return Value

```js
function add(a, b) {
  return a + b;
}

let result = add(5, 3); // result = 8
```

### Function Expression

```js
const multiply = function (x, y) {
  return x * y;
};

console.log(multiply(4, 5)); // 20
```

### Arrow Functions (ES6+)

```js
const divide = (a, b) => {
  return a / b;
};

console.log(divide(10, 2)); // 5
```

Simplified version:

```js
const square = x => x * x;

console.log(square(6)); // 36
```

### Function Scope & Parameters

```js
let globalVar = "I’m global";

function testScope() {
  let localVar = "I’m local";
  console.log(globalVar); // Accessible
  console.log(localVar);  // Accessible
}

testScope();
// console.log(localVar); // Error: localVar is not defined
```

## PRACTICE EXAMPLES

### Example 1: Check Even or Odd

```js
function checkEvenOdd(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

console.log(checkEvenOdd(5)); // "Odd"
```

### Example 2: Simple Calculator with Switch

```js
function calculator(a, b, operator) {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    default:
      return "Invalid operator";
  }
}

console.log(calculator(10, 5, "*")); // 50
```

### Example 3: Loop Through an Array

```js
let names = ["Sam", "Alex", "Morgan"];

for (let i = 0; i < names.length; i++) {
  console.log("Hello, " + names[i]);
}
```

## SUMMARY

| Concept       | Key Use                       | Example Syntax         |
|---------------|-------------------------------|------------------------|
| Objects       | Store related key-value pairs | `let obj = {name: "Bob"}` |
| Conditionals  | Make decisions                | `if...else`, `switch`  |
| Loops         | Repeat tasks                  | `for`, `while`, `for...of` |
| Functions     | Reusable blocks of logic      | `function name() {}`   |
