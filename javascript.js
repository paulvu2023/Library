let myLibrary = [];
let bookname = undefined;
let author = undefined;
let read = undefined;

function Book(name, author, read) {
  this.name = name;
  this.author = author;
  this.read = read;
}

Book.prototype.displayBook = function () {
  const bottom = document.querySelector('div.bottom');
  bottom.textContent = '';
  console.log(myLibrary);
  myLibrary.forEach((book) => {
    const card = document.createElement('div');
    const name = document.createElement('div');
    const author = document.createElement('div');
    const read = document.createElement('button');

    card.classList.add('card');
    name.textContent = `"${book.name}"`;
    author.textContent = `${book.author}`;
    read.textContent = `${book.read}`;
    read.value = `"${book.name}"`;
    read.addEventListener('click', function() {
      changeReadStatus(this.value); // Send name of book as argument
    });
    bottom.appendChild(card);
    card.appendChild(name);
    card.appendChild(author);
    card.appendChild(read);
  })
}

function changeReadStatus(bookName){
  myLibrary.forEach((book) => {
    if (book.name === bookName) {

    }
  });
}

function addBookToLibrary(name, author, read) {
  let book = new Book(name, author, read);
  myLibrary.push(book);
  book.displayBook();
}

document.querySelector('form').onsubmit = () => {
  bookname = document.querySelector('#book').value;
  author = document.querySelector('#author').value;
  read = document.querySelector('#read').value;
  addBookToLibrary(bookname, author, read);
  bookname = document.querySelector('#book').value = '';
  author = document.querySelector('#author').value = '';
  read = document.querySelector('#read').value = 'Read';
  return false;
}

