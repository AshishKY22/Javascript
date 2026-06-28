
// var c = 300 // aage chalke again declared then value changes in the if statement
let a = 300// global scope
//scope :{}: when it comes with a function , if else statements etc.
if(true){
    let a = 10 // block scope
    const b = 20
    console.log(a); // 10
    
    // var c = 30
}

 console.log(a);//300 // a is not defined
// console.log(b); // b is not defined
// console.log(c);  // 30

function one(){
    const username = "Hakka"

    function two(){
        const website = "ytube"
        console.log(username);
        
    }
    // console.log(website); // outside scope
    two() //agar comment kardu then niche jo one() call hua hai nothign prints ans two call hua hi nhi kabhi
    
}
one()

if(true){
    const username = "Ashish"
    if(username === "Ashish"){
        const website = " cricket"
        console.log(username + website);  
    }
    // console.log(website); :: out of scope
    
}
// console.log(username);:: outise scope


//*********************Interesting****************** */

addone(5)// aise kar skte hai access
function addone(value){
    return num +1 ;
}



addTwo(5)// wrong:: variable ke saath hold kar diya hai cant use like this
const addTwo /* expression :: variables can hold anything*/ = function(num){
    return num + 2;
}


