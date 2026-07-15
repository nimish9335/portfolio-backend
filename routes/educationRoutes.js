const express = require("express");

const {
    createEducation,
    getAllEducation,
    getAdminEducation,
    getEducationById,
    updateEducation,
    deleteEducation,
} = require("../controllers/educationController");

const { protect } = require("../middleware/authMiddleware");
const validate = require("../middleware/validate");

const {
    createEducationValidator,
    updateEducationValidator,
} = require("../validators/educationValidator");

const { validateObjectId } = require("../validators/commonValidator");

const router = express.Router();

// Public Routes
router.get("/", getAllEducation);

// Admin Routes
router.get("/admin", protect, getAdminEducation);

// Public Route
router.get("/:id", validateObjectId("id"), validate, getEducationById);

router.post(
    "/",
    protect,
    createEducationValidator,
    validate,
    createEducation
);

router.put(
    "/:id",
    protect,
    validateObjectId("id"),
    updateEducationValidator,
    validate,
    updateEducation
);

router.delete(
    "/:id",
    protect,
    validateObjectId("id"),
    validate,
    deleteEducation
);

module.exports = router;