import React from "react";
import { useParams, useHistory } from "react-router-dom";

/* 🔥 PRODUCTS DATA – FIXED */
const categoryProducts = {
  sparkler: [
    { id: 1, name: '2.75" Kuruvi Sparkler', mrp: 40, price: 8, discount: "80%", img: "/Unknown.png" },
    { id: 2, name: '3.5" Laxmi Sparkler', mrp: 60, price: 12, discount: "80%", img: "/Unknown.jpeg" },
    { id: 3, name: '4" Jumbo Kuruvi', mrp: 80, price: 16, discount: "80%", img: "/OIP.XA2oz34c-5VKtWr5Ic1tbQHaHa.jpeg" }
  ],

  rockets: [
    { id: 4, name: "Sky Rocket", mrp: 150, price: 45, discount: "70%", img: "/Screenshot 2026-01-01 at 6.36.19 PM.png" },
    { id: 5, name: "Power Rocket", mrp: 200, price: 60, discount: "70%", img: "/images/rocket.png" }
  ],

  singlesound: [
    { id: 6, name: "Single Sound Crackers Small", mrp: 150, price: 45, discount: "70%", img: "/Screenshot 2026-01-01 at 6.36.19 PM.png" },
    { id: 7, name: "Single Sound Crackers Big", mrp: 200, price: 60, discount: "70%", img: "/images/rocket.png" }
  ],

  atombombs: [
    { id: 8, name: "Atom Bomb Small", mrp: 180, price: 55, discount: "70%", img: "/Screenshot 2026-01-01 at 6.36.19 PM.png" },
    { id: 9, name: "Atom Bomb Big", mrp: 250, price: 75, discount: "70%", img: "/images/rocket.png" }
  ],

  groundchakkars : [
    { id: 10, name: "Ground Chakkar Deluxe", mrp: 120, price: 36, discount: "70%", img: "/Screenshot 2026-01-01 at 6.36.19 PM.png" },
    { id: 11, name: "Ground Chakkar Special", mrp: 150, price: 45, discount: "70%", img: "/images/rocket.png" }
  ],

  skyshots: [
    { id: 12, name: "7 Shot Sky Shots", mrp: 600, price: 180, discount: "70%", img: "/Screenshot 2026-01-01 at 6.36.19 PM.png" },
    { id: 13, name: "12 Shot Sky Shots", mrp: 900, price: 270, discount: "70%", img: "/images/rocket.png" }
  ]
};

const CategoryPage = ({ cart, addToCart, removeFromCart }) => {
  const { name } = useParams();
  const history = useHistory();

  const items = categoryProducts[name?.toLowerCase()] || [];

  const getQty = (id) =>
    cart.find(i => i.id === id)?.qty || 0;

  return (
    <div className="category-container">
      <h1 className="title">{name?.toUpperCase()} CRACKERS</h1>
      <p className="category-desc">
        Best quality {name} crackers at Sivakasi wholesale price
      </p>
      <hr className="line" />

      <div className="kuruvi-container">
        {items.length === 0 ? (
          <p className="no-products">Products coming soon 🔥</p>
        ) : (
          items.map(p => {
            const qty = getQty(p.id);
            return (
              <div className="kuruvi" key={p.id}>
                <span className="discount">{p.discount}</span>

                <div className="img-box">
                  <img src={p.img} alt={p.name} />
                </div>

                <h3>{p.name}</h3>
                <p className="mrp">MRP: ₹{p.mrp}</p>
                <p className="price">₹{p.price} / pkt</p>

                {qty === 0 ? (
                  <button className="add-btn" onClick={() => addToCart(p)}>+</button>
                ) : (
                  <div className="qty-control">
                    <button onClick={() => removeFromCart(p.id)}>-</button>
                    <span>{qty}</span>
                    <button onClick={() => addToCart(p)}>+</button>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      <div style={{ marginTop: 30, textAlign: "center" }}>
        <button className="back-btn" onClick={() => history.push("/")}>
          ← Back to Home
        </button>
      </div>
    </div>
  );
};

export default CategoryPage;
