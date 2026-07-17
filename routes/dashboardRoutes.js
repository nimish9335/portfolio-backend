const express = require("express");

const { protect } = require("../middleware/authMiddleware");

const {
  getDashboardSummary,
  getRecentActivity,
  getDashboard,
} = require("../controllers/dashboardController");

const router = express.Router();

router.get("/", protect, getDashboard);

router.get("/summary", protect, getDashboardSummary);

router.get("/recent", protect, getRecentActivity);

module.exports = router;