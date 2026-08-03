const mongoose = require("mongoose");
const userOwnership = require("../helpers/userOwnership");

const testimonialSchema = new mongoose.Schema(
    {
        ...userOwnership,

        name: {
            type: String,
            required: true,
            trim: true,
        },

        designation: {
            type: String,
            required: true,
            trim: true,
        },

        company: {
            type: String,
            trim: true,
            default: "",
        },

        message: {
            type: String,
            required: true,
            trim: true,
        },

        rating: {
            type: Number,
            required: true,
            min: 1,
            max: 5,
        },

        featured: {
            type: Boolean,
            default: false,
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

// Optimized user-specific testimonial queries
testimonialSchema.index({
    user: 1,
    order: 1,
});

module.exports = mongoose.model("Testimonial", testimonialSchema);