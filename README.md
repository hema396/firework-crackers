#  BOOM! Fireworks Store — Order Tracking Backend

A full Node.js / Express / MongoDB backend for placing and tracking fireworks orders, with a matching frontend tracker page.

---

## 📁 Folder Structure

```
fireworks-backend/
├── middleware/
│   └── auth.js              ← Admin token guard (placeholder)
├── models/
│   ├── Order.js             ← Mongoose Order schema + timeline
│   └── Product.js           ← Mongoose Product schema
├── routes/
│   ├── orders.js            ← All order endpoints
│   └── products.js          ← Product catalogue + seed
├── scripts/
│   └── seedOrders.js        ← Seeds 4 sample orders for testing
├── track-order.html         ← Frontend order tracker page
├── server.js                ← Express app entry point
├── package.json
├── .env.example             ← Copy this → .env and fill in values
└── README.md
```
