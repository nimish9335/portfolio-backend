const express = require("express");
const router = express.Router();

const {
    getProfile,
    updateProfile,
    togglePortfolioVisibility,
} = require("../controllers/profileController");

const { protect } = require("../middleware/authMiddleware");

const {
    updateProfileValidator,
} = require("../validators/profileValidator");

const validate = require("../middleware/validate");

// All profile routes are protected
router.get("/", protect, getProfile);

router.put(
    "/",
    protect,
    updateProfileValidator,
    validate,
    updateProfile
);
router.patch(
    "/portfolio-visibility",
    protect,
    togglePortfolioVisibility
);

module.exports = router;