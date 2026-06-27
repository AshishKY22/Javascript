const score = 400
const balance = new Number(100)// i specifically deifined that it is a number
console.log(balance);//[Number: 100]
console.log(balance.toString().length);// converted to string
console.log(balance.toFixed(2));//100.00

const otherNumber =  1123.8966
console.log(otherNumber.toPrecision(3)); //123.8966::124, 1.12e+3

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));//1,000,000 // 10,00,000

console.log("************************");

/*************MATHS************* */

console.log(Math);
console.log(Math.abs(-1));
console.log(Math.round(4.6));

console.log(Math.ceil(4.1));
console.log(Math.floor(4.1));
console.log(Math.min(4,3,6,8));
console.log(Math.max(4,3,6,8));

console.log(Math.random());// always btw 0 - 1
console.log((Math.random()*10) + 1);// 1 aayega hi minimum

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
