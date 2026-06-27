
const score = 100
const scoreValue = 100.3//no need og float ot int

const id = Symbol('123')
const anotherID = Symbol('123')//dono different symbols generate hoke store honge

console.log(id === anotherID);

const bigNumber = 5453535353535353n
//reference types
//arrays,objects,functions

const heroes = ["Shaktiman","Naagraj","Doga"];
let my = {
    name:"Ashish",
    age:21
}//{} inside it is an object

//function (){}//definition of a function
const myFunc = function(){
    console.log("Hi");
    
}

/*typeof
typeof "hi" → "string"
typeof 42 → "number"
typeof true → "boolean"
typeof undefined → "undefined"
typeof null → "object" ⚠️
typeof [] → "object" ⚠️
typeof function(){} → "function" 


null >= 0 // true (null → 0 for comparisons)
null == 0 // false (null only == undefined)
null == undefined // true
NaN === NaN // false (NaN is never equal to itself)
"5" + 3 // "53" (+ triggers concat)
"5" - 3 // 2 (- forces number)
Boolean("") // false (empty string = falsy)
Boolean("0") // true (non-empty = truthy*/

//************************************** */

// stack(Primitive), Heap(NOn-Primitive)

let myName = "Ashishkumar"

let anotherName = myName
anotherName = "Ram"

console.log(anotherName);// we arre getting a copy of the myName, so change in anotherrName will be change in itself only
console.log(myName);

let userOne = {
    email:"user@gmail.com",
    upi:"user@byl"
}
let userTwo = userOne
userTwo.email = "Anidn@gmail.com"

console.log(userOne.email);

