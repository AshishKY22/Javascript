function User(email,password){
    this._email = email
    this._passwrod = password

    Object.defineProperty(this,'email',{
        get : function(){
            return this._email.toUppercase();
        },
        set: function(value){
            this.email = value
        }

    })

    Object.defineProperty(this,'password',{
        get : function(){
            return this._password.toUppercase();
        },
        set: function(value){
            this.password = value
        }

    })
}



const chai = new User("chai@gmail.com","chai")
console.log(chai.email());
