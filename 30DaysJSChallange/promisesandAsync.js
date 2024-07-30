//Activity 1 Understanding Promises
//Task 1 Create a promise that resolve witha message after two second timeout and log the message to the console.

const promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Hello, Moinuddin")
    }, 2000)
})

//log the message

promise.then((message) => {
    console.log(message)
})

//Task 2 Create a promises that reject with an error message after a 2 sec timeout and handle the error log using catch().

// const rej_promises = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject('Promises Rejected')
//     }, 2000)
// })

// promise.catch((error) => {
//     console.error(error)
// })

//Task 3
//Chaining promises
//Create a sequance of promises that simulate fetching data from a server. Chain the promises to log the message in a specific order.


//Promise 1
const sqe_promise1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Server 1')
    }, 2000)
})

//Promise 1
const sqe_promise2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Server 2')
    }, 3000)
})

//Promise 1
const sqe_promise3 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Server 3')
    }, 1000)
})

//colsole promises 

sqe_promise1
    .then((message1) => {
        console.log(message1)
        return sqe_promise2
    })
    .then((message2) => {
        console.log(message2)
        return sqe_promise3
    })
    .then((message3) => {
        console.log(message3)
    });


