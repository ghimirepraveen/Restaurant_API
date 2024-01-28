const jwt = require("jsonwebtoken");
const auth = (req, res, next) => {
  //auth logic
  const authorizationHeader = req.headers.authorization;
  //console.log(req.header);
  if (!authorizationHeader) {
    res.status(401).json({
      status: "failed",
      message: "Authorization failed",
    });
    return;
  }
  const token = authorizationHeader.split("Bearer ")[1];

  try {
    const checktoken = jwt.verify(token, process.env.JWT_salt);
    req.user = checktoken;
    //console.log(req.user);
  } catch (e) {
    res.status(401).json({
      status: "failed",
      message: "Authorization failed !! Invalid token ",
    });
    return;
  }

  next();
};

module.exports = auth;
