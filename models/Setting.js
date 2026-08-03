const mongoose = require("mongoose");
const userOwnership = require("../helpers/userOwnership");

const settingSchema = new mongoose.Schema(
    {
        ...userOwnership,

        siteTitle: {
            type: String,
            required: [true, "Site title is required"],
            trim: true,
        },

        siteDescription: {
            type: String,
            required: [true, "Site description is required"],
            trim: true,
        },

        contactEmail: {
            type: String,
            required: [true, "Contact email is required"],
            trim: true,
            lowercase: true,
        },

        contactPhone: {
            type: String,
            required: [true, "Contact phone number is required"],
            trim: true,
        },

        location: {
            type: String,
            required: [true, "Location is required"],
            trim: true,
        },

        footerText: {
            type: String,
            required: [true, "Footer text is required"],
            trim: true,
        },

        isMaintenanceMode: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);

// One settings document per user
settingSchema.index({
    user: 1,
});

module.exports = mongoose.model("Setting", settingSchema);