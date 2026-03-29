// server.js
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// ================== MongoDB Schema ==================
const orderSchema = new mongoose.Schema({
  orderId: String,
  customer: Object,
  shippingAddress: Object,
  items: Array,
  totalPrice: Number,
  status: String
});

const Order = mongoose.model("Order", orderSchema);

// ================== PRODUCTS API ==================
app.get("/api/products", (req, res) => {
  res.json([{ id: 1, name: "Sky Shot", price: 100 }]);
});

// ================== PLACE ORDER ==================
app.post("/api/orders", async (req, res) => {
  try {
    const orderId = "ORD" + Date.now(); // Unique order ID

    const order = new Order({
      orderId,
      customer: req.body.customer,
      shippingAddress: req.body.shippingAddress,
      items: req.body.items,
      totalPrice: req.body.totalPrice,
      status: "Placed"
    });

    await order.save();
    console.log("Order saved:", order);
    res.json({ orderId });
  } catch (err) {
    console.error("Error saving order:", err);
    res.status(500).json({ error: err.message });
  }
});

// ================== GET ALL ORDERS ==================
app.get("/api/orders", async (req, res) => {
  try {
    const orders = await Order.find();
    console.log("GET all orders:", orders);
    res.json(orders);
  } catch (err) {
    console.error("Error fetching orders:", err);
    res.status(500).json({ error: err.message });
  }
});

// ================== TRACK ORDER ==================
app.get("/api/orders/track/:id", async (req, res) => {
  try {
    const order = await Order.findOne({ orderId: req.params.id });
    if (!order) return res.status(404).json({ message: "Order not found" });
    res.json(order);
  } catch (err) {
    console.error("Error tracking order:", err);
    res.status(500).json({ error: err.message });
  }
});

// ================== CONNECT TO MONGO ==================
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("MongoDB connection error:", err));

// ================== START SERVER ==================
const PORT = 5009;
app.listen(PORT, () => console.log("Server running on port " + PORT));

