// Task 1: Create a Constructor Function for the Book Object

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}


// Task 2: Implement a Method Within the Book Object to Display Book Information

Book.prototype.displayInfo = function() {
    console.log(`Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}`);
}


// Task 3: Create an Array to Store Book Objects and Implement Functions to Add New Books and Search for Books by Title or Author

const library = [];

function addBook(title, author, pages) {
    const book = new Book(title, author, pages);
    library.push(book);
    console.log(`Book added: ${title} by ${author}`);
}

function searchByTitle(title) {
    return library.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
}

function searchByAuthor(author) {
    return library.filter(book => book.author.toLowerCase().includes(author.toLowerCase()));
}


// Task 4: Create Functions that Utilize the Filter and Map Methods

function filterBooksByPages() {
    return library.filter(book => book.pages > 100);
}

function formatBookDetails() {
    return library.map(book => {
        return {
            title: `Title: ${book.title}`,
            author: `Author: ${book.author}`,
            pages: book.pages
        };
    });
}

