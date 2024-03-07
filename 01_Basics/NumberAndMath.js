

const myNum2 = new Number(100)
console.log(myNum2);

console.log(myNum2.toString().length);
console.log(myNum2.toFixed(1));


const num1 = "1234"
let convNum = Number(num1)
console.log(typeof convNum)

//toLocalString()

const hundreds = 10000000
console.log(hundreds.toLocaleString()); // us number formating

const hundredsInd = 10000000
console.log(hundredsInd.toLocaleString('en-IN')) // Indian number formating


// toPrecision() 

const presisionVal = 123.897
console.log(presisionVal.toPrecision(4))


//**********Maths */


console.log(Math);
console.log(Math.round(4.4));
console.log(Math.ceil(4.6));
console.log(Math.floor(4.2));
console.log(Math.min(10,30,70,5));
console.log(Math.max(10,1000,30,700,638));
console.log(Math.random(4));




const min = 1111
const max = 9999
 

console.log(Math.floor(Math.random() * max - min + 1) + min);