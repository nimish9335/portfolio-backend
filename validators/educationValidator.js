const { body } = require("express-validator");

const createEducationValidator = [
    body("institution")
        .trim()
        .notEmpty()
        .withMessage("Institution is required"),

    body("degree")
        .trim()
        .notEmpty()
        .withMessage("Degree is required"),

    body("fieldOfStudy")
        .trim()
        .notEmpty()
        .withMessage("Field of study is required"),

    body("startDate")
        .notEmpty()
        .withMessage("Start date is required")
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
        .trim(),

    body("location")
        .optional()
        .trim(),

    body("description")
        .optional()
        .trim(),

    body("order")
        .optional()
        .isInt({ min: 0 })
        .withMessage("Order must be a non-negative integer"),

    body("isActive")
        .optional()
        .isBoolean()
        .withMessage("isActive must be a boolean"),
];

const updateEducationValidator = [
    body("institution")
        .optional()
        .trim()
        .notEmpty()
        .withMessage("Institution cannot be empty"),

    body("degree")
        .optional()
        .trim()
        .notEmpty()
        .withMessage("Degree cannot be empty"),

    body("fieldOfStudy")
        .optional()
        .trim()
        .notEmpty()
        .withMessage("Field of study cannot be empty"),

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
        .trim(),

    body("location")
        .optional()
        .trim(),

    body("description")
        .optional()
        .trim(),

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
    createEducationValidator,
    updateEducationValidator,
};