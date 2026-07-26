const Education = require("../models/Education");
const asyncHandler = require("../utils/asyncHandler");
const ApiError = require("../utils/ApiError");
const ApiResponse = require("../utils/ApiResponse");


// ==============================
// CREATE EDUCATION
// ==============================

const createEducation = asyncHandler(async (req, res) => {
    const education = await Education.create({
        user: req.user._id,
        institution: req.body.institution,
        degree: req.body.degree,
        fieldOfStudy: req.body.fieldOfStudy,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        currentlyStudying: req.body.currentlyStudying,
        grade: req.body.grade,
        location: req.body.location,
        description: req.body.description,
        order: req.body.order,
        isActive: req.body.isActive,
    });

    return res.status(201).json(
        new ApiResponse(
            201,
            education,
            "Education added successfully"
        )
    );
});


// ==============================
// GET CURRENT USER EDUCATION
// ==============================

const getAllEducation = asyncHandler(async (req, res) => {
    const education = await Education.find({
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
            education,
            "Education fetched successfully"
        )
    );
});


// ==============================
// GET CURRENT USER EDUCATION BY ID
// ==============================

const getEducationById = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const education = await Education.findOne({
        _id: id,
        user: req.user._id,
    }).lean();

    if (!education) {
        throw new ApiError(404, "Education not found");
    }

    return res.status(200).json(
        new ApiResponse(
            200,
            education,
            "Education fetched successfully"
        )
    );
});


// ==============================
// UPDATE CURRENT USER EDUCATION
// ==============================

const updateEducation = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const education = await Education.findOne({
        _id: id,
        user: req.user._id,
    });

    if (!education) {
        throw new ApiError(404, "Education not found");
    }

    const allowedFields = [
        "institution",
        "degree",
        "fieldOfStudy",
        "startDate",
        "endDate",
        "currentlyStudying",
        "grade",
        "location",
        "description",
        "order",
        "isActive",
    ];

    allowedFields.forEach((field) => {
        if (req.body[field] !== undefined) {
            education[field] = req.body[field];
        }
    });

    await education.save();

    return res.status(200).json(
        new ApiResponse(
            200,
            education,
            "Education updated successfully"
        )
    );
});


// ==============================
// DELETE CURRENT USER EDUCATION
// ==============================

const deleteEducation = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const education = await Education.findOne({
        _id: id,
        user: req.user._id,
    });

    if (!education) {
        throw new ApiError(404, "Education not found");
    }

    await education.deleteOne();

    return res.status(200).json(
        new ApiResponse(
            200,
            null,
            "Education deleted successfully"
        )
    );
});


module.exports = {
    createEducation,
    getAllEducation,
    getEducationById,
    updateEducation,
    deleteEducation,
};