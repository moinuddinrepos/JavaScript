//Activity-1 Arithmetic operations
//Task-1 Write a program to add two numbers and log the result to the console.
//Task-2 Write a program to subtract two numbers and log the result to the console.
//Task-3 Write a program to multiply two numbers and log the result to the console.
//Task-4 Write a program to divide two numbers and log the result to the console.
//Task-5 Write a program to find the remainder when one number is divided by another and log the result to the console.

let a =5
let b = 10
const c = a + b
console.log(c)

let num1 = 20
let num2 = 10
console.log(num1 - num2)

let x = 5
let y = 5
console.log(x*y)

let upper = 5
let base = 5
console.log(upper/base)

const divided = 17
const divisor = 2
console.log(divided%divisor)


//Activity-2 Assingment operator
//Task-6 Use the += operator to add a number to a variable and log the result to the console.
//Task-7 Use the -= operator to add a number to a variable and log the result to the console.

let op1 = 5
console.log(op1 += 5)

let op2 = 15
console.log(op2 -= 7)

//Activity-3 Comparesion operator
//Task-8 Write a program to compare two numbers using > and < and log the result to the console
//Task-9 Write a program to compare two numbers using >= and =< and log the result to the console
//Task-10 Write a program to compare two numbers using == and == and log the result to the console.

let compare_1 = 10
let compare_2 = 20
const result = compare_1 < compare_2
console.log(result)

//Activity-4 Logical operators
// TAsk-11 Write a program the uses the && operator to combine two consditions and log the result to the console.
// TAsk-12 Write a program the uses the || operator to combine two consditions and log the result to the console.
// TAsk-13 Write a program the uses the ! operator to combine two consditions and log the result to the console.

let LO1 = 5
let LO2 = 10
const res = LO1 < LO2 && LO2 > LO1
const rest = !(res)
console.log(res)
console.log(rest)


//Activity-5 Ternary Operator
//TAsk-14 Write a program that uses the ternary operator to check if number is positive or negative and log the result to the console.

let somenum = -0
const r = somenum ? "Positive" : "Negative"
console.log(r)

