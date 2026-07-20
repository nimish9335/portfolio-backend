const Education = require("../models/Education");
const asyncHandler = require("../utils/asyncHandler");
const ApiError = require("../utils/ApiError");
const ApiResponse = require("../utils/ApiResponse");

// Create Education
const createEducation = asyncHandler(async (req, res) => {
    const education = await Education.create(req.body);

    return res.status(201).json(
        new ApiResponse(201, education, "Education added successfully")
    );
});

// Get Public Education
const getAllEducation = asyncHandler(async (req, res) => {
    const education = await Education.find({ isActive: true })
        .sort({ order: 1 })
        .lean();

    return res.status(200).json(
        new ApiResponse(200, education, "Education fetched successfully")
    );
});

// Get Admin Education
const getAdminEducation = asyncHandler(async (req, res) => {
    const education = await Education.find()
        .sort({ order: 1 })
        .lean();

    return res.status(200).json(
        new ApiResponse(200, education, "Education fetched successfully")
    );
});

// Get Education By Id
const getEducationById = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const education = await Education.findById(id).lean();

    if (!education) {
        throw new ApiError(404, "Education not found");
    }

    return res.status(200).json(
        new ApiResponse(200, education, "Education fetched successfully")
    );
});

// Update Education
const updateEducation = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const education = await Education.findByIdAndUpdate(
        id,
        req.body,
        {
            new: true,
            runValidators: true,
        }
    );

    if (!education) {
        throw new ApiError(404, "Education not found");
    }

    return res.status(200).json(
        new ApiResponse(200, education, "Education updated successfully")
    );
});

// Delete Education
const deleteEducation = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const education = await Education.findById(id);

    if (!education) {
        throw new ApiError(404, "Education not found");
    }

    await education.deleteOne();

    return res.status(200).json(
        new ApiResponse(200, {}, "Education deleted successfully")
    );
});

module.exports = {
    createEducation,
    getAllEducation,
    getAdminEducation,
    getEducationById,
    updateEducation,
    deleteEducation,
};