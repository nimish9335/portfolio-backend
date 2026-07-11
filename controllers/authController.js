const User = require("../models/User");
const cookieOptions = require("../config/cookie");
const asyncHandler = require("../utils/asyncHandler");
const ApiError = require("../utils/ApiError");
const ApiResponse = require("../utils/ApiResponse");

const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
        throw new ApiError(401, "Invalid credentials.");
    }

    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
        throw new ApiError(401, "Invalid credentials.");
    }

    const token = user.generateJWT();

    res.cookie("token", token, cookieOptions);

    return res.status(200).json(
        new ApiResponse(
            200,
            null,
            "Login Successful."
        )
    );
});

const logout = asyncHandler(async (req, res) => {
    res.clearCookie("token");

    return res.status(200).json(
        new ApiResponse(
            200,
            null,
            "Logged out successfully."
        )
    );
});

const getCurrentUser = asyncHandler(async (req, res) => {
    return res.status(200).json(
        new ApiResponse(
            200,
            req.user,
            "Current user fetched successfully."
        )
    );
});

module.exports = {
    login,
    logout,
    getCurrentUser,
};