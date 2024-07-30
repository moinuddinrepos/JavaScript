//Activity 4
//Task 6 Use the fetch API to get data from a public API and log the response data to the console using promise.


const url = 'https://jsonplaceholder.typicode.com/todos'

//fetching data

fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .then(error => console.error('Error:', error))

// Task 7 Use the fetch API to get data from a public API and log the response data to the console using async/await.

const url1 = 'https://jsonplaceholder.typicode.com/posts'

async function getData() {
    try {
        const response = await fetch(url1)
        if (!response.ok) {
            throw new Error('Network response is not ok')
        }
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.error('Error:', error)
    }
}
getData()
