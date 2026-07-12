const User = {
    _email : "ash@gmail.com",
    _password: "123",



    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
}

//can use factory function
const chai = Object.create(User)
console.log(chai.email);
