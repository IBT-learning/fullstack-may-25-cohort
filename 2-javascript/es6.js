// var prior to es6

// let es6
// const es6

var title = "Prof";

let sum = 20;
const PI = { title: "Hello", content: "This is my post"};

sum = 45;
PI.age = 67;

function add(a,b){
    return a + b
}

let addArr = [67, 90]

const addition = (a=7, b=10) => {
    return a + b
}

const adds = gender => "My gender is " + gender


// for(let i = 0; i < 10; i++){
//     console.log("from for loop", i)
// }

// console.log("outside the for loop", i)
// console.log("sum is ", sum)
// console.log("PI is ", PI)
// console.log(addition(8))
// console.log(adds("Male"))

// console.log(add(...addArr))

let firstName = "Eric";
let lastName = "Christian";

const person = {firstName, lastName};
// console.log(person)

let fullName = `My full name is ${firstName} ${lastName}`

// console.log(fullName)

let fruits = ["Apple", "Mango", "Banana"];

let otherFruits = ["Ginger", "Orange", ...fruits, "PineApple", "Guava"];

// console.log(otherFruits)
// let item1 = fruits[0];
// let item2 = fruits[1];
// let item3 = fruits[2];

let [item1, item2] = fruits;

// console.log(`Item two is ${item2}`)

let newArr = [item2, item1]
// console.log(newArr)

let old = [12, 4]
let [first, second] = old;
let newOne = [second, first];

// console.log(newOne)

const user = {name: "Christian", address: "Lagos", age: 65};

const anotherUser = {...user, isActive: true};

// console.log(Object.values(anotherUser))

// console.log(anotherUser)

// let userName = user.name;
// let userAddress = user.address;
// let userAge = user.age;

const {name:userName, address:userAddress, age:userAge} = user

// console.log(`My name is ${userName}, I am ${userAge} years old and I live in ${userAddress}`)

let myArr = [45, 7, 1, 2, 6, 8, 0, 3, 2, 4];

// let myArr2 = myArr.map((item) => { return item * 2})

// myArr.forEach((item) => { console.log(item * 2)})

// let filteredArray = myArr.filter((item) => { return item % 2 === 0})

// let myArr3 = []

// for(let i = 0; i <myArr.length; i++){
//     myArr3.push(myArr[i] * 2)
// }

// console.log(myArr)

const oldUser = {name: "Christian", age: 30, address: {state: "Lagos", street: "Bode Thomas Street", town: "Yaba"}};

const newUser = {...oldUser}

const deepNewUser = JSON.parse(JSON.stringify(oldUser));

deepNewUser.address.state = "Ogun"

// newUser.address.state = "Abuja"

console.log("original", oldUser)
console.log("deep copy", deepNewUser)


