const { body } = require("express-validator");

const updateProfileValidator = [
    body("fullName")
        .optional()
        .trim()
        .isLength({ min: 3, max: 50 })
        .withMessage("Full name must be between 3 and 50 characters"),

    body("headline")
        .optional()
        .trim()
        .isLength({ max: 120 })
        .withMessage("Headline cannot exceed 120 characters"),

    body("bio")
        .optional()
        .trim()
        .isLength({ max: 1000 })
        .withMessage("Bio cannot exceed 1000 characters"),

    body("location")
        .optional()
        .trim()
        .isLength({ max: 100 })
        .withMessage("Location cannot exceed 100 characters"),

    body("phone")
        .optional()
        .trim()
        .isLength({ max: 20 })
        .withMessage("Phone number cannot exceed 20 characters"),
];

module.exports = {
    updateProfileValidator,
};