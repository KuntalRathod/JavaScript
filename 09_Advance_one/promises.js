// const promiseOne = new Promise(function (resolve, reject) {
    //Do an async task
    //DB calls , cryptography , network in file read etc..

//     setTimeout(function () {
//         console.log('Async Task is complete');
//         resolve();
//     },2000)
// })

// promiseOne.then(function () {
//     console.log('Promise Consumed');
// })

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log('Async task 2');
//         resolve()
//     }, 3000)
// }).then(function () {
//     console.log('Async 2 resolved');
// });


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// const promiseThree = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         resolve({username:"kuntal",email:"kuntal@example.com"})
//     },2000)
// })

// promiseThree.then(function (user) {
//     console.log(user);
// });


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// const promiseFour = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         let error = false;
//         if (!error) {
//             resolve({ username: "kuntal", email: "kuntal@example.com" });
//         }
//         else {
//             reject('ERROR: Something went Wrong!!!')
//         }
//     },2000)
// })
 //it also important in database connection because its chaining method .then .then
// const username = promiseFour
//     .then((user) => {
//         console.log(user)
//         return user.username;
//     })
//     .then((username) => {
//         console.log(username)
//     })
//     .catch(function (error) {
//         console.log(error);
//     })
//     .finally(() => console.log('the Promise is either resolved or reject'));

//console.log(username);


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// const promiseFive = new Promise(function (resolve, reject) {
//      setTimeout(function () {
//        let error = true;
//        if (!error) {
//          resolve({ username: "JavaScript", email: "kuntal@example.com" });
//        } else {
//          reject("ERROR: JS went Wrong!!!");
//        }
//      }, 2000); 
// })

// async function consumePromiseFive() {
//     try {
//         const response = await promiseFive; 
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }
// consumePromiseFive();


// async function getAllUsers() {
//     try {
//           const response = await fetch("https://jsonplaceholder.typicode.com/users");
//           const data = await response.json();
//           console.log(data);
        
//     } catch (error) {
//         console.log("E: ",error);
//     }
// }
// getAllUsers();

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => console.log(error));

