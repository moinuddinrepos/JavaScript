//Scoop

//inner scope

var c = 200

if (true) {
    let a = 5
    const b = 10
    var c = 20
    // console.log(c);
}

// console.log(a);
// console.log(b);
// console.log(c);


//Global scoop

var z = 10
const x = 20
let y = 30
console.log("Global Scoop:", z);

if (true) {
    console.log(z);
}