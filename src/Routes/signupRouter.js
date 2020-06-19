const express = require("express");
const signupRouter = express.Router();
const { nav } = require("../../nav");
signupRouter.get("/", function (req, res) {
  res.render("signup", {
    nav,
    title: "Library",
    active: "signup",
  });
});
exports.signupRouter = signupRouter;
