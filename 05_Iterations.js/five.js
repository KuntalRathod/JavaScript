const coding = ["js", "ruby", "py", "java", "cpp"]

// coding.forEach(function (item) {
//     console.log(item);
// })

// coding.forEach((item) => {
//     console.log(item);
// })

// function printMe(item) {
//     console.log(item);
// }
// coding.forEach(printMe);   //=>As Refrence given and Automaticaly print 

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// })

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const myCoding = [
    {
        languageName: "JavaScript",
        languageFileName: "js" 
    },
      {
        languageName: "Java",
        languageFileName: "java"
      },
        {
        languageName: "Python",
        languageFileName: "Py"
        }     
]
myCoding.forEach((item) => {
    console.log(item.languageName);
})