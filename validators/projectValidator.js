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
        .notEmpty()
        .withMessage("Tech stack is required"),

    body("githubUrl")
        .optional({ values: "falsy" })
        .isURL()
        .withMessage("GitHub URL must be valid"),

    body("liveUrl")
        .optional({ values: "falsy" })
        .isURL()
        .withMessage("Live URL must be valid"),

    body("featured")
        .optional({ values: "falsy" })
        .isBoolean()
        .withMessage("Featured must be a boolean"),
];

module.exports = {
    createProjectValidator,
};