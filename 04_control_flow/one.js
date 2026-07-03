// if statement

const isLoggedIn = true;
const temperature = 41;
// if(condition/*true*/){
//     //executes
// }
// if(false){
//     //wont execute
// }

// <,>,<=,=>,==,!=,===(checks type also)
if(isLoggedIn){
    console.log("Executed ");
    
}
if(2 == "2"){
    console.log("Executed ==");
    
}
if(2 === "2"){
    console.log("Executed ===");
    
}

if(temperature>50){
    console.log("More than 50");
    
}
else{
     console.log("Less than 50");
}

const score = 200

if(score > 100){
    const power = "fly"
    console.log(`User power : ${power}`);//block scope
    
}
console.log(`User power : ${power}`);// out of scope //block scope

//short hand notation

const balance = 1000
if(balance > 500) console.log("test");

if(balance < 500){
    console.log("less than");
    
}else if(balance < 750){
    console.log("less than 750");
    
}
else{
    console.log("more");
    
}


const userLogged = true;
const debitCard = true;

if(userLogged && debitCard && 2==2 && 3==3 ){
    console.log("Allow to buy the course");
    
}
if(userLogged|| debitCard){
    console.log("Any one true");
    
}













