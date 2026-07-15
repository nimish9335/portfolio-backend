const { body } = require("express-validator");

const createCertificationValidator = [
    body("title")
        .trim()
        .notEmpty()
        .withMessage("Title is required"),

    body("issuingOrganization")
        .trim()
        .notEmpty()
        .withMessage("Issuing organization is required"),

    body("issueDate")
        .notEmpty()
        .withMessage("Issue date is required")
        .isISO8601()
        .withMessage("Invalid issue date"),

    body("expiryDate")
        .optional({ nullable: true, checkFalsy: true })
        .isISO8601()
        .withMessage("Invalid expiry date"),

    body("credentialId")
        .optional()
        .trim(),

    body("credentialUrl")
        .optional({ checkFalsy: true })
        .isURL()
        .withMessage("Invalid credential URL"),

    body("description")
        .optional()
        .trim(),

    body("skills")
        .optional()
        .isArray()
        .withMessage("Skills must be an array"),

    body("order")
        .optional()
        .isInt({ min: 0 })
        .withMessage("Order must be a non-negative integer"),

    body("isActive")
        .optional()
        .isBoolean()
        .withMessage("isActive must be a boolean"),
];

const updateCertificationValidator = [
    body("title")
        .optional()
        .trim()
        .notEmpty()
        .withMessage("Title cannot be empty"),

    body("issuingOrganization")
        .optional()
        .trim()
        .notEmpty()
        .withMessage("Issuing organization cannot be empty"),

    body("issueDate")
        .optional()
        .isISO8601()
        .withMessage("Invalid issue date"),

    body("expiryDate")
        .optional({ nullable: true, checkFalsy: true })
        .isISO8601()
        .withMessage("Invalid expiry date"),

    body("credentialId")
        .optional()
        .trim(),

    body("credentialUrl")
        .optional({ checkFalsy: true })
        .isURL()
        .withMessage("Invalid credential URL"),

    body("description")
        .optional()
        .trim(),

    body("skills")
        .optional()
        .isArray()
        .withMessage("Skills must be an array"),

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
    createCertificationValidator,
    updateCertificationValidator,
};