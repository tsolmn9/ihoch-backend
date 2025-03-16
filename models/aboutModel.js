const mongoose = require("mongoose");
const { Schema } = mongoose;

const aboutSchema = new Schema({
  aboutMn: { type: String, required: true },
  aboutEn: { type: String, required: true },
  values: { type: String, required: true },
});
const aboutModel = mongoose.model("fromUs", aboutSchema);
module.exports = aboutModel;
