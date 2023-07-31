let myLibrary = [];

function Book(name, author, pages) {
  // the constructor...
  this.name = name;
  this.author = author;
  this.pages = pages;
}

function addBookToLibrary() {
  // do stuff here
}

let bookname = undefined;
let author = undefined;
let pages = undefined;

document.querySelector('form').onsubmit = () => {
  bookname = document.querySelector('#book').value;
  author = document.querySelector('#author').value;
  pages = document.querySelector('#pages').value;
}
