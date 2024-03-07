const city = {}
city.nickName = 'Biryani'
city.name = 'Hyderabad',
city.population = "5CR"
// console.log(city.nickName);

//nested objects

const userData = {
   email: 'abc@userData.con',
   fullname: {
        userFullname: 'md khaja moinuddin',
        parentDetails: {
            parentName: 'Khaja'
        }
   }
}

// console.log(userData.fullname);

const obj1 = {
    1: 'a',
    2: 'b',
    3: 'c'
}
const obj2 = {
    4: 'd',
    5: 'e',
    6: 'f'
}

// const obj3 = {obj1 , obj2}
// const obj3 = Object.assign (obj1, obj2)

// const obj3 = {...obj1, ...obj2} //spirit same as Array

// we are getting data from database like below called Ayyay based object

const userDataDB = [
    {
        userId: 1,
        userName: 'abc',
        userEmail: 'm@gmail.com'
    },
    {
        userId: 2,
        userName: 'xuv',
        userEmail: 'z@gmail.com'
    },
    {
        userId: 3,
        userName: 'xyz',
        userEmail: 'd@gmail.com'
    },
    {
        userId: 4,
        userName: 'xyz',
        userEmail: 'd@gmail.com'
    },
]

console.log(userDataDB[0]);
// console.log(Object.keys(userDataDB)); //Importend
// console.log(Object.values(userDataDB[0]));
// console.log(Object.entries(userDataDB[0]));
console.log(userDataDB.hasOwnProperty('userId'))
// console.log(userDataDB.hasOwnproperty('userId'));
