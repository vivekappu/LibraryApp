let status = false; //validation status
const bookname=document.getElementById("bookname");
const author=document.getElementById("author");
const imageurl=document.getElementById("imageurl");
const genre=document.getElementById("genre");
const description=document.getElementById("description")
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
  let emailStatus, passwordStatus;
  [emailStatus, passwordStatus] = [false, false];

  if (isEmpty(inputPassword)) {
    cantBeEmptyMessage(inputPassword);
    inputPassword.focus();
  } 
  if (isEmpty(inputEmail)) {
    cantBeEmptyMessage(inputEmail);
    inputEmail.focus();
  } 
  
}

document.querySelector(".submit-btn").addEventListener("click", () => {
    validateEveryField();
  });
function validate() {
  return status;
}
