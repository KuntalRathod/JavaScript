//Singleton
// Object.create

//objects literals

const mysy = Symbol("key1");



const JsUser = {
    name: "Kuntal",
    "full name": "Kuntal Rathod",
    [mysy]:"mykey1", //=>if you want to refer symbol in print statement use square brackets in your Key!!
    age: 20,
    location: "Junagadh",
    email: "Kuntal@google.com",
    isLoggedIn: false,
    courses: ["React", "Angular", "Vue"],
    lastlogginDays:["Monday","Friday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser.fullname); =>> not working at this time okayy
console.log(JsUser[mysy]); 
// console.log(typeof mysy);   

// JsUser.email = "Kuntal@chatgpt.com"
// console.log(JsUser);
// Object.freeze(JsUser);
// JsUser.email = "Kuntal@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function () {
    console.log("Hello Js user");
}
console.log(JsUser.greeting());

JsUser.greetingTwo = function () {
    console.log(`Hello Js user,${this.name}`);
}
console.log(JsUser.greetingTwo());