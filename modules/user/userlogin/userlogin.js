const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
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

  const getUserforJWT = await Users.findOne({
    email: email,
  });

  const accesToken = jwt.sign(
    {
      email: getUserforJWT.email,
      name: getUserforJWT.name,
    },
    process.env.JWT_salt
    //{ expiresIn: "90 days" }
  );

  res.status(200).json({
    status: "user logged in successfully ",
    accesToken,
  });
};
module.exports = userlogin;
