

//declaration
function saymyname(){
    console.log("A");
    console.log("S");
    console.log("H");
    console.log("I");
    console.log("S");
    console.log("H");
}

saymyname // reference
saymyname() //execute 

// function addTwoNumbers(number1 ,number2 /* parameters*/){
//    console.log( number1 + number2);
   
// }
// addTwoNumbers()//NaN::argument not given
// addTwoNumbers(1,2/*arguments*/)


function addTwoNumbers(number1 ,number2 /* parameters*/){
//    let result = ( number1 + number2);
//    return result;
        return number1 + number2;
   
}
const result = addTwoNumbers(3,5)
console.log("Result is :",result);

function loginUserMessage(username){ //username = "sam"by default will be sam
    if(username === undefined /* !username*/){
        console.log("Please enter a username");
        return;
        
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Ashish"))
console.log(loginUserMessage()); //undefined just logged in

function calculateCartItems(...num1){// ... :: The rest parameter allows a function to accept an indefinite number of arguments as an array
    return num1
}
console.log(calculateCartItems(100,200,300)); //[ 100, 200, 300 ]
/*//  This works:
function addToCart(userId, ...items) {} 

// ❌ This will throw a SyntaxError:
function addToCart(...items, userId) {}
-> can have only 1 rest parameter*/

//passing of the object in function
const user = {
    username:"ashish",
    price:199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
    
}
// handleObject(user)
//can also pass the object like this
handleObject({
    username:"sam",
    price:200
})


const mynewArray = [200,400,600,602]

function returnSecondValue(getarray){
    return getarray[1]
}
// console.log(returnSecondValue(mynewArray));
console.log(returnSecondValue([200,400,600,602]));
