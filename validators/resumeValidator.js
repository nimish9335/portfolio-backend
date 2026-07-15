const { body } = require("express-validator");

const createResumeValidator = [
    body("title")
        .trim()
        .notEmpty()
        .withMessage("Resume title is required")
        .isLength({ min: 3, max: 100 })
        .withMessage("Resume title must be between 3 and 100 characters"),
];

const updateResumeValidator = [
    body("title")
        .optional()
        .trim()
        .isLength({ min: 3, max: 100 })
        .withMessage("Resume title must be between 3 and 100 characters"),
];

module.exports = {
    createResumeValidator,
    updateResumeValidator,
};