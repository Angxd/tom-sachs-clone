const express = require("express");
const auth = require("../middlewares/auth");
const router = express.Router();
const fs = require("fs");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { check } = require("express-validator");

const User = require("../model/User");

/*
 * Login user
 */
router.post(
  "/login",
  check("password").isLength({ min: 6 }),
  async (req, res) => {
    try {
      const { email, password } = req.body;

      let user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({ errors: [{ msg: "User not found" }] });
      }

      const isMatch = await bcrypt.compare(password, user.hashPassword);

      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid Credentials" }] });
      }

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        process.env["jwtSecret"],
        { expiresIn: "5 days" },
        (err, token) => {
          if (err) throw err;
          res.json({ token, ...user.toObject() });
        }
      );
      console.log("Sucessfully logged in user");
    } catch (error) {
      console.error("Error in login: \n", error);

      res.status(500).json({ message: "Something has gone wrong" });
    }
  }
);

/*
 * Register user
 */
router.post("/", check("password").isLength({ min: 6 }), async (req, res) => {
  try {
    const { firstName, lastName, email, password, hashPassword, role } =
      req.body;

    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ errors: [{ msg: "User already exists" }] });
    }

    user = new User({
      firstName,
      lastName,
      email,
      password,
      hashPassword,
      role,
    });

    const salt = await bcrypt.genSalt(10);

    let hashPass = user.password;
    hashPass = await bcrypt.hash(hashPass, salt);
    console.log(hashPass);
    user.hashPassword = hashPass;

    let isAdmin = user.role;
    const checker = isAdmin === "ADMIN" ? "ADMIN" : "GUEST";

    console.log(checker);

    user.role = checker;

    await user.save();

    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      process.env["jwtSecret"],
      { expiresIn: "5 days" },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
    console.log("Sucessfully added user");
  } catch (error) {
    console.error("Error in login: \n", error);

    res.status(500).json({ message: "Something has gone wrong" });
  }
});

/*
 * Displaying user data
 */

// For showing all users v
router.get("/all", async (req, res) => {
  try {
    // const user = await User.findOne({ _id: req.user.id });
    const user = await User.find();
    res.json(user);
  } catch (error) {
    console.error("Error in fetching user information", error);

    res.status(500).json({ message: "Something has gone wrong" });
  }
});

// For showing one user v
router.get("/", auth, async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.user.id });
    // const user = await User.find();
    res.json(user);
  } catch (error) {
    console.error("Error in fetching user information", error);

    res.status(500).json({ message: "Something has gone wrong" });
  }
});

/*
 * Deleting user
 */
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    await User.deleteOne({ _id: id });

    console.log("Sucessfully deleted user");
    res.status(200).json({ message: "Data deleted successfully" });
  } catch (error) {
    console.error("Error in getting product information", error);

    res.status(500).json({ message: "Error", error: error.message });
  }
});

module.exports = router;
