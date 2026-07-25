const express = require("express");
const router = express.Router();

const {
    register,
    login,
    logout,
    getCurrentUser,
} = require("../controllers/authController");

const { protect } = require("../middleware/authMiddleware");

const {
    registerValidator,
    loginValidator,
} = require("../validators/authValidator");

const validate = require("../middleware/validate");

// Public Routes
router.post("/register", registerValidator, validate, register);
router.post("/login", loginValidator, validate, login);

// Protected Routes
router.post("/logout", protect, logout);
router.get("/me", protect, getCurrentUser);

module.exports = router;