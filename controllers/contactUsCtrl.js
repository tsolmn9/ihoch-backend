const contactUsModel = require("../models/contactUsModel");

const createContactUs = async (req, res) => {
  try {
    const body = req.body;
    const response = await contactUsModel.create(body);
    res.status(200).send(response);
  } catch (error) {
    res.status(404).send(error);
  }
};
const getContact = async (req, res) => {
  try {
    const response = await contactUsModel.find();
    res.status(200).send(response);
  } catch (error) {
    res.status(404).send(error);
  }
};
const editContact = async (req, res) => {
  const { field, value } = req.body;
  if (!["phone", "email", "address"].includes(field)) {
    return res.status(400).send({ message: "Тохиромжгүй талбар." });
  }
  try {
    const updateData = { [field]: value };
    const updatedContact = await contactUsModel.findOneAndUpdate(
      {},
      updateData,
      { new: true }
    );
    if (!updatedContact) {
      return res
        .status(404)
        .json({ message: "Холбоо барих мэдээлэл олдсонгүй." });
    }
    res.status(200).json(updatedContact);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Серверийн алдаа." });
  }
};
module.exports = { createContactUs, getContact, editContact };
