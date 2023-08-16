// for of

//["","","" ]
//[{},{},{}]

// const arr = [1, 2, 3, 4, 5, 6]

// for (const value of arr) {
//     console.log(value)
// }

// const greeting = "Hello World!"
// for (const greet of greeting) {
//     console.log(`Each char is ${greet}`);
// }

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//Maps
// const map = new Map()
// map.set('In', "India")
// map.set('US', "United States")
// map.set('UK', "United Kingdom")
// for (const [key, value] of map) {
//     console.log(`Key is ${key} and value is ${value}`)
// }

// const map = new Map();
// map.set("In", "India");
// map.set("US", "United States");
// map.set("UK", "United Kingdom");
// map.set("In", "India");

// console.log(map);

// for (const [key,value] of map) {
//     console.log(key,':-',value);
// }

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const myObject = {
    'game1': 'NFS',
    'game2':'superman'
}
for (const [key, value] of myObject) {
    console.log(key,':-',value);
}
//OutPut
//TypeError: myObject is not iterable






