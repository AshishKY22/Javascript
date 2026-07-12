function setUsername(username){
    //complex DB calls
    this.username = username
}

function createUser(username,email,password){
    setUsername.call(this/*setUsername ka apna context bhale gayab ho jaye and variables bhi gayab isliye use this context i.e. createUser ka username change kardo*/,username)//reference hold karke rakhna hai so .call() used

    this.email = email
    this.password = password
}

const chai = new createUser("chai","chai@emaail.com","123")
console.log(chai);//createUser { email: 'chai@emaail.com', password: '123' } setUsername(username)::reference gaya hai sirf ...use .call









