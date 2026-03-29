import React from "react";

const CartDrawer = ({ open, setOpen, cart, addToCart, removeFromCart, onCheckout }) => {
  if (!open) return null;

  // Calculate total
  const total = cart?.reduce((sum, i) => sum + i.price * i.qty, 0) || 0;

  return (
    <div
      className="overlay"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(0,0,0,0.5)",
        zIndex: 9999,
      }}
      onClick={() => setOpen(false)}
    >
      <div
        className="drawer"
        style={{
          position: "fixed",
          right: 0,
          top: 0,
          width: "320px",
          height: "100%",
          background: "#fff",
          padding: "20px",
          boxShadow: "-5px 0 15px rgba(0,0,0,0.3)",
          overflowY: "auto",
        }}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        <button
          className="close"
          style={{ float: "right", fontSize: 20 }}
          onClick={() => setOpen(false)}
        >
          ✕
        </button>

        <h2>Your Cart</h2>

        {cart.length === 0 ? (
          <p>Cart is empty 😕</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} style={{ marginBottom: 15 }}>
              <p>{item.name}</p>
              <p>₹ {item.price} × {item.qty}</p>
              <div style={{ display: "flex", gap: 10 }}>
                <button onClick={() => removeFromCart(item.id)}>-</button>
                <button onClick={() => addToCart(item)}>+</button>
              </div>
              <hr />
            </div>
          ))
        )}

        <h3>Total: ₹{total}</h3>

        {cart.length > 0 && (
          <button
            onClick={onCheckout}
            style={{
              marginTop: 10,
              padding: "10px 20px",
              background: "green",
              color: "#fff",
              border: "none",
              cursor: "pointer",
            }}
          >
            Checkout 🛒
          </button>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
