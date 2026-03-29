import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ cartCount, onCartClick }) => {
  return (
    <nav className="navbar">
      <h2>funwithcrackers</h2>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/prices">PriceList</Link></li>
        <li><Link to="/safety">Safety Tips</Link></li>
        <li><Link to="/track">Track Order</Link></li>
      </ul>

      <button className="cart-btn" onClick={onCartClick}>
        🛒 Cart ({cartCount})
      </button>
    </nav>
  );
};

export default NavBar;
