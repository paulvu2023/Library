let myLibrary = [];


class Book {
  constructor(name, author, read) {
    this.name = name;
    this.author = author;
    this.read = read;
  }
}

displayBook = function () {
  const cards = document.querySelector('div.cards');
  cards.textContent = '';
  console.log(myLibrary);
  myLibrary.forEach((book) => {
    const card = document.createElement('div');
    const name = document.createElement('div');
    const author = document.createElement('div');
    const read = document.createElement('button');
    const remove = document.createElement('button');

    card.classList.add('card');
    name.textContent = `"${book.name}"`;
    author.textContent = `${book.author}`;
    read.textContent = `${book.read}`;
    read.value = `${book.name}`;
    read.addEventListener('click', function() {
      changeReadStatus(this.value); // Send name of book as argument
    });
    remove.textContent = 'Remove';
    remove.classList.add('remove');
    remove.value = `${book.name}`;
    remove.addEventListener('click', function() {
      removeBook(this.value); // Send name of book as argument
    });

    cards.appendChild(card);
    card.appendChild(name);
    card.appendChild(author);
    card.appendChild(read);
    card.appendChild(remove);
  })
}

function removeBook(bookName){
  myLibrary = myLibrary.filter((book) => {
    return book.name !== bookName;
  });
  displayBook();
}

function changeReadStatus(bookName){
  myLibrary.forEach((book) => {
    if (book.name == bookName) {
      if (book.read == "Read"){
        book.read = "Not Read";
      } else if (book.read == "Not Read"){
        book.read = "Read";
      }
    }
  });
  displayBook();
  console.log(myLibrary);
}

function addBookToLibrary(name, author, readValue) {
  let book = new Book(name, author, readValue);
  myLibrary.push(book);
  displayBook();
}

document.querySelector('form').onsubmit = () => {
  bookname = document.querySelector('#book').value;
  author = document.querySelector('#author').value;
  const readValue = document.querySelector('#read').value;
  addBookToLibrary(bookname, author, readValue);
  bookname = document.querySelector('#book').value = '';
  author = document.querySelector('#author').value = '';
  document.querySelector('#read').value = 'Read';
  return false;
}

