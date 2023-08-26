// const user = {
//     name: 'John',
//     age: 30,
//     sayHi: function () {
//         console.log('Hello');
//     }
// };
// user.sayHi(); // Hello

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// const user = {
//     username: 'Kuntal',
//     loginCount: 10,
//     facebookSignedIn: true,
//     getUserDetails: function () {
//console.log('got user details from database')
//console.log(`Username is ${this.username}, login count is ${this.loginCount}, facebookSignedIn: ${this.facebookSignedIn}`);
//console.log(`Username: ${this.username}`);
//         console.log(this); //current context in function
//     }
// }

// console.log(user.getUserDetails()); // Username is Kuntal, login count is 10, facebookSignedIn: true
// console.log(user.username); // Kuntal
// console.log(this); // output:- {} & this is global context

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// const promiseOne = new Promise()   //new is contructor function
// const date = new Date()           //Ek Object literal se multiple multiple instance banavi shakay

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };
    
    return this; //==> return automatically by default
    
}
const userOne = new User("Kuntal", 10, true);
const userTwo = new User("ChaiAurCode", 20, false);
console.log(userOne.constructor); 
//console.log(userTwo);
