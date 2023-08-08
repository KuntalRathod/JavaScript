const marvel_heros = ["ironman", "thor", "spiderman"]
const dc_heros = ["flash", "superman", "batman"]

// marvel_heros.push(dc_heros)    //return an existant arrays

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)  //returns new arrayy
// console.log(allHeros);

const all_new_hero = [...marvel_heros, ...dc_heros]
// console.log(all_new_hero);

const another_array = [1, 2, 3, [4, 5, 6], 7, [8, 7,[5, 6, 7]]]
console.log(another_array.flat(Infinity));

console.log(Array.isArray("Kuntal"));

console.log(Array.from("Kuntal"));

console.log(Array.from({ name: "Kuntal" }));  //interestingg

//  console.log(Array.from({ length: 5 }, (v, i) => i));  

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));
