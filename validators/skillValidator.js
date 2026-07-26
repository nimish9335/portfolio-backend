const { body } = require("express-validator");

const categories = [
    "Frontend",
    "Backend",
    "Database",
    "Programming Language",
    "Tools",
    "DevOps",
    "Cloud",
    "Other",
];


// ==============================
// CREATE SKILL VALIDATOR
// ==============================

const createSkillValidator = [
    body("name")
        .trim()
        .notEmpty()
        .withMessage("Skill name is required")
        .bail()
        .isLength({ min: 1, max: 50 })
        .withMessage("Skill name cannot exceed 50 characters"),

    body("category")
        .trim()
        .notEmpty()
        .withMessage("Category is required")
        .bail()
        .isIn(categories)
        .withMessage("Invalid category"),

    body("level")
        .notEmpty()
        .withMessage("Skill level is required")
        .bail()
        .isInt({ min: 0, max: 100 })
        .withMessage("Skill level must be between 0 and 100"),

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
// UPDATE SKILL VALIDATOR
// ==============================

const updateSkillValidator = [
    body("name")
        .optional()
        .trim()
        .notEmpty()
        .withMessage("Skill name cannot be empty")
        .bail()
        .isLength({ max: 50 })
        .withMessage("Skill name cannot exceed 50 characters"),

    body("category")
        .optional()
        .trim()
        .isIn(categories)
        .withMessage("Invalid category"),

    body("level")
        .optional()
        .isInt({ min: 0, max: 100 })
        .withMessage("Skill level must be between 0 and 100"),

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
    createSkillValidator,
    updateSkillValidator,
};