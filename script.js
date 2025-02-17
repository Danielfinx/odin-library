const library = document.getElementById("library");
const addBtn = document.querySelector(".addBookBtn");
const darkerBackground = document.querySelector(".darkerBackground");
const formContainer = document.getElementById("form-container");
const addBookForm = document.getElementById("addBookForm");
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

function displayForm() {
  formContainer.classList.toggle("item_hide");
  formContainer.classList.toggle("item_flex");
  darkerBackground.classList.toggle("item_hide");
  darkerBackground.classList.toggle("item_flex");

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

  // console.log("Title:", title);
  // console.log("Author:", author);
  // console.log("Pages:", pages);
  // console.log("Read:", read);
  // console.log("Rating:", rating);

  addBookToLibrary(title, author, pages, read);
  displayForm();

  // Aquí puedes hacer lo que necesites con los datos
});

function addBookToLibrary(title, author, pages, read) {
  id++;
  const newBook = new Book(id, title, author, pages, read);
  myLibrary.push(newBook);
  renderBook(newBook);
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false);
addBookToLibrary("Harry Potter", "Rowling", 595, true);
addBookToLibrary("Star Wars", "George Lucas", 295, true);
addBookToLibrary("Canción Hielo y Fuego", "George R.R. Martin", 895, false);
addBookToLibrary("JoJos", "Araki", 795, true);
