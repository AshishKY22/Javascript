//Immediately Invoked Function Expression 

// named iife
(function chai(){
    console.log(`DB Connected`);
    
})(); // ; is required to stop this invoked function

// (function definiton:: takes the argument)(call:: parameter given)
/*two major reasons: Data Privacy (Avoiding Global Scope Pollution) and Creating Isolated Execution Contexts.*/


//unnamed iife
(  (name)=>{
    console.log(`DB Connected ${name}`);
    
})("Ashish")






