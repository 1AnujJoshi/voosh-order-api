const auth = require("../config/auth");
const Order = require("../models/order");

module.exports.addOrder = async function (req, res) {
  try {
    const { phone, subTotal, userId } = req.body;

    if (!phone || !subTotal) {
      return res.status(400).json({ msg: "Enter all the details" });
    }

    const newOrder = new Order({
      sub_total: subTotal,
      userId: userId,
      phone: phone,
    });
    const savedOrder = await newOrder.save();
    res.json(savedOrder);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports.getOrders = async function (req, res) {
  const orders = await Order.find({ userId: req.body.userId });
  res.status(200).json(orders);
};
