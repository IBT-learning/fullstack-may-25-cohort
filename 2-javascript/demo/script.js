let name = "Eric";
let fruits = ["apple", "orange", "mango"];

// fruits = ["apple", "orange", "mango"]
// variable declaration
// variable assignment
// var let const
// console.log("My name is ", name)
// console.log(name)

let address = "No 2 John str";

let num1 = 5;
let num2 = 3;
// console.log(num1 % num2)

num1 += 1; // num1 = num1 + 1
num1--;
// console.log(num1)

let isPresent = true;
let myVal = 2 === "2";

// console.log(myVal)

let check = Boolean(true);

// console.log(check)

let x = "";
let y = "second";

// console.log(x || y)

let myArray = [
  { name: "Peter", address: "No 2 Tyre str Lagos", age: 20 },
  { name: "John", address: "No 2 Tyre str Lagos", age: 26 },
  { name: "Sarah", address: "No 2 Tyre str Lagos", age: 25 },
];
let secondArray = new Array();

let item = myArray[0];

// let first = myArray.shift()

// console.log(myArray)

// console.log(item)

let person = { gender: "male", name: "Johnson" };
let student = new Object();
// console.log(person.gender)
person["age"] = 50;
person["gender"] = "female";
// delete person["age"]

let student1 = { name: "Bisola", isPresent: false };

let voters = [];

let age = 15;

// if a condition passes, then do something
if (age >= 18) {
  voters.push("Victor");
  voters.push("Henry");
  voters.push("Pat");
  voters.push("Ben");
} else {
  // console.log("None voted")
}

let color = "Blue";

// if (color == "Red") {
//   console.log("The color is red");
// } else if(color == "Blue"){
//   console.log("The color is Blue");
// }
// else {
//   console.log("I don't know the color");
// }

// console.log(voters)

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
