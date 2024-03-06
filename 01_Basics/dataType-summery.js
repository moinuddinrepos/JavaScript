// Primitive Data types 
const studentId = Symbol(34567) //num
const stuAnotherId = 34567 //num
let studentName = 'Moinuddin' //String
let studentPlace = undefined // undefined
let studentIsGood = true //boolean
const studentIsFrom = null //null
let int = 1234567890n //bigInt

const anOtherId = Symbol(34567)
console.log(studentId === stuAnotherId)

console.table([studentId, studentName, studentPlace, studentIsGood, studentIsFrom]);


// Non-primitive data types or referene data type.

// Array, Objects, Functions

// Array
const fruits = ['Apple', 'Banana', 'Orange'];

// Objects 
objName = {
    name: 'Moinuddin',
    age: 26,
    place: 'Hyderabad',
}

// functions

function funName () {

}

//function in variable

const funName = function() {
    console.log('Hello world')
}

console.log(typeof (funName))



