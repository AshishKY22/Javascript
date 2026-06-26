let score = "33"
console.log(typeof(score))

let valueInNumber = Number(score)
console.log(typeof(valueInNumber))

// "33" = 33
//"33abs" = NaN: Not a number
//true = 1 false = 0

let isLogged = ""
let booleanisLogegd = Boolean(isLogged)
console.log(typeof booleanisLogegd)
console.log( booleanisLogegd)

//1 = true ,0 = false, "" = false, "ashish" = true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)

/******OPERATIONS ********/

let value = 3
let negValue = -value
console.log(negValue)

// +,-,*,**(power),/,%(remainder)

let str1 = "Ashish"
let str2 = " Kumar"
let str3 = str1 + str2
console.log(str2)

console.log("1" + 2)//12
console.log("1"+"2")//12
console.log("1"+2+2)//122
console.log(1+2+"2") //32 addition done first
console.log(+true)//1

let num1 , num2, num3

num1 = num2 = num3 = 2+2//not good ideas

let gameCounter = 100
gameCounter++;//used then increased
console.log(gameCounter)
