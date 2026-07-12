class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
        
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)//no need to use .call()
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
        
    }
}

const chai = new Teacher("chai","asd@gmail.com","123")
chai.addCourse()
chai.logMe()
const masalaChai = new User("MasalaChai")
masalaChai.logMe()
console.log(chai === masalaChai);//no
console.log(chai === Teacher);//no
console.log(chai instanceof User);//yes








