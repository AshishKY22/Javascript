//for

for(let index = 0; index <= 10; index++){
    const element = index;
    
    if(element == 5){
        console.log("5 is best number");
        
    }

    console.log(element);
    
}

for(let i = 0; i<10; i++){
    for(let j = 0; j< 10; j++){
        console.log(i + '*' + j + '=' + i*j);
        
    }
}

let myarray = ["asus","hp"]

for(let index = 0; index<myarray.length; index++){
    console.log(myarray[index]);
    
}

//break and continue

for(let index =0; index <=20; index++)
{

    if(index == 5){
        console.log(`Detected 5`);
        break;
    }
    console.log(`Value of i is ${index}`);
    
}

for(let index =0; index <=20; index++)
{

    if(index == 5){
        console.log(`Detected 5`);
        continue;//agar condition match hua toh usko skip kar denge uss index ko
    }
    console.log(`Value of i is ${index}`);
    
}








