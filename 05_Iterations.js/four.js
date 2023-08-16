const myObject = {
    js: 'JavaScirpt',
    cpp: 'C++',
    py: 'Python',
    rb: 'Ruby',
    swift:'swift by apple'
}
for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}
//Output
// js shortcut is for JavaScirpt
// cpp shortcut is for C++
// py shortcut is for Python
// rb shortcut is for Ruby
// swift shortcut is for swift by apple

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const programming = ["js", "rb", "py", "java", "cpp"]
for (const key in programming) {
    console.log(`${key} shortcut is for ${programming[key]}`);
}

//Output
// 0 shortcut is for js
// 1 shortcut is for rb
// 2 shortcut is for py
// 3 shortcut is for java
// 4 shortcut is for cpp


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const map = new Map();
map.set("In", "India");
map.set("US", "United States");
map.set("UK", "United Kingdom");
map.set("In", "India");

for (const key in map) {
    console.log(key);
}
//Output
// TypeError: map is not iterable
