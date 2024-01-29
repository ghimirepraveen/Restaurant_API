const mongoose = require("mongoose");

const updatefood = async (req, res) => {
  Food = mongoose.model("food");
  const { fname, price, ingredient, rating } = req.body;

  try {
    if (!fname) throw "Provide Food Name";
    const find = await Food.findOne({ fname: fname });
    if (!find) throw "Provide correct food name";
    const update = await Food.updateOne(
      { fname: fname },
      {
        $set: {
          price: price,
          ingredient: ingredient,
          rating: rating,
        },
      }
    );
  } catch (e) {
    res.status(400).json({
      status: "Failed",
      message: e,
    });
    return;
  }
  res.status(200).json({
    status: "success",
    message: "sucessfully updated the food",
  });
};
module.exports = updatefood;
