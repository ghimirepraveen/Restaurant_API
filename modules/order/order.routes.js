const express = require("express");
const order_Router = express.Router();
const orderfood = require("./postorder/orderfood");
const auth = require("../../handeler/middleware/authcostumer");

order_Router.use(auth);

order_Router.post("/orderfood", orderfood);

module.exports = order_Router;
