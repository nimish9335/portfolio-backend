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

router.use(protect);

router.get("/overview", getOverview);
router.get("/pages", getPageAnalytics);
router.get("/devices", getDeviceAnalytics);
router.get("/browsers", getBrowserAnalytics);
router.get("/countries", getCountryAnalytics);
router.get("/os", getOSAnalytics);
router.get("/daily", getDailyAnalytics);

module.exports = router;