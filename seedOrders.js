// Run:  node scripts/seedOrders.js
// Seeds 4 sample orders so you can test tracking right away.

require('dotenv').config();
const mongoose = require('mongoose');
const Order    = require('../models/Order');

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/boom_fireworks';

const sampleOrders = [
  {
    orderId: 'BOOM-20260201-DEMO',
    customer: { name: 'Ravi Kumar', email: 'ravi@email.com', phone: '9876543210' },
    items: [
      { productId: 'P001', name: 'Golden Sparkler Pack', emoji: '✨', price: 149, qty: 2 },
      { productId: 'P006', name: 'Snake & Cracker Set',  emoji: '🐍', price: 99,  qty: 1 }
    ],
    totalPrice: 397,
    status: 'Dispatched',
    statusHistory: [
      { status: 'Order Placed',      message: 'Your order has been successfully placed! 🎉' },
      { status: 'Payment Confirmed', message: 'Payment received. Thank you! 💳' },
      { status: 'Packing',           message: 'Our team is packing your fireworks carefully. 📦' },
      { status: 'Dispatched',        message: 'Your order is now on its way! 🚚' }
    ],
    delivery: { address: '42, MG Road, Chennai', estimatedDate: new Date('2026-02-06'), trackingNo: 'TRK-9821' }
  },
  {
    orderId: 'BOOM-20260202-TEST',
    customer: { name: 'Priya Nair', email: 'priya@email.com', phone: '8765432109' },
    items: [
      { productId: 'P007', name: 'Grand Finale Combo', emoji: '💥', price: 1299, qty: 1 }
    ],
    totalPrice: 1299,
    status: 'Packing',
    statusHistory: [
      { status: 'Order Placed',      message: 'Your order has been successfully placed! 🎉' },
      { status: 'Payment Confirmed', message: 'Payment received. Thank you! 💳' },
      { status: 'Packing',           message: 'Our team is packing your fireworks carefully. 📦' }
    ],
    delivery: { address: '18, Residency Road, Bangalore' }
  },
  {
    orderId: 'BOOM-20260203-LIVE',
    customer: { name: 'Anand Mehta', email: 'anand@email.com' },
    items: [
      { productId: 'P003', name: 'Sky Rocket Duo',    emoji: '🚀', price: 349, qty: 1 },
      { productId: 'P008', name: 'Party Starter Kit', emoji: '🎉', price: 449, qty: 1 }
    ],
    totalPrice: 798,
    status: 'Out for Delivery',
    statusHistory: [
      { status: 'Order Placed',       message: 'Your order has been successfully placed! 🎉' },
      { status: 'Payment Confirmed',  message: 'Payment received. Thank you! 💳' },
      { status: 'Packing',            message: 'Our team is packing your fireworks carefully. 📦' },
      { status: 'Dispatched',         message: 'Your order is now on its way! 🚚' },
      { status: 'Out for Delivery',   message: 'Almost there! Your order is out for delivery. 🏠' }
    ],
    delivery: { address: '7, Juhu Beach Rd, Mumbai', trackingNo: 'TRK-4456' }
  },
  {
    orderId: 'BOOM-20260203-NEW1',
    customer: { name: 'Sneha Iyer', email: 'sneha@email.com', phone: '7654321098' },
    items: [
      { productId: 'P002', name: 'Color Burst Sparklers', emoji: '🌈', price: 189, qty: 3 }
    ],
    totalPrice: 567,
    status: 'Order Placed',
    statusHistory: [
      { status: 'Order Placed', message: 'Your order has been successfully placed! 🎉' }
    ],
    delivery: { address: '99, Park Street, Kolkata' }
  }
];

(async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('✅ Connected to MongoDB');

    await Order.deleteMany({});
    await Order.insertMany(sampleOrders);
    console.log(`🎆 Seeded ${sampleOrders.length} sample orders!`);

    // Print order IDs for easy copy-paste into the tracker
    console.log('\n📋 Use these Order IDs to test tracking:');
    sampleOrders.forEach(o => console.log(`   ${o.orderId}  →  ${o.status}`));

    await mongoose.disconnect();
  } catch (err) {
    console.error('❌ Seed failed:', err.message);
    process.exit(1);
  }
})();
