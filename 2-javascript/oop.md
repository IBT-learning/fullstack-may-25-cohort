
# Object-Oriented Programming (OOP) in JavaScript

## Table of Contents

1. What is OOP?
2. Four Pillars of OOP
3. Objects and Object Literals
4. Constructor Functions
5. Prototypes and Inheritance
6. ES6 Classes
7. Inheritance using Classes
8. Encapsulation
9. Abstraction
10. Polymorphism
11. Static Methods
12. Private Fields and Methods
13. Complete Real-world Example
14. Downloadable README

## 1. What is OOP?

Object-Oriented Programming (OOP) is a programming paradigm based on the concept of "objects", which contain data (properties) and behavior (methods).

OOP helps in structuring your code better and makes it reusable, scalable, and easier to debug.

## 2. The Four Pillars of OOP

1. Encapsulation – Binding data and methods in a single unit.
2. Abstraction – Hiding internal details from the user.
3. Inheritance – One class inherits from another.
4. Polymorphism – One interface, multiple implementations.

## 3. Objects and Object Literals

```javascript
const person = {
  name: "Alice",
  age: 25,
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  }
};

person.greet(); // Output: Hello, my name is Alice
```

## 4. Constructor Functions (Pre-ES6 OOP)

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  console.log(`Hi, I'm ${this.name}`);
};

const john = new Person("John", 30);
john.greet(); // Hi, I'm John
```

## 5. Prototypes and Inheritance

```javascript
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log(`${this.name} makes a noise.`);
};

function Dog(name) {
  Animal.call(this, name);
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.speak = function () {
  console.log(`${this.name} barks.`);
};

const dog = new Dog("Buddy");
dog.speak(); // Buddy barks.
```

## 6. ES6 Classes

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const jane = new Person("Jane", 28);
jane.greet(); // Hello, my name is Jane
```

## 7. Inheritance with Classes

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog("Rex");
dog.speak(); // Rex barks.
```

## 8. Encapsulation

```javascript
class Counter {
  constructor() {
    let count = 0;

    this.increment = () => {
      count++;
      console.log(count);
    };

    this.decrement = () => {
      count--;
      console.log(count);
    };
  }
}

const counter = new Counter();
counter.increment(); // 1
counter.decrement(); // 0
```

## 9. Abstraction

```javascript
class Car {
  constructor() {
    this.engineStarted = false;
  }

  startEngine() {
    this._checkFuel();
    this.engineStarted = true;
    console.log("Engine started.");
  }

  _checkFuel() {
    console.log("Checking fuel...");
  }
}

const car = new Car();
car.startEngine();
// Output:
// Checking fuel...
// Engine started.
```

## 10. Polymorphism

```javascript
class Animal {
  speak() {
    console.log("Animal speaks.");
  }
}

class Cat extends Animal {
  speak() {
    console.log("Cat meows.");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Dog barks.");
  }
}

const animals = [new Cat(), new Dog()];
animals.forEach(animal => animal.speak());

// Output:
// Cat meows.
// Dog barks.
```

## 11. Static Methods

```javascript
class MathUtil {
  static add(x, y) {
    return x + y;
  }
}

console.log(MathUtil.add(3, 4)); // 7
```

## 12. Private Fields and Methods (ES2022+)

```javascript
class BankAccount {
  #balance = 0;

  deposit(amount) {
    if (amount > 0) this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const acc = new BankAccount();
acc.deposit(100);
console.log(acc.getBalance()); // 100
```

## 13. Real-world Example: User and Admin

```javascript
class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }

  login() {
    console.log(`${this.username} has logged in.`);
  }
}

class Admin extends User {
  constructor(username, email, role) {
    super(username, email);
    this.role = role;
  }

  deleteUser(user) {
    console.log(`${user.username} has been deleted by ${this.username}`);
  }
}

const user1 = new User("johnDoe", "john@example.com");
const admin1 = new Admin("adminJane", "jane@example.com", "superadmin");

user1.login(); // johnDoe has logged in.
admin1.deleteUser(user1); // johnDoe has been deleted by adminJane
```
