import React, { useState } from "react";

const API = "http://localhost:5009/api";

const steps = ["Placed", "Payment Confirmed", "Packing", "Dispatched", "Out for Delivery", "Delivered"];

const TrackOrder = () => {
  const [orderId, setOrderId] = useState("");
  const [foundOrder, setFoundOrder] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleTrack = async () => {
    if (!orderId.trim()) {
      alert("Enter Order ID");
      return;
    }

    setLoading(true);
    setError("");
    setFoundOrder(null);

    try {
      const res = await fetch(`${API}/orders/track/${orderId.trim()}`);
      const data = await res.json();

      if (!res.ok || data.message) throw new Error(data.message || "Order not found");

      setFoundOrder(data);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  const currentStep = steps.findIndex(
    (s) => s.toLowerCase() === foundOrder?.status?.toLowerCase()
  );

  const totalAmount =
    foundOrder?.totalPrice ||
    foundOrder?.items?.reduce((sum, i) => sum + i.qty * i.price, 0) ||
    0;

  const busStyle = {
    fontSize: "40px",
    position: "relative",
    animation: "moveBus 5s linear infinite"
  };

  return (
    <div style={{ padding: 40, color: "#fff", background: "#000", minHeight: "100vh" }}>
      
      <style>
        {`
        @keyframes moveBus {
          from { left: 0px; }
          to { left: 400px; }
        }
        `}
      </style>

      <h2>Track Your Order</h2>

      <input
        value={orderId}
        onChange={(e) => setOrderId(e.target.value)}
        placeholder="Enter Order ID"
        style={{ padding: 10, fontSize: 16 }}
      />

      <button onClick={handleTrack} style={{ marginTop: 10, padding: 10, marginLeft: 10 }}>
        Track
      </button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {foundOrder && (
        <div style={{ marginTop: 20 }}>
          <h3>Order ID: {foundOrder.orderId}</h3>
          <h4>Status: {foundOrder.status}</h4>
          <p>Customer: {foundOrder.customer?.name}</p>

          <h4>Items:</h4>
          {foundOrder.items.map((item, index) => (
            <p key={index}>
              {item.name} - {item.qty} × ₹{item.price}
            </p>
          ))}

          <h3>Total Amount: ₹{totalAmount}</h3>

          <h4>Timeline</h4>
          {steps.map((step, i) => (
            <p key={i}>
              {i <= currentStep ? "✅" : "⏳"} {step}
            </p>
          ))}

          {/* BUS SHOW AFTER DISPATCHED */}
          {currentStep >= 3 && (
            <div style={{ marginTop: 20 }}>
              <h3>🚚 Live Delivery Tracking</h3>
              <div style={busStyle}>🚌</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TrackOrder;
