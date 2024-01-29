const mongoose = require("mongoose");
const deletefood = async (req, res) => {
  Food = mongoose.model("food");
  const { fname } = req.body;
  try {
    if (!fname) throw "Provide Food Name";
    const find = await Food.findOne({ fname: fname });
    if (!find) throw "Provide correct food name  ";
    const deletefood = await Food.deleteOne({ fname: fname });
  } catch (e) {
    res.status(400).json({
      status: "failed ",
      message: e,
    });
    return;
  }
  res.status(200).json({
    status: "success",
    message: "sucessfully deleted the food",
  });
};
module.exports = deletefood;
