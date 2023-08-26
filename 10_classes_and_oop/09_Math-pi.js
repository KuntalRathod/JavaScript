// console.log(Math.PI)
// Math.PI = 50          //==> you cant change this 
// console.log(Math.PI);

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(descriptor);

const chai = {
    name: "ginger chai",
    price: 250,
    isAvailable: true,
    
    orderChai: function () {
        console.log("chai nhi bni");
    }
}

//console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable:false,  
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== "function") {
        console.log(`${key}:${value}`);
    }
}