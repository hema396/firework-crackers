import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginAdmin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5001/api/admin/login", {
        email,
        password,
      });

      localStorage.setItem("adminToken", res.data.token);
      alert("Admin Login Success ✅");
      navigate("/admin/orders");
    } catch (err) {
      alert("Invalid Login ❌");
    }
  };

  return (
    <div style={{ padding: 50 }}>
      <h2>Admin Login</h2>

      <form onSubmit={loginAdmin}>
        <input
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        /><br /><br />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        /><br /><br />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
