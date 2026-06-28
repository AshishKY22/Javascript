const user = {
    username: "ashish",
    price:1000,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);/*  context printed::{
  username: 'ashish',
  price: 1000,
  welcomeMessage: [Function: welcomeMessage]
}
kall*/
        
    }

}//iss bracket tak jitne variables hai unko access karne ke liye this is used
user.welcomeMessage() //ashish, welcome to website
user.username = "kalla" // context changed here .. this will point to this
user.welcomeMessage() //kalla, welcome to website

console.log(this); // {}

function chai(){
    let username = "Ashish"
    console.log(this.username);// undefined::this keyword inside a regular function does not point to the function's local variables.
/*in node.js::this.username is effectively trying to look for window.username or global.username ,doesnt exist*/
    console.log(this);
}
chai()

//arrow function :: ()=>{}
const chai1 = ()=>{
    let username = "Ashish"
    console.log(this);//{}..this.username: undefined
    
}
chai1()

const addTwo = (num1,num2) =>{
    return num2 + num1;
}

console.log(addTwo(1,2));

//implicit return

const addTwo = (num1,num2) => num1 + num2
const addtwo = (num1,num2) => (num1  + num2) //{ return required}

// if want to return object
const oneTwo = (num1,num2) => ({username:"Ashish"})
console.log(oneTwo());

const myarray = [2,3,4,5]
myarray.forEach(()=>{})




















