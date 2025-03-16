const aboutModel = require("../models/aboutModel");

const createAbout = async (req, res) => {
  try {
    const body = req.body;
    const response = await aboutModel.create(body);
    res.status(200).send(response);
  } catch (error) {
    res.status(404).send(error);
  }
};
const getAboutInfo = async (req, res) => {
  try {
    const response = await aboutModel.find();
    res.status(200).send(response);
  } catch (error) {
    res.status(404).send(error);
  }
};
const editAboutField = async (req, res) => {
  const { field, value } = req.body;
  if (!["aboutMn", "aboutEn", "values"].includes(field)) {
    return res.status(400).send({ message: "Тохиромжгүй талбар." });
  }
  try {
    const updateData = { [field]: value };
    const updatedAboutInfo = await aboutModel.findOneAndUpdate({}, updateData, {
      new: true,
    });
    if (!updatedAboutInfo) {
      return res
        .status(404)
        .send({ message: "Холбоо барих мэдээлэл олдсонгүй." });
    }
    res.status(200).send(updatedAboutInfo);
  } catch (error) {
    res.status(404).send(error);
  }
};

module.exports = { createAbout, editAboutField, getAboutInfo };
