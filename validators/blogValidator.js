const { body } = require("express-validator");

const blogValidator = [

    body("title")
        .trim()
        .notEmpty()
        .withMessage("Title is required")
        .isLength({ max: 200 })
        .withMessage("Title cannot exceed 200 characters"),

    body("slug")
        .trim()
        .notEmpty()
        .withMessage("Slug is required"),

    body("excerpt")
        .trim()
        .notEmpty()
        .withMessage("Excerpt is required")
        .isLength({ max: 500 })
        .withMessage("Excerpt cannot exceed 500 characters"),

    body("content")
        .trim()
        .notEmpty()
        .withMessage("Content is required"),

    body("category")
        .trim()
        .notEmpty()
        .withMessage("Category is required"),

    body("tags")
        .optional()
        .isArray()
        .withMessage("Tags must be an array"),

    body("status")
        .optional()
        .isIn(["draft", "published"])
        .withMessage("Invalid status"),

    body("isFeatured")
        .optional()
        .isBoolean()
        .withMessage("isFeatured must be boolean"),

    body("seoTitle")
        .optional()
        .trim(),

    body("seoDescription")
        .optional()
        .trim(),
];

module.exports = {
    blogValidator,
};