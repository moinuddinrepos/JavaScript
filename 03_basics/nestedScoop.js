//nested scoop

function one() {
    const myName = 'Moinuddin'

    function two() {
        const learning = 'JavaScript'
        // console.log(learning);
        // console.log(myName);
    }
    two()    
}
one()


//Another example

if (true) {
    const myName = 'Moinuddin'
    if (myName == 'Moinuddin') {
        // console.log('Yes value is correct...!');
    } else {
        // console.log('Incorrect value');
    }
}


if (true) {
    const myName =' moinuddin'
    if (myName === ' moinuddin') {
        const fname = ' Khaja'
        // console.log(myName + fname);
    }
}

// simple function

console.log(myFun(5)) // we can declare call function before function. but we can't do like this in variable hold function like example-2

function myFun (num) {
    return num + 1
}


//example-2

const myFun2 = function(num2) {
    return num2 + 2
}
console.log(myFun2(5));



