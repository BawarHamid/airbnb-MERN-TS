const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  phonenumber: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  province: String,
  zipcode: String,
  // province: { type: String, nullable: true },
  // zipcode: { type: String, nullable: true },
  country: { type: String, required: true },
});

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;

// phonenumber: String,
// address: String,
// city: String,
// province: { type: String, nullable: true },
// zipcode: { type: String, nullable: true },
// country: String,

// const { default: mongoose } = require("mongoose");
// const { Schema } = mongoose;

// const userSchema = new Schema({
//   name: String,
//   email: { type: String, unique: true },
//   password: String,
// });

// const UserModel = mongoose.model("User", userSchema);

// module.exports = UserModel;
