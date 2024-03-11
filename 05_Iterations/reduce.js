// reduce


// const givenVal = [1,2,3,4]

// totalVal = givenVal.reduce((acc, currVal) => {
//     console.log(`acc: ${acc} and currVal: ${currVal}`);
//     return acc + currVal
// }, 0)
// console.log(totalVal);


const bookBuy = [
    {
        bookName: 'JavaScript',
        price: 999
    },
    {
        bookName: 'Java',
        price: 499
    },
    {
        bookName: 'Python',
        price: 1499
    },
    {
        bookName: 'ML',
        price: 1999
    },
]

totalBookAmt = bookBuy.reduce((acc, items) => acc + items.price, 0)

console.log(`Amount to be paid: ${totalBookAmt}/- only`);