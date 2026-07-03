const myObject = {
    js:'javascript',
    cpp: 'C++',
    rb: 'ruby'
}

for(const key in myObject){
    console.log(`${key} is for ${myObject[key]}`);
    
}
const programming = ['js','rb','py','java','cpp']

for(const key in programming){
    console.log(key); //0,1,2,3,4
    console.log(programming[key]);
    
}

const map2 = new Map()
map2.set('IN','India')
map2.set('USA',"United States of America")

for(const key in map2){
    console.log(key); // nothing is beign printed because map is not iterable
    
}
/*for...in was designed for plain objects — it loops over enumerable property keys (including inherited ones from the prototype chain). A Map's entries are not stored as object properties; they're stored internally in the Map's own data structure. Map doesn't define any enumerable properties on itself, so for...in finds nothing to iterate and the loop body never runs. No error, just silently does nothing — which is why it's a sneaky bug*/

