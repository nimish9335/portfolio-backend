const mongoose = require("mongoose");

const visitorSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
            index: true,
        },

        ip: {
            type: String,
            required: true,
            trim: true,
        },

        country: {
            type: String,
            default: "Unknown",
            trim: true,
        },

        city: {
            type: String,
            default: "Unknown",
            trim: true,
        },

        browser: {
            type: String,
            default: "Unknown",
            trim: true,
        },

        os: {
            type: String,
            default: "Unknown",
            trim: true,
        },

        device: {
            type: String,
            enum: ["Desktop", "Mobile", "Tablet", "Bot", "Unknown"],
            default: "Unknown",
        },

        page: {
            type: String,
            required: true,
            trim: true,
        },

        referrer: {
            type: String,
            default: "Direct",
            trim: true,
        },

        userAgent: {
            type: String,
            required: true,
            trim: true,
        },

        visitedAt: {
            type: Date,
            default: Date.now,
            index: true,
        },
    },
    {
        timestamps: true,
    }
);

// Performance Indexes
visitorSchema.index({ user: 1, visitedAt: -1 });
visitorSchema.index({ user: 1, page: 1 });
visitorSchema.index({ user: 1, browser: 1 });
visitorSchema.index({ user: 1, device: 1 });
visitorSchema.index({ user: 1, country: 1 });

module.exports = mongoose.model("Visitor", visitorSchema);