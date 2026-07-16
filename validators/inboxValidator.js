const { body } = require("express-validator");

const bulkIdsValidator = [
    body("ids")
        .isArray({ min: 1 })
        .withMessage("ids must be a non-empty array"),

    body("ids.*")
        .isMongoId()
        .withMessage("Each id must be a valid MongoDB ObjectId"),
];

module.exports = {
    bulkIdsValidator,
};