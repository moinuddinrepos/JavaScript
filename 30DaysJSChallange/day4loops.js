//Activity Loop
//Task-1 Write a program to print 1 - 10 using loop.
for (let i = 1; i <= 10; i++) {
    console.log(i)
}

//Task-2 Write a program to print multiplicatiion table of 5using for loop.
for (let i = 1; i <= 10; i++) {
    console.log(`5 X ${i} = `,5*i) 
    
}


//Activity 2 While loop
//Task-3 Write a program to calculate the sum of 1 - 10 using while loop.

let sum = 0
let i = 1
while (i <= 10) {
    sum += i
    i++;
}
console.log(sum)

//Tast 4 Write a program to print num from 10 to 1 using a while loop.
 let num = 10
 while (num >= 1) {
    console.log(num)
    num--;
 }

 //Activity 3 Do... while loop
 //Task 5 Write a program to print number from 1 to 5 using a do while.

 let newNum = 1
do {
    console.log(newNum)
    newNum++;
} while (newNum <= 5);

//Tast 6 Write a program to calculate the factorial of number using do while loop.

let givenNUm = 5;
let factorial = 1;
let x = 1;

do {
  factorial *= x;
  x++;
} while (x <= givenNUm);

console.log(`The factorial of ${givenNUm} is ${factorial}`);

//Activity 4
//Task 7 Write a program to print a pattern using for loop.

for (let i = 1; i <= 5; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
      pattern += "*";
    }
    console.log(pattern);
  }
  

  //Activity 5 Lopp control statement
  //Task 8 Write a program to print number from 1 to 10 but skip the number 5 using the continue statement.

  for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i)
  }

  //Task 8 Write a program to print number from 1 to 10 but stop the loop when number is 7 using the break statement.

  for (let i = 1; i <= 10; i++) {
    console.log(i)
    if (i === 7) {
        break;
    }

  }
  




  