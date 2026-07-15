const express = require("express");

const {
    createExperience,
    getAllExperience,
    getAdminExperience,
    getExperienceById,
    updateExperience,
    deleteExperience,
} = require("../controllers/experienceController");

const { protect } = require("../middleware/authMiddleware");
const validate = require("../middleware/validate");

const {
    createExperienceValidator,
    updateExperienceValidator,
} = require("../validators/experienceValidator");

const { validateObjectId } = require("../validators/commonValidator");

const router = express.Router();

// Public Routes
router.get("/", getAllExperience);

// Admin Route (Keep before :id)
router.get("/admin", protect, getAdminExperience);

// Public Route
router.get("/:id", validateObjectId("id"), validate, getExperienceById);

// Protected Routes
router.post(
    "/",
    protect,
    createExperienceValidator,
    validate,
    createExperience
);

router.put(
    "/:id",
    protect,
    validateObjectId("id"),
    updateExperienceValidator,
    validate,
    updateExperience
);

router.delete(
    "/:id",
    protect,
    validateObjectId("id"),
    validate,
    deleteExperience
);

module.exports = router;