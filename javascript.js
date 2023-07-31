let myLibrary = [];
let bookname = undefined;
let author = undefined;
let pages = undefined;

function Book(name, author, pages) {.
  this.name = name;
  this.author = author;
  this.pages = pages;
}

function addBookToLibrary(name, author, pages) {
  let book = new Book(name, author, pages);
  myLibrary.push(book);
}

document.querySelector('form').onsubmit = () => {
  bookname = document.querySelector('#book').value;
  author = document.querySelector('#author').value;
  pages = document.querySelector('#pages').value;
}
