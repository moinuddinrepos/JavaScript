// forEach

const codingLang = ['c','c++','java','python','js']

codingLang.forEach( function (item) {
    // console.log(item);
} )

// same as arrow function


codingLang.forEach( (item) => {
    // console.log(item);
}  )

codingLang.forEach( (item, index, arr) => {
    // console.log(item, index, arr);
}  )

const programmingLang = [
    {
        lanfuageName: 'JavaScript',
        fileExtention: '.js'
    },
    {
        lanfuageName: 'Python',
        fileExtention: '.py'
    },
    {
        lanfuageName: 'Java',
        fileExtention: '.java'
    }
]

programmingLang.forEach(  (data) => {
    console.log(programmingLang[0]);
}  )