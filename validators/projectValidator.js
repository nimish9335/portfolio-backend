const { body } = require("express-validator");

const createProjectValidator = [
    body("title")
        .trim()
        .notEmpty()
        .withMessage("Project title is required")
        .bail()
        .isLength({ min: 3, max: 100 })
        .withMessage("Title must be between 3 and 100 characters"),

    body("description")
        .trim()
        .notEmpty()
        .withMessage("Project description is required")
        .bail()
        .isLength({ min: 20 })
        .withMessage("Description must be at least 20 characters"),

    body("techStack")
        .isArray({ min: 1 })
        .withMessage("Tech stack must contain at least one technology"),

    body("githubUrl")
        .optional()
        .isURL()
        .withMessage("GitHub URL must be valid"),

    body("liveUrl")
        .optional()
        .isURL()
        .withMessage("Live URL must be valid"),

    body("featured")
        .optional()
        .isBoolean()
        .withMessage("Featured must be a boolean"),
];

module.exports = {
    createProjectValidator,
};