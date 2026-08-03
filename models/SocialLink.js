const mongoose = require("mongoose");
const userOwnership = require("../helpers/userOwnership");

const socialLinkSchema = new mongoose.Schema(
    {
        ...userOwnership,

        platform: {
            type: String,
            required: [true, "Platform name is required"],
            trim: true,
        },

        url: {
            type: String,
            required: [true, "Profile URL is required"],
            trim: true,
        },

        icon: {
            type: String,
            required: [true, "Icon name is required"],
            trim: true,
            lowercase: true,
        },

        order: {
            type: Number,
            required: [true, "Display order is required"],
            min: 0,
        },

        isActive: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
    }
);

// User specific sorting
socialLinkSchema.index({
    user: 1,
    order: 1,
});

// Fast lookup
socialLinkSchema.index({
    user: 1,
    isActive: 1,
});

module.exports = mongoose.model("SocialLink", socialLinkSchema);