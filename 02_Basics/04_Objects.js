// const tinderUser = new Object()  //=>Singleton object
const tinderUser = {}         //=>Non Singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "something@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Kuntal",
            lastname: "Rathod"
        }
    }
}
//?=>>Optional channing example Movix web app
 
// console.log(regularUser.fullname?.userfullname);

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "c", 4: "d" }
// const obj3 = { obj1, obj2 } ==>>you cant do this type
// console.log(obj3);
// const obj3 = Object.assign({},obj1, obj2)   //==>obj.assign(target,source) 


// const obj3 = { ...obj1, ...obj2 }  //=>use this spread operator more beacuse its easy
// console.log(obj3);

const users = [
  {
    id: 1,
    name: "Kuntal",
  },
  {
    id: 1,
    name: "Kuntal",
  },
  {
    id: 1,
    name: "Kuntal",
  },
];
users[1].name

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
  course: "Js in hindi",
  price: "999",
  courseInstructor:"hitesh"
}

// course.courseInstructor

const { courseInstructor:instructor } = course
console.log(instructor);

//React destructuring
// function Navbar({ company }) {  
//   return (
//     <div>
//       <h1>{company}</h1>
//     </div>
//   );
// }
// Navbar();

// const navbar = (props) => {
//   return (
//     <div>
//       <h1>{props.company}</h1>
//     </div>
//   );
// };
// navbar({ company: "Kuntal" });








    

