const feedBackModel = require("../models/feedbackModel");

const createFeedBack = async (req, res) => {
  try {
    const body = req.body;
    const response = await feedBackModel.create(body);
    res.status(200).send(response);
  } catch (error) {
    res.status(404).send(error);
  }
};
const getFeedBacks = async (req, res) => {
  try {
    const response = await feedBackModel.find();
    res.status(200).send(response);
  } catch (error) {
    res.status(404).send(error);
  }
};
const getFeedBack = async (req, res) => {
  try {
    const feedBackId = req.params;
    const response = await feedBackModel.findById(feedBackId);
    res.status(200).send(response);
  } catch (error) {
    res.status(404).send(error);
  }
};
const deleteFeedBack = async (req, res) => {
  try {
    const feedBackId = req.params;
    const response = await feedBackModel.findByIdAndDelete(feedBackId);
    if (!response) {
      return res.send("Feedback not found");
    }
    res.status(200).send(response);
  } catch (error) {
    res.status(404).send(error);
  }
};
module.exports = { createFeedBack, getFeedBack, getFeedBacks, deleteFeedBack };
