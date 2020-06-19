const express = require("express");
const addBookRouter = express.Router();
const { nav } = require("../../nav");
addBookRouter.get("/", function (req, res) {
  res.render("addbook", {
    nav,
    title: "add New Book",
    active: "addbook",
  });
});

exports.addBookRouter = addBookRouter;
