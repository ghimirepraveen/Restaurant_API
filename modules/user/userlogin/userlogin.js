const mongoose = require("mongoose");
const { findOne, validate } = require("../../../model/userlogin.model");

const userlogin = async (req, res) => {
  Users = mongoose.model("users");
  const { email, password } = req.body;

  try {
    if (!email) throw "provide email";
    if (!password) throw "provide password";
    const getUser = await Users.findOne({
      email: email,
    });
    if (!getUser) throw "User doesnot exist";

    if (!(password, getUser.password))
      throw "email and password does not match";
  } catch (e) {
    res.status(400).json({
      status: e.message,
    });
    return;
  }
  res.status(200).json({
    status: "user logged in successfully ",
  });
};
module.exports = userlogin;
