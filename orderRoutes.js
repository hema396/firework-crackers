const express = require("express");
const router = express.Router();
const Order = require("../models/Order");

router.post("/", async (req, res) => {
  const orderId = "ORD" + Date.now();

  const order = new Order({
    orderId,
    ...req.body,
    status: "Placed"
  });

  await order.save();
  res.json({ orderId });
});

router.get("/track/:id", async (req, res) => {
  const order = await Order.findOne({ orderId: req.params.id });
  if (!order) return res.json({ message: "Order not found" });
  res.json(order);
});

module.exports = router;

