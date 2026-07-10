const User = require("../models/User");
const cookieOptions = require("../config/cookie");

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check required fields
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email and Password are required.",
            });
        }

        // Find user
        const user = await User.findOne({ email }).select("+password");

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "Invalid credentials.",
            });
        }

        // Compare password
        const isMatch = await user.comparePassword(password);

        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: "Invalid credentials.",
            });
        }

        // Generate Token
        const token = user.generateJWT();

        // Send Cookie
        res.cookie("token", token, cookieOptions);

        return res.status(200).json({
            success: true,
            message: "Login Successful.",
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

const logout = async (req, res) => {
    res.clearCookie("token");

    return res.status(200).json({
        success: true,
        message: "Logged out successfully.",
    });
};

const getCurrentUser = async (req, res) => {
    return res.status(200).json({
        success: true,
        user: req.user,
    });
};

module.exports = {
    login,
    logout,
    getCurrentUser,
};