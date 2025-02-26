const mongoose = require("mongoose");
const { Schema } = mongoose;

const serviceSchema = new Schema(
  {
    infoImg: { type: String, required: true },
    subTitleMn: { type: String, required: true },
    captionMn: { type: String, required: true },
    subTitleEn: { type: String, required: true },
    captionEn: { type: String, required: true },
    price: { type: String, required: true },
  },
  { timestamps: true }
);
const serviceModel = mongoose.model("service", serviceSchema);
module.exports = serviceModel;
