require("dotenv").config();

const mongoose = require("mongoose");
const connectDB = require("../config/db");
const User = require("../models/User");
const ROLES = require("../constants/roles");

const seedAdmin = async () => {
    try {
        // Connect Database
        await connectDB();

        // Check if admin already exists
        const existingAdmin = await User.findOne({
            email: process.env.ADMIN_EMAIL,
        });

        if (existingAdmin) {
            console.log("✅ Admin already exists.");
            process.exit(0);
        }

        // Create Admin
        const admin = await User.create({
            fullName: process.env.ADMIN_NAME,
            email: process.env.ADMIN_EMAIL,
            password: process.env.ADMIN_PASSWORD,
            role: ROLES.ADMIN,
        });

        console.log("✅ Admin created successfully.");
        console.log(admin.email);

        process.exit(0);
    } catch (error) {
        console.error("❌ Error while seeding admin:");
        console.error(error.message);

        process.exit(1);
    }
};

seedAdmin();