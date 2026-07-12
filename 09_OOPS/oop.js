const user = {
    username :"Ashish",
    loginCount :2,
    signedIn : true,

    getUserDetails:function(){
        //console.log("Got User Details");
        // console.log(`Username:${this.username}`);
        console.log(this);
        /*{
            username: 'Ashish',
            loginCount: 2,
            signedIn: true,
            getUserDetails: [Function: getUserDetails]
        }*/
        
        
        
    }
}

console.log(user.username);
console.log(user.getUserDetails());
console.log(this); //{}::browser me run karne pe bohot kuch hai global context me

// again and again making user:::

// constructor function

// const promiseOne = new Promise() //new:: constructor function::makes new context
// const date = new Date()

function User(username,loginCount,isLoggedIn){
    this.username/*variable*/ = username/*value that we are giving by passing*/
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`hello: ${this.username}`);
        
    }
    return this//implicitly defined not needed

}

const userOne = User("ashish",12,true)
const userTwo = User("kumar",13,false)
console.log(userOne);//value got override by userTwo

//new giver them new instance each
//an empty object is created
//constructor function is called because of new keyword, all the arguments are packed in it and given
//this keyword gets injected into it
//then we r  returned with this

const userOne = new User("ashish",12,true)
const userTwo = new User("kumar",13,false)
// console.log(userOne);
console.log(userOne.constructor);//[Function: User]

//instanceof:: instanceof is an operator that checks whether an object is an instance of a particular class (or more precisely, whether that class's prototype exists anywhere in the object's prototype chain)
//object instanceof Class   // returns true or false
/*class User {
  constructor(name) {
    this.name = name;
  }
}

const u = new User("Ashish");

console.log(u instanceof User);   // true
console.log(u instanceof Array);  // false

class Animal {}
class Dog extends Animal {}

const d = new Dog();

console.log(d instanceof Dog);     // true
console.log(d instanceof Animal);  // true — Dog inherits from Animal
console.log(d instanceof Object);  // true — everything inherits from Object eventually*/
