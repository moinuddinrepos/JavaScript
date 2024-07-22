//Activity 1 Array creation and access
//Task 1 Create an array of numbers from 1 to 5 and log the array to the console.

const myArray = [1,2,3,4,5]
console.log(myArray)

//Task 2 Access first and last element of the array and log them to the console.

console.log(`First element of Array is ${myArray[0]}, and last element of Array is ${myArray[4]}`)

//Activity 2 Array methods
//Task 3 Use the push method and add a new number to the end of the array and log the updated array.

// Push - Adding the element to the last in Array
console.log(`Oraginal Array ${myArray}`)
myArray.push(6)
console.log(myArray)

//Pop - Remove last element from the array

myArray.pop(5)
console.log(myArray)

//shift method using for removing fisrt element from the array.

myArray.shift(0)
console.log(myArray)

//unshift adding new element to the array at the begining of the array

myArray.unshift(1)
console.log(myArray)


//Activity 3 Array methods (Intermediate)

//Task 7 use map method to create a new array where each number is double and log the new array.

const numbers = [1,2,3,4,5,6,7,8,9,0,16,17,98,97]
const double = numbers.map(numbers => numbers * 2)
console.log(`Oraginal Array`, numbers)
console.log(`Double Array`, double)

// Task 8 filter method to create a new array with only even numbers and log the new array.

const evenNum = numbers.filter(numbers => numbers % 2 === 0)
console.log('Even numbers are: ', evenNum)

//Task 9 reduce method to calculate the sum of all number in the array and log the result.

const sum = numbers.reduce((accumulator, currentNumber) => accumulator + currentNumber, 0);

console.log(`Addition of all elements in the array is ${sum}`)


