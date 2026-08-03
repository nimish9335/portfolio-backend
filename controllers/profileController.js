const User = require("../models/User");
const asyncHandler = require("../utils/asyncHandler");
const ApiError = require("../utils/ApiError");
const ApiResponse = require("../utils/ApiResponse");

// ==============================
// GET CURRENT USER PROFILE
// ==============================

const getProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);

    if (!user) {
        throw new ApiError(404, "User not found.");
    }

    return res.status(200).json(
        new ApiResponse(
            200,
            user,
            "Profile fetched successfully."
        )
    );
});


// ==============================
// UPDATE CURRENT USER PROFILE
// ==============================

const updateProfile = asyncHandler(async (req, res) => {
    const {
        fullName,
        headline,
        bio,
        location,
        phone,
    } = req.body;

    const user = await User.findById(req.user._id);

    if (!user) {
        throw new ApiError(404, "User not found.");
    }

    if (fullName !== undefined) {
        user.fullName = fullName;
    }

    if (headline !== undefined) {
        user.headline = headline;
    }

    if (bio !== undefined) {
        user.bio = bio;
    }

    if (location !== undefined) {
        user.location = location;
    }

    if (phone !== undefined) {
        user.phone = phone;
    }

    await user.save();

    return res.status(200).json(
        new ApiResponse(
            200,
            user,
            "Profile updated successfully."
        )
    );
});

const togglePortfolioVisibility = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);

    if (!user) {
        throw new ApiError(404, "User not found.");
    }

    user.portfolioPublished = !user.portfolioPublished;

    await user.save();

    return res.status(200).json(
        new ApiResponse(
            200,
            {
                portfolioPublished: user.portfolioPublished,
            },
            `Portfolio ${
                user.portfolioPublished ? "published" : "unpublished"
            } successfully.`
        )
    );
});

module.exports = {
    getProfile,
    updateProfile,
    togglePortfolioVisibility,
};