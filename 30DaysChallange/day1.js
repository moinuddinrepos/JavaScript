//Activity 1 variable declaration
//Task-1 Declare a variable using var, assing a it a number, and log the value in the console.
//Task-2 Declare a variable using let, assing a it a number, and log the value in the console.
var num = 10
console.log(num)

let num2 = 20
console.log(num2)

//Activity 2 Constant declaration
//Task-3 Declare a variable using const, assign it a boolean value, and log the value in the console.

const bool = true
console.log(bool)

//Activity 3 Data types
// Task-4 Create variable of different data types (num, string, boolean, object, array) and log each variable's type using the typeof operator.


let num3 = 5
let str = 'Moinuddin'
let boolValue = true
let myObj = {
    id: 123,
    name: 'Khan',
    age: 27,
    place: 'Hyd'
}

let myArray = ['Apple', 'Ball', 'Cat', 'Dog']

console.log(typeof(num3))
console.log(typeof(str))
console.log(typeof(boolValue))
console.log(typeof(myObj))
console.log(typeof(myArray))

//Activity 4 Reassigning variables
//Task-5 Declare a variable using let, assign it an initial value, reassign a new value, and log both value to the console.

let val = 'full'
val = 'half'

console.log(val)

//Activity 5 Understanding const
//Task-6 Try reassigning a variable declared with const and observe the error.

const assign = 'Assigned val'
assign = 'New val'
console.log(assign)

