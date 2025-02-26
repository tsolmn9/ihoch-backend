const mongoose = require("mongoose");
const { Schema } = mongoose;

const fromUsSchema = new Schema({
  fromUs: { type: String, required: true },
  values: { type: String, required: true },
});
const fromUsModel = mongoose.model("fromUs", fromUsSchema);
module.exports = fromUsModel;
