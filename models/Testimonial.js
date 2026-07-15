const mongoose = require("mongoose");

const testimonialSchema = new mongoose.Schema(
    {
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

module.exports = mongoose.model("Testimonial", testimonialSchema);