const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  orderId: String,
  customerName: String,
  totalPrice: Number,
  status: {
    type: String,
    default: "Pending" // Pending, Packed, Delivered
  }
});

module.exports = mongoose.model("Order", orderSchema);
