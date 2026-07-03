// for of

// ["","",""]
// [{},{},{}]

const arr = [1,2,3,4,5]
for(const iterator of arr /*object*/){
    console.log(iterator);
    
}

const greetings = "Hello World"

for(const greet of greetings){
    if(greet == " "){
        continue;
    }
    console.log(`Each char is ${greet}`);
    
}

//Maps
// unique valuees
const map1 = new Map()
map1.set('IN','India')
map1.set('USA',"United States of America")

console.log(map1);

for(const [key,value]/*destructure*/ of map1){
    console.log(key,':-', value);
    
}
/*for...of works with anything that implements the iterable protocol (has a Symbol.iterator method) — arrays, strings, Maps, Sets, etc.*/
//not iteratable in object like that way as in map
const myObject = {
    'game1' : "NFS",
    'game2' : "Spiderman"
}

// for(const [key, value] of myObject){
//     console.log(key, ':-', value);
    
// }









