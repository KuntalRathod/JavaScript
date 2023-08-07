//Primitive

//7 Types :String,Number,Boolean,null,undefined,Symbol,BigInt

const score = 100
const scoreValue = 100.50

const isLoggedIn = false
const outsideTemp = null

let userEmail;

// console.log(typeof userEmail);

// console.log(typeof isLoggedIn);

const id = Symbol('1234')
const anotherID = Symbol('1234')

// console.log(typeof id);

// console.log(id===anotherID);   Symbol use for unique value defined 

const bigNumber = 12929289122323n
// console.log(typeof bigNumber);

// Reference(Non - Primitive)

// Array, Objects, Functions

const heros = ["Spiderman", "Batman", "Superman"]

let MyObj ={
    name: "hitesh",
    age: 26
}

const myfunction = function() {
    console.log("Hello World");
}


// =========================================================

//Stack(Primitive), Heap(Non-Primitive)


let myYoutubename = "KuntalRathoddotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);
 
let userone = {
    email: "user@google.com",
    upi:"user"
}

let userTwo = userone

userTwo.email = "Kuntal@google.com"

console.log(userone);
console.log(userone);