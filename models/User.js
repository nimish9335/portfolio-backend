const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const ROLES = require("../constants/roles");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: [true, "Full name is required"],
            trim: true,
            minlength: 3,
            maxlength: 50,
        },

        username: {
            type: String,
            required: [true, "Username is required"],
            unique: true,
            lowercase: true,
            trim: true,
            minlength: 3,
            maxlength: 30,
            match: [
                /^[a-z0-9-]+$/,
                "Username can only contain lowercase letters, numbers, and hyphens",
            ],
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
            minlength: 8,
            select: false,
        },

        role: {
            type: String,
            enum: Object.values(ROLES),
            default: ROLES.USER,
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
        headline: {
            type: String,
            trim: true,
            maxlength: 120,
            default: "",
        },

        bio: {
            type: String,
            trim: true,
            maxlength: 1000,
            default: "",
        },

        location: {
            type: String,
            trim: true,
            maxlength: 100,
            default: "",
        },

        phone: {
            type: String,
            trim: true,
            maxlength: 20,
            default: "",
        },
    },
    {
        timestamps: true,
    }
);

// Hash password before saving
userSchema.pre("save", async function () {
    if (!this.isModified("password")) {
        return;
    }

    this.password = await bcrypt.hash(this.password, 10);
});

// Compare entered password with hashed password
userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

// Generate short-lived access token
userSchema.methods.generateAccessToken = function () {
    return jwt.sign(
        {
            id: this._id,
            role: this.role,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
        }
    );
};

// Generate long-lived refresh token
userSchema.methods.generateRefreshToken = function () {
    return jwt.sign(
        {
            id: this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
        }
    );
};

const User = mongoose.model("User", userSchema);

module.exports = User;