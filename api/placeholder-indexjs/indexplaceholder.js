// app.post("/register", async (req, res) => {
//   const { firstname, lastname, email, password } = req.body;
//   try {
//     // Check if the email already exists in the database
//     const existingUser = await UserModel.findOne({ email });

//     if (existingUser) {
//       return res.status(409).json({ message: "Email already exists" });
//     }

//     // Create a new user if the email doesn't exist
//     const newUser = await UserModel.create({
//       firstname,
//       lastname,
//       email,
//       password: bcrypt.hashSync(password, bcryptSalt),
//     });

//     // Generate a token (you need to have a secret key)
//     const token = jwt.sign({ userId: newUser._id }, jwtSecret, {
//       expiresIn: "7d", // A week (Adjust as per your requirement)
//     });

//     // Respond with the token
//     res.status(201).json({ token, user: newUser });
//   } catch (error) {
//     // Handle errors
//   }
// });

// app.get("/profile", async (req, res) => {
//   const { token } = req.cookies;

//   if (!token) {
//     return res.status(401).json({ message: "Unauthorized" });
//   }

//   try {
//     const userData = await jwt.verify(token, jwtSecret);
//     const user = await UserModel.findById(userData.id);

//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     const { firstname, lastname, email, _id } = user;
//     res.json({ firstname, lastname, email, _id });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// });

// await imgDownloader.image({
//     url: link,
//     dest: __dirname + "/uploads" + newName,
//   });
//   res.json(__dirname + "/uploads" + newName);

app.post("/upload-by-url", async (req, res) => {
  const { url_link } = req.body;
  if (!url_link) {
    res.status(400).json("No url is added!");
    return;
  }
  const newName = Date.now() + ".png";
  try {
    await imgDownloader.image({
      url: url_link,
      dest: __dirname + "/uploads" + newName,
    });
    res.json(__dirname + "/uploads" + newName);
    // res.json(newName);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

// app.post("/upload-by-url", async (req, res) => {
//   const { link } = req.body;
//   const newName = Date.now() + ".png";
//   await imgDownloader.image({
//     url: link,
//     dest: __dirname + "/uploads" + newName,
//   });
//   res.json(__dirname + "/uploads" + newName);
// });

// app.post("/upload-by-link", async (req, res) => {
//   const { link } = req.body;
//   const newName = Date.now() + ".jpg";
//   await imgDownloader.image({
//     url: link,
//     dest: __dirname + "/uploads/" + newName,
//   });
//   res.json(__dirname + "/uploads" + newName);
// });

// app.post("/upload-by-url", async (req, res) => {
//   const { img_Url } = req.body;
//   const newName = Date.now() + ".png";
//   await imageDownloader.image({
//     url: img_Url,
//     dest: __dirname + "/uploads/" + newName,
//   });
//   res.json(__dirname + "/uploads/" + newName);
// });

// app.post("/upload-by-url", async (req, res) => {
//   const { img_Url } = req.body;
//   const newName = Date.now() + ".png";

//   try {
//     await imageDownloader.image({
//       url: img_Url,
//       dest: __dirname + "/uploads/" + newName,
//     });
//     res.json(__dirname + "/uploads/" + newName);
//   } catch (error) {
//     // Handle the error here
//     console.error("Error downloading image:", error);
//     res.status(500).json({ error: "Failed to download the image." });
//   }
// });

app.post("/upload-by-url", (req, res) => {
  const { link } = req.body;
  if (!link) {
    res.status(400).json("The link parameter is required");
    return;
  }
  const newName = "photo" + Date.now() + ".jpg";
  try {
    imageDownloader.image({
      url: link,
      dest: __dirname + "/uploads/" + newName,
    });
    res.json(newName);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post("/upload", upload.array("images", 100), (req, res) => {
  const uploadedFiles = req.files.map((file) => file.filename);
  res.json(uploadedFiles);
});

// app.post("/upload-by-url", async (req, res) => {
//   const { url_link } = req.body;
//   if (!url_link) {
//     res.status(400).json("No url is added!");
//     return;
//   }
//   const newName = "image" + Date.now() + ".png";
//   try {
//     await imgDownloader.image({
//       url: url_link,
//       dest: __dirname + "/uploads/" + newName,
//     });
//     res.json(newName);
//   } catch (error) {
//     res.status(500).json(error.message);
//   }
// });

// const imagesMiddleware = multer({ dest: "uploads/" });
// app.post("/upload", imagesMiddleware.array("images", 100), (req, res) => {
//   const uploadedFiles = req.files.map((file) => file.filename);
//   res.json(uploadedFiles);
// });

// const imagesMiddleware = multer({ dest: "uploads/" });
// app.post("/upload", imagesMiddleware.array("images", 100), (req, res) => {
//   if (!req.files || req.files.length === 0) {
//     return res.status(400).json({ message: "No files uploaded" });
//   }

//   for (let i = 0; i < req.length; i++) {
//     const { path, originalname } = req.files[i];
//     const parts = originalname.split(".");
//     const ext = parts[parts.length - 1];
//     const newPath = path + "." + ext;
//     fs.renameSync(path, newPath);
//     uploadedFiles.push(newPath.replace("uploads/", ""));
//   }
//   res.json(uploadedFiles);
// });
