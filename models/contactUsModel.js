const mongoose = require("mongoose");
const { Schema } = mongoose;

const contactUsSchema = new Schema({
  phone: { type: Number, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
});
const contactUsModel = mongoose.model("contactUs", contactUsSchema);
module.exports = contactUsModel;
