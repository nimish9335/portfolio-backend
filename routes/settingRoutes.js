const express = require("express");

const {
    createSetting,
    getSetting,
    getAdminSetting,
    updateSetting,
    deleteSetting,
} = require("../controllers/settingController");

const { protect } = require("../middleware/authMiddleware");
const validate = require("../middleware/validate");

const {
    createSettingValidator,
    updateSettingValidator,
} = require("../validators/settingValidator");

const { validateObjectId } = require("../validators/commonValidator");

const router = express.Router();

// Public Route
router.get("/", getSetting);

// Admin Routes
router.get("/admin", protect, getAdminSetting);

router.post(
    "/",
    protect,
    createSettingValidator,
    validate,
    createSetting
);

router.put(
    "/:id",
    protect,
    validateObjectId("id"),
    updateSettingValidator,
    validate,
    updateSetting
);

router.delete(
    "/:id",
    protect,
    validateObjectId("id"),
    validate,
    deleteSetting
);

module.exports = router;