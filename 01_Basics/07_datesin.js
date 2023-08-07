//Dates

// let myDate = new Date()
// console.log(typeof myDate);
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toDateString());


// let myCreatedDate = new Date(2023, 0, 23);
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
// let myCreatedDate = new Date("01-14-2023");
// console.log(myCreatedDate.getTime());
// console.log(myCreatedDate.toLocaleString());
// console.log(myCreatedDate);
// console.log(myCreatedDate.toString());

// let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(new Date(myTimeStamp).toLocaleString());
// console.log(new Date(myTimeStamp).toString());
// console.log(Math.floor(Date.now() / 1000));


let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDate());
// console.log(newDate.getDay());


// `${newDate.getDate()} and time is ${}`  use this backticks format ohkk

newDate.toLocaleString('default', {
    weekday: "long",
});



