const jwt = require("jsonwebtoken");
const User = require("../models/User");

const {
    accessTokenCookieOptions,
    refreshTokenCookieOptions,
} = require("../config/cookie");

const asyncHandler = require("../utils/asyncHandler");
const ApiError = require("../utils/ApiError");
const ApiResponse = require("../utils/ApiResponse");


// ==============================
// REGISTER USER
// ==============================

const register = asyncHandler(async (req, res) => {
    const { fullName, username, email, password } = req.body;

    const existingEmail = await User.findOne({ email });

    if (existingEmail) {
        throw new ApiError(409, "User with this email already exists.");
    }

    const existingUsername = await User.findOne({
        username: username.toLowerCase(),
    });

    if (existingUsername) {
        throw new ApiError(409, "Username is already taken.");
    }

    const user = await User.create({
        fullName,
        username: username.toLowerCase(),
        email,
        password,
    });

    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    res.cookie(
        "accessToken",
        accessToken,
        accessTokenCookieOptions
    );

    res.cookie(
        "refreshToken",
        refreshToken,
        refreshTokenCookieOptions
    );

    const createdUser = await User.findById(user._id);

    return res.status(201).json(
        new ApiResponse(
            201,
            createdUser,
            "Registration successful."
        )
    );
});


// ==============================
// LOGIN USER
// ==============================

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

    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    res.cookie(
        "accessToken",
        accessToken,
        accessTokenCookieOptions
    );

    res.cookie(
        "refreshToken",
        refreshToken,
        refreshTokenCookieOptions
    );

    return res.status(200).json(
        new ApiResponse(
            200,
            null,
            "Login Successful."
        )
    );
});


// ==============================
// REFRESH ACCESS TOKEN
// ==============================

const refreshAccessToken = asyncHandler(async (req, res) => {
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
        throw new ApiError(401, "Refresh token not found.");
    }

    let decoded;

    try {
        decoded = jwt.verify(
            refreshToken,
            process.env.REFRESH_TOKEN_SECRET
        );
    } catch (error) {
        throw new ApiError(
            401,
            "Invalid or expired refresh token."
        );
    }

    const user = await User.findById(decoded.id);

    if (!user) {
        throw new ApiError(401, "User not found.");
    }

    const newAccessToken = user.generateAccessToken();

    res.cookie(
        "accessToken",
        newAccessToken,
        accessTokenCookieOptions
    );

    return res.status(200).json(
        new ApiResponse(
            200,
            null,
            "Access token refreshed successfully."
        )
    );
});


// ==============================
// LOGOUT USER
// ==============================

const logout = asyncHandler(async (req, res) => {
    res.clearCookie("accessToken", accessTokenCookieOptions);
    res.clearCookie("refreshToken", refreshTokenCookieOptions);

    return res.status(200).json(
        new ApiResponse(
            200,
            null,
            "Logged out successfully."
        )
    );
});


// ==============================
// GET CURRENT USER
// ==============================

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
    register,
    login,
    logout,
    refreshAccessToken,
    getCurrentUser,
};