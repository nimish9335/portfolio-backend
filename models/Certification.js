const mongoose = require("mongoose");

const certificationSchema = new mongoose.Schema(
    {
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

module.exports = mongoose.model("Certification", certificationSchema);