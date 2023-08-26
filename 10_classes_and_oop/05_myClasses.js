//After ES6
//Sentactical sugar
//jese hi class se ek object initiallize hoga means new keyword jese hi ka mein loge wese hi constuctor apne aap call ho jaata hai
//As soon as an object is initialized in the class, like when you use the 'new' keyword, the constructor is automatically called just like that.


// class User {
//   constructor(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
//   }
//   encryptPassword() {
//     return `${this.password}abc`;
//   }
//     changeUsername() {
//         return `${this.username.toUpperCase()}`
//     }
// }
// const chai = new User("chai", "chai@gmail.com", "123");
// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());

//behind the sceans

function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function () {
     return `${this.password}abc`;
}

User.prototype.changeUsername = function () {
    return `${this.username.toUpperCase()}`;
};

const tea = new User("tea", "tea@gmail.com", "123");
console.log(tea.encryptPassword());
console.log(tea.changeUsername());

