// nullish coalescing operator

let val1;
val1 = 10 ?? 20 // taken 1st value
val1 = null ?? 30 // if null on first potition goes to seconf which is 30
val1 = undefined ?? 40 // same as null
console.log(val1);

// same example with string.

let name = "Moinuddin" ?? "Khaja"
name = null ?? "Yaser"
name = undefined ?? "Mohd"
console.log(name);


// Terniray operator

const cricketKitPrice = 15000
cricketKitPrice <= 14999 ? console.log("More then 15000") : console.log("less then 15000");

