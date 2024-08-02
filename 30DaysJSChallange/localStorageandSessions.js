//Activity 1 Understanding local storage.
// Task 1 write a script to save a string value to localstorage and retrive it and log the retrive value.

// const saveToLocalStorage = (key, value) => {
//     localStorage.setItem(key, value)
// }

//retriving value from local storage.
// const getFromLocalStorage = (key) => {
//     return localStorage.getItem(key)
// }

// Task 2 write a script to save an object to localstorage by converting it to a json string retrive and parse the object then log it.

const myObj = {
    name: 'Moinuddin',
    age: 27,
    place: 'Hyderabad'
}

//saving the obj in the localString

localStorage.setItem('myObj', JSON.stringify(myObj))

//retriving the json string from localStorage.
const jsonString = localStorage.getItem('myObj')

const retrivedJSONObj = JSON.parse(jsonString)

console.log(retrivedJSONObj)


//example

const key = 'Moinuddin'
const value = 'Human'

//saving values and key in local storage
saveToLocalStorage(key,value)

//retriving the values from localStorage and log into the console.
const gotVal = getFromLocalStorage(key)
console.log(gotVal)





