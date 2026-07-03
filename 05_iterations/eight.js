//reduce method

const myNums = [1,2,3]

const myTotal = myNums.reduce( function(acc,currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
     
return acc + currval
},0 )//accumulator ki value)
console.log(myTotal);

const myTotal1 = myNums.reduce( (acc,currval)=> acc+ currval /*value to be stored in accumulator*/,0/*initial value */)
console.log(myTotal1);








