const Router = require("express");
const {
  createWorker,
  getWorkers,
  getOneWorker,
  deleteWorker,
  editWorker,
} = require("../controllers/workersCtrl");
const workerRouter = Router();

workerRouter.post("/createWorker", createWorker);
workerRouter.get("/getWorkers", getWorkers);
workerRouter.get("/getOneWorker/:workerId", getOneWorker);
workerRouter.delete("deleteWorker/:workerId", deleteWorker);
workerRouter.put("/editWorker/:workerId", editWorker);

module.exports = workerRouter;
