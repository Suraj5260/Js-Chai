// let myName = "Suraj     "

// console.log(myName.truelength);


let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function () {
        console.log(`Spidy's power is ${this.spiderman}`);
    }
}

Object.prototype.suraj = function () {
    console.log(`Suraj is present in all the objects`);
}

Array.prototype.surajHello = function () {
    console.log(`Suraj says Hello from the Array`);
}

// heroPower.suraj()
// myHeros.suraj()
// myHeros.surajHello()
// heroPower.surajHello()

// Inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)
// (give to, take from)


let anotherUser = "SurajCoder     "

String.prototype.trueLength = function () {
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUser.trueLength()
"Suraj".trueLength()
"iceTea".trueLength()