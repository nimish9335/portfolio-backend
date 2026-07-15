const Experience = require("../models/Experience");
const asyncHandler = require("../utils/asyncHandler");
const ApiError = require("../utils/ApiError");
const ApiResponse = require("../utils/ApiResponse");

// Create Experience
const createExperience = asyncHandler(async (req, res) => {
    const experience = await Experience.create(req.body);

    return res.status(201).json(
        new ApiResponse(201, experience, "Experience added successfully")
    );
});

// Get Public Experience
const getAllExperience = asyncHandler(async (req, res) => {
    const experiences = await Experience.find({ isActive: true })
        .sort({ order: 1 })
        .lean();

    return res.status(200).json(
        new ApiResponse(200, experiences, "Experiences fetched successfully")
    );
});

// Get Admin Experience
const getAdminExperience = asyncHandler(async (req, res) => {
    const experiences = await Experience.find()
        .sort({ order: 1 })
        .lean();

    return res.status(200).json(
        new ApiResponse(200, experiences, "Experiences fetched successfully")
    );
});

// Get Experience By ID
const getExperienceById = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const experience = await Experience.findById(id);

    if (!experience) {
        throw new ApiError(404, "Experience not found");
    }

    return res.status(200).json(
        new ApiResponse(200, experience, "Experience fetched successfully")
    );
});

// Update Experience
const updateExperience = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const experience = await Experience.findByIdAndUpdate(
        id,
        req.body,
        {
            new: true,
            runValidators: true,
        }
    );

    if (!experience) {
        throw new ApiError(404, "Experience not found");
    }

    return res.status(200).json(
        new ApiResponse(200, experience, "Experience updated successfully")
    );
});

// Delete Experience
const deleteExperience = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const experience = await Experience.findById(id);

    if (!experience) {
        throw new ApiError(404, "Experience not found");
    }

    await experience.deleteOne();

    return res.status(200).json(
        new ApiResponse(200, {}, "Experience deleted successfully")
    );
});

module.exports = {
    createExperience,
    getAllExperience,
    getAdminExperience,
    getExperienceById,
    updateExperience,
    deleteExperience,
};