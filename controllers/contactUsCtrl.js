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
  const { contactId } = req.params;
  const { phone, email, address } = req.body;
  try {
    const updatingContact = await contactUsModel.findByIdAndUpdate(
      contactId,
      { $set: phone, email, address },
      { new: true }
    );
    res.status(200).send(updatingContact);
  } catch (error) {
    res.status(404).send(error);
  }
};
module.exports = { createContactUs, getContact, editContact };
