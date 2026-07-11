const { param } = require("express-validator");
const mongoose = require("mongoose");

const validateObjectId = (field = "id") => {
    return param(field)
        .custom((value) => mongoose.Types.ObjectId.isValid(value))
        .withMessage(`Invalid ${field}`);
};

module.exports = {
    validateObjectId,
};