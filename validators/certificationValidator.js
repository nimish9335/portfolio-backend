const { body } = require("express-validator");

const createCertificationValidator = [
    body("title")
        .trim()
        .notEmpty()
        .withMessage("Title is required")
        .bail()
        .isLength({ max: 150 })
        .withMessage("Title cannot exceed 150 characters"),

    body("issuingOrganization")
        .trim()
        .notEmpty()
        .withMessage("Issuing organization is required")
        .bail()
        .isLength({ max: 150 })
        .withMessage("Issuing organization cannot exceed 150 characters"),

    body("issueDate")
        .notEmpty()
        .withMessage("Issue date is required")
        .bail()
        .isISO8601()
        .withMessage("Invalid issue date"),

    body("expiryDate")
        .optional({ nullable: true, checkFalsy: true })
        .isISO8601()
        .withMessage("Invalid expiry date"),

    body("credentialId")
        .optional()
        .trim()
        .isLength({ max: 100 })
        .withMessage("Credential ID cannot exceed 100 characters"),

    body("credentialUrl")
        .optional({ checkFalsy: true })
        .isURL()
        .withMessage("Credential URL must be valid"),

    body("description")
        .optional()
        .trim()
        .isLength({ max: 2000 })
        .withMessage("Description cannot exceed 2000 characters"),

    body("skills")
        .optional()
        .isArray()
        .withMessage("Skills must be an array"),

    body("order")
        .optional()
        .isInt({ min: 0 })
        .withMessage("Order must be 0 or greater"),

    body("isActive")
        .optional()
        .isBoolean()
        .withMessage("isActive must be true or false"),
];

const updateCertificationValidator = [
    body("title")
        .optional()
        .trim()
        .notEmpty()
        .withMessage("Title cannot be empty")
        .bail()
        .isLength({ max: 150 })
        .withMessage("Title cannot exceed 150 characters"),

    body("issuingOrganization")
        .optional()
        .trim()
        .notEmpty()
        .withMessage("Issuing organization cannot be empty")
        .bail()
        .isLength({ max: 150 })
        .withMessage("Issuing organization cannot exceed 150 characters"),

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
        .trim()
        .isLength({ max: 100 })
        .withMessage("Credential ID cannot exceed 100 characters"),

    body("credentialUrl")
        .optional({ checkFalsy: true })
        .isURL()
        .withMessage("Credential URL must be valid"),

    body("description")
        .optional()
        .trim()
        .isLength({ max: 2000 })
        .withMessage("Description cannot exceed 2000 characters"),

    body("skills")
        .optional()
        .isArray()
        .withMessage("Skills must be an array"),

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
    createCertificationValidator,
    updateCertificationValidator,
};