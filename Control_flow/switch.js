// basic syntax

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }


// const month = 3 // if we stored string in variabe then we can pass key as a string
// switch (month) {
//     case 1:
//             console.log('Jan');
//         break;
//     case 2:
//             console.log('Feb');
//         break;
//     case 3:
//             console.log('Mar');
//         break;
//     case 4:
//             console.log('Apr');
//         break;

//     default:
//             console.log('Not Matched any case');
//         break;
// }

// checking empty object

const emptyObj = {
    name: 'a'
}
if (Object.keys(emptyObj).length === 0) {
    console.log('The object is empty');
} else {
    console.log('Something in this object');
}