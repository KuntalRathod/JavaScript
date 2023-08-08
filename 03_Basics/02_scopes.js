// var c = 300;     //=> Global scope
let a = 100;

if (true) {      //=>function scope
    let a = 10;
    const b = 20;
    // var c = 30;
    //console.log("Inner :",a)
}
//  console.log(a)
// console.log(b)
// console.log(c)

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function one() {
    const username = "Kuntal"

    function two() {
        const website = "youtube"
        console.log("Inner : ",username)      
    }
    // console.log(website);
    two();
}
// one();

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

if (true) {
    const username = "Kuntal"
    if (username === "Kuntal") {
        const website = " youtube"
        // console.log(username + website)       
    }
    // console.log(website);
}
// console.log(username);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Interestinggg
console.log(addOne(5));
function addOne(num) {
    return num + 1;
}

addTwo(5);
const addTwo = function (num) {    //=>>Expression and different technique of functionn
    return num + 2;   
}

//Hosting =>>  Execution context =>> Declaration se pahele use nhi kar sakte







