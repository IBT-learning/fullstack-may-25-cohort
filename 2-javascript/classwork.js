//Using a for loop print out the first 20 even numbers
for (let i =0; i < 20; i++){
    if (i %2 === 0){
        console.log(i);
    }
}

//Using a while loop print out the first 20 digits starting from 1
let count = 1;
while (count <= 20) {
    console.log(count);
    count++;
}

//using a for loop calculate the sum of the numbers in the array[87,34,25,4]
let nums = [87,34,25,4]
let sum = 0

for(let i = 0; i < nums.length; i++){
sum += nums[i]
}

console.log("The sum of the numbers is", sum)

//using a while loop calculate the sum of the numbers in the array[87,34,25,4]
let counter = 0
while(counter < nums.length){
    sum+=nums[counter]
    counter++
}
console.log("The sum of the numbers is",sum)

