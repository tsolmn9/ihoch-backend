const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const PORT = 8080;
dotenv.config();
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type, Authorization",
  })
);

const serviceRouter = require("./routes/serviceRoute");
const contactUsRouter = require("./routes/contactUsRoute");
const aboutRouter = require("./routes/aboutRoute");
const adminRouter = require("./routes/adminRoute");
const workerRouter = require("./routes/workersRoute");
const feedBackRouter = require("./routes/feedBackRoute");

app.use("/service", serviceRouter);
app.use("/contactUs", contactUsRouter);
app.use("/about", aboutRouter);
app.use("/admin", adminRouter);
app.use("/workers", workerRouter);
app.use("/feedback", feedBackRouter);

const connectToDb = async () => {
  const res = await mongoose.connect(process.env.MONGODB_URI);
  if (res) console.log("db connected");
};
connectToDb();

app.listen(PORT, console.log(`running on ${PORT}`));
