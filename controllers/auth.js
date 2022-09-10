const express = require('express');
const router = express.Router();

router.get("/signup", (req, res) => {
  res.render("auth/signup");
});

router.get("/login", (req, res) => {
  res.render("auth/login");
});

// Post Route Login

// Post Route Sign up

// Get Route Log Out



module.exports = router;