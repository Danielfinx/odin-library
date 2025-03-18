(function () {
  // Crear la estructura del body
  const headerContainer = document.createElement("div");
  headerContainer.classList.add("headerContainer");

  const header = document.createElement("h1");
  header.classList.add("header");
  header.textContent = "Odin Library";

  const addContainer = document.createElement("div");
  addContainer.classList.add("addContainer");

  const addBookBtn = document.createElement("button");
  addBookBtn.classList.add("addBookBtn");
  addBookBtn.textContent = "New Book";

  addContainer.appendChild(addBookBtn);
  headerContainer.appendChild(header);
  headerContainer.appendChild(addContainer);

  const darkerBackground = document.createElement("div");
  darkerBackground.classList.add("darkerBackground", "item_hide", "fade-out");

  const formContainer = document.createElement("div");
  formContainer.id = "form-container";
  formContainer.classList.add("item_hide", "fade-out");

  const formHeader = document.createElement("h2");
  formHeader.classList.add("formHeader");
  formHeader.textContent = "Add New Book";

  const addBookForm = document.createElement("form");
  addBookForm.id = "addBookForm";
  addBookForm.method = "post";

  const table = document.createElement("table");

  const tbody = document.createElement("tbody");

  const formSections = [
    { label: "Title", id: "title", type: "text", required: true },
    { label: "Author", id: "author", type: "text", required: true },
    {
      label: "Pages",
      id: "pages",
      type: "number",
      min: 20,
      max: 1500,
      required: true,
    },
  ];

  formSections.forEach((section) => {
    const tr = document.createElement("tr");
    tr.classList.add("formSection");

    const th = document.createElement("th");
    const label = document.createElement("label");
    label.setAttribute("for", section.id);
    label.textContent = section.label;
    th.appendChild(label);

    const td = document.createElement("td");
    const input = document.createElement("input");
    input.type = section.type;
    input.id = section.id;
    input.name = section.id;
    if (section.required) input.required = true;
    if (section.min) input.min = section.min;
    if (section.max) input.max = section.max;
    td.appendChild(input);

    tr.appendChild(th);
    tr.appendChild(td);
    tbody.appendChild(tr);
  });

  // Agregar sección de Read Status
  const readStatusTr = document.createElement("tr");
  readStatusTr.classList.add("formSection");

  const readStatusTh = document.createElement("th");
  const readStatusLabel = document.createElement("label");
  readStatusLabel.textContent = "Read Status";
  readStatusTh.appendChild(readStatusLabel);

  const readStatusTd = document.createElement("td");
  const readInput = document.createElement("input");
  readInput.type = "radio";
  readInput.id = "read";
  readInput.name = "readStatus";
  readInput.value = "true";

  const readLabel = document.createElement("label");
  readLabel.setAttribute("for", "read");
  readLabel.textContent = "Read";

  const notReadInput = document.createElement("input");
  notReadInput.type = "radio";
  notReadInput.id = "notRead";
  notReadInput.name = "readStatus";
  notReadInput.value = "false";
  notReadInput.checked = true;

  const notReadLabel = document.createElement("label");
  notReadLabel.setAttribute("for", "notRead");
  notReadLabel.textContent = "Not Read";

  readStatusTd.appendChild(readInput);
  readStatusTd.appendChild(readLabel);
  readStatusTd.appendChild(notReadInput);
  readStatusTd.appendChild(notReadLabel);

  readStatusTr.appendChild(readStatusTh);
  readStatusTr.appendChild(readStatusTd);
  tbody.appendChild(readStatusTr);

  table.appendChild(tbody);
  addBookForm.appendChild(table);

  const submitBtn = document.createElement("button");
  submitBtn.type = "submit";
  submitBtn.id = "submitBtn";
  submitBtn.textContent = "Add Book";

  addBookForm.appendChild(submitBtn);
  formContainer.appendChild(formHeader);
  formContainer.appendChild(addBookForm);

  const libraryDiv = document.createElement("div");
  libraryDiv.id = "library";

  // Agregar todo al body
  document.body.appendChild(headerContainer);
  document.body.appendChild(darkerBackground);
  document.body.appendChild(formContainer);
  document.body.appendChild(libraryDiv);
})();
