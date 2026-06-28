// declaration

//singleton : Object.create


//symbols
const mySym = Symbol("key1")
//object literals
const JsUser = {
    name :"ashish",
    "full Name":"Ashish Kumar",
    age : 21,
    [mySym] : "myKey1",
    location:"siliguri",
    email:"ashish@gmail.com",
    ifLogged : false,
    lastLoginDays:["Monday","Friday"]

}

//accessing
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full Name"]);
console.log(JsUser[mySym]);

//
JsUser.email = "Ashish@222@.com"
// Object.freeze(JsUser) // now there will be no changes allowed: changes wont propogate

JsUser.greeting = function(){
    console.log(`Hello js user , ${this.name}`);
    
}

console.log(JsUser.greeting()); // is we use only .greeting then nothing is returned 
