//Activity 3 Using Async/Await
//Task 4 Write a async function that waits for a promise to resolve and then log the resolve value.

async function logResolveVal() {
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve('Hey Moinuddin')
        }, 2000)
    })
    const resolveVal = await promise
    console.log(resolveVal)
}

logResolveVal()

//Task 5 Write async function that handle a rejected promise using try-catch and log the error message

async function rej_promise() {
    try {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                reject('Error')
            }, 2000)
        })
        const result = await promise
    } catch (error) {
        console.error(error)
    }
}

rej_promise()