const mongoose = require("mongoose");
const userOwnership = require("../helpers/userOwnership");

const educationSchema = new mongoose.Schema(
    {
        ...userOwnership,

        institution: {
            type: String,
            required: true,
            trim: true,
        },

        degree: {
            type: String,
            required: true,
            trim: true,
        },

        fieldOfStudy: {
            type: String,
            required: true,
            trim: true,
        },

        startDate: {
            type: Date,
            required: true,
        },

        endDate: {
            type: Date,
            default: null,
        },

        currentlyStudying: {
            type: Boolean,
            default: false,
        },

        grade: {
            type: String,
            trim: true,
            default: "",
        },

        location: {
            type: String,
            trim: true,
            default: "",
        },

        description: {
            type: String,
            trim: true,
            default: "",
        },

        order: {
            type: Number,
            default: 0,
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

// Optimized user-specific education queries
educationSchema.index({
    user: 1,
    order: 1,
});

module.exports = mongoose.model("Education", educationSchema);