// const userEmail = "Kuntal@123.ai"

// if (userEmail) {
//     console.log("got user Email");
// }
// else {
//     console.log("Please provide a valid email");
// }

// const userEmail = [];

// if (userEmail) {
//   console.log("got user Email");
// } else {
//   console.log("Please provide a valid email");
// }

//falsy values
//false,0,-0,BigInt,0n,"",null,undefined,NaN

//Truthy Values
//true,{},[],1,2,3,"string",-1,Infinity,-Infinity,Symbol("")
//"0",'false'," ",[],{}, function(){} => Empty function 

const userEmail = [];

if (userEmail.length===0) {
    console.log("Array is Empty");
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
  console.log("Object is Empty");
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//Nullish Coalescing Operator (??) : null undefined


let val1;
// val1 = 5 ?? 10   ==> output is 5
// val1 = 0 ?? 10   ==> output is 0
// val1 = "" ?? 10   ==> output is ""
// val1 = null ?? 10   ==> output is 10
// val1 = undefined ?? 10   ==> output is 10
// val1 = NaN ?? 10   ==> output is NaN
// val1 = false ?? 10   ==> output is false

console.log(val1);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//The nullish coalescing operator(??) is a new operator
//in JavaScript that was introduced in ECMAScript 2020.
//It is used to return a value from one of two expressions,
// depending on whether the first expression is null or undefined.
//If the first expression is null or undefined, the second expression is returned.
//Otherwise,the first expression is returned.


//For example, the following code will return the string "Hello world":

// const message = "Hello world" ?? "Goodbye world";


//If the variable `message` is null or undefined, the second expression, "Goodbye world",
//will be returned.Otherwise, the first expression, "Hello world", will be returned.
//The nullish coalescing operator can be used to simplify code that would otherwise require multiple conditional statements.

// let message;
// console.log(message !== null && message !== undefined ? message : "Goodbye world");

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//Ternery operater
// condition ? true_value : false_value

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
