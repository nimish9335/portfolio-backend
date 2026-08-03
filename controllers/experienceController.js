const Experience = require("../models/Experience");
const asyncHandler = require("../utils/asyncHandler");
const ApiError = require("../utils/ApiError");
const ApiResponse = require("../utils/ApiResponse");


// ==============================
// CREATE EXPERIENCE
// ==============================

const createExperience = asyncHandler(async (req, res) => {
    const experience = await Experience.create({
        user: req.user._id,
        company: req.body.company,
        position: req.body.position,
        employmentType: req.body.employmentType,
        location: req.body.location,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        currentlyWorking: req.body.currentlyWorking,
        description: req.body.description,
        technologies: req.body.technologies,
        order: req.body.order,
        isActive: req.body.isActive,
    });

    return res.status(201).json(
        new ApiResponse(
            201,
            experience,
            "Experience added successfully"
        )
    );
});


// ==============================
// GET CURRENT USER EXPERIENCES
// ==============================

const getAllExperience = asyncHandler(async (req, res) => {
    const experiences = await Experience.find({
        user: req.user._id,
    })
        .sort({
            order: 1,
            createdAt: -1,
        })
        .lean();

    return res.status(200).json(
        new ApiResponse(
            200,
            experiences,
            "Experiences fetched successfully"
        )
    );
});


// ==============================
// GET EXPERIENCE BY ID
// ==============================

const getExperienceById = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const experience = await Experience.findOne({
        _id: id,
        user: req.user._id,
    }).lean();

    if (!experience) {
        throw new ApiError(404, "Experience not found");
    }

    return res.status(200).json(
        new ApiResponse(
            200,
            experience,
            "Experience fetched successfully"
        )
    );
});


// ==============================
// UPDATE EXPERIENCE
// ==============================

const updateExperience = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const experience = await Experience.findOne({
        _id: id,
        user: req.user._id,
    });

    if (!experience) {
        throw new ApiError(404, "Experience not found");
    }

    const allowedFields = [
        "company",
        "position",
        "employmentType",
        "location",
        "startDate",
        "endDate",
        "currentlyWorking",
        "description",
        "technologies",
        "order",
        "isActive",
    ];

    allowedFields.forEach((field) => {
        if (req.body[field] !== undefined) {
            experience[field] = req.body[field];
        }
    });

    await experience.save();

    return res.status(200).json(
        new ApiResponse(
            200,
            experience,
            "Experience updated successfully"
        )
    );
});


// ==============================
// DELETE EXPERIENCE
// ==============================

const deleteExperience = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const experience = await Experience.findOne({
        _id: id,
        user: req.user._id,
    });

    if (!experience) {
        throw new ApiError(404, "Experience not found");
    }

    await experience.deleteOne();

    return res.status(200).json(
        new ApiResponse(
            200,
            null,
            "Experience deleted successfully"
        )
    );
});


module.exports = {
    createExperience,
    getAllExperience,
    getExperienceById,
    updateExperience,
    deleteExperience,
};