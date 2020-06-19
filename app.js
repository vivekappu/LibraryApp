const express = require("express");
const path = require("path");

const { books } = require("./books");
const { nav } = require("./nav");
const { booksRouter } = require("./src/Routes/booksRouter");
const { authorsRouter } = require("./src/Routes/authorsRouter");
const { signinRouter } = require("./src/Routes/signinRouter");
const { signupRouter } = require("./src/Routes/signupRouter");
const { Router } = require("express");
const { addBookRouter } = require("./src/Routes/addBookRouter");
const app = new express();
app.use(express.static("./public"));
app.set("view engine", "ejs");
app.set("views", "./src/views");
app.use("/books", booksRouter);
app.use("/authors", authorsRouter);
app.use("/signin", signinRouter);
app.use("/signup", signupRouter);
app.use("/addbook",addBookRouter)

app.get("/", function (req, res) {
  res.render("index", {
    nav,
    title: "Library",
    active: "Home",
  });
});
app.listen("5000");
