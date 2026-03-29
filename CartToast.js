import React from "react";


const CartToast = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div className="cart-toast">
      <img src={item.img} alt={item.name} />
      <div className="toast-text">
        <h4>{item.name}</h4>
        <p>Added to cart ✅</p>
      </div>
      <button onClick={onClose}>✖</button>
    </div>
  );
};

export default CartToast;
