const { body } = require("express-validator");

const createTestimonialValidator = [
    body("name")
        .trim()
        .notEmpty()
        .withMessage("Name is required"),

    body("designation")
        .trim()
        .notEmpty()
        .withMessage("Designation is required"),

    body("company")
        .optional()
        .trim(),

    body("message")
        .trim()
        .notEmpty()
        .withMessage("Message is required"),

    body("rating")
        .notEmpty()
        .withMessage("Rating is required")
        .isInt({ min: 1, max: 5 })
        .withMessage("Rating must be between 1 and 5"),

    body("featured")
        .optional()
        .isBoolean()
        .withMessage("Featured must be a boolean"),

    body("order")
        .optional()
        .isInt({ min: 0 })
        .withMessage("Order must be a non-negative integer"),

    body("isActive")
        .optional()
        .isBoolean()
        .withMessage("isActive must be a boolean"),
];

const updateTestimonialValidator = [
    body("name")
        .optional()
        .trim()
        .notEmpty()
        .withMessage("Name cannot be empty"),

    body("designation")
        .optional()
        .trim()
        .notEmpty()
        .withMessage("Designation cannot be empty"),

    body("company")
        .optional()
        .trim(),

    body("message")
        .optional()
        .trim()
        .notEmpty()
        .withMessage("Message cannot be empty"),

    body("rating")
        .optional()
        .isInt({ min: 1, max: 5 })
        .withMessage("Rating must be between 1 and 5"),

    body("featured")
        .optional()
        .isBoolean()
        .withMessage("Featured must be a boolean"),

    body("order")
        .optional()
        .isInt({ min: 0 })
        .withMessage("Order must be a non-negative integer"),

    body("isActive")
        .optional()
        .isBoolean()
        .withMessage("isActive must be a boolean"),
];

module.exports = {
    createTestimonialValidator,
    updateTestimonialValidator,
};