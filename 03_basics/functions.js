//Function

function myFun() {
    console.log('Moinuddin')
    // console.log('Home');
}

myFun()

const myFun1 = function(){
    // console.log('Hey');
}

myFun1()

//addTwoNum

// const addNum = function (num1, num2) {
//     let result = num1 + num2
//     console.log(result);
// }
// addNum(2,2)

// function addNum (num1, num2) { //Parameter
//     let result = num1 + num2
//     console.log('Result: ',result);
// }
// addNum(2,2) // Arguments

function addNum (num1, num2) { //Parameter
    let result = num1 + num2
    // console.log('Hi');
    return result
}
let res = addNum(2,2) // Arguments
// console.log('Result:', res);

// function userName(userId, userName) {
//     if(userName === undefined) {
//         console.log('Please enter the username.');
//         return
//     }
//     return `Hi, This is ${userName} and my Id is ${userId}`
// }
// console.log(userName());

// function userName(userId, userName) {
//     if(!userName) {
//         console.log('Please enter the username.');
//         return
//     }
//     return `Hi, This is ${userName} and my Id is ${userId}`
// }
// console.log(userName());


// function userName(userId, userName) {
//     if(!userName) {
//         console.log('Please enter the username.');
//         return
//     }
//     return `Hi, This is ${userName} and my Id is ${userId}`
// }
// console.log(userName(746536,'Moinuddin006'));

function userName(userId, userName = 'moin006') { //if we pass the value in parapeter itself no need to pass the value in argument. and if condition is not in used. if we pass the value in argumet also then the value will be override
    if(!userName) {
        console.log('Please enter the username.');
        return
    }
    return `Hi, This is ${userName} and my Id is ${userId}`
}
console.log(userName(746536));