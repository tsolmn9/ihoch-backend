const adminModel = require("../models/adminModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signupAdmin = async (req, res) => {
  try {
    const { username, password, email, phoneNumber } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newAdmin = {
      username,
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
    const admin = await adminModel.findOne({ username });
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
    const adminId = req.params;
    const admin = await adminModel.findById(adminId);
    res.status(200).send(admin);
  } catch (error) {
    res.status(404).send(error);
  }
};
module.exports = { signupAdmin, loginAdmin, getAdmins, getOneAdmin };
