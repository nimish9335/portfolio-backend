const { body } = require("express-validator");

const loginValidator = [
    body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .bail()
    .isEmail()
    .withMessage("Please provide a valid email"),

    body("password")
    .notEmpty()
    .withMessage("Password is required")
    .bail()
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long"),
];

module.exports = {
    loginValidator,
};