const express = require("express");

const { getPublicPortfolio } = require("../controllers/portfolioController");
const trackVisitor = require("../middleware/analyticsMiddleware");

const router = express.Router();

// Public Portfolio
router.get(
    "/:username",
    trackVisitor,
    getPublicPortfolio
);

module.exports = router;