const fName = 'Md Khaja'
const lName = 'Moinuddin'
let age = 26
console.log(`Hello, My name is ${fName.toUpperCase()} ${lName.toLocaleUpperCase()} and my age is ${age}`) //string interpolation method

const names = 'md khaja moinuddin'
console.log(names.length)
console.log(names.toUpperCase())
console.log(names.__proto__);
console.log(names[2]);
console.log(names.charAt(2));
console.log(names.indexOf('u'));
console.log(names.substring(2,8));
console.log(names.slice(-18,10));

const myNames = '     Md      Khaja      Moinuddin    '
console.log(myNames.trim());


const url = 'https://www.mywebsite.com/moin30%uddin/about.html'
console.log(url.replace('30%','-'));

console.log(url.includes('uddin'));
console.log(url.split(' * '));