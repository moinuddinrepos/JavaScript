const myArray = ['a','b','c']

console.log(myArray)

Array = ['a','b','c']
console.log(Array.length);

//Array methods

myArray.push('d')
myArray.push('e')
myArray.push('f')
myArray.unshift('z')
console.log(myArray);
myArray.pop() //no need to pass argument last element will be removed

console.log(myArray);

const newArray = myArray.join()
console.log(typeof myArray);
console.log(typeof newArray);


const OraginalArr = ['a','b','c','d','e']
console.log("A",  OraginalArr)

const sliceArr = ['a','b','c','d','e']
console.log("B", sliceArr.slice(1,4));

const spliceArr = ['a','b','c','d','e']
console.log("C", spliceArr.splice(1,4));
console.log(spliceArr);



// ********************** PART 2 ********************** /

const indiaCity = ['Hyderabad','Bangaluru','Mumbai','Chennai','Delhi']
console.log(indiaCity);


const USACity = ['LA','NY','WDC','SF'] 
console.log(USACity);

indiaCity.push(USACity)
console.log(indiaCity);

const grpCity = (indiaCity + USACity)
console.log(grpCity);

const grpCity = indiaCity.concat(USACity)
console.log(grpCity);


const spritArr = [...indiaCity, ...USACity]
console.log(spritArr);


const flatArr = [indiaCity, USACity]
console.log(flatArr.flat(Infinity));

const subArr = ['a','b','c',['d','a'],'e','f',['g',['h','i']]]
console.log(subArr.flat(1));

const convArr = ('Moinuddin')
console.log(Array.isArray(convArr));
console.log(Array.of(convArr));




