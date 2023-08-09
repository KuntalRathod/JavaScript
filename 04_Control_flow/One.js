//If
// const IsUserLoggedIn = true;
// const temprature = 41

// if (temprature === 41 ) {
//   console.log(" less than 50");
// }
// else {
//     console.log("temprature is greater than 50");
// }
// console.log("Execute");

// <,>,<=,>=,==,!=,===

// const score = 200
// if (score > 100) {
//     let power = "fly"
//     console.log(`User power :${power}`);
// }
// console.log(`User power :${power}`);

//Output = ReferenceError: power is not defined
//Because of block scope

// let user = 'user'; //Global Scope
// if (user) {
//     let user = 'admin'; //Block Scope
//     console.log(`User : ${user}`);
// }
// console.log(`User : ${user}`);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//shorthand notation 
//Implicit scope 
// const balance = 1000
// if (balance > 500) console.log("test"),console.log("test2");
//Not recommanded beacause its not readable clean format code!!

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// const balance = 1000

// if (balance < 500) {
//     console.log("Balance is less than 500");
// }
// else if (balance < 900) {
//     console.log("Balance is less than 900");
// }
// else if (balance < 400) {
//     console.log("Balance is less than 400");
// }
// else {
//     console.log("Balance is less than 1200");
// }

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const debitCard = true
const userLoggedIn = true   
const loggedInFromGoogle = false
const loggedInFromEmail = true

// if (userLoggedIn && debitCard) {
//     console.log("Alow to buy course"); 
// }
// else if (loggedInFromGoogle || loggedInFromEmail) {
//     console.log(" to buy course");
// }
// else {
//     console.log("Please contact admin");
// }

// if (loggedInFromEmail || loggedInFromGoogle) {
//     console.log("User Logged In");
// }









