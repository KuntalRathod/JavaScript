// console.log("K");
// console.log("U");
// console.log("N");
// console.log("T");
// console.log("A");
// console.log("L");

function printMyName() {
  console.log("K");
  console.log("U");
  console.log("N");
  console.log("T");
  console.log("A");
  console.log("L");
}
printMyName();

// function printMyNameWithParams(name) {   //()parameters
//     console.log(name);
// }
// printMyNameWithParams("Kuntal");       /()Arguments

// function printMyNameWithParams(name, age) {
//     console.log(name, age);
// }
//     printMyNameWithParams('Kuntal', 25 );


// function addTwoNumber(number1, number2){
//   console.log(number1 + number2);
// }

function addTwoNumber(number1, number2) {
  // let result = number1 + number2;
  // return result; 
  return number1 + number2;
}

const result = addTwoNumber(10, 20);
// console.log("Result : ",result);

// function loginUserMessage(username) {
//   return `${username} just logged in`; 
// }
// console.log(`Login message: ${loginUserMessage('kuntal')}`);


function loginUserMessage(username="sam") {
  if (username === undefined) {      //=>(!username)
    console.log("Please enter a Username");
    return;
  }
  return `${username} just logged in`;
}
// console.log(`Login message: ${loginUserMessage("Kuntal")}`);


function calculateCartPrice(val1,val2,...num1) {
  return num1;
}
console.log(calculateCartPrice(100, 500, 300, 900, 1000));

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const user = {
  username: "Kuntal",
  age: 25,
  price :500,
}
function handleObject(anyobject) {
  console.log(`Username is ${anyobject.username} and Age is ${anyobject.age} and price is ${anyobject.price}`);
}
// handleObject(user)
handleObject({
  username: "Kuntal",
  age: 25,
  price: 500,
});

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const MyNewArray = [100, 200, 300, 400, 500]

function returnSecondValue(getArray) {
  return getArray[0]
}
// console.log(returnSecondValue(MyNewArray));
console.log(returnSecondValue([100, 200, 300, 400, 500]));
 