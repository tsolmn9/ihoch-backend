const Router = require("express");
const {
  createFeedBack,
  getFeedBacks,
  getFeedBack,
  deleteFeedBack,
} = require("../controllers/feedBackCtrl");
const feedBackRouter = Router();

feedBackRouter.post("/createFeedBack", createFeedBack);
feedBackRouter.get("/getFeedBacks", getFeedBacks);
feedBackRouter.get("/getFeedBack", getFeedBack);
feedBackRouter.delete("/deleteFeedBack", deleteFeedBack);

module.exports = feedBackRouter;
