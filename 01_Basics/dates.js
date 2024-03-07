const myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toTimeString());


const myDoB = new Date(1997,5,26) // Months is starting from 0. ex: 0 is jan
// console.log(myDoB.toString());

const ownDate = new Date("06-26-1997") //MM-DD-YYYY
console.log(ownDate.toDateString());
console.log(ownDate.getTime());

const getTime = Date.now()
console.log(getTime);


let newDate = new Date()
console.log(newDate.getDay());
console.log(newDate.getMinutes());

