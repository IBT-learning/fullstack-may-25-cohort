// const user1 = {
//     name: "Oluwaseun",
//     age: 23,
//     address: "Lagos, Nigeria",
//     greet: function() {
//         console.log(`Hello, my name is ${this.name}`);
//     }
// }

// function User(name, age, address) {
//     this.name = name;
//     this.age = age;
//     this.address = address;
//     this.greet = function() {
//         console.log(`Hello, my name is ${this.name}`);
//     }
// }

// User.prototype.login = function() {
//     console.log(`${this.name} has logged in`);
// }

// const user2 = new User("Jane", 30, "New York, USA");
// const user3 = new User("John", 25, "San Francisco, USA");


// console.log(user2.login()); // Accessing property


// user 
// user should be able to register, login, logout, buy a product
// function createrUser(name, age, address){
//     return {
//         name: name,
//         age: age,
//         address: address,
//         isRegistered: true
//     }
// }

// function login(user){
//     if(user.isRegistered){
//         console.log(`${user.name} has logged in`);
//     } else {
//         console.log(`${user.name} is not registered`);
//     }
// }

// function logout(user){
//     if(user.isRegistered){
//         console.log(`${user.name} has logged out`);
//     } else {
//         console.log(`${user.name} is not registered`);
//     }
// }

// function buyProduct(user, product){
//     if(user.isRegistered){
//         console.log(`${user.name} has bought ${product}`);
//     } else {
//         console.log(`${user.name} is not registered`);
//     }
// }

// const user1 = createrUser("Oluwaseun", 23, "Lagos, Nigeria");
// const user2 = createrUser("Jane", 30, "New York, USA");
// const user3 = createrUser("John", 25, "San Francisco, USA");

// console.log(user1);
// login(user1);
// buyProduct(user1, "Laptop");

let verifiedMembers = [];

class User {
    constructor(name, age, address) {
        this.isRegistered = true;
        this.loginStatus = false;
        this.name = name;
        this.age = age;
        this.address = address;
    }
    login() {
        if (this.isRegistered) {
            this.loginStatus = true;
            console.log(`${this.name} has logged in`);
        } else {
            console.log(`${this.name} is not registered`);
        }
    }
    logout() {
        if (this.isRegistered) {
            this.loginStatus = false;
            console.log(`${this.name} has logged out`);
        } else {
            console.log(`${this.name} is not registered`);
        }
    }

    static printClassName() {
        return "This is class User"
    }
}

class Admin extends User {
    constructor(name, age, address){
        super(name, age, address);
        this.isAdmin = true;
    }

    login(){
        console.log("Calling from admin")
        super.login()
    }

    verifyUser(user){
        if(user.isRegistered && !verifiedMembers.includes(user.name)){
            verifiedMembers.push(user.name);
            console.log(`${user.name} has been verified`);
        } else if(verifiedMembers.includes(user.name)){
            console.log(`${user.name} is already verified`);
        } else {
            console.log(`${user.name} is not registered`);
        }
    }
}

const user1 = new User("Christian", 22, "Lagos, Nigeria");
const user2 = new User("Jane", 30, "New York, USA");
const user3 = new User("Oluwaseun", 25, "San Francisco, USA");
const admin1 = new Admin("Eric", 28, "London, UK");

// console.log(admin1.login());
// console.log("verfied Before", verifiedMembers);
// console.log(user2.verifyUser(user1));
// console.log("verify after", verifiedMembers);
// console.log("before", user1);
// user1.login();
// console.log("after", user1);

// console.log(User.printClassName())

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
// console.log(acc.getBalance());

// const animals = [new Cat(), new Dog()];
// animals.forEach(animal => animal.speak());

// Output:
// Cat meows.
// Dog barks.

let newObj = {
    name: "Christian",
    address: "Lagos"
}

let obj2 = newObj

obj2.name = "Hello"

console.log(newObj.name)

