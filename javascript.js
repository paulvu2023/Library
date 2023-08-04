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
  const bottom = document.querySelector('div.bottom');
  bottom.textContent = '';
  const card = document.createElement('div');
  const name = document.createElement('div');
  const author = document.createElement('div');
  const read = document.createElement('button');

  card.classList.add('card');
  name.textContent = `"${bookName}"`;
  author.textContent = `${bookAuthor}`;
  read.textContent = `${bookRead}`;
  bottom.appendChild(card);
  card.appendChild(name);
  card.appendChild(author);
  card.appendChild(read);
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
  pages = document.querySelector('#read').value = 'Read';
  return false;
}

document.querySelector('button').onclick = () => {

}