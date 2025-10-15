const userList = document.getElementById("userList");
const btn = document.querySelector("button");

const fetchUsers = async () => {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();
        displayUsers(users)
    }catch(error) {
        console.log("Failed to fetch userss: ", error)
        userList.innerHTML = `<li style="color:red">Error loading users</li>`
    }
}

const displayUsers = (myUsers) => {
    userList.innerHTML = "";
    myUsers.forEach((user) => {
        const li = document.createElement("li");
        li.textContent = `Name: ${user.name} -- Email: ${user.email}`;
        userList.appendChild(li)
    })
}

btn.addEventListener("click", fetchUsers)

