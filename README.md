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

---

##  Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Copy env file and set your MongoDB URI
cp .env.example .env
# Edit .env → set MONGO_URI (default: mongodb://localhost:27017/boom_fireworks)

# 3. Start the server
npm run dev          # with auto-reload (nodemon)
# or
npm start            # plain node

# 4. Seed sample orders (optional — great for testing)
node scripts/seedOrders.js

# 5. Open track-order.html in your browser
# Make sure the server is running on localhost:5000
```

---

##  API Endpoints

### Orders

| Method | Endpoint                     | Description                        |
|--------|------------------------------|------------------------------------|
| POST   | `/api/orders`                | Place a new order                  |
| GET    | `/api/orders`                | List all orders (supports filters) |
| GET    | `/api/orders/track/:orderId` | **Track order by Order ID**        |
| GET    | `/api/orders/:id`            | Get order by MongoDB `_id`         |
| PUT    | `/api/orders/:id/status`     | Update order status (admin)        |
| DELETE | `/api/orders/:id`            | Soft-cancel an order               |

### Products

| Method | Endpoint                  | Description                     |
|--------|---------------------------|---------------------------------|
| POST   | `/api/products/seed`      | Seed the product catalogue      |
| GET    | `/api/products`           | List products (filter by category) |
| GET    | `/api/products/:productId`| Get a single product            |
| POST   | `/api/products`           | Create a product                |
| PUT    | `/api/products/:productId`| Update a product                |
| DELETE | `/api/products/:productId`| Delete a product                |

### Health

| Method | Endpoint         | Description          |
|--------|------------------|----------------------|
| GET    | `/api/health`    | Server health check  |

---

##  Example: Place an Order

```bash
curl -X POST http://localhost:5000/api/orders \
  -H "Content-Type: application/json" \
  -d '{
    "customer": { "name": "Ravi Kumar", "email": "ravi@email.com", "phone": "9876543210" },
    "items": [
      { "productId": "P001", "name": "Golden Sparkler Pack", "emoji": "✨", "price": 149, "qty": 2 }
    ],
    "delivery": { "address": "42, MG Road, Chennai" }
  }'
```

##  Example: Update Order Status (Admin)

```bash
curl -X PUT http://localhost:5000/api/orders/<MONGO_ID>/status \
  -H "Content-Type: application/json" \
  -d '{ "status": "Dispatched", "message": "Handed over to courier!" }'
```

---

##  Order Status Flow

```
Order Placed → Payment Confirmed → Packing → Dispatched → Out for Delivery → Delivered
                                                                                  ↕
                                                                              Cancelled (at any point)
```

Every status change is logged to `statusHistory` (the timeline the frontend displays).

---

##  Environment Variables

| Variable     | Default                                      | Description                |
|--------------|----------------------------------------------|----------------------------|
| `MONGO_URI`  | `mongodb://localhost:27017/boom_fireworks`    | MongoDB connection string  |
| `PORT`       | `5000`                                       | Server port                |
| `ADMIN_TOKEN`| `changeme`                                   | Token for admin middleware |
