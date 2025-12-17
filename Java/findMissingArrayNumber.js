const arr = [1,2,5,4,3,7]
const n = 7
// sumOfNum = n*(n-1)/2
sumOfNum = n*(n+1)/2
console.log("sum of number is", sumOfNum)

// sumOfArr = arr[0] + arr[1] + arr[2] + arr[3] + arr[4] + arr[5]

sumOfArr = 0
for (let i = 0; i < arr.length; i++) {
    sumOfArr +=arr[i]
    
}
console.log("Sum of array is:",sumOfArr);

const MissingNumberIs = sumOfNum - sumOfArr
console.log("Missing number is:", MissingNumberIs);


