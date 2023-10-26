class User {
    constructor(username) {
        this.username = username
    }

    LogMe() {
        console.log(`Username: ${this.username}`);
    }

    static CreateId() {
        return `123`
    }
}

const Hitesh = new User("hitesh")

// console.log(Hitesh.CreateId());

class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
iphone.LogMe()
console.log(iphone.CreateId());