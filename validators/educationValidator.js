const { body } = require("express-validator");


// ==============================
// CREATE EDUCATION VALIDATOR
// ==============================

const createEducationValidator = [
    body("institution")
        .trim()
        .notEmpty()
        .withMessage("Institution is required")
        .bail()
        .isLength({ max: 150 })
        .withMessage("Institution cannot exceed 150 characters"),

    body("degree")
        .trim()
        .notEmpty()
        .withMessage("Degree is required")
        .bail()
        .isLength({ max: 100 })
        .withMessage("Degree cannot exceed 100 characters"),

    body("fieldOfStudy")
        .trim()
        .notEmpty()
        .withMessage("Field of study is required")
        .bail()
        .isLength({ max: 100 })
        .withMessage("Field of study cannot exceed 100 characters"),

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

    body("currentlyStudying")
        .optional()
        .isBoolean()
        .withMessage("Currently studying must be a boolean"),

    body("grade")
        .optional()
        .trim()
        .isLength({ max: 50 })
        .withMessage("Grade cannot exceed 50 characters"),

    body("location")
        .optional()
        .trim()
        .isLength({ max: 100 })
        .withMessage("Location cannot exceed 100 characters"),

    body("description")
        .optional()
        .trim()
        .isLength({ max: 1000 })
        .withMessage("Description cannot exceed 1000 characters"),

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
// UPDATE EDUCATION VALIDATOR
// ==============================

const updateEducationValidator = [
    body("institution")
        .optional()
        .trim()
        .notEmpty()
        .withMessage("Institution cannot be empty")
        .bail()
        .isLength({ max: 150 })
        .withMessage("Institution cannot exceed 150 characters"),

    body("degree")
        .optional()
        .trim()
        .notEmpty()
        .withMessage("Degree cannot be empty")
        .bail()
        .isLength({ max: 100 })
        .withMessage("Degree cannot exceed 100 characters"),

    body("fieldOfStudy")
        .optional()
        .trim()
        .notEmpty()
        .withMessage("Field of study cannot be empty")
        .bail()
        .isLength({ max: 100 })
        .withMessage("Field of study cannot exceed 100 characters"),

    body("startDate")
        .optional()
        .isISO8601()
        .withMessage("Invalid start date"),

    body("endDate")
        .optional({ nullable: true, checkFalsy: true })
        .isISO8601()
        .withMessage("Invalid end date"),

    body("currentlyStudying")
        .optional()
        .isBoolean()
        .withMessage("Currently studying must be a boolean"),

    body("grade")
        .optional()
        .trim()
        .isLength({ max: 50 })
        .withMessage("Grade cannot exceed 50 characters"),

    body("location")
        .optional()
        .trim()
        .isLength({ max: 100 })
        .withMessage("Location cannot exceed 100 characters"),

    body("description")
        .optional()
        .trim()
        .isLength({ max: 1000 })
        .withMessage("Description cannot exceed 1000 characters"),

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
    createEducationValidator,
    updateEducationValidator,
};