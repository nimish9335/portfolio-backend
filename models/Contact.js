const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
    {
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

// Text Search Index
contactSchema.index({
    name: "text",
    subject: "text",
    message: "text",
});

// Query Optimization Indexes
contactSchema.index({ createdAt: -1 });
contactSchema.index({ email: 1 });

module.exports = mongoose.model("Contact", contactSchema);