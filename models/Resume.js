const mongoose = require("mongoose");
const userOwnership = require("../helpers/userOwnership");

const resumeSchema = new mongoose.Schema(
    {
        ...userOwnership,

        title: {
            type: String,
            required: [true, "Resume title is required"],
            trim: true,
        },

        file: {
            url: {
                type: String,
                required: [true, "Resume URL is required"],
                trim: true,
            },

            public_id: {
                type: String,
                required: [true, "Cloudinary Public ID is required"],
            },
        },

        version: {
            type: Number,
            default: 1,
            min: 1,
        },

        isActive: {
            type: Boolean,
            default: true,
        },

        uploadedAt: {
            type: Date,
            default: Date.now,
        },
    },
    {
        timestamps: true,
    }
);

// One active resume per user
resumeSchema.index({
    user: 1,
    isActive: 1,
});

// Fast lookup
resumeSchema.index({
    user: 1,
    uploadedAt: -1,
});

module.exports = mongoose.model("Resume", resumeSchema);