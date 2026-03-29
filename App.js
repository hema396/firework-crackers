import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import PriceList from "./components/PriceList";
import SafetyTips from "./components/SafetyTips";
import CategoryPage from "./components/CategoryPage";
import CartDrawer from "./components/CartDrawer";
import CheckoutModal from "./components/CheckoutModal";
import TrackOrder from "./components/TrackOrder";
import NotFound from "./components/NotFound";
import CartToast from "./components/CartToast";
import UpiPayment from "./components/UpiPayment";


// import UpiPayment from "./UpiPayment";

import "./App.css";

// Backend URL
const API_URL = "http://localhost:5009";

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [toastItem, setToastItem] = useState(null);

  const [orders, setOrders] = useState(
    JSON.parse(localStorage.getItem("orders")) || []
  );

  const [products, setProducts] = useState([]);

  // Load products
  useEffect(() => {
    fetch(`${API_URL}/api/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log("API Error:", err));
  }, []);

  // Add to cart
  const addToCart = (product) => {
    setCart((prev) => {
      const exist = prev.find((i) => i.id === product.id);
      if (exist) {
        return prev.map((i) =>
          i.id === product.id ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });

    setToastItem(product);
    setTimeout(() => setToastItem(null), 2500);
  };

  // Remove cart
  const removeFromCart = (id) => {
    setCart((prev) => {
      const exist = prev.find((i) => i.id === id);
      if (!exist) return prev;
      if (exist.qty === 1) return prev.filter((i) => i.id !== id);
      return prev.map((i) => (i.id === id ? { ...i, qty: i.qty - 1 } : i));
    });
  };

  // Total price
  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  // Place order backend
  const placeOrder = async (customer) => {
    const order = { items: cart, total, customer };

    try {
      const res = await fetch(`${API_URL}/api/orders`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(order),
      });

      const data = await res.json();
      alert("Order Success! Order ID: " + data.orderId);

      const updated = [...orders, { ...order, id: data.orderId }];
      setOrders(updated);
      localStorage.setItem("orders", JSON.stringify(updated));

      setCart([]);
      setCheckoutOpen(false);
      setCartOpen(false);
    } catch (err) {
      console.log("Order Error", err);
      alert("Backend not connected");
    }
  };

  return (
    <Router>
      <NavBar
        cartCount={cart.reduce((s, i) => s + i.qty, 0)}
        onCartClick={() => setCartOpen(true)}
      />

      <CartDrawer
        open={cartOpen}
        setOpen={setCartOpen}
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        onCheckout={() => setCheckoutOpen(true)}
      />

      <CheckoutModal
        open={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        total={total}
        placeOrder={placeOrder}
      />

      <Switch>
        <Route exact path="/">
          <Home addToCart={addToCart} products={products} />
        </Route>

        <Route path="/about" component={AboutUs} />
        <Route path="/prices">
          <PriceList addToCart={addToCart} products={products} />
        </Route>

        <Route path="/category/:name">
          <CategoryPage cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} />
        </Route>

        <Route path="/safety" component={SafetyTips} />
        <Route path="/track">
          <TrackOrder orders={orders} />
        </Route>

        ✅ {/* UPI Payment Page */}
        <Route path="/payment">
          <UpiPayment total={total} />
        </Route>

        <Route component={NotFound} />
      </Switch>

      <CartToast item={toastItem} onClose={() => setToastItem(null)} />
    </Router>
  );
}

export default App;
