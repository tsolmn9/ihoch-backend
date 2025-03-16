const mongoose = require("mongoose");
const { Schema } = mongoose;

const feedBackSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  feedback: { type: String, required: true },
});
const feedBackModel = mongoose.model("feedback", feedBackSchema);
module.exports = feedBackModel;
