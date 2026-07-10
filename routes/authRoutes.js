const express = require("express");
const router = express.Router();
const {login,logout,getCurrentUser,} = require("../controllers/authController");
const { protect } = require("../middleware/authMiddleware");

// Public Route
router.post("/login", login);
// Protected Routes
router.post("/logout", protect, logout);
router.get("/me", protect, getCurrentUser);

module.exports = router;