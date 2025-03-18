const library = document.getElementById("library");
const addBtn = document.querySelector(".addBookBtn");
const darkerBackground = document.querySelector(".darkerBackground");
const formContainer = document.getElementById("form-container");
const addBookForm = document.getElementById("addBookForm");

const libraryTable = document.createElement("table");
libraryTable.classList.add("libraryTable");
libraryTable.innerHTML = `
<thead>
  <th>Title</th>
  <th>Author</th>
  <th>Pages</th>
  <th>Read</th>
  <th>Actions</th>
</thead><tfoot></tfoot>`;
const tableBody = document.createElement("tbody");
libraryTable.appendChild(tableBody);
library.appendChild(libraryTable);

const myLibrary = [];

//variable in charge of designating the IDs
let id = 0;

//constructor function for book objects
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

//Function in charge of rendering the books in the library
//after being called by addBookToLibrary()

function renderBook(book) {
  const bookCard = document.createElement("tr");
  bookCard.classList.add("bookCard");

  const bookTitle = document.createElement("td");
  bookTitle.classList.add("bookTitle");
  bookTitle.textContent = book.title;

  const bookAuthor = document.createElement("td");
  bookAuthor.classList.add("bookAuthor");
  bookAuthor.textContent = book.author;

  const bookPages = document.createElement("td");
  bookPages.classList.add("bookPages");
  bookPages.textContent = book.pages;

  const bookRead = document.createElement("td");
  bookRead.classList.add("bookRead");
  bookRead.textContent = book.read ? "Read" : "Not Read";
  bookRead.classList.add(book.read ? "read" : "notRead");

  const btnBox = document.createElement("td");
  btnBox.classList.add("btnBox");

  const bookDeleteBtn = document.createElement("button");
  bookDeleteBtn.classList.add("deleteBtn");

  const bookReadBtn = document.createElement("button");
  bookReadBtn.classList.add("readBtn");

  bookDeleteBtn.textContent = "Delete Book";
  bookReadBtn.textContent = "Read Toggle";

  bookDeleteBtn.addEventListener("click", () => {
    const index = myLibrary.findIndex((item) => item.id == book.id);
    myLibrary.splice(index, 1);
    bookCard.remove();
  });

  bookReadBtn.addEventListener("click", () => {
    const index = myLibrary.findIndex((item) => item.id == book.id);
    myLibrary[index].read = !myLibrary[index].read;
    bookRead.textContent = `${book.read ? "Read" : "Not Read"}`;
    bookRead.classList.toggle("read");
    bookRead.classList.toggle("notRead");
  });

  bookCard.appendChild(bookTitle);
  bookCard.appendChild(bookAuthor);
  bookCard.appendChild(bookPages);
  bookCard.appendChild(bookRead);
  btnBox.appendChild(bookReadBtn);
  btnBox.appendChild(bookDeleteBtn);
  bookCard.appendChild(btnBox);
  tableBody.appendChild(bookCard);
}

function displayForm() {
  if (formContainer.classList.contains("item_hide")) {
    formContainer.classList.remove("item_hide");
    darkerBackground.classList.remove("item_hide");
    formContainer.classList.add("item_flex");
    darkerBackground.classList.add("item_flex");
    setTimeout(() => {
      formContainer.classList.remove("fade-out");
      darkerBackground.classList.remove("fade-out");
      formContainer.classList.add("fade-in");
      darkerBackground.classList.add("fade-in");
    }, 0);
  } else {
    formContainer.classList.remove("fade-in");
    formContainer.classList.add("fade-out");
    darkerBackground.classList.remove("fade-in");
    darkerBackground.classList.add("fade-out");

    setTimeout(() => {
      formContainer.classList.remove("item_flex");
      formContainer.classList.add("item_hide");
      darkerBackground.classList.remove("item_flex");
      darkerBackground.classList.add("item_hide");
    }, 500); // Time equal to CSS transition time
  }

  // Clear form fields
  addBookForm.elements["title"].value = "";
  addBookForm.elements["author"].value = "";
  addBookForm.elements["pages"].value = "";
  addBookForm.elements["readStatus"].value = "";
  // addBookForm.elements["rating"].value = "";
}

darkerBackground.addEventListener("click", () => {
  displayForm();
});

addBtn.addEventListener("click", () => {
  displayForm();
});

addBookForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = addBookForm.elements["title"].value;
  const author = addBookForm.elements["author"].value;
  const pages = addBookForm.elements["pages"].value;
  const read =
    addBookForm.elements["readStatus"].value === "true" ? true : false;
  // const rating = addBookForm.elements["rating"].value;

  addBookToLibrary(title, author, pages, read);
  displayForm();
});

function addBookToLibrary(title, author, pages, read) {
  id++;
  const newBook = new Book(id, title, author, pages, read);
  myLibrary.push(newBook);
  renderBook(newBook);
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 288, false);
addBookToLibrary("Harry Potter", "J.K. Rowling", 256, true);
addBookToLibrary("Don Quijote", "Miguel de Cervantes", 1352, true);
addBookToLibrary("A Song of Ice and Fire", "George R.R. Martin", 896, false);
addBookToLibrary("The Odyssey", "Homer", 426, false);
