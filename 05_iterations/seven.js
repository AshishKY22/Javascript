const myNumbers = [1,2,3,4,5,6,7,8,9,10]

//map me haar cheej return ho jati hai true false ka locha nhi
const newNums = myNumbers.map( (num)=> num+10)
console.log(newNums);

//chaining

const newNums1 = myNumbers
.map( (num) => num*10 )//yehan ka num value niche pass hoga
.map((num) => num+1)
.filter((num) => num>=40)

console.log(newNums1);





