const express = require("express");
const router = express.Router();

const {
    createExperience,
    getAllExperience,
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

const {
    validateObjectId,
} = require("../validators/commonValidator");

// All experience routes require authentication
router.use(protect);

// Get Current User Experiences
router.get("/", getAllExperience);

// Create Experience
router.post(
    "/",
    createExperienceValidator,
    validate,
    createExperience
);

// Get Experience By ID
router.get(
    "/:id",
    validateObjectId("id"),
    validate,
    getExperienceById
);

// Update Experience
router.put(
    "/:id",
    validateObjectId("id"),
    updateExperienceValidator,
    validate,
    updateExperience
);

// Delete Experience
router.delete(
    "/:id",
    validateObjectId("id"),
    validate,
    deleteExperience
);

module.exports = router;