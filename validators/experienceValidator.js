const { body } = require("express-validator");

const createExperienceValidator = [
    body("company")
        .trim()
        .notEmpty()
        .withMessage("Company is required"),

    body("position")
        .trim()
        .notEmpty()
        .withMessage("Position is required"),

    body("employmentType")
        .optional()
        .isIn([
            "Full-time",
            "Part-time",
            "Internship",
            "Contract",
            "Freelance",
        ])
        .withMessage("Invalid employment type"),

    body("location")
        .optional()
        .trim(),

    body("startDate")
        .notEmpty()
        .withMessage("Start date is required")
        .isISO8601()
        .withMessage("Invalid start date"),

    body("endDate")
        .optional({ nullable: true, checkFalsy: true })
        .isISO8601()
        .withMessage("Invalid end date"),

    body("currentlyWorking")
        .optional()
        .isBoolean()
        .withMessage("Currently working must be a boolean"),

    body("description")
        .optional()
        .trim(),

    body("technologies")
        .optional()
        .isArray()
        .withMessage("Technologies must be an array"),

    body("order")
        .optional()
        .isInt({ min: 0 })
        .withMessage("Order must be a non-negative integer"),

    body("isActive")
        .optional()
        .isBoolean()
        .withMessage("isActive must be a boolean"),
];

const updateExperienceValidator = [
    body("company")
        .optional()
        .trim()
        .notEmpty()
        .withMessage("Company cannot be empty"),

    body("position")
        .optional()
        .trim()
        .notEmpty()
        .withMessage("Position cannot be empty"),

    body("employmentType")
        .optional()
        .isIn([
            "Full-time",
            "Part-time",
            "Internship",
            "Contract",
            "Freelance",
        ])
        .withMessage("Invalid employment type"),

    body("location")
        .optional()
        .trim(),

    body("startDate")
        .optional()
        .isISO8601()
        .withMessage("Invalid start date"),

    body("endDate")
        .optional({ nullable: true, checkFalsy: true })
        .isISO8601()
        .withMessage("Invalid end date"),

    body("currentlyWorking")
        .optional()
        .isBoolean()
        .withMessage("Currently working must be a boolean"),

    body("description")
        .optional()
        .trim(),

    body("technologies")
        .optional()
        .isArray()
        .withMessage("Technologies must be an array"),

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
    createExperienceValidator,
    updateExperienceValidator,
};