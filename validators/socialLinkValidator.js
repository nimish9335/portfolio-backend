const { body } = require("express-validator");

const createSocialLinkValidator = [
    body("platform")
        .trim()
        .notEmpty()
        .withMessage("Platform name is required")
        .isLength({ min: 2, max: 50 })
        .withMessage("Platform name must be between 2 and 50 characters"),

    body("url")
        .trim()
        .notEmpty()
        .withMessage("Profile URL is required")
        .isURL()
        .withMessage("Please provide a valid URL"),

    body("icon")
        .trim()
        .notEmpty()
        .withMessage("Icon name is required")
        .isLength({ min: 2, max: 50 })
        .withMessage("Icon name must be between 2 and 50 characters"),

    body("order")
        .notEmpty()
        .withMessage("Display order is required")
        .isInt({ min: 0 })
        .withMessage("Display order must be a positive integer"),

    body("isActive")
        .optional()
        .isBoolean()
        .withMessage("isActive must be a boolean"),
];

const updateSocialLinkValidator = [
    body("platform")
        .optional()
        .trim()
        .isLength({ min: 2, max: 50 })
        .withMessage("Platform name must be between 2 and 50 characters"),

    body("url")
        .optional()
        .trim()
        .isURL()
        .withMessage("Please provide a valid URL"),

    body("icon")
        .optional()
        .trim()
        .isLength({ min: 2, max: 50 })
        .withMessage("Icon name must be between 2 and 50 characters"),

    body("order")
        .optional()
        .isInt({ min: 0 })
        .withMessage("Display order must be a positive integer"),

    body("isActive")
        .optional()
        .isBoolean()
        .withMessage("isActive must be a boolean"),
];

module.exports = {
    createSocialLinkValidator,
    updateSocialLinkValidator,
};