const { body } = require("express-validator");

const createTestimonialValidator = [
    body("name")
        .trim()
        .notEmpty()
        .withMessage("Name is required")
        .bail()
        .isLength({ max: 100 })
        .withMessage("Name cannot exceed 100 characters"),

    body("designation")
        .trim()
        .notEmpty()
        .withMessage("Designation is required")
        .bail()
        .isLength({ max: 100 })
        .withMessage("Designation cannot exceed 100 characters"),

    body("company")
        .optional()
        .trim()
        .isLength({ max: 100 })
        .withMessage("Company cannot exceed 100 characters"),

    body("message")
        .trim()
        .notEmpty()
        .withMessage("Message is required")
        .bail()
        .isLength({ max: 2000 })
        .withMessage("Message cannot exceed 2000 characters"),

    body("rating")
        .notEmpty()
        .withMessage("Rating is required")
        .bail()
        .isInt({ min: 1, max: 5 })
        .withMessage("Rating must be between 1 and 5"),

    body("featured")
        .optional()
        .isBoolean()
        .withMessage("Featured must be true or false"),

    body("order")
        .optional()
        .isInt({ min: 0 })
        .withMessage("Order must be 0 or greater"),

    body("isActive")
        .optional()
        .isBoolean()
        .withMessage("isActive must be true or false"),
];

const updateTestimonialValidator = [
    body("name")
        .optional()
        .trim()
        .notEmpty()
        .withMessage("Name cannot be empty")
        .bail()
        .isLength({ max: 100 })
        .withMessage("Name cannot exceed 100 characters"),

    body("designation")
        .optional()
        .trim()
        .notEmpty()
        .withMessage("Designation cannot be empty")
        .bail()
        .isLength({ max: 100 })
        .withMessage("Designation cannot exceed 100 characters"),

    body("company")
        .optional()
        .trim()
        .isLength({ max: 100 })
        .withMessage("Company cannot exceed 100 characters"),

    body("message")
        .optional()
        .trim()
        .notEmpty()
        .withMessage("Message cannot be empty")
        .bail()
        .isLength({ max: 2000 })
        .withMessage("Message cannot exceed 2000 characters"),

    body("rating")
        .optional()
        .isInt({ min: 1, max: 5 })
        .withMessage("Rating must be between 1 and 5"),

    body("featured")
        .optional()
        .isBoolean()
        .withMessage("Featured must be true or false"),

    body("order")
        .optional()
        .isInt({ min: 0 })
        .withMessage("Order must be 0 or greater"),

    body("isActive")
        .optional()
        .isBoolean()
        .withMessage("isActive must be true or false"),
];

module.exports = {
    createTestimonialValidator,
    updateTestimonialValidator,
};