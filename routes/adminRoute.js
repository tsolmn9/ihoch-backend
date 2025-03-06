const Router = require("express");
const {
  signupAdmin,
  loginAdmin,
  getAdmins,
  getOneAdmin,
} = require("../controllers/adminCtrl");
const adminRouter = Router();

adminRouter.post("/createAdmin", signupAdmin);
adminRouter.post("/loginAdmin", loginAdmin);
adminRouter.get("/getAdmins", getAdmins);
adminRouter.get("/getAdmin", getOneAdmin);

module.exports = adminRouter;
