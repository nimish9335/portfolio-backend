const express = require("express");
const router = express.Router();

const {
    createSetting,
    getSetting,
    updateSetting,
    deleteSetting,
} = require("../controllers/settingController");

const { protect } = require("../middleware/authMiddleware");
const validate = require("../middleware/validate");

const {
    createSettingValidator,
    updateSettingValidator,
} = require("../validators/settingValidator");

const {
    validateObjectId,
} = require("../validators/commonValidator");

// All setting routes require authentication
router.use(protect);

// Get Current User Settings
router.get(
    "/",
    getSetting
);

// Create Settings
router.post(
    "/",
    createSettingValidator,
    validate,
    createSetting
);

// Update Settings
router.put(
    "/:id",
    validateObjectId("id"),
    updateSettingValidator,
    validate,
    updateSetting
);

// Delete Settings
router.delete(
    "/:id",
    validateObjectId("id"),
    validate,
    deleteSetting
);

module.exports = router;