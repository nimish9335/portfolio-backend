const { body } = require("express-validator");

const createSettingValidator = [
    body("siteTitle")
        .trim()
        .notEmpty()
        .withMessage("Site title is required")
        .isLength({ min: 3, max: 100 })
        .withMessage("Site title must be between 3 and 100 characters"),

    body("siteDescription")
        .trim()
        .notEmpty()
        .withMessage("Site description is required")
        .isLength({ min: 10, max: 300 })
        .withMessage("Site description must be between 10 and 300 characters"),

    body("contactEmail")
        .trim()
        .notEmpty()
        .withMessage("Contact email is required")
        .isEmail()
        .withMessage("Please provide a valid email address"),

    body("contactPhone")
        .trim()
        .notEmpty()
        .withMessage("Contact phone number is required")
        .isMobilePhone("any")
        .withMessage("Please provide a valid phone number"),

    body("location")
        .trim()
        .notEmpty()
        .withMessage("Location is required")
        .isLength({ min: 2, max: 100 })
        .withMessage("Location must be between 2 and 100 characters"),

    body("footerText")
        .trim()
        .notEmpty()
        .withMessage("Footer text is required")
        .isLength({ min: 5, max: 200 })
        .withMessage("Footer text must be between 5 and 200 characters"),

    body("isMaintenanceMode")
        .optional()
        .isBoolean()
        .withMessage("Maintenance mode must be a boolean"),
];

const updateSettingValidator = [
    body("siteTitle")
        .optional()
        .trim()
        .isLength({ min: 3, max: 100 })
        .withMessage("Site title must be between 3 and 100 characters"),

    body("siteDescription")
        .optional()
        .trim()
        .isLength({ min: 10, max: 300 })
        .withMessage("Site description must be between 10 and 300 characters"),

    body("contactEmail")
        .optional()
        .trim()
        .isEmail()
        .withMessage("Please provide a valid email address"),

    body("contactPhone")
        .optional()
        .trim()
        .isMobilePhone("any")
        .withMessage("Please provide a valid phone number"),

    body("location")
        .optional()
        .trim()
        .isLength({ min: 2, max: 100 })
        .withMessage("Location must be between 2 and 100 characters"),

    body("footerText")
        .optional()
        .trim()
        .isLength({ min: 5, max: 200 })
        .withMessage("Footer text must be between 5 and 200 characters"),

    body("isMaintenanceMode")
        .optional()
        .isBoolean()
        .withMessage("Maintenance mode must be a boolean"),
];

module.exports = {
    createSettingValidator,
    updateSettingValidator,
};