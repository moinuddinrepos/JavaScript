
//when we create objects throw constructor obj was singleton//
// Object.create --> is diff method to create object this is singleton
// ============================================================================

//Objects literals 

const favColor = Symbol('Black')
const myObj = {
    name: 'Moinuddin',
    "full name": 'Md Khaja Moinuddin',
    age: 26,
    [favColor]: 'Dark Black',
    Place: 'Hyderabad',
    PhoneNo: null,
    isLogedIn: false,
    lastSeen: ['Monday','Sunday']
}

// console.log(myObj.lastSeen);
// // console.log(myObj["full name"]); // we can't access with "." because is in string
// console.log(myObj[favColor]);
// console.log(typeof myObj[favColor]);

//override value

myObj.Place = 'Bangaluru'
// console.log(myObj);

//lock value we can't override

// Object.freeze(myObj)
myObj.name = 'yaser'
// console.log(myObj);

myObj.funObj = function() {
    console.log("Hello myObj Object");
}
myObj.funObj = function() {
    console.log(`Hello ${this["full name"]}`);
}

console.log(myObj.funObj());


console.log(myObj["full name"]);
