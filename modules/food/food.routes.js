const express = require("express");
const food_Router = express.Router();
const getFood = require("./getfood/getfood");
const postFood = require("./postfood/postfood");
//const auth = require("../../handeler/middleware/auth");
const auth = require("../../handeler/middleware/authmanager");
const updatefood = require("../food/updatefood/updatefood");
const deletefood = require("../food/deletefood/deletefood");

food_Router.get("/menu", getFood);
food_Router.use(auth);
food_Router.post("/addfood", postFood);
food_Router.put("/updatefood", updatefood);
food_Router.delete("/deletefood", deletefood);
module.exports = food_Router;
