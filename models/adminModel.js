const mongoose = require("mongoose");
const { Schema } = mongoose;

const adminSchema = new Schema({
  password: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
});
const adminModel = mongoose.model("admin", adminSchema);
module.exports = adminModel;
