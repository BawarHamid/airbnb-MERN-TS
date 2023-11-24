const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  firstname: String,
  lastname: String,
  email: { type: String, unique: true },
  password: String,
});

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;

// const { default: mongoose } = require("mongoose");
// const { Schema } = mongoose;

// const userSchema = new Schema({
//   name: String,
//   email: { type: String, unique: true },
//   password: String,
// });

// const UserModel = mongoose.model("User", userSchema);

// module.exports = UserModel;
