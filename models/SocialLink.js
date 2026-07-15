const mongoose = require("mongoose");

const socialLinkSchema = new mongoose.Schema(
    {
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

// Faster sorting
socialLinkSchema.index({ order: 1 });

// Faster public queries
socialLinkSchema.index({ isActive: 1 });

module.exports = mongoose.model("SocialLink", socialLinkSchema);