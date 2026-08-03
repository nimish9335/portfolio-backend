const { body } = require("express-validator");

const updateContactValidator = [
    body("status")
        .optional()
        .isIn(["read", "unread"])
        .withMessage("Status must be either read or unread"),

    body("replied")
        .optional()
        .isBoolean()
        .withMessage("Replied must be a boolean"),
];

module.exports = {
    updateContactValidator,
};