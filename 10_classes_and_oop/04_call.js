//Suppose we make Discord!!!!

function SetUsername(username) {
  //Complex DB calls
  this.username = username;
  console.log("called");
}

function createUser(username, email, password) {
  SetUsername.call(this , username);
  this.email = email;
  this.password = password;
}

const chai = new createUser("chai", "chai@mircrosoft.com", "123");
console.log(chai);

