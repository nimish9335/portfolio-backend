const User = require("../models/User");
const cookieOptions = require("../config/cookie");
const asyncHandler = require("../utils/asyncHandler");
const ApiError = require("../utils/ApiError");
const ApiResponse = require("../utils/ApiResponse");

// Register User
const register = asyncHandler(async (req, res) => {
    const { fullName, username, email, password } = req.body;

    // Check duplicate email
    const existingEmail = await User.findOne({ email });

    if (existingEmail) {
        throw new ApiError(409, "User with this email already exists.");
    }

    // Check duplicate username
    const existingUsername = await User.findOne({
        username: username.toLowerCase(),
    });

    if (existingUsername) {
        throw new ApiError(409, "Username is already taken.");
    }

    // Create user
    const user = await User.create({
        fullName,
        username: username.toLowerCase(),
        email,
        password,
    });

    // Generate authentication token
    const token = user.generateJWT();

    // Set HTTP-only cookie
    res.cookie("token", token, cookieOptions);

    // Safe user response
    const createdUser = await User.findById(user._id);

    return res.status(201).json(
        new ApiResponse(
            201,
            createdUser,
            "Registration successful."
        )
    );
});

// Login User
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

// Logout User
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

// Get Current User
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
    getCurrentUser,
};