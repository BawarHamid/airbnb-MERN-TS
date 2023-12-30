const express = require("express");
const cors = require("cors");
const UserModel = require("./models/User");
const Rental = require("./models/Rental");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const imgDownloader = require("image-downloader");
const multer = require("multer");
const fs = require("fs");
const RentalModel = require("./models/Rental");
require("dotenv").config();

const bcryptSalt = bcrypt.genSaltSync(12);
const jwtSecret = "papiChefen0x0x0x0selam";

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use("/uploads", express.static(__dirname + "/uploads"));
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

      const {
        firstname,
        lastname,
        email,
        phonenumber,
        address,
        city,
        province,
        zipcode,
        country,
        _id,
      } = await UserModel.findById(userData.id);
      // console.log(userData);
      res.json({
        firstname,
        lastname,
        email,
        phonenumber,
        address,
        city,
        province,
        zipcode,
        country,
        _id,
      });
    });
  } else {
    res.json(null);
  }
});

app.post("/upload-by-url", async (req, res) => {
  const { url_link } = req.body;
  const newName = "image" + Date.now() + ".png";
  await imgDownloader.image({
    url: url_link,
    dest: __dirname + "/uploads/" + newName,
  });
  res.json(newName);
});

// const imagesMiddleware = multer({ dest: "uploads/" });
// app.post("/upload", imagesMiddleware.array("images", 100), (req, res) => {
//   const uploadedFiles = req.files.map((file) => file.filename);
//   res.json(uploadedFiles);
// });

const imagesMiddleware = multer({ dest: "uploads/" });
app.post("/upload", imagesMiddleware.array("images", 100), (req, res) => {
  if (!req.files || req.files.length === 0) {
    return res.status(400).json({ message: "No files uploaded" });
  }

  const uploadedFiles = [];

  // Iterate through uploaded files and process each one
  for (let i = 0; i < req.files.length; i++) {
    const { path, originalname } = req.files[i];
    const parts = originalname.split(".");
    const ext = parts[parts.length - 1];
    const newPath = path + "." + ext;

    // Rename the file to include the correct extension
    fs.renameSync(path, newPath);
    uploadedFiles.push(newPath);
  }

  res.json(uploadedFiles);
});

app.post("/rentals", (req, res) => {
  mongoose.connect(process.env.MONGO_URL);
  const { token } = req.cookies;
  const {
    title,
    imgs,
    address,
    addressInfo,
    city,
    zipCode,
    country,
    description,
    features,
    placeType,
    extraInfo,
    checkInStart,
    checkInEnd,
    checkOut,
    beds,
    maxGuests,
    rooms,
    price,
  } = req.body;

  try {
    jwt.verify(token, jwtSecret, {}, async (error, userData) => {
      if (error) throw error;

      const newRental = await RentalModel.create({
        owner: userData.id,
        title,
        imgs,
        address,
        addressInfo,
        city,
        zipCode,
        country,
        description,
        features,
        placeType,
        extraInfo,
        checkInStart,
        checkInEnd,
        checkOut,
        beds,
        maxGuests,
        rooms,
        price,
      });
      // Successful registration - HTTP 201 Created
      res.status(201).json(newRental);
    });
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

//endpoint for alle dine personlige opslag
app.get("/user-rentals", (req, res) => {
  mongoose.connect(process.env.MONGO_URL);
  const { token } = req.cookies;
  jwt.verify(token, jwtSecret, {}, async (err, userData) => {
    const { id } = userData;
    res.json(await Rental.find({ owner: id }));
  });
});

//endpoint ved valg af en med id
app.get("/rentals/:id", async (req, res) => {
  res.json(await Rental.findById(req.params.id));
});

//endpoint til update af ens opslag
app.put("/rentals", async (req, res) => {
  const { token } = req.cookies;
  const {
    id,
    title,
    imgs,
    address,
    addressInfo,
    city,
    zipCode,
    country,
    description,
    features,
    placeType,
    extraInfo,
    checkInStart,
    checkInEnd,
    checkOut,
    beds,
    maxGuests,
    rooms,
    price,
  } = req.body;
  jwt.verify(token, jwtSecret, {}, async (err, userData) => {
    if (err) throw err;
    const rentalDoc = await Rental.findById(id);
    if (userData.id === rentalDoc.owner.toString()) {
      const requiredFields = [
        title,
        imgs,
        address,
        addressInfo,
        city,
        zipCode,
        country,
        description,
        features,
        placeType,
        extraInfo,
        checkInStart,
        checkInEnd,
        checkOut,
        beds,
        maxGuests,
        rooms,
        price,
      ];
      if (requiredFields.some((field) => !field)) {
        res
          .status(400)
          .json({ error: "Some of the required fields are missing" });
      } else {
        rentalDoc.set({
          owner: userData.id,
          title,
          imgs,
          address,
          addressInfo,
          city,
          zipCode,
          country,
          description,
          features,
          placeType,
          extraInfo,
          checkInStart,
          checkInEnd,
          checkOut,
          beds,
          maxGuests,
          rooms,
          price,
        });
        await rentalDoc.save();
        res.json("ok");
      }
    }
  });
});

app.listen(4000);
