const express = require("express");
const cors = require("cors");
const UserModel = require("./models/User");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const bcryptSalt = bcrypt.genSaltSync(12);
const jwtSecret = "chefen112qassam2507";

const app = express();
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
    const newUser = await UserModel.create({
      firstname,
      lastname,
      email,
      password: bcrypt.hashSync(password, bcryptSalt),
    });
    res.json(newUser);
  } catch (error) {
    res.status(422).json(error);
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const userLoginReq = await UserModel.findOne({ email: email });

  if (userLoginReq) {
    const passwordOk = bcrypt.compareSync(password, userLoginReq.password);
    if (passwordOk) {
      jwt.sign(
        { email: userLoginReq.email, id: userLoginReq._id },
        jwtSecret,
        {},
        (error, token) => {
          if (error) throw error;
          res.cookie(token, token).json("password is ok!");
        }
      );
    } else {
      res.status(422).json("password not ok!");
    }
  } else {
    res.json("not found!");
  }

  //   try {
  //     const userLogin = await UserModel.create({
  //       email,
  //       password,
  //     });
  //     res.json(userLogin);
  //   } catch (error) {
  //     res.status(422).json(error);
  //   }
});

app.listen(4000);
