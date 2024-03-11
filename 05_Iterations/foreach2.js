// const nums = [1,2,3,4,5,6,7,8]
// newNums = nums.filter(  (items) => items < 5 )
// console.log(newNums);

// const nums = [1,2,3,4,5,6,7,8]
// newNums = nums.filter(  (n) => {
//     return n > 5
// }  )

// console.log(newNums);

// const myNum = [1,2,3,4,5,6,7,8,9]

// myNewNum = myNum.map((items) => {
//     return items + 5
// })

// console.log(myNewNum);

// multiple methods 

const myNum = [1,2,3,4,5,6,7,8]

myNewNum = myNum
            .map((items) => items * 10)
            .map((items) => items + 1)
            .filter((items) => items >= 61)
console.log(myNewNum);

