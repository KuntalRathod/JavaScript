// let myName = "Kuntal    "
// console.log(myName.trim().length); this is property so we need to create a method
// console.log(myName.truelength);  //like this truelength method


let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    
    getSpiderPower: function () {
         console.log(`spidy power is ${this.spiderman}`);
     }   
}

Object.prototype.Kuntal = function () {
    console.log(`Kuntal is present in all objects`);
}
//heroPower.Kuntal();

Array.prototype.HeyKuntal = function () {
    console.log(`Kuntal says hello`);
}

// myHeros.Kuntal();
// myHeros.HeyKuntal();
//heroPower.HeyKuntal();


//inheritance
const user = {
    name: "chai",
    email:"chai@google.com"
}

const Teacher = {
    makeVideo: true,
}
const TeachingSupport = {
    isAvailable: false,
}
const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}
Teacher.__proto__ = user


//Modern Syntax
Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUsername = "ChaiAurCode      ";

String.prototype.trueLength = function () {
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength();

"Kuntal  ".trueLength()
"icetea    ".trueLength()
