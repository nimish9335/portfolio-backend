const mongoose = require("mongoose");
const userOwnership = require("../helpers/userOwnership");

const projectSchema = new mongoose.Schema(
    {
        ...userOwnership,

        title: {
            type: String,
            required: true,
            trim: true,
            maxlength: 100,
        },

        description: {
            type: String,
            required: true,
            trim: true,
        },

        techStack: [
            {
                type: String,
                trim: true,
            },
        ],

        githubUrl: {
            type: String,
            default: "",
            trim: true,
        },

        liveUrl: {
            type: String,
            default: "",
            trim: true,
        },

        thumbnail: {
            url: {
                type: String,
                required: true,
            },

            public_id: {
                type: String,
                required: true,
            },
        },

        gallery: [
            {
                url: String,
                public_id: String,
            },
        ],

        featured: {
            type: Boolean,
            default: false,
        },

        order: {
            type: Number,
            default: 0,
        },

        isPublished: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
    }
);

// Optimized user-specific project ordering
projectSchema.index({
    user: 1,
    order: 1,
    createdAt: -1,
});

module.exports = mongoose.model("Project", projectSchema);