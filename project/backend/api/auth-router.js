const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../model/user");
const { createToken, verify } = require("./jwt");
const cookieParser = require("cookie-parser");

router.post("/register", async (req, res) => {
  const user = req.body;
  if (!user.firstName || !user.lastName || !user.password || !user.role || !user.photo) {
    return res.json({
      status: "error",
      error: "Please add information to all fields!",
    });
  }
  User.findOne({ email: user.email }).then((savedUser) => {
    if (savedUser) {
      return res.json({
        status: "error",
        error: "There is already user with this email!",
      });
    }
    const salt = bcrypt.genSaltSync(10);
    user.password = bcrypt.hashSync(user.password, salt);
    const newUser = new User({
      firstName: user.firstName,
      lastName: user.lastName,
      password: user.password,
      email: user.email,
      role: user.role,
      photo: user.photo,
    });
    newUser.save();
    return res.status(201).send({ message: "User created" });
  });
});

router.post("/login", async (req, res) => {
  const user = req.body;
  const { email } = req.body;
  const userData = await User.findOne({ email: user.email });
  if (!userData) {
    return res.json({ status: "error", error: "Invalid username/password" });
  } else {
    createToken(userData).then((token) => {
      res.cookie("auth-token", token, { httpOnly: true });
      res.status(201).send({ email, token, userData });
    });
  }
});
router.get("/logout", (req, res) => {
  res.clearCookie("auth-token");
  res.send({ message: "Logout successfully" });
});

module.exports = router;
