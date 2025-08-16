// your name is Daniel Victor
// console.log("Your name is Daniel Victor", 1);
// console.log("Your name is Daniel Victor", 2);
// console.log("Your name is Daniel Victor", 3);
// console.log("Your name is Daniel Victor", 4);
// console.log("Your name is Daniel Victor", 5);
// console.log("Your name is Daniel Victor", 6);
// console.log("Your name is Daniel Victor", 7);
// console.log("Your name is Daniel Victor", 8);
// console.log("Your name is Daniel Victor", 9);
// console.log("Your name is Daniel Victor", 10);

// for loop
let nums = [1, 2, 9, 12, 5, 6, 7, 76, 9, 10];
let sum = 0;

for (let i = 0; i < nums.length; i++) {
  // console.log("Your name is Daniel Victor", i + 1);
  // sum = nums[i] + sum;
  // console.log("Sum is now", sum);
}

// console.log("The sum of the numbers is", sum);

// initialization: let i = 0
// condition: i < 10
// execute code block: console.log("Your name is Daniel Victor", i + 1)

// whie loop
let counter = 0;

// while (counter < nums.length) {
//     sum += nums[counter]
//     counter++;
// }

// console.log("The sum of the numbers is", sum);

// do {
//     console.log("This will always run at least once", counter);
//     sum += nums[counter]
//     counter++;
// }while (counter < nums.length);

// console.log("The sum of the numbers is", sum);

// Using a for loop print out the first 20 even numbers
// Using a while print out the first 20 digits starting from 1
// using a for loop calculate the sum of the numbers in the array [87, 34, 25, 4]
// using a while loop calculate the sum of the numbers in the array [87, 34, 25, 4]

function addNums(firstNum, secondNum=3) {
  return firstNum + secondNum;
}

function addArray(arr) {
    let sum = 0;
    let counter = 0;
    while (counter < arr.length) {
        sum += arr[counter];
        counter++;
    }
    return sum;
}
var person = "Daniel Victor";

const greet = () => {
    console.log("This is an arrow function");
}

greet();

// let result = addNums(13);
// console.log(addNums(20, 40));
// console.log(addNums(5, 8));
// console.log(addNums(7, 4));
// console.log(addNums(12, 5));
// console.log(addNums(0, 6));

// console.log("The result is", result);

// console.log(addArray([23, 67, 45]))
// let result = addArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// console.log("The sum of the array multiplied by 3 is", result * 3);

// result = `${34 + 45} is the result of adding 34 and 45`;
// console.log(result);

let secondArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


let newArr = secondArray.map((num) => num * 2);

let divByFive = secondArray.filter((num) => num % 5 === 0)

console.log("newArr: ", newArr);
console.log("secondArray: ", secondArray);
console.log("divByFive: ", divByFive);
