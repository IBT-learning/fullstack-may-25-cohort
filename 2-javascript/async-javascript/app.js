// function fetchData(callback) {
//   setTimeout(() => {
//     console.log("Data fetched!");
//     callback();
//   }, 10000);
// }

// function displayData() {
//   console.log("Displaying data...");
// }

// fetchData(displayData);

// getUser(userId, function(user){
//   getPosts(user.id, function(posts){
//     getComments(posts[0].id, function(comments){
//       console.log(comments)
//     })
//   })
// })

// Promise
// pending fulfilled rejected

// const fetchData = () => {
//   let result;
//   setTimeout(() => {
//     let success = false;
//     if (success) {
//       result = "Data loaded";
//     } else {
//       result = "Error loading data";
//     }
//   }, 10000);
//   return result;
// };

const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = false;
      success ? resolve("Data loaded") : reject("Error loading data");
    }, 10000);
  });
};

// console.log(fetchData());

// fetchData().then((data) => {
//   console.log(data)
// }).catch((err) => console.log(err)).finally(() => {
//   console.log("Finished fetching data")
// })
const getData = async () => {
  try {
    let result = await fetchData();
    console.log(result);
  } catch (err) {
    console.log(err);
  } finally {
    console.log("Finished fetching data")
  }
}

// getData()



//synchronous
// asynchronous

// fetch("https://fakestoreapi.com/products").then((response) => {
//   return response.json()
// }).then((data) => console.log(data)).catch(err => console.log(err))

const getProducts = async () => {
  try{
    const response = await fetch("https://fakestoreapi.com/products")
    const data = await response.json()
    console.log(data)
  } catch(err){
    console.log(err)
  }
}

getProducts()
