const adminModel = require("../models/adminModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const signupAdmin = async (req, res) => {
  try {
    const { password, email, phoneNumber } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newAdmin = {
      email,
      phoneNumber,
      password: hashedPassword,
    };
    const response = await adminModel.create(newAdmin);
    const token = jwt.sign(
      {
        adminId: response._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "3h",
      }
    );
    res.status(200).send({ token });
  } catch (error) {
    res.status(404).send(error);
  }
};
const loginAdmin = async (req, res) => {
  try {
    const { phoneNumber, password } = req.body;
    const admin = await adminModel.findOne({ phoneNumber });
    if (!admin) {
      return res.status(404).send("Admin not found");
    }
    const passwordValid = await bcrypt.compare(password, admin.password);
    if (!passwordValid) {
      return res
        .status(404)
        .send("Incorrect phoneNumber and password combination");
    }
    const token = jwt.sign(
      {
        adminId: admin._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "3h",
      }
    );
    res.send({ token });
  } catch (error) {
    res.status(404).send("Log in error");
  }
};
const getAdmins = async (req, res) => {
  try {
    const admins = await adminModel.find();
    res.status(200).send(admins);
  } catch (error) {
    res.status(404).send(error);
  }
};
const getOneAdmin = async (req, res) => {
  try {
    const { adminId } = req.params;
    const admin = await adminModel.findById(adminId);
    res.status(200).send(admin);
  } catch (error) {
    res.status(404).send(error);
  }
};
const editContact = async (req, res) => {
  const { field, value } = req.body;
  if (!["phone", "email", "password"].includes(field)) {
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
module.exports = {
  signupAdmin,
  loginAdmin,
  getAdmins,
  getOneAdmin,
  editContact,
};
