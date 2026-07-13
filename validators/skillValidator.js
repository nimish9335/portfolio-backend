const { body } = require("express-validator");

const createSkillValidator = [
    body("name")
        .trim()
        .notEmpty()
        .withMessage("Skill name is required"),

    body("category")
        .trim()
        .notEmpty()
        .withMessage("Category is required")
        .isIn([
            "Frontend",
            "Backend",
            "Database",
            "Programming Language",
            "Tools",
            "DevOps",
            "Cloud",
            "Other",
        ])
        .withMessage("Invalid category"),

    body("level")
        .notEmpty()
        .withMessage("Skill level is required")
        .isInt({ min: 0, max: 100 })
        .withMessage("Skill level must be between 0 and 100"),

    body("order")
        .optional()
        .isInt({ min: 0 })
        .withMessage("Order must be a positive number"),

    body("isActive")
        .optional()
        .isBoolean()
        .withMessage("isActive must be true or false"),
];

const updateSkillValidator = [
    body("name")
        .optional()
        .trim()
        .notEmpty()
        .withMessage("Skill name cannot be empty"),

    body("category")
        .optional()
        .trim()
        .isIn([
            "Frontend",
            "Backend",
            "Database",
            "Programming Language",
            "Tools",
            "DevOps",
            "Cloud",
            "Other",
        ])
        .withMessage("Invalid category"),

    body("level")
        .optional()
        .isInt({ min: 0, max: 100 })
        .withMessage("Skill level must be between 0 and 100"),

    body("order")
        .optional()
        .isInt({ min: 0 })
        .withMessage("Order must be a positive number"),

    body("isActive")
        .optional()
        .isBoolean()
        .withMessage("isActive must be true or false"),
];

module.exports = {
    createSkillValidator,
    updateSkillValidator,
};