//  Promise is an object representing the eventual result of an async operation — it's JavaScript's cleaner alternative to callbacks (like the xhr.onload pattern from earlier

//creating promise
const promiseOne = new Promise(/*callback*/ function(resolve,reject){
    //Do an async task
    //DB calls,cryptography,network
    setTimeout(function(){
        console.log('Async task is complete');
        //we need to connect the resolve and then()
        resolve()// Promise is comsumed
        
    },1000)
})

//created above now consuming it
promiseOne.then(/*callback*/function(){
    console.log('Promise consumed');
    
})

//writing it together
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task ic complete1");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
    
})

//passing the value from resolve() to then()
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve(/*can pass data to then*/ {username:"Ashish",email:"ash@gmail.com"})
},1000)
})

promiseThree.then(function(user){
    console.log(user);
    
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username:"agsk",password:"123"})
        }else{
            reject("Error:Something went wrong")
        }
    },1000)
})

//how to avoid callback hell::using chaining
promiseFour
.then((user)=>{
    console.log(user);
    return user.username
    
}).then((username)=>{
    console.log(username);
}).catch(function(error){//error tha toh catch has to be used
    console.log(error);
    
}).finally(()=>{
    console.log("Promise has resolved or rejected");
    
})



const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"javascript",password:"123"})
        }else{
            reject("Error:JS went wrong")
        }
    
},1000)
})
//accepting in a different way
async function consumePromiseFive(){
    try{
        const response = await promiseFive //its an object so cannot be consumed as promiseFive()
        console.log(response);

    }catch(error){
        console.log(error);
        
    }
    
    
}
//async cannot handle error itself::used try-catch

consumePromiseFive()


// async function getAllUsers(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json() //also takes time to load so need to use await
//     console.log(data);
    
//     }catch(error){
//         console.log("E: ",error);
        
//     }
    
// }
// getAllUsers()


//RUN YE DATA SABSE PEHLE HO RHA UPAR WALEO SE PEHLE
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data);
    
}).catch(function(error){
    console.log("Error occured");
    
})



