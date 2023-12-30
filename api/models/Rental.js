const mongoose = require("mongoose");

const { Schema } = mongoose;

const RentalSchema = new Schema({
  owner: { type: Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true },
  imgs: { type: [String], required: true },
  address: { type: String, required: true },
  addressInfo: String,
  city: { type: String, required: true },
  zipCode: { type: Number, required: true },
  country: { type: String, required: true },
  description: { type: String, required: true },
  features: { type: [String], required: true },
  placeType: { type: String, required: true },
  exstraInfo: String,
  checkInStart: { type: String, required: true },
  checkInEnd: { type: String, required: true },
  checkOut: { type: String, required: true },
  beds: { type: Number, required: true },
  maxGuests: { type: Number, required: true },
  rooms: { type: Number, required: true },
  price: { type: String, required: true },
});

const RentalModel = mongoose.model("Rental", RentalSchema);
module.exports = RentalModel;

// const RentalSchema = new Schema({
//   owner: { type: Schema.Types.ObjectId, ref: "User", required: true },
//   title: { type: String, required: true },
//   imgs: { type: [String], required: true },
//   address: { type: String, required: true },
//   addressInfo: String,
//   city: { type: String, required: true },
//   zipcode: { type: Number, required: true },
//   country: { type: String, required: true },
//   description: { type: String, required: true },
//   features: { type: [String], required: true },
//   placetype: { type: String, required: true },
//   exstrainfo: String,
//   checkinstart: { type: String, required: true },
//   checkinend: { type: String, required: true },
//   checkout: { type: String, required: true },
//   beds: { type: Number, required: true },
//   maxguests: { type: Number, required: true },
//   rooms: { type: Number, required: true },
//   price: { type: String, required: true },
// });
