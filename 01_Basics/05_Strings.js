const name = "Kuntal"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello My name is ${name} and my repo count is ${repoCount}`);
//backticks means string interpolation

const gameName = new String('Kuntal-ridham-vatsal')
console.log(gameName[0]);

// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName); Orginall value change nayy thayy

// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('u'));


// const newString = gameName.substring(0, 3);
// console.log(newString);

// const anotherString = gameName.slice(-5, 3)
// console.log(anotherString);


const newStringOne = "   Kuntal    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://google.com/react.dev%20master"
console.log(url.replace('%20', '-')); 

// console.log(url.includes('google'));
// console.log(url.includes("hello"));  =>>false in output

console.log(gameName.split('-'));



