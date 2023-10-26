// ES6

// class User {

//     constructor(username, email, password) {
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptPassword() {
//         return `${this.password}ABC`
//     }

//     ChangeUsername() {
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new User("chai", "chai@gmail.com", "123")

// console.log(chai.encryptPassword());
// console.log(chai.ChangeUsername());

// Behind the scenes

function User(username, email, password) {
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.encryptPassword = function () {
    return `${this.password}ABC`
}

User.prototype.ChangeUsername = function () {
    return `${this.username.toUpperCase()}`
}

const tea = new User("tea", "tea@gmail.com", "abc")

console.log(tea.encryptPassword());
console.log(tea.ChangeUsername());