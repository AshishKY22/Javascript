//Arrays
//declaration
const myArr = [0,1,2,3,4,"ash"]//resizable arrays, mixed types
const myheroes = ["Ashish","shaktiman"]
const myArr2 = new Array(1,2,3,4)

//accessing
console.log(myArr[0]);

//Shallow Copies : have the same reference points
//Deep copies : gets a copy

//Methods
myArr.push(6)
myArr.push(7)
myArr.pop()

myArr.unshift(9)// array ke start me adds and all values shifted
myArr.shift()// 9 removed...the first element removed
myArr.shift()

console.log(myArr.includes(9));//boolean
console.log(myArr.indexOf(5));


const newarr = myArr.join()

console.log(myArr);//[ 1, 2, 3, 4, 'ash', 6 ]
console.log(newarr);//string : 1,2,3,4,ash,6

//slice, splice

console.log("A",myArr);
const myar1 = myArr.slice(1,3)
console.log(myar1);//[ 2, 3 ]
console.log("B",myArr);
const myar2 = myArr.splice(1,3)
console.log(myar2);//[ 2, 3, 4 ] 
console.log("C",myArr)// C [ 1, 'ash', 6 ]
//splicee me original array se element nikalke manipulates the original array


