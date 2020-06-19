let status = false;
const bookname = document.getElementById("bookname");
const author = document.getElementById("author");
const imageurl = document.getElementById("imageurl");
const genre = document.getElementById("genre");
const description = document.getElementById("description");
function insertValidClass(element) {
  element.classList.add("is-valid");
}
function removeValidClass(element) {
  element.classList.remove("is-valid");
}
function insertInValidClass(element) {
  element.classList.add("is-invalid");
}
function removeInValidClass(element) {
  element.classList.remove("is-invalid");
}
function cantBeEmptyMessage(element) {
  var feedback = document.querySelector(`#${element.id} ~ .invalid-feedback`);
  insertInValidClass(element);
  removeValidClass(element);
  feedback.innerText = "This can't be empty";
}
function insertMessage(element, message) {
  var feedback = document.querySelector(`#${element.id} ~ .invalid-feedback`);
  insertInValidClass(element);
  removeValidClass(element);
  feedback.innerText = message;
}
function successMessage(element) {
  var feedback = document.querySelector(`#${element.id} ~ .valid-feedback`);
  insertValidClass(element);
  removeInValidClass(element);
  feedback.innerText = "That's good!";
}
function isEmpty(element) {
  return !element.value.length;
}

function validateEveryField() {
  let booknamestatus,
    authorstatus,
    genrestatus,
    descriptionstatus,
    imageurlstatus;
  [
    booknamestatus,
    authorstatus,
    genrestatus,
    descriptionstatus,
    imageurlstatus,
  ] = [false, false, false, false, false];

  if (isEmpty(bookname)) {
    cantBeEmptyMessage(bookname);
    bookname.focus();
  } else {
    successMessage(bookname);
    booknamestatus = true;
  }
  if (isEmpty(author)) {
    cantBeEmptyMessage(author);
    author.focus();
  } else {
    successMessage(author);
    authorstatus = true;
  }
  if (isEmpty(genre)) {
    cantBeEmptyMessage(genre);
    genre.focus();
  } else {
    successMessage(genre);
    genrestatus = true;
  }
  if (isEmpty(description)) {
    cantBeEmptyMessage(description);
    description.focus();
  } else {
    successMessage(description);
    descriptionstatus = true;
  }
  if (isEmpty(imageurl)) {
    cantBeEmptyMessage(imageurl);
    imageurl.focus();
  } else {
    successMessage(imageurl);
    imageurlstatus = true;
  }
  console.log( booknamestatus,
    authorstatus,
    genrestatus,
    descriptionstatus,
    imageurlstatus)
  status =
    booknamestatus &&
    authorstatus &&
    genrestatus &&
    descriptionstatus &&
    imageurlstatus;
   
}

document.querySelector(".submit-btn").addEventListener("click", () => {
 validateEveryField();
});
function validate() {

   return status;
}
