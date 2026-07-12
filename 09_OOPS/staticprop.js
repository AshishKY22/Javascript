class User{
    constructor(username){
        this.username = username

    }

    logme(){
        console.log(`username : ${this.username}`);
        
    }

    //i want user to get unique id
    static createId(){
        return `123`
    }
}

const ashish = new User("ashish")
console.log(ashish.createId())//no access

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone","i@phone.com")
iphone.logme()
console.log(iphone.createId());//no access







