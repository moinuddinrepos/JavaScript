//Activity Object creation and access
//Task 1 Creating an object representing a book with properties like title, auther, and year and log the object to the console.

// const book = {
//     title: 'Love is blind',
//     author: 'Suresh Kumar',
//     year: 2020
// }

// console.log(book)
// console.log(book.title)

//Task 2 Access and log the title and author properties of the book object.

// console.log(`Book title is ${book.title}, and book namae is ${book.author} and year is ${book.year}`)


//Activity Objects Methods
//Task 3 Add a method to the book object that returns a string with the books title and author and log the result of calling this method.

const book2 = {
    title: 'Book Title',
    Author: 'Unknown',

    getBookInfo: function() {
        return `book is ${book2.title} and author is ${book2.Author}`
    }
}


console.log(book2.getBookInfo())

//Task 4 Add a method to the book object that takes parameter (year) and updates the books year propertie then log the result.

const book = {
    title: 'Love is blind',
    author: 'Suresh Kumar',
    year: 2020,

    updateYear: function (newYear) {
        this.year = newYear
    }
}

console.log('Initial year', book.year)
book.updateYear(2025)
console.log('Update year', book.year)

//

