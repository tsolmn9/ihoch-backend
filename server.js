const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
app.use(cors());
const mongoose = require("mongoose");
const PORT = 8080;
dotenv.config();

const serviceRouter = require("./routes/serviceRoute");
const contactUsRouter = require("./routes/contactUsRoute");
const fromUsRouter = require("./routes/fromUsRoute");

app.use("service", serviceRouter);
app.use("contactUs", contactUsRouter);
app.use("fromUs", fromUsRouter);

const connectToDb = async () => {
  const res = await mongoose.connect(process.env.MONGODB_URI);
  if (res) console.log("db connected");
};
connectToDb();

app.listen(PORT, console.log(`running on ${PORT}`));
