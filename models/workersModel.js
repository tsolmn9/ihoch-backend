const mongoose = require("mongoose");
const { Schema } = mongoose;

const workersSchema = new Schema({
lastName:{type:String,required:true},
  firstName:{type:String, required:true},
  imgUrl:
  job:
});
const workersModel = mongoose.model("workers", workersSchema);
module.exports = workersModel;
