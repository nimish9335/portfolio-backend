const { body } = require("express-validator");

const employmentTypes = [
    "Full-time",
    "Part-time",
    "Internship",
    "Contract",
    "Freelance",
];


// ==============================
// CREATE EXPERIENCE VALIDATOR
// ==============================

const createExperienceValidator = [
    body("company")
        .trim()
        .notEmpty()
        .withMessage("Company is required")
        .bail()
        .isLength({ max: 100 })
        .withMessage("Company name cannot exceed 100 characters"),

    body("position")
        .trim()
        .notEmpty()
        .withMessage("Position is required")
        .bail()
        .isLength({ max: 100 })
        .withMessage("Position cannot exceed 100 characters"),

    body("employmentType")
        .optional()
        .isIn(employmentTypes)
        .withMessage("Invalid employment type"),

    body("location")
        .optional()
        .trim()
        .isLength({ max: 100 })
        .withMessage("Location cannot exceed 100 characters"),

    body("startDate")
        .notEmpty()
        .withMessage("Start date is required")
        .bail()
        .isISO8601()
        .withMessage("Invalid start date"),

    body("endDate")
        .optional({ nullable: true, checkFalsy: true })
        .isISO8601()
        .withMessage("Invalid end date"),

    body("currentlyWorking")
        .optional()
        .isBoolean()
        .withMessage("Currently working must be true or false"),

    body("description")
        .optional()
        .trim()
        .isLength({ max: 2000 })
        .withMessage("Description cannot exceed 2000 characters"),

    body("technologies")
        .optional()
        .isArray()
        .withMessage("Technologies must be an array"),

    body("order")
        .optional()
        .isInt({ min: 0 })
        .withMessage("Order must be 0 or greater"),

    body("isActive")
        .optional()
        .isBoolean()
        .withMessage("isActive must be true or false"),
];


// ==============================
// UPDATE EXPERIENCE VALIDATOR
// ==============================

const updateExperienceValidator = [
    body("company")
        .optional()
        .trim()
        .notEmpty()
        .withMessage("Company cannot be empty")
        .bail()
        .isLength({ max: 100 })
        .withMessage("Company name cannot exceed 100 characters"),

    body("position")
        .optional()
        .trim()
        .notEmpty()
        .withMessage("Position cannot be empty")
        .bail()
        .isLength({ max: 100 })
        .withMessage("Position cannot exceed 100 characters"),

    body("employmentType")
        .optional()
        .isIn(employmentTypes)
        .withMessage("Invalid employment type"),

    body("location")
        .optional()
        .trim()
        .isLength({ max: 100 })
        .withMessage("Location cannot exceed 100 characters"),

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
        .withMessage("Currently working must be true or false"),

    body("description")
        .optional()
        .trim()
        .isLength({ max: 2000 })
        .withMessage("Description cannot exceed 2000 characters"),

    body("technologies")
        .optional()
        .isArray()
        .withMessage("Technologies must be an array"),

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
    createExperienceValidator,
    updateExperienceValidator,
};