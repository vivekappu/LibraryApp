let status = false; //validation status
const bookname=document.getElementById("bookname");
const author=document.getElementById("author");
const imageurl=document.getElementById("imageurl");
const genre=document.getElementById("genre");
const description=document.getElementById("description");
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
  let bookname,author,genre,description,imageurl;
  [bookname,author,genre,description,imageurl] = [false, false,false,false,false];

  if (isEmpty(bookname)) {
    cantBeEmptyMessage(bookname);
    bookname.focus();
    
  } 
  else{
      bookstatus=true;
  }
  if (isEmpty(author)) {
    cantBeEmptyMessage(author);
    author.focus();
    
  }  else{
    bookstatus=true;
}
  if (isEmpty(genre)) {
    cantBeEmptyMessage(genre);
    genre.focus();
  }  else{
    bookstatus=true;
}
  if (isEmpty(description)) {
    cantBeEmptyMessage(description);
    description.focus();
  }  else{
    bookstatus=true;
}
  if (isEmpty(imageurl)) {
    cantBeEmptyMessage(imagurl);
    imageurl.focus();
  }  else{
    bookstatus=true;
}
  return 
  
}

document.querySelector(".submit-btn").addEventListener("click", () => {
    validateEveryField();
  });
function validate() {
  return status;
}
