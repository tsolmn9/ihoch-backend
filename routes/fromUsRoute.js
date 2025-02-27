const Router = require("express");
const fromUsRouter = Router();

const {
  createContactUs,
  getContact,
  editContact,
} = require("../controllers/contactUsCtrl");

fromUsRouter.post("/createFromUsInfo", createContactUs);
fromUsRouter.get("/getFromUsInfo", getContact);
fromUsRouter.put("/fromUsEdit", editContact);

module.exports = fromUsRouter;
