const express = require("express");
const router = express.Router();

const {
    createTestimonial,
    getAllTestimonials,
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

const {
    validateObjectId,
} = require("../validators/commonValidator");

// All testimonial routes require authentication
router.use(protect);

// Get Current User Testimonials
router.get(
    "/",
    getAllTestimonials
);

// Create Testimonial
router.post(
    "/",
    createTestimonialValidator,
    validate,
    createTestimonial
);

// Get Testimonial By ID
router.get(
    "/:id",
    validateObjectId("id"),
    validate,
    getTestimonialById
);

// Update Testimonial
router.put(
    "/:id",
    validateObjectId("id"),
    updateTestimonialValidator,
    validate,
    updateTestimonial
);

// Delete Testimonial
router.delete(
    "/:id",
    validateObjectId("id"),
    validate,
    deleteTestimonial
);

module.exports = router;