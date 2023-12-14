const mongoose = require("mongoose");

const { Schema } = mongoose;

const RentalSchema = new Schema({
  owner: { type: Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true },
  imgs: { type: [String], required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  zipcode: { type: String, required: true },
  country: { type: String, required: true },
  description: { type: String, required: true },
  features: { type: [String], required: true },
  placetype: { type: [String], required: true },
  exstrainfo: String,
  checkin: { type: String, required: true },
  checkout: { type: String, required: true },
  maxguests: { type: String, required: true },
  rooms: { type: String, required: true },
  price: { type: String, required: true },
});

const RentalModel = mongoose.model("Rental", RentalSchema);
module.exports = RentalModel;
