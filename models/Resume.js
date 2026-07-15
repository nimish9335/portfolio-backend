const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema(
    {
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

// Index for faster lookup of active resume
resumeSchema.index({ isActive: 1 });

module.exports = mongoose.model("Resume", resumeSchema);