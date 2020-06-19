const express = require("express");
const authorsRouter = express.Router();
const { nav } = require("../../nav");
const { authors } = require("../../authors");
authorsRouter.get("/", function (req, res) {
  res.render("authors", {
    nav,
    title: "Library",
    authors,
    active: "authors",
  });
});
exports.authorsRouter = authorsRouter;
