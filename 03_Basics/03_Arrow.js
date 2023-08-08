// const user = {
//     username: "Kuntal",
//     price: 999,
    
//     welcomeMessage: function () {
//         console.log(`${this.username} , Welcome to our website`);
 //       console.log(this);
//     }
// }
// user.welcomeMessage();
// user.username = "Sam"
// user.welcomeMessage();


// console.log(this);  =>> Empty Object in node environment
// console.log(this);  =>> Window Object in browser environment

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// function chai() {
    // let username = "Kuntal"
//     console.log(this.username);
// }
// chai()       //=> ans is undefined

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// const chai =  () =>{
//       let username = "Kuntal"
//       console.log(this);
// }
// chai()     

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// const addTwo = (num1,num2) => {
//     return num1 + num2 
// }
// console.log(addTwo(2, 3));

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// const addTwo = (num1, num2) => num1 + num2;

// const addTwo = (num1, num2) => (num1 + num2);

const addTwo = (num1, num2) => ({username:"Kuntal"})

console.log(addTwo(2, 3));