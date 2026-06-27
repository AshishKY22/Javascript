const marvel_heroes = ["thor","Ironman","spiderman"]
const dc_heroes = ["superman","flash","batman"]

marvel_heroes.push(dc_heroes) ////[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]: takes in all type of datas
console.log(marvel_heroes[3][1]);

const allheroes = marvel_heroes.concat(dc_heroes) //["thor","Ironman","spiderman","superman","flash","batman"]
console.log(allheroes);

const all_new_heroes= [...marvel_heroes, ...dc_heroes] // same as concat
console.log(all_new_heroes);


const another_array = [1,2,3,[4,5,6],7,[6,[7,8]]]
const real_another_array = another_array.flat(Infinity) // [1,2,3,4,5,7,6,7,8]
console.log(real_another_array);

console.log(Array.isArray("ashish"))
console.log(Array.from("ashish")); //[ 'a', 's', 'h', 'i', 's', 'h' ]

console.log(Array.from({name:"ashish"})) // interesting: tell that with which keys i wnat to make array

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3)); //[ 100, 200, 300 ]





