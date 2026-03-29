import React from "react";

function Cart({ cartItems = [], removeFromCart }) {
  const totalPrice = cartItems?.reduce(
    (total, item) => total + (item?.price || 0),
    0
  );

  return (
    <div
      style={{
        position: "fixed",
        right: 0,
        top: 0,
        width: "300px",
        height: "100vh",
        background: "#f9f9f9",
        padding: "20px",
        boxShadow: "-5px 0 10px rgba(0,0,0,0.2)"
      }}
    >
      <h3>Your Cart</h3>

      {cartItems.length === 0 ? (
        <p>Cart empty 😕</p>
      ) : (
        cartItems.map((item) => (
          <div key={item?.id || Math.random()} style={{ marginBottom: "10px" }}>
            <p>{item?.name}</p>
            <p>₹ {item?.price}</p>
            <button onClick={() => removeFromCart(item?.id)}>
              Remove ❌
            </button>
            <hr />
          </div>
        ))
      )}

      <h4>Total: ₹ {totalPrice}</h4>
    </div>
  );
}

export default Cart;
