const { body } = require("express-validator");

const contactValidator = [

    body("name")
        .trim()
        .notEmpty()
        .withMessage("Name is required")
        .isLength({ max: 100 })
        .withMessage("Name cannot exceed 100 characters"),

    body("email")
        .trim()
        .notEmpty()
        .withMessage("Email is required")
        .isEmail()
        .withMessage("Please provide a valid email address")
        .normalizeEmail(),

    body("subject")
        .trim()
        .notEmpty()
        .withMessage("Subject is required")
        .isLength({ max: 200 })
        .withMessage("Subject cannot exceed 200 characters"),

    body("message")
        .trim()
        .notEmpty()
        .withMessage("Message is required")
        .isLength({ max: 5000 })
        .withMessage("Message cannot exceed 5000 characters"),

];

module.exports = {
    contactValidator,
};