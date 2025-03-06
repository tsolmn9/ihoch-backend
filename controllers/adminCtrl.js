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
module.exports = { signupAdmin };
