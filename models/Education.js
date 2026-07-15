const mongoose = require("mongoose");

const educationSchema = new mongoose.Schema(
    {
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
            index: true,
        },

        isActive: {
            type: Boolean,
            default: true,
            index: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Education", educationSchema);