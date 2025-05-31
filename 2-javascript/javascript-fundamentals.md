# 📘 JavaScript Fundamentals

> A comprehensive introduction to JavaScript.

---

## 🎯 Learning Objectives

By the end of this lesson, you will be able to:

- Understand what JavaScript is and where it runs.
- Write and execute basic JavaScript code.
- Use variables, data types, operators, and control structures.
- Work with functions, arrays, and objects.
- Manipulate the DOM and respond to user events.
- Apply best practices in code structure and debugging.

---

## 1. 🧠 What is JavaScript?

JavaScript is a **high-level, interpreted scripting language** that enables you to make web pages interactive.

### Key Facts:
- **Client-side**: Runs in browsers (Chrome, Firefox, Edge, etc.).
- **Server-side**: Runs on backends via platforms like Node.js.
- **Used for**: Animations, form validation, API interactions, UI updates, and more.

💡 *Fun Fact:* JavaScript was created in just 10 days by Brendan Eich in 1995!

---

## 2. ⚙️ Setting Up JavaScript

There are two main ways to include JavaScript in your project:

### 2.1 Inline JS (Inside HTML)

```html
<!DOCTYPE html>
<html>
  <body>
    <h1>My First JS Page</h1>
    <script>
      alert("Hello from JavaScript!");
    </script>
  </body>
</html>
```

### 2.2 External JS File

```html
<script src="main.js"></script>
```

This approach keeps your code cleaner and separates logic from structure.

🧪 **Exercise**: Create an HTML file and print “Hello World” using both methods.

---

## 3. 🧮 Variables and Data Types

### 3.1 Declaring Variables

```js
let userName = "Alice";  // Preferred for mutable values
const pi = 3.14;         // Preferred for constants
var legacy = "Old way";  // Avoid using `var`
```

### 3.2 Data Types

| Type       | Example              |
|------------|----------------------|
| String     | `"Hello"`            |
| Number     | `42`, `3.14`         |
| Boolean    | `true`, `false`      |
| Null       | `null`               |
| Undefined  | `undefined`          |
| Object     | `{ name: "Alice" }`  |
| Array      | `[1, 2, 3]`          |

🧪 **Try it**: Use `typeof` to inspect different variables in the browser console.

---

## 4. ➕ Operators

### 4.1 Arithmetic Operators

```js
let a = 10;
let b = 3;

console.log(a + b); // 13
console.log(a % b); // 1
```

### 4.2 Comparison Operators

```js
console.log(5 == '5');   // true (loose equality)
console.log(5 === '5');  // false (strict equality)
```

### 4.3 Logical Operators

```js
true && false; // false
true || false; // true
!true;         // false
```

🧪 **Challenge**: Write a comparison that checks if a number is between 10 and 20.

---

## 5. 🔁 Control Flow (Conditionals)

Control flow enables your program to make decisions.

```js
let age = 17;

if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
```

### Switch Statement

```js
let color = "blue";
switch (color) {
  case "red":
    console.log("Red chosen");
    break;
  case "blue":
    console.log("Blue chosen");
    break;
  default:
    console.log("No color chosen");
}
```

---

## 6. 🔄 Loops

### For Loop

```js
for (let i = 0; i < 5; i++) {
  console.log("Step:", i);
}
```

### While Loop

```js
let count = 0;
while (count < 5) {
  console.log(count);
  count++;
}
```

🧪 **Try it**: Loop through numbers 1 to 100 and print “Fizz” for multiples of 3.

---

## 7. 🧩 Functions

Functions are reusable blocks of code.

### Traditional Function

```js
function greet(name) {
  return `Hello, ${name}`;
}
```

### Arrow Function

```js
const greet = (name) => `Hello, ${name}`;
```

🧪 **Mini Task**: Write a function that takes two numbers and returns their sum.

---

## 8. 📦 Arrays

Arrays store ordered collections.

```js
let fruits = ["apple", "banana", "cherry"];
console.log(fruits[1]); // banana

fruits.push("mango");   // Add to end
fruits.pop();           // Remove last
```

### Iteration

```js
fruits.forEach((fruit) => {
  console.log(fruit);
});
```

🧪 **Practice**: Create an array of student names and print each one.

---

## 9. 🧱 Objects

Objects store key-value pairs.

```js
let person = {
  name: "John",
  age: 30,
  greet: function() {
    console.log("Hi, I'm " + this.name);
  }
};

person.greet();
```

🧪 **Try it**: Create an object for a car with properties like `make`, `model`, and `year`.

---

## 10. 🖼️ DOM Manipulation

DOM = Document Object Model — a tree of HTML elements.

### Selecting Elements

```js
let heading = document.querySelector("h1");
```

### Changing Content and Style

```js
heading.textContent = "Updated Title";
heading.style.color = "blue";
```

🧪 **Task**: Select a paragraph and change its background color.

---

## 11. ⚡ Events

### Inline Event

```html
<button onclick="sayHi()">Click Me</button>
```

```js
function sayHi() {
  alert("Hi there!");
}
```

### addEventListener

```js
document.querySelector("button").addEventListener("click", () => {
  alert("Button clicked!");
});
```

🧪 **Practice**: Add a click event to a button that changes the text of a heading.

---

## 12. 🧹 Best Practices

✅ Use `let` and `const` over `var`  
✅ Name variables clearly and consistently  
✅ Avoid deeply nested code  
✅ Use `===` instead of `==`  
✅ Comment complex logic  
✅ Modularize large code into functions or files  
✅ Test with `console.log()` and browser DevTools

---

## 13. 🛠️ Mini Project: Interactive To-Do List

### HTML

```html
<input id="taskInput" placeholder="New task" />
<button onclick="addTask()">Add Task</button>
<ul id="taskList"></ul>
```

### JavaScript

```js
function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value;

  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  li.addEventListener("click", () => li.remove());

  document.getElementById("taskList").appendChild(li);
  input.value = "";
}
```

🧪 **Extension**: Add a checkbox for completed tasks.

---

## 14. 📈 Next Steps

After mastering the fundamentals:

- 🧠 Learn **ES6+**: destructuring, classes, template literals.
- 🌐 Use **fetch()** to work with APIs.
- ⏳ Understand **asynchronous JavaScript**: promises, async/await.
- 🧩 Explore frameworks like **React**, **Vue**, or **Angular**.
- 💻 Dive into **Node.js** for backend development.

---

## ✅ Summary

JavaScript is:
- One of the **three core web technologies**
- A must-learn for **frontend** and **full-stack** development
- Versatile, powerful, and fun to use!

🎓 **Keep practicing** and start building small projects to solidify your skills!

---

## 📎 Resources

- [MDN Web Docs – JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [JavaScript.info](https://javascript.info/)
- [freeCodeCamp](https://www.freecodecamp.org/)
- [Codecademy JavaScript Course](https://www.codecademy.com/learn/introduction-to-javascript)