const Router = require("express");
const serviceRouter = Router();
const {
  createService,
  getServices,
  getOneService,
  deleteService,
  updateService,
} = require("../controllers/serviceCtrl");

serviceRouter.post("/createService", createService);
serviceRouter.get("/getServices", getServices);
serviceRouter.delete("/delete/:serviceId", deleteService);
serviceRouter.get("/getService/:serviceId", getOneService);
serviceRouter.put("/update/:serviceId", updateService);

module.exports = serviceRouter;
