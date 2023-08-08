//Arrays

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr2[2]);

//Array methods

// myArr.push(2)  ==> add element in last in array
// myArr.push(10) 
// myArr.pop()   ==> remove element in last of array
// console.log(myArr);

// myArr.unshift(9)
// console.log(myArr);

// myArr.shift()
// console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

const newArr = myArr.join()
console.log(myArr);
console.log(newArr);

// console.log(typeof newArr);  =>>> u use join so your array is become typeof string

//slice,splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)
console.log(myn1);

console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)

console.log("C ",myArr);
console.log(myn2);
