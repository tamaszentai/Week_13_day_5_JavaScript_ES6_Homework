// const Library = function (books = []) {
//   this.books = books;
// };

class Library {
  constructor(books = []){
    this.books = books;
  }


// Library.prototype.bookCount = function () {
//   return this.books.length;
// };

bookCount() {
  return this.books.length;
};

// Library.prototype.addBook = function (newBook) {
//   this.books.push(newBook);
// };

addBook(newBook) {
  this.books.push(newBook);
}

// Library.prototype.addBooks = function (newBooks) {
//   newBooks.forEach(book => this.books.push(book));
// };

addBooks(newBooks) {
  newBooks.forEach(book => this.books.push(book));
}

// Library.prototype.printInventory = function () {
//   this.books.forEach((book) => {
//     console.log(`${book.title} by ${book.author}`);
//     });
//   };

printInventory() {
  this.books.forEach((book) => {
    console.log(`${book.title} by $ {book.author}`);
  })
}
}
// module.exports = Library;

export default Library;
