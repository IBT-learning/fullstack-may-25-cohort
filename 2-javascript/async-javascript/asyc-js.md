
## Asynchronous JavaScript

## What is Asynchronous JavaScript?

JavaScript is **single-threaded**, meaning it executes one command at a time. But real-world apps need to do things like:

- Fetch data from a server
- Wait for user interaction
- Set timeouts or intervals

These tasks take time and shouldn't block other operations. That’s where **asynchronous programming** comes in.

---

## 1. Callbacks

### What is a Callback?

A **callback** is a function passed as an argument to another function to be executed later.

```javascript
function fetchData(callback) {
  setTimeout(() => {
    console.log("Data fetched!");
    callback();
  }, 2000);
}

function displayData() {
  console.log("Displaying data...");
}

fetchData(displayData);
```

### Problems with Callbacks (Callback Hell)

```javascript
getUser(userId, function(user) {
  getPosts(user.id, function(posts) {
    getComments(posts[0].id, function(comments) {
      console.log(comments);
    });
  });
});
```

This nesting becomes hard to manage — also known as **callback hell**.

---

## 2. Promises

### What is a Promise?

A **Promise** represents a value that may be available now, later, or never. It has 3 states:

- `pending`
- `fulfilled`
- `rejected`

### Creating a Promise

```javascript
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      success ? resolve("Data loaded") : reject("Error loading data");
    }, 2000);
  });
};

fetchData()
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

---

## 3. async and await

### Making Asynchronous Code Cleaner

`async` and `await` are syntactic sugar over promises.

```javascript
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched with async/await");
    }, 2000);
  });
};

async function getData() {
  try {
    const result = await fetchData();
    console.log(result);
  } catch (error) {
    console.error("Error:", error);
  }
}

getData();
```

---

## 4. Fetch API

### What is Fetch?

The **Fetch API** is used to make HTTP requests. It returns a **Promise**.

```javascript
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Error fetching data:", error));
```

---

## 5. Example: Fetching and Displaying Data to the DOM

### Goal:
- Fetch a list of users from an API
- Display the names in a list on the page

### HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Fetch Users</title>
</head>
<body>
  <h1>User List</h1>
  <ul id="userList"></ul>

  <script src="app.js"></script>
</body>
</html>
```

### JavaScript (app.js)

```javascript
const userList = document.getElementById("userList");

async function fetchUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const users = await response.json();
    displayUsers(users);
  } catch (error) {
    console.error("Failed to fetch users:", error);
    userList.innerHTML = `<li style="color:red">Error loading users</li>`;
  }
}

function displayUsers(users) {
  userList.innerHTML = ""; // Clear previous content
  users.forEach(user => {
    const li = document.createElement("li");
    li.textContent = `${user.name} (${user.email})`;
    userList.appendChild(li);
  });
}

fetchUsers();
```

---

## 6. Error Handling

Always handle possible failures such as:

- Network issues
- Invalid URLs
- JSON parsing errors
- Server-side errors

### Example with try...catch:

```javascript
async function fetchPost(id) {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (!res.ok) throw new Error(`Failed with status ${res.status}`);
    const post = await res.json();
    console.log(post);
  } catch (err) {
    console.error("Error fetching post:", err.message);
  }
}

fetchPost(1);
```

---

## Summary

| Feature            | Description                              | Syntax Example                          |
|--------------------|------------------------------------------|------------------------------------------|
| Callback           | Function called after async action       | `fetchData(cb)`                          |
| Promise            | Object representing future value         | `fetch().then().catch()`                 |
| async/await        | Syntactic sugar for Promises             | `await fetch()`                          |
| fetch()            | API to make network requests             | `fetch(url).then(...).catch(...)`        |
| try/catch          | Used to handle errors in async code      | `try { await fetch() } catch (e) {}`     |

---

## Practice Exercise

Build a simple app that:

- Fetches posts from `https://jsonplaceholder.typicode.com/posts`
- Displays post titles in a list
- Shows error if fetch fails
