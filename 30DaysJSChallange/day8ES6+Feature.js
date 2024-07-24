//Activity 1 ES6 and feature

//Task1 Use template literal to create a string the include variable for a a persons name and age and log the result to the console.

const name = 'Moinuddin'
const age = 27
console.log(`My name is ${name} and my age is ${age}`)

//Task 2 Create a multi-line string using template literals and log to the console.

console.log(`My name is ${name}
    , I am from Hyderabad. my age is
    ${age}`)

//Activity 2 Destructuring
//Task 3 Use array destructuring to extract the first and second element from an array of numbers and log the result to the console.

const myArr = ['Moinuddin','Hyderabad',27]
console.log(`First name is ${myArr[0]} and ${myArr[1]}`)

//Task 3 Use object destructuring to extract the title and author from book object and log the result to the console.

const book = {
    title: 'The soul',
    Author: 'lez Zim',
    year: 1992
}
const {
    title, Author
} =  book
console.log(`Book title is ${book.title} and Author is ${book.Author}`)

//Activity 3 Spread & rest opreator
//Task 5 Use spread operator to create a new array that include all elements of an existing array plus additional elements and log the new array to th econsole.

const existingArr = [1,2,3]
const additionalArr = [4,3,2]

const newArray = [...existingArr, ...additionalArr, 8,9]
console.log(newArray)

//Task 6 Use the rest operator in a function to accept an arbitrary number of argument sum them return the result.

const myFun = (...num) => {
    return num.reduce((acc, currVal) => acc + currVal, 0)
}
console.log(myFun(1,2,3,4,5,6))

//Activity 4 Default parameter
//Task 7 write a function that take two parameter and return their product with the second parameter having a defualt value of 1. log the result of calling this function with and without the second parameter.

const myFun1 = function (num1, num2 = 1) {
    return `num is ${num1} and num2 is ${num2}`
}
console.log(myFun1(2))

//Activity 5 Enhance object literal
//Task 8 Use enhance object literal to create an object with method and properties and log the object to the console.

const myObj = {
    name: 'Moinuddin',
    age: 27,
    place: 'Hyderabad',

    //method 
greeting() {
    console.log(`Hello, My name is ${this.name} and I am ${this.age} year old`)
},
get fullname() {
    return `${this.name} (${this.age})`
}
}

console.log(myObj)

myObj.greeting()
console.log(myObj.fullname)

//Task 9 Create an object with computed property name based on variable and log the object to the console.


const propname = 'fullname'
const fName = 'Md Khaja'
const lName = 'Moinuddin'

const Nameobj = {
    fName: fName,
    lName: lName,
    [propname]: `${fName} ${lName}`
}
console.log(Nameobj)






