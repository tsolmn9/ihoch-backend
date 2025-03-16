const mongoose = require("mongoose");
const { Schema } = mongoose;

const aboutSchema = new Schema({
  aboutMn: { type: String, required: true },
  aboutEn: { type: String, required: true },
});
const aboutModel = mongoose.model("about", aboutSchema);
module.exports = aboutModel;
