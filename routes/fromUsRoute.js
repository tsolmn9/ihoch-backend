const Router = require("express");
const fromUsRouter = Router();

fromUsRouter.post("/createFromUsInfo", createContactUs);
fromUsRouter.get("/getFromUsInfo", getContact);
fromUsRouter.put("/fromUsEdit", editContact);

module.exports = fromUsRouter;
