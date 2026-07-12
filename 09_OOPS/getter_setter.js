class User{
    constructor(email,password){
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
         this._email = value
    }
    get password(){
        //apne hisaab se value change karke de skta hu apne hisaab se ki tum ye nhi ye lo ispe kaam karo
        return this._password.toUpperCase()
    }


    set password(value){
        this._password = value
    }
}

const ashish = new User("sa@gmail.com","abc")
console.log(ashish.password);
console.log(ashish.email);
