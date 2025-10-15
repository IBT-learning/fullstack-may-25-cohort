let people = [
    {name: "Olawale", group: 1},
    {name: "Favour", group: 2},
    {name: "Vincent", group: 1},
    {name: "Ugochi", group: 2},
    {name: "Henry", group: 1},
    {name: "Adaobi", group: 4},
    {name: "Chuks", group: 4},
    {name: "Peter", group: 2},
]

let groups = []
// let numArray = []
console.log("Before for loop")

// function getUsers(callback){
//     // executing ...
//     callback()
// }
// for(let i=0; i<100000000; i++){
//     numArray.push(i)
// }
// console.log(numArray)

// console.log("After for loop")

// new Promise()

const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = false;
      success ? resolve("Data loaded after being fulfilled in line 33") : reject("Error loading data");
    }, 5000);
  });
};

// const fetchData2 = () => {
//     const inner = () => {
//         setTimeout(() => {
//       const success = true;
//       return success ? "Data loaded after being fulfilled" : "Error loading data";
//     }, 2000);
//     }
//     return inner()
// }

// fetchData().then((data) => console.log(data)).catch((err) => console.log(err))

// async function main(){
//     try{
//         let response = await fetch("https://jsonplaceholder.typicode.com/users")
//         let data = await response.json()
//         console.log(data)
//     }catch(err) {
//         console.log(err)
//     }
// }

// main()

fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Error fetching data:", error));


for(let i=0; i<people.length; i++){
    if(!(groups.includes(people[i]["group"]))){
    groups.push(people[i]["group"])}
}

console.log(groups, "in line 55")


// fetchData()
//   .then(data => console.log(data))
//   .catch(error => console.error(error));
