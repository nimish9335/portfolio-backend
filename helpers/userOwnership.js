const mongoose = require("mongoose");

const userOwnership = {
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        index: true,
    },
};

module.exports = userOwnership;