const express = require("express");
const mongoose = require("mongoose");

const orderfood = async (req, res) => {
  order = mongoose.model("order");
  //food = mongoose.model("food");

  const { foodname, additional_instruction, quantity } = req.body;

  console.log(req.user);
  try {
    // const find = await food.findOne({ ffood: foodname });
    // if (!find) throw "Provide correct food name";
    // if (!(foodname === fname))
    //   throw "please provise correct foodname as from menu";

    let createorder = await order.create({
      name: req.user.name,
      foodname,
      additional_instruction,
      quantity,
    });
  } catch (e) {
    res.status(400).json({
      status: e.message,
    });
    return;
  }
  res.status(200).json({
    status: " success",
    message: "sucessfully added order",
  });
};
module.exports = orderfood;
