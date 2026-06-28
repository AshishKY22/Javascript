// const tinderUser = new Object() // singleton object
const tinderUser = {} // non singleton

tinderUser.id = "123abc"
tinderUser.name = "Ashish"
tinderUser.isLogged = false

console.log(tinderUser);

const regularUser = {
    email:"asai@gmail.com",
    fullname:{
        userfullname:{
            firstname:"ashish",
            lastname:"kumar"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

// const obj3 = {obj1,obj2} //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } 

const obj3 = Object.assign({},obj1,obj2) //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
console.log(obj3); 

const onj3 = {...obj1,...obj2} //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
console.log(obj3);

// how objects come from database: array of objects
const users = [
    {
        id :1,
        email:"abc@gmail.com"

    },
    {
        id :1,
        email:"abc@gmail.com"

    },
    {
        id :1,
        email:"abc@gmail.com"

    }
]

console.log(users[1].email)

console.log(tinderUser);

console.log(Object.keys(tinderUser));//array: [ 'id', 'name', 'isLogged' ]
console.log(Object.values(tinderUser));//[ '123abc', 'Ashish', false ]
console.log(Object.entries(tinderUser));// [ [ 'id', '123abc' ], [ 'name', 'Ashish' ], [ 'isLogged', false ] ]

console.log(tinderUser.hasOwnProperty('isLogged'));


//Destructuring

const course = {
    coursename :'js',
    price:"999",
    courseInstructuor:"ashish"
}

const {courseInstructuor:instructor} = course
console.log(instructor);

//APIs:json
{
   " name":"Ashish",
    "coursename":'js',
    "price":"free"

}

[
    {},
    {},
    {}
]


