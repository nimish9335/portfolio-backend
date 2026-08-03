const Setting = require("../models/Setting");

const asyncHandler = require("../utils/asyncHandler");
const ApiError = require("../utils/ApiError");
const ApiResponse = require("../utils/ApiResponse");

// ==============================
// CREATE SETTINGS
// ==============================

const createSetting = asyncHandler(async (req, res) => {
    const existingSetting = await Setting.findOne({
        user: req.user._id,
    });

    if (existingSetting) {
        throw new ApiError(
            400,
            "Settings already exist. Please update the existing settings."
        );
    }

    const setting = await Setting.create({
        user: req.user._id,
        siteTitle: req.body.siteTitle,
        siteDescription: req.body.siteDescription,
        contactEmail: req.body.contactEmail,
        contactPhone: req.body.contactPhone,
        location: req.body.location,
        footerText: req.body.footerText,
        isMaintenanceMode: req.body.isMaintenanceMode,
    });

    return res.status(201).json(
        new ApiResponse(
            201,
            setting,
            "Settings created successfully"
        )
    );
});

// ==============================
// GET CURRENT USER SETTINGS
// ==============================

const getSetting = asyncHandler(async (req, res) => {
    const setting = await Setting.findOne({
        user: req.user._id,
    }).lean();

    if (!setting) {
        throw new ApiError(404, "Settings not found");
    }

    return res.status(200).json(
        new ApiResponse(
            200,
            setting,
            "Settings fetched successfully"
        )
    );
});

// ==============================
// UPDATE SETTINGS
// ==============================

const updateSetting = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const setting = await Setting.findOne({
        _id: id,
        user: req.user._id,
    });

    if (!setting) {
        throw new ApiError(404, "Settings not found");
    }

    const allowedFields = [
        "siteTitle",
        "siteDescription",
        "contactEmail",
        "contactPhone",
        "location",
        "footerText",
        "isMaintenanceMode",
    ];

    allowedFields.forEach((field) => {
        if (req.body[field] !== undefined) {
            setting[field] = req.body[field];
        }
    });

    await setting.save();

    return res.status(200).json(
        new ApiResponse(
            200,
            setting,
            "Settings updated successfully"
        )
    );
});

// ==============================
// DELETE SETTINGS
// ==============================

const deleteSetting = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const setting = await Setting.findOne({
        _id: id,
        user: req.user._id,
    });

    if (!setting) {
        throw new ApiError(404, "Settings not found");
    }

    await setting.deleteOne();

    return res.status(200).json(
        new ApiResponse(
            200,
            null,
            "Settings deleted successfully"
        )
    );
});

module.exports = {
    createSetting,
    getSetting,
    updateSetting,
    deleteSetting,
};