const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const regesteration = async (req, res) => {
  const Users = mongoose.model("users");

  const { name, email, password } = req.body;
  //const encPassword = await bcrypt.hash(password, 10);
  try {
    const createUser = await Users.create({
      name,
      email,
      password,
      // : encPassword,
    });
  } catch (e) {
    res.status(400).json({
      status: e.message,
    });
    return;
  }
  res.status(200).json({ status: "user regestered  in successfully " });
};

module.exports = regesteration;
