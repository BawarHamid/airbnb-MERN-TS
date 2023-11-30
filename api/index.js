const express = require("express");
const cors = require("cors");
const UserModel = require("./models/User");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const bcryptSalt = bcrypt.genSaltSync(12);
const jwtSecret = "papiChefen0x0x0x0selam";

const app = express();
app.use(cookieParser());
app.use(express.json());

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

mongoose.connect(process.env.MONGO_URL);

app.get("/test", (req, res) => {
  res.json("test ok");
});

app.post("/register", async (req, res) => {
  const { firstname, lastname, email, password } = req.body;
  try {
    // Check if the email already exists in the database
    const existingUser = await UserModel.findOne({ email });

    if (existingUser) {
      // Email already exists - HTTP 409 Conflict
      return res.status(409).json({ message: "Email already exists" });
    }

    // Create a new user if the email doesn't exist
    const newUser = await UserModel.create({
      firstname,
      lastname,
      email,
      password: bcrypt.hashSync(password, bcryptSalt),
    });

    // Successful registration - HTTP 201 Created
    res.status(201).json(newUser);
  } catch (error) {
    if (error.name === "ValidationError") {
      // Validation errors - HTTP 422 Unprocessable Entity
      res.status(422).json({ message: error.message });
    } else {
      // Other server errors - HTTP 500 Internal Server Error
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const userLoginReq = await UserModel.findOne({ email });

  if (userLoginReq) {
    const passwordOk = bcrypt.compareSync(password, userLoginReq.password);
    if (passwordOk) {
      jwt.sign(
        {
          firstname: userLoginReq.firstname,
          lastname: userLoginReq.lastname,
          email: userLoginReq.email,
          id: userLoginReq._id,
        },
        jwtSecret,
        {},
        (error, token) => {
          if (error) throw error;
          // res.cookie("token", token).json(userLoginReq);
          res.cookie("token", token, { httpOnly: true }).json(userLoginReq);
        }
      );
    } else {
      res.status(401).json({ error: "Invalid Email or Password" });
    }
  } else {
    res.status(401).json({ error: "Invalid Email or Password" });
  }
});

app.post("/logout", (req, res) => {
  res.cookie("token", "").json(true);
});

app.get("/profile", (req, res) => {
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, jwtSecret, {}, async (error, userData) => {
      if (error) throw error;

      const { firstname, lastname, email, _id } = await UserModel.findById(
        userData.id
      );
      res.json({ firstname, lastname, email, _id });
    });
  } else {
    res.json(null);
  }
});

app.listen(4000);
