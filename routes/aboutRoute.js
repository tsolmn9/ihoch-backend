const Router = require("express");
const aboutRouter = Router();

const {
  editAboutField,
  getAboutInfo,
  createAbout,
} = require("../controllers/aboutCtrl");

aboutRouter.post("/createAboutInfo", createAbout);
aboutRouter.get("/getAboutInfo", getAboutInfo);
aboutRouter.put("/aboutEdit", editAboutField);

module.exports = aboutRouter;
