const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
            maxlength: 200,
        },

        slug: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },

        excerpt: {
            type: String,
            required: true,
            maxlength: 500,
            trim: true,
        },

        content: {
            type: String,
            required: true,
        },

        featuredImage: {
            url: {
                type: String,
                default: "",
            },

            public_id: {
                type: String,
                default: "",
            },
        },

        category: {
            type: String,
            required: true,
            trim: true,
        },

        tags: [
            {
                type: String,
                trim: true,
            },
        ],

        status: {
            type: String,
            enum: ["draft", "published"],
            default: "draft",
            index: true,
        },

        isFeatured: {
            type: Boolean,
            default: false,
        },

        readTime: {
            type: String,
            default: "1 min read",
        },

        views: {
            type: Number,
            default: 0,
            min: 0,
        },

        seoTitle: {
            type: String,
            trim: true,
            default: "",
        },

        seoDescription: {
            type: String,
            trim: true,
            default: "",
        },

        publishedAt: {
            type: Date,
            default: null,
        },
    },
    {
        timestamps: true,
    }
);

blogSchema.index({ title: "text", content: "text" });

blogSchema.index({ category: 1 });

blogSchema.index({ createdAt: -1 });

module.exports = mongoose.model("Blog", blogSchema);