// for loop

// declartion, condition, increment or decrement

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is best");
    }
    // console.log(element);
    
}


// nested loop

for (let i = 0; i <= 10; i++) {
        // console.log(`Outer loop ${i}`);
    for (let j = 0; j <= 10; j++) {
        // console.log(`Inner loop ${j} and outer loop ${i}`);
        // console.log(`${i} * ${j} = ${i*j} `);
        
    }
    
}


const myArr = ['Apple','Ball','Cat']

for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    // console.log(element);
    
}

// Break and COntinue

for (let i = 1; i <= 10; i++) {
    if (i == 5) {
        console.log("Number 5 is detected");
        // break;
        continue;
    }
    
    console.log(`Value of i is`, i);
    
}