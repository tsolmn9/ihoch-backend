const fromUsModel = require("../models/fromUsModel");

const createFromUs = async (req, res) => {
  try {
    const body = req.body;
    const response = await fromUsModel.create(body);
    res.status(200).send(response);
  } catch (error) {
    res.status(404).send(error);
  }
};
const getFromUsInfo = async (req, res) => {
  try {
    const response = await fromUsModel.find();
    res.status(200).send(response);
  } catch (error) {
    res.status(404).send(error);
  }
};
const editFromUsField = async (req, res) => {
  const { field, value } = req.body;
  if (!["fromUs", "values"].includes(field)) {
    return res.status(400).send({ message: "Тохиромжгүй талбар." });
  }
  try {
    const updateData = { [field]: value };
    const updatedFromUsInfo = await fromUsModel.findOneAndUpdate(
      {},
      updateData,
      {
        new: true,
      }
    );
    if (!updatedFromUsInfo) {
      return res
        .status(404)
        .send({ message: "Холбоо барих мэдээлэл олдсонгүй." });
    }
    res.status(200).send(updatedFromUsInfo);
  } catch (error) {
    res.status(404).send(error);
  }
};

module.exports = { createFromUs, editFromUsField, getFromUsInfo };
