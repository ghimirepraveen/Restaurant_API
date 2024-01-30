const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userlogin = async (req, res) => {
  Users = mongoose.model("users");
  const { email, password } = req.body;
  //console.log(req.body);

  try {
    if (!email) throw "provide email";
    if (!password) throw "provide password";
    const getUser = await Users.findOne({
      email: email,
    });

    if (!getUser) throw "User doesnot exist";

    if (!(password === getUser.password))
      throw "email and password does not match";
  } catch (e) {
    res.status(400).json({
      status: "failed",
      message: e,
    });
    return;
  }

  const getUserforJWT = await Users.findOne({
    email: email,
  });

  const accesToken = jwt.sign(
    {
      email: getUserforJWT.email,
      name: getUserforJWT.name,
    },
    process.env.JWT_salt_formanager
    //{ expiresIn: "90 days" }
  );

  res.status(200).json({
    status: "user logged in successfully ",
    accesToken,
  });
};
module.exports = userlogin;
