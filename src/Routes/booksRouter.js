const express = require("express");
const booksRouter = express.Router();
const { books } = require("../../books");
const { nav } = require("../../nav");
booksRouter.get("/", function (req, res) {
  res.render("books", {
    nav,
    title: "Library",
    active: "Books",
    books,
  });
});
booksRouter.get("/:id/:bookname", function (req, res) {
  const id = req.params.id;

  res.render("book", {
    nav,
    active: "Books",
    book: books[id],
  });
});
booksRouter.get("/addbook", function (req, res) {
  res.render("addbook", {
    nav,
    title: "add New Book",
    active: "Books",
  });
});

exports.booksRouter = booksRouter;
