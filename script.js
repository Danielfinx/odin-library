const library = document.getElementById("library");
const myLibrary = [];

let id = 0;

function Book(id, title, author, pages, read) {
  this.id = id;
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${
      this.read ? "already read" : "not read yet"
    }`;
  };
}

function addBookToLibrary(title, author, pages, read) {
  id++;
  const newBook = new Book(id, title, author, pages, read);
  myLibrary.push(newBook);
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false);
addBookToLibrary("Harry Potter", "Rowling", 595, true);
addBookToLibrary("Star Wars", "George Lucas", 295, true);
addBookToLibrary("Canción Hielo y Fuego", "George R.R. Martin", 895, false);
addBookToLibrary("JoJos", "Araki", 795, true);

for (const book of myLibrary) {
  const bookCard = document.createElement("div");
  bookCard.classList.add("bookCard");

  const bookInfo = document.createElement("p");
  bookInfo.classList.add("bookInfo");

  const bookDeleteBtn = document.createElement("button");
  bookDeleteBtn.classList.add("deleteBtn");

  const bookReadBtn = document.createElement("button");
  bookReadBtn.classList.add("readBtn");

  bookInfo.textContent = `info: ${book.info()}`;

  bookDeleteBtn.textContent = "Delete Book";
  bookReadBtn.textContent = "Read Book";

  bookDeleteBtn.addEventListener("click", () => {
    const index = myLibrary.findIndex((item) => item.id == book.id);
    myLibrary.splice(index, 1);
    bookCard.remove();
  });

  bookReadBtn.addEventListener("click", () => {
    const index = myLibrary.findIndex((item) => item.id == book.id);
    myLibrary[index].read = !myLibrary[index].read;
    bookInfo.textContent = `Info: ${book.info()}`;
  });

  bookCard.appendChild(bookInfo);
  bookCard.appendChild(bookDeleteBtn);
  bookCard.appendChild(bookReadBtn);
  library.appendChild(bookCard);
}
