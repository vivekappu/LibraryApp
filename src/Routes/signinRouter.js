const express = require("express");
const signinRouter = express.Router();
const { nav } = require("../../nav");
signinRouter.get("/", function (req, res) {
  res.render("signin", {
    nav,
    title: "Library",
    active: "signin",
  });
});
exports.signinRouter = signinRouter;
