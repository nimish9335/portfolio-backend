const mongoose = require("mongoose");
const userOwnership = require("../helpers/userOwnership");

const experienceSchema = new mongoose.Schema(
    {
        ...userOwnership,

        company: {
            type: String,
            required: true,
            trim: true,
        },

        position: {
            type: String,
            required: true,
            trim: true,
        },

        employmentType: {
            type: String,
            enum: [
                "Full-time",
                "Part-time",
                "Internship",
                "Contract",
                "Freelance",
            ],
            default: "Full-time",
        },

        location: {
            type: String,
            trim: true,
            default: "",
        },

        startDate: {
            type: Date,
            required: true,
        },

        endDate: {
            type: Date,
            default: null,
        },

        currentlyWorking: {
            type: Boolean,
            default: false,
        },

        description: {
            type: String,
            trim: true,
            default: "",
        },

        technologies: {
            type: [String],
            default: [],
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

// Optimized user-specific experience queries
experienceSchema.index({
    user: 1,
    order: 1,
});

module.exports = mongoose.model("Experience", experienceSchema);