// let mtName = "Ashish     "

// //want a method to not count the spaces 
// console.log(myName.trim().length);
// console.log(myName.truelength);

let myHeroes = ["thor","spiderman"]

let heroPower = {
    thor : "Hammer",
    spiderman : "sling",

    getSpiderPower:function(){
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}
//sab toh object se hoke hi jate hai toh object me hi ye new property add kardi
Object.prototype.ashish = function(){
    console.log(`Ashish is present in all objects`);
    
}
//if sirf array ko du toh object ke paas jayega..?
//no
Array.prototype.sayAshish = function(){
    console.log('heyAshish is has this');
    
}


heroPower.ashish()
// heroPower.sayAshish() :: dont have access
myHeroes.ashish()
myHeroes.sayAshish()

//inheritence
const user = {
    name:"Ashish",
    email:"as@gmail.com"
}
const Teacher = {
    makevideo :true
}

const TeachingSupport = {
    isAvailable:true
}

const TASupport = {
    makeAssignment :"JS assignment",
    fullTime : true,
    __proto__: TeachingSupport//TeachingSupport ki properties inherit karlo
}
Teacher.__proto__ = user//bahar bhi can do it

////***MODERN SYNTAX */

Object.setPrototypeOf(TeachingSupport,Teacher)//Teacher ki properties inherit kar rha

let anotherUsername = "Ag        "
//defining the new property
String.prototype.truelength = function(){
    console.log(`${this}`);//this :: kisne call kiya
    console.log(`True length is : ${this.trim().length}`);
    
}

anotherUsername.truelength()
"ashish".truelength()
"Icetea".truelength()



