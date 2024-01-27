const mongoose = require("mongoose");

const regesteration = async (req, res) => {
  const Users = mongoose.model("users");

  const { name, email, password } = req.body;
  try {
    const createUser = await Users.create({
      name,
      email,
      password,
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
