import React, { useEffect, useState } from "react";
import axios from "axios";

export default function AdminOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  // Fetch orders
  const fetchOrders = async () => {
    try {
      const res = await axios.get("http://localhost:5001/api/orders");
      setOrders(res.data.orders || res.data); 
    } catch (err) {
      console.error("Fetch Error:", err);
    }
  };

  // Update status
  const updateStatus = async (id, newStatus) => {
    try {
      await axios.put(`http://localhost:5001/api/orders/${id}/status`, {
        status: newStatus,
      });
      fetchOrders();
    } catch (err) {
      console.error("Update Error:", err);
    }
  };

  return (
    <div>
      <h2>Admin Orders Panel</h2>

      {orders.map((order) => (
        <div key={order._id} style={{ border: "1px solid gray", padding: 10, margin: 10 }}>
          
          <p><b>Order ID:</b> {order.orderId}</p>
          <p><b>Customer:</b> {order.customer?.name}</p>
          <p><b>Email:</b> {order.customer?.email}</p>
          <p><b>Status:</b> {order.status}</p>

          <select
            value={order.status}
            onChange={(e) => updateStatus(order._id, e.target.value)}
          >
            <option value="Order Placed">Order Placed</option>
            <option value="Payment Confirmed">Payment Confirmed</option>
            <option value="Packing">Packing</option>
            <option value="Dispatched">Dispatched</option>
            <option value="Out for Delivery">Out for Delivery</option>
            <option value="Delivered">Delivered</option>
            <option value="Cancelled">Cancelled</option>
          </select>

        </div>
      ))}
    </div>
  );
}
