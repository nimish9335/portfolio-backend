const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Skill name is required"],
            trim: true,
        },

        category: {
            type: String,
            required: [true, "Category is required"],
            trim: true,
            enum: [
                "Frontend",
                "Backend",
                "Database",
                "Programming Language",
                "Tools",
                "DevOps",
                "Cloud",
                "Other",
            ],
        },

        level: {
            type: Number,
            required: [true, "Skill level is required"],
            min: [0, "Level cannot be less than 0"],
            max: [100, "Level cannot be greater than 100"],
        },

        icon: {
            url: {
                type: String,
                default: "",
            },
            public_id: {
                type: String,
                default: "",
            },
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

skillSchema.index({ order: 1 });

module.exports = mongoose.model("Skill", skillSchema);