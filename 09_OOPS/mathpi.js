const descriptor = Object.getOwnPropertyDescriptor(Math,/*key*/ "PI")

console.log(descriptor);

const chai = {
    name :"ginger chai",
    price:250,
    isavailable:true,

    orderChai: function(){
        console.log(`code faat gaya`);
        
    }
}
console.log(Object.getOwnPropertyDescriptor(chai,"name"));
//properties ko change

Object.defineProperty(chai,'name',{
    // writable: false,
    enumerable : false
})

console.log(Object.getOwnPropertyDescriptor(chai,"name"));


for (const [key,value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
         console.log(`${key}, ${value}`);
    }
   
}




