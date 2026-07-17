const express = require("express");
const { protect } = require("../middleware/authMiddleware");

const { getOverview,
    getPageAnalytics,
    getDeviceAnalytics,
    getBrowserAnalytics,
    getCountryAnalytics,
    getOSAnalytics,
    getDailyAnalytics,
} = require("../controllers/analyticsController");

const router = express.Router();

router.get("/overview", protect, getOverview);
router.get("/pages", protect, getPageAnalytics);
router.get("/devices", protect, getDeviceAnalytics);
router.get("/browsers", protect, getBrowserAnalytics);
router.get("/countries", protect, getCountryAnalytics);
router.get("/os", protect, getOSAnalytics);
router.get("/daily", protect, getDailyAnalytics);

module.exports = router;