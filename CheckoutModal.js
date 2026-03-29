import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const CheckoutModal = ({ open, onClose, total, placeOrder }) => {

  const history = useHistory(); // ✅ MUST be inside component

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    mobile: "",
    email: "",
    state: "",
    promo: ""
  });

  const [errors, setErrors] = useState({});
  const [finalTotal, setFinalTotal] = useState(total);

  useEffect(() => {
    if (formData.promo === "DIWALI50") {
      setFinalTotal(total * 0.5);
    } else {
      setFinalTotal(total);
    }
  }, [formData.promo, total]);

  if (!open) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validate = () => {
    const errs = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^[0-9]{10}$/;

    if (!formData.name.trim()) errs.name = "Name is required";
    if (!formData.address.trim()) errs.address = "Address is required";
    if (!mobileRegex.test(formData.mobile)) errs.mobile = "Mobile must be 10 digits";
    if (!emailRegex.test(formData.email)) errs.email = "Valid email required";
    if (!formData.state) errs.state = "State required";

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };
const handleConfirm = () => {
  if (!validate()) return;

  placeOrder({ ...formData, total: finalTotal });

  alert("Order placed! Redirecting to payment...");

  onClose();

  // 🔥 NEW LINE (Payment page redirect)
  history.push("/payment");
};

  return (
    <div className="checkout-overlay">
      <div className="checkout-box">
        <h2>Enter Customer Details</h2>

        <div className="form-grid">
          <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
          <input name="address" value={formData.address} onChange={handleChange} placeholder="Address" />
          <input name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Mobile" />
          <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" />

          <select name="state" value={formData.state} onChange={handleChange}>
            <option value="">Select State</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Kerala">Kerala</option>
          </select>

          <select name="promo" value={formData.promo} onChange={handleChange}>
            <option value="">Select Promocode</option>
            <option value="DIWALI50">DIWALI50 (50% Off)</option>
          </select>
        </div>

        <h3>Total ₹{finalTotal}</h3>

        <div className="checkout-actions">
          <button onClick={onClose}>Cancel</button>
          <button onClick={handleConfirm}>Confirm Booking</button>

          {/* ✅ UPI PAYMENT BUTTON */}
          <button onClick={() => history.push("/payment")}>
            Pay Now (UPI)
          </button>
        </div>

      </div>
    </div>
  );
};

export default CheckoutModal;
