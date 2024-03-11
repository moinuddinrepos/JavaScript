// for of

const myArr = [1,2,3,4,5]

for (const i of myArr) {
    // console.log(i);
}

// string example

const strArr = ['Apple','Ball','Cat','Dog']

for (const str of strArr) {
    // console.log(strArr[0]);
}

const myName = 'Moinuddin'

for (const name of myName) {
        // console.log(name);
}

// Map

const map = new Map()
map.set('+91','India')
map.set('+92', 'Pakistan')
map.set('+1','USA') // cant repeate same entries ex: we cant repeate +91 india 
// console.log(map);

for (const key of map) {
    // console.log(key); // print whole map entries if u want only values follow below example
}

for (const [key, value] of map) {
    // console.log(key);
    // console.log(value);
    // console.log(key,':-',value);   
}

// example in objects

// const  myObj = {
//     name: 'Moinuddin',
//     age: 26
// }
//  for (const [key, value] of myObj) {
//     console.log(key);
//  }

// the above examplefor of loop not wotk becouse created obj is not iterable. (Other methods we have)


// for in loop with objects

const myObj = {
   js: 'JavaScript',
   C: 'C',
   py: 'Python'
}

for (const key in myObj) {
    // console.log(key,"for", myObj[key]);
}


const myArr1 = [1,2,3,4,5]

for (const key in myArr1) {
    console.log(myArr1[key]);
}


