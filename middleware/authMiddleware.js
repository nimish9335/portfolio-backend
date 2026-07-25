const jwt = require("jsonwebtoken");
const User = require("../models/User");
const asyncHandler = require("../utils/asyncHandler");
const ApiError = require("../utils/ApiError");

const protect = asyncHandler(async (req, res, next) => {
    const accessToken = req.cookies.accessToken;

    if (!accessToken) {
        throw new ApiError(
            401,
            "Unauthorized. Please login."
        );
    }

    let decoded;

    try {
        decoded = jwt.verify(
            accessToken,
            process.env.ACCESS_TOKEN_SECRET
        );
    } catch (error) {
        throw new ApiError(
            401,
            "Invalid or expired access token."
        );
    }

    const user = await User.findById(decoded.id);

    if (!user) {
        throw new ApiError(
            401,
            "User not found."
        );
    }

    req.user = user;

    next();
});

module.exports = {
    protect,
};