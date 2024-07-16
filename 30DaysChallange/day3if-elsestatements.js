//Activity 1 if-ele condition
//Task-1 Write a program to check if a number is positive, negative or zero and log the result to the console.
//Task-2 Write a program to check if a person eligible to vote (age >=18) and log the result to the console.
let number = 0
if (number > 0) {
    console.log('Number is positive', number)
} else if (number < 0) {
    console.log(`Number is zero ${number}`)
} else {
    console.log('Number is zero',number)
}

//Activity 2 Nested if-else
//Task-3 Write a program to fine the largest of three number using nested if-else staement.
let a = 50
let b = 20
let c = 100

if (a > b) {
    if (a > c) {
        console.log(`Largest number is ${a}`)
    } else {
        console.log(`Largest number is ${c}`)
    }
} else {
    if (b > c) {
        console.log(`Largest number is ${b}`)
    } else {
        console.log(`Largest number is ${c}`)
    }
}

//Activity 3 Switch case
//Task-4 Write a program that uses a switch case to determine the day of the week based on a number(1-7) and log the day name to the soncole.
//Task-4 Write a program that uses a switch case to assign a grade ('A','B','C','D','E') based on score and log the grade to the console.

score = 69
switch (true) {
    case score >= 90:
        console.log('A Grade')
        break;
    case score >= 70:
        console.log('B Grade')
        break;
    case score >= 50:
        console.log('C Grade')
        break;
    case score >= 40:
        console.log('D Grade')
        break;
    default:
        console.log('E Grade')
}

let dayNum = 10
switch (dayNum) {
    case 1:
      console.log("Sunday");
      break;
    case 2:
      console.log("Monday");
      break;
    case 3:
      console.log("Tuesday");
      break;
    case 4:
      console.log("Wednesday");
      break;
    case 5:
      console.log("Thursday");
      break;
    case 6:
      console.log("Friday");
      break;
    case 7:
      console.log("Saturday");
      break;
    default:
      console.log("Invalid day number");
  }
  
let age = 1
if (age >= 18) {
    console.log('Woww your vote for eligible. Congratulations...! ')
} else {
    console.log('You are not eligible for vote')
}


//Activity 4 Ternery operator
//Task-6 Write a program to uses the ternery operator to check if the a number is even or odd and log the result to the console.

let num = 9
const result = num % 2 ? 'Odd' : 'Even'
console.log(result)


//Activity 4 Combining condition
//Task-7 Write a program to check if a year is leap year using multiple condition (Divisible by 4 but not 100 unless also divisibale by 400) and log the result to the console.

const year = 2027

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(`${year} is a leap year`);
} else {
  console.log(`${year} is not a leap year`);
}
