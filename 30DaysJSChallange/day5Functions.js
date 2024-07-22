//Activity 1 functions declrations
//Task 1 Write a function to check if a number is even or odd and log the result to the console.

function checkNum(num) {
    if (num % 2) {
        console.log('F_Odd')
    }
    else{
        console.log('F_Even')
    }
}
checkNum(200)

// function myNum() {
//     let num = 57
//     const result = num % 2 ? 'Odd' : 'Even'
//     console.log(result)
// }
// myNum()

//Task 2  Write a function to calculate the square of a number and return the result.

function square(num) {
    s = num * num
    console.log(s)
}
square(36)

//Activity 2 Function expression
//Task 3 Write a function expression to find the max of two num and log the result to the log.

function maxNum(num1, num2) {
    if (num1 < num2) {
        console.log(`Number 2 is big ${num2}`)
    } else {
        console.log(`Number 1 is big ${num1}`)
    } 
}
maxNum(150,100)

//Task 4 Write a function expression to concatenate two string and return the result.

function concatStr(str1, str2) {
    const result = str1+str2
    console.log(result)
}
concatStr('Moin','Uddin')

//Activity 3 Arrow function
//Task 5 Write an arrow function to calculate the sum of two number and return the result.

twoNum = (num1, num2) => {
    // let num1 = 10
    // let num2 = 20
    console.log(`Sum of two number is`, num1 + num2)
}
twoNum(30,40)

//Task 6 Write an arrow function to check if a string contains a specific character and return a boolean value.

const checkStr = (str) => {
    // let str = 'Hello'
    let result = str.includes('h')
    console.log(result)
}
checkStr('hello')

//Activity 4 Functions parameters and defualt values.
//Task 7 Write a function that takes two parameters and return their product provide a defualt value for the second parameter.


myFun = (a, b = 3) => {
    return a * b
}
console.log(myFun(10))

//Task 8 Write a function that takes a person's name and age and returns greeting message provide a defualt value for the age,


myFun = (name, age = 10) => {
    return `name is ${name} and I am ${age}`
}
console.log(myFun('moinuddin'))


//Activity 5 Higher order function
//Task 9 Write a higher order function that takes a function and a number and call the function that many times.

myFun = (func, num) => {
    for (let i = 0; i < num; i++) {
        func() 
    }
}

HOF = () => {                   // HOF Higher order function
    console.log('Hello')
}
myFun(HOF, 3)



