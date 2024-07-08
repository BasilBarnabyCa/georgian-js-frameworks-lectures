var express = require("express");
var router = express.Router();
var User = require("../models/user");
var passport = require("passport");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

// Get login
router.get("/login", (req, res, next) => {
  let messages = req.session.messages || [];

  // Clear the session messages
  req.session.messages = [];
  res.render("login", { title: "Login", messages: messages });
});

// POST login
router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/projects",
    failureRedirect: "/login",
    failureMessage: "Invalid credentials",
  })
);

// Get register
router.get("/register", (req, res, next) => {
  res.render("register", { title: "Register" });
});

// POST register
router.post("/register", (req, res, next) => {
  user.register(
    new User({ username: req.body.username }),
    req.body.password,
    (err, newUser) => {
      if (err) {
        console.log(err);
        return res.redirect("/register");
      } else {
        req.login(newUser, (err) => {
          res.redirect("/projects");
        });
      }
    }
  );
});

module.exports = router;
