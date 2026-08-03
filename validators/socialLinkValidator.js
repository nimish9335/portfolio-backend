const { body } = require("express-validator");

const createSocialLinkValidator = [
    body("platform")
        .trim()
        .notEmpty()
        .withMessage("Platform name is required")
        .bail()
        .isLength({ min: 2, max: 50 })
        .withMessage("Platform name must be between 2 and 50 characters"),

    body("url")
        .trim()
        .notEmpty()
        .withMessage("Profile URL is required")
        .bail()
        .isURL()
        .withMessage("Please provide a valid URL"),

    body("icon")
        .trim()
        .notEmpty()
        .withMessage("Icon name is required")
        .bail()
        .isLength({ min: 2, max: 50 })
        .withMessage("Icon name must be between 2 and 50 characters"),

    body("order")
        .notEmpty()
        .withMessage("Display order is required")
        .bail()
        .isInt({ min: 0 })
        .withMessage("Display order must be 0 or greater"),

    body("isActive")
        .optional()
        .isBoolean()
        .withMessage("isActive must be true or false"),
];

const updateSocialLinkValidator = [
    body("platform")
        .optional()
        .trim()
        .notEmpty()
        .withMessage("Platform name cannot be empty")
        .bail()
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
        .notEmpty()
        .withMessage("Icon name cannot be empty")
        .bail()
        .isLength({ min: 2, max: 50 })
        .withMessage("Icon name must be between 2 and 50 characters"),

    body("order")
        .optional()
        .isInt({ min: 0 })
        .withMessage("Display order must be 0 or greater"),

    body("isActive")
        .optional()
        .isBoolean()
        .withMessage("isActive must be true or false"),
];

module.exports = {
    createSocialLinkValidator,
    updateSocialLinkValidator,
};