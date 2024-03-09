// if

const a = 5
if (a !== 5) {
    console.log('Yes');
}

//nested if else

const temp = 29
if (temp <= 28) {
    console.log('Green alert');
} else if (temp <= 30) {
    console.log('Yello alert');
} else if (temp <= 50) {
    console.log('Red alert');
}
else {
    console.log('RIP');
}

// AND opeators

// const userLogged = true
// const debitCard = false

// if (userLogged && debitCard) {
//     console.log('Start Shoping');
// } else{
//     console.log('Create account login and purchased debit card');
// }


// OR operator

const userLogged = true
const userHaveGoogle = true
const userHaveFairfox = false
if (userLogged && userHaveGoogle || userHaveFairfox) {
    console.log('Create user account');
}else {
    console.log('Thank you');
}