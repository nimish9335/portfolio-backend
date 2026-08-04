const mongoose = require("mongoose");
const userOwnership = require("../helpers/userOwnership");

const contactSchema = new mongoose.Schema(
    {
        ...userOwnership,

        name: {
            type: String,
            required: true,
            trim: true,
            maxlength: 100,
        },

        email: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
        },

        subject: {
            type: String,
            required: true,
            trim: true,
            maxlength: 200,
        },

        message: {
            type: String,
            required: true,
            trim: true,
            maxlength: 5000,
        },

        status: {
            type: String,
            enum: ["unread", "read"],
            default: "unread",
            index: true,
        },

        readAt: {
            type: Date,
            default: null,
        },

        replied: {
            type: Boolean,
            default: false,
            index: true,
        },

        repliedAt: {
            type: Date,
            default: null,
        },
    },
    {
        timestamps: true,
    }
);

// Text Search
contactSchema.index({
    name: "text",
    subject: "text",
    message: "text",
});

// Performance Indexes
contactSchema.index({ user: 1, createdAt: -1 });
contactSchema.index({ user: 1, status: 1 });
contactSchema.index({ user: 1, replied: 1 });
contactSchema.index({ user: 1, email: 1 });

module.exports = mongoose.model("Contact", contactSchema);