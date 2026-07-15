const mongoose = require("mongoose");

const settingSchema = new mongoose.Schema(
    {
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

module.exports = mongoose.model("Setting", settingSchema);