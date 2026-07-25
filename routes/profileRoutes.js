const express = require("express");
const router = express.Router();

const {
    getProfile,
    updateProfile,
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

module.exports = router;