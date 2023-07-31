let myLibrary = [];

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
}

document.querySelector('form').onsubmit = () => {
  const bookname = document.querySelector('#book').value;
  const author = document.querySelector('#author').value;
  const pages = document.querySelector('#pages').value;
}

console.log(bookname, author, pages);