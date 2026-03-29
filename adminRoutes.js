const express = require("express");
const Admin = require("../models/Admin");
const jwt = require("jsonwebtoken");
const router = express.Router();

// Admin Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const admin = await Admin.findOne({ email });
  if (!admin) return res.status(400).json({ msg: "Admin not found" });

  if (password !== admin.password)
    return res.status(400).json({ msg: "Wrong password" });

  const token = jwt.sign({ id: admin._id }, "SECRET_KEY");
  res.json({ token });
});

module.exports = router;
