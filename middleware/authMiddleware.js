const jwt = require("jsonwebtoken");
const User = require("../models/User");
const asyncHandler = require("../utils/asyncHandler");
const ApiError = require("../utils/ApiError");

const protect = asyncHandler(async (req, res, next) => {
    let token;

    // Cookie
    if (req.cookies?.accessToken) {
        token = req.cookies.accessToken;
    }

    // Bearer Token
    if (
        !token &&
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer ")
    ) {
        token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
        throw new ApiError(
            401,
            "Unauthorized. Please login."
        );
    }

    let decoded;

    try {
        decoded = jwt.verify(
            token,
            process.env.ACCESS_TOKEN_SECRET
        );
    } catch {
        throw new ApiError(
            401,
            "Invalid or expired access token."
        );
    }

    const user = await User.findById(decoded.id).select("-password");

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