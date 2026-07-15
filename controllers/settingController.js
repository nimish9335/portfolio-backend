const Setting = require("../models/Setting");

const asyncHandler = require("../utils/asyncHandler");
const ApiError = require("../utils/ApiError");
const ApiResponse = require("../utils/ApiResponse");

/**
 * @desc Create Settings
 * @route POST /api/settings
 * @access Private (Admin)
 */
const createSetting = asyncHandler(async (req, res) => {
    const existingSetting = await Setting.findOne();

    if (existingSetting) {
        throw new ApiError(
            400,
            "Settings already exist. Please update the existing settings."
        );
    }

    const setting = await Setting.create(req.body);

    return res.status(201).json(
        new ApiResponse(201, setting, "Settings created successfully")
    );
});

/**
 * @desc Get Public Settings
 * @route GET /api/settings
 * @access Public
 */
const getSetting = asyncHandler(async (req, res) => {
    const setting = await Setting.findOne().lean();

    if (!setting) {
        throw new ApiError(404, "Settings not found");
    }

    return res.status(200).json(
        new ApiResponse(200, setting, "Settings fetched successfully")
    );
});

/**
 * @desc Get Admin Settings
 * @route GET /api/settings/admin
 * @access Private (Admin)
 */
const getAdminSetting = asyncHandler(async (req, res) => {
    const setting = await Setting.findOne().lean();

    if (!setting) {
        throw new ApiError(404, "Settings not found");
    }

    return res.status(200).json(
        new ApiResponse(200, setting, "Admin settings fetched successfully")
    );
});

/**
 * @desc Update Settings
 * @route PUT /api/settings/:id
 * @access Private (Admin)
 */
const updateSetting = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const setting = await Setting.findByIdAndUpdate(
        id,
        req.body,
        {
            new: true,
            runValidators: true,
        }
    );

    if (!setting) {
        throw new ApiError(404, "Settings not found");
    }

    return res.status(200).json(
        new ApiResponse(200, setting, "Settings updated successfully")
    );
});

/**
 * @desc Delete Settings
 * @route DELETE /api/settings/:id
 * @access Private (Admin)
 */
const deleteSetting = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const setting = await Setting.findById(id);

    if (!setting) {
        throw new ApiError(404, "Settings not found");
    }

    await setting.deleteOne();

    return res.status(200).json(
        new ApiResponse(200, null, "Settings deleted successfully")
    );
});

module.exports = {
    createSetting,
    getSetting,
    getAdminSetting,
    updateSetting,
    deleteSetting,
};