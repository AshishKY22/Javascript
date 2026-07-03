const userEmail = "Ash@gmail.com"

if(userEmail){
    console.log("Got the email");
    
}else{
    console.log("Dont have email");
    
}

/*falsy values:
false, 0 -0, BigInt 0n,"",null,undefined,NaN

truthy values : 
"0",'false'," ",[],{},function(){}*/

const userEmail2 = "";
if(userEmail2.length === 0){
    console.log("Array is empty");
    
}

const emptyObject = {}

if(Object.keys(emptyObject).length === 0){
    console.log("Object is empty");
    
}

//Nullish Coalescing Operator : ??

let val;
// val1 = 5 ?? 10 : 5
// val1 = null??10 : 10
val1 = undefined ?? 15 // 15
val1 = null ?? 10 ?? 15 //: 10

console.log(val1);


//Ternary operator ?

const iceTeaPrice = 100

iceTeaPrice >= 80 ? console.log("More than 80") : console.log("less than 80");






