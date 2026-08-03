const mongoose = require("mongoose");
const userOwnership = require("../helpers/userOwnership");

const certificationSchema = new mongoose.Schema(
    {
        ...userOwnership,

        title: {
            type: String,
            required: true,
            trim: true,
        },

        issuingOrganization: {
            type: String,
            required: true,
            trim: true,
        },

        issueDate: {
            type: Date,
            required: true,
        },

        expiryDate: {
            type: Date,
            default: null,
        },

        credentialId: {
            type: String,
            trim: true,
            default: "",
        },

        credentialUrl: {
            type: String,
            trim: true,
            default: "",
        },

        description: {
            type: String,
            trim: true,
            default: "",
        },

        skills: {
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

// Optimized user-specific certification queries
certificationSchema.index({
    user: 1,
    order: 1,
});

module.exports = mongoose.model("Certification", certificationSchema);