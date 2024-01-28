const mongoose = require("mongoose");

const postFood = async (req, res) => {
  Food = mongoose.model("food");

  const { fname, price, ingredient, rating } = req.body;

  try {
    const createfood = await Food.create({
      fname,
      price,
      ingredient,
      rating,
    });
  } catch (e) {
    res.status(400).json({
      status: e.message,
    });
    return;
  }
  res.status(200).json({ status: "food added sucessful!!" });
};
module.exports = postFood;
