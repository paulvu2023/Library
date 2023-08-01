let myLibrary = [];
let bookname = undefined;
let author = undefined;
let pages = undefined;

function Book(name, author, read) {
  this.name = name;
  this.author = author;
  this.read = read;
}

Book.prototype.displayBook = function () {
  const body = document.querySelector('body');
  const card = document.createElement('div');
  card.classList.add('card');
  body.appendChild(card);
}

function addBookToLibrary(name, author, read) {
  let book = new Book(name, author, read);
  book.displayBook();
  myLibrary.push(book);
}

document.querySelector('form').onsubmit = () => {
  bookname = document.querySelector('#book').value;
  author = document.querySelector('#author').value;
  read = document.querySelector('#read').value;
  addBookToLibrary(bookname, author, read);
  bookname = document.querySelector('#book').value = '';
  author = document.querySelector('#author').value = '';
  pages = document.querySelector('#read').value = '';

  console.log(myLibrary);

  return false;
}

