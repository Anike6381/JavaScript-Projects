let selectedRow = null;

const onFormSubmit = (e) => {
  event.preventDefault();
  formData = readFormData();
  if (selectedRow == null) {
    insertNewRecord(formData);
  } else {
    updateRecord(formData);
  }

  resetForm();
};

// Retrieve the data

const readFormData = () => {
  let formData = {};
  formData["serialNo"] = document.getElementById("serialNo").value;
  formData["name"] = document.getElementById("name").value;
  formData["email"] = document.getElementById("email").value;
  formData["phoneNo"] = document.getElementById("phoneNo").value;
  return formData;
};

// Insert the data

const insertNewRecord = (data) => {
  let table = document
    .getElementById("nameList")
    .getElementsByTagName("tbody")[0];
  let newRow = table.insertRow(table.length);
  let cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.serialNo;
  let cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.name;
  let cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.email;
  let cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.phoneNo;
  let cell5 = newRow.insertCell(4);
  cell5.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
};

//Edit the data

const onEdit = (td) => {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("serialNo").value = selectedRow.cells[0].innerHTML;
  document.getElementById("name").value = selectedRow.cells[1].innerHTML;
  document.getElementById("email").value = selectedRow.cells[2].innerHTML;
  document.getElementById("phoneNo").value = selectedRow.cells[3].innerHTML;
};

const updateRecord = (formData) => {
  selectedRow.cells[0].innerHTML = formData.serialNo;
  selectedRow.cells[1].innerHTML = formData.name;
  selectedRow.cells[2].innerHTML = formData.email;
  selectedRow.cells[3].innerHTML = formData.phoneNo;
};

// Delete the data

const onDelete = (td) => {
  if (confirm("Do you want to delete this record?")) {
    row = td.parentElement.parentElement;
    document.getElementById("nameList").deleteRow(row.rowIndex);
    resetForm();
  }
};

// Reset the data

const resetForm = () => {
  document.getElementById("serialNo").value = "";
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phoneNo").value = "";
  selectedRow = null;
};
