const promiseOne = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task is completed");
        resolve()
    }, 1000)
})

promiseOne.then(function () {
    console.log("Promise Completed!!");
})

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task is completed")
        resolve()
    }, 1000)
}).then(function () {
    console.log("Yoooo");
})

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "Chai", email: "chai@example.com" })
    }, 1000)
})

promiseThree.then(function (user) {
    console.log(user);
})

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        const error = true;
        if (!error) {
            resolve({ username: "Suraj", password: "123" });
        } else {
            reject("ERROR: Something went wrong!!")
        }
    }, 1000)
})

promiseFour
    .then((user) => {
        console.log(user);
        return user.username;
    }).then((username) => {
        console.log(username);
    }).catch((error) => {
        console.log(error);
    }).finally(() => {
        console.log("The promise is resolved or rejected.");
    })

const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        const error = true;
        if (!error) {
            resolve({ username: "Javascript", password: "V8" });
        } else {
            reject("ERROR: JS went wrong!!")
        }
    }, 1000)
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("err: ", error);
//     }
// }

// getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
    .then((response) => {
        return response.json()
    })
    .then((users) => {
        console.log(users);
    })
    .catch((error) => console.log("err: ", error))