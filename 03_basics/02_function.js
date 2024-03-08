const cardValadding = function (...num1) { //rest operator ...num
    return num1
}

// console.log(cardValadding(200));

const cardValadding2 = function (val1, val2, ...num1) { //rest operator ...num
    return num1
}

// console.log(cardValadding2(200,400,500,600,700,800));

// Passing objects in function
const stuObjData = {
    name: 'moinuddin',
    age: 26,
    place: 'Hyderabad'
};

function myObjfun(anyObj) {
    // console.log(`Hi ${anyObj.name} age is ${anyObj.age} and place is ${anyObj.place}.`);
}

// myObjfun(stuObjData); // we are passingg onjname in function argument

// or we can pass the obj in arguments
myObjfun({
    name: 'nizam',
    age: 20,
    place: 'hyd'
}); 


// passing Array data in function

const myArr = ['Moin','Yaser','Khan']

const myArrfun = function(anyArr){
    console.log(`Hi, I have three names ${anyArr}`);
}

myArrfun(myArr)
