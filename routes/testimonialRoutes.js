const express = require("express");

const {
    createTestimonial,
    getAllTestimonials,
    getAdminTestimonials,
    getTestimonialById,
    updateTestimonial,
    deleteTestimonial,
} = require("../controllers/testimonialController");

const { protect } = require("../middleware/authMiddleware");
const validate = require("../middleware/validate");

const {
    createTestimonialValidator,
    updateTestimonialValidator,
} = require("../validators/testimonialValidator");

const { validateObjectId } = require("../validators/commonValidator");

const router = express.Router();

// Public Routes
router.get("/", getAllTestimonials);

// Admin Route (Must be before /:id)
router.get("/admin", protect, getAdminTestimonials);

// Public Route
router.get("/:id", validateObjectId("id"), validate, getTestimonialById);

// Protected Routes
router.post(
    "/",
    protect,
    createTestimonialValidator,
    validate,
    createTestimonial
);

router.put(
    "/:id",
    protect,
    validateObjectId("id"),
    updateTestimonialValidator,
    validate,
    updateTestimonial
);

router.delete(
    "/:id",
    protect,
    validateObjectId("id"),
    validate,
    deleteTestimonial
);

module.exports = router;