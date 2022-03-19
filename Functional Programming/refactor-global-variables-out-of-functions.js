// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(bookArray, bookName) {
  let bookArrayCopy = bookArray.slice();
  bookArrayCopy.push(bookName);
  return bookArrayCopy;
  
  // Change code above this line
}

// Change code below this line
function remove(bookArray, bookName) {
  let bookArrayCopy = bookArray.slice();
  const book_index = bookArrayCopy.indexOf(bookName);
  if (book_index >= 0) {

    bookArrayCopy.splice(book_index, 1);
    return bookArrayCopy;

    // Change code above this line
    }
}