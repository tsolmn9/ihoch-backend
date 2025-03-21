const Router = require("express");
const {
  createContactUs,
  getContact,
  editContact,
} = require("../controllers/contactUsCtrl");
const contactUsRouter = Router();

contactUsRouter.post("/createContact", createContactUs);
contactUsRouter.get("/getContact", getContact);
contactUsRouter.put("/contactEdit/:contactId", editContact);

module.exports = contactUsRouter;
