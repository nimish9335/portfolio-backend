const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const ROLES = require("../constants/roles");

const userSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: [true, "Full name is required"],
            trim: true,
            minlength: 3,
            maxlength: 50,
        },

        email: {
            type: String,
            required: [true, "Email is required"],
            unique: true,
            lowercase: true,
            trim: true,
        },

        password: {
            type: String,
            required: [true, "Password is required"],
            minlength: 6,
            select: false,
        },

        role: {
            type: String,
            enum: Object.values(ROLES),
            default: ROLES.ADMIN,
        },

        avatar: {
            public_id: {
                type: String,
                default: "",
            },

            url: {
                type: String,
                default: "",
            },
        },
    },
    {
        timestamps: true,
    }
);

userSchema.pre("save", async function (next) {
    // Password change nahi hua to hash mat karo
    if (!this.isModified("password")) {
        return next();
    }

    // Password hash karo
    this.password = await bcrypt.hash(this.password, 10);

    next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;