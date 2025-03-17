const mongoose = require("mongoose");
const { Schema } = mongoose;

const adminSchema = new Schema({
  password: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: Number, required: true },
});
const adminModel = mongoose.model("admins", adminSchema);
module.exports = adminModel;
