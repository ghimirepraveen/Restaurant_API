const mongoose = require("mongoose");

const getFood = async (req, res) => {
  getfood = mongoose.model("food");

  const menu = await getfood.find({});

  res.status(200).json({
    data: menu,
  });
};

module.exports = getFood;
