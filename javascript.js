let myLibrary = [];
let bookname = undefined;
let author = undefined;
let pages = undefined;

function Book(name, author, read) {
  this.name = name;
  this.author = author;
  this.read = read;
}

Book.prototype.displayBook = function (bookName, bookAuthor, bookRead) {
  const bottom = document.querySelector('div.bottom');
  const card = document.createElement('div');
  const name = document.createElement('div');
  const author = document.createElement('div');
  const read = document.createElement('div');
  card.classList.add('card');
  bottom.appendChild(card);
  name.textContent = `"${bookName}"`;
  author.textContent = `${bookAuthor}`;
  read.textContent = `${bookRead}`;
  card.appendChild(name);
  card.appendChild(author);
  card.appendChild(read);
}

function addBookToLibrary(name, author, read) {
  let book = new Book(name, author, read);
  book.displayBook(name, author, read);
  myLibrary.push(book);
}

document.querySelector('form').onsubmit = () => {
  bookname = document.querySelector('#book').value;
  author = document.querySelector('#author').value;
  read = document.querySelector('#read').value;
  addBookToLibrary(bookname, author, read);
  bookname = document.querySelector('#book').value = '';
  author = document.querySelector('#author').value = '';
  pages = document.querySelector('#read').value = 'Read';

  console.log(myLibrary);

  return false;
}

