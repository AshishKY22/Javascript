//Date

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myCreatedDate = new Date(2023,0,23,5,3)
console.log(myCreatedDate.toLocaleString());//1/23/2023, 5:03:00 AM
console.log(myCreatedDate.toDateString());//Mon Jan 23 2023

let anotherDate = new Date("2023-01-14")
console.log(anotherDate.toDateString());


let myTimeStamp = Date.now()
console.log(myTimeStamp);//1782548141970
console.log(anotherDate.getTime());//1673654400000
console.log(Date.now()/1000);//converted to sec
console.log(Math.floor(Date.now()));


///
let newDate = new Date()
console.log(newDate.getMonth());
console.log(newDate.getDay());


//`${newDate.getDate()}`

// used to customize the format
newDate.toLocaleString('default',{
    weekday: "long"
})
console.log(newDate);

