const Resume = require("../models/Resume");
const asyncHandler = require("../utils/asyncHandler");
const ApiError = require("../utils/ApiError");
const ApiResponse = require("../utils/ApiResponse");

const {
    uploadToCloudinary,
    deleteFromCloudinary,
} = require("../services/cloudinary");

// ==============================
// CREATE RESUME
// ==============================

const createResume = asyncHandler(async (req, res) => {
    const { title } = req.body;

    if (!req.file) {
        throw new ApiError(400, "Resume PDF is required");
    }

    const existingResume = await Resume.findOne({
        user: req.user._id,
        isActive: true,
    });

    if (existingResume) {
        await deleteFromCloudinary(existingResume.file.public_id);
        await existingResume.deleteOne();
    }

    const uploadedFile = await uploadToCloudinary(
        req.file.buffer,
        "portfolio/resume",
        "raw"
    );

    const resume = await Resume.create({
        user: req.user._id,
        title,
        file: {
            url: uploadedFile.secure_url,
            public_id: uploadedFile.public_id,
        },
        version: existingResume ? existingResume.version + 1 : 1,
        isActive: true,
    });

    return res.status(201).json(
        new ApiResponse(
            201,
            resume,
            "Resume uploaded successfully"
        )
    );
});

// ==============================
// GET CURRENT USER RESUME
// ==============================

const getResume = asyncHandler(async (req, res) => {
    const resume = await Resume.findOne({
        user: req.user._id,
        isActive: true,
    }).lean();

    if (!resume) {
        throw new ApiError(404, "Resume not found");
    }

    return res.status(200).json(
        new ApiResponse(
            200,
            resume,
            "Resume fetched successfully"
        )
    );
});

// ==============================
// UPDATE RESUME
// ==============================

const updateResume = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { title } = req.body;

    const resume = await Resume.findOne({
        _id: id,
        user: req.user._id,
    });

    if (!resume) {
        throw new ApiError(404, "Resume not found");
    }

    if (title !== undefined) {
        resume.title = title;
    }

    if (req.file) {
        await deleteFromCloudinary(resume.file.public_id);

        const uploadedFile = await uploadToCloudinary(
            req.file.buffer,
            "portfolio/resume",
            "raw"
        );

        resume.file = {
            url: uploadedFile.secure_url,
            public_id: uploadedFile.public_id,
        };

        resume.version += 1;
        resume.uploadedAt = new Date();
    }

    await resume.save();

    return res.status(200).json(
        new ApiResponse(
            200,
            resume,
            "Resume updated successfully"
        )
    );
});

// ==============================
// DELETE RESUME
// ==============================

const deleteResume = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const resume = await Resume.findOne({
        _id: id,
        user: req.user._id,
    });

    if (!resume) {
        throw new ApiError(404, "Resume not found");
    }

    await deleteFromCloudinary(resume.file.public_id);

    await resume.deleteOne();

    return res.status(200).json(
        new ApiResponse(
            200,
            null,
            "Resume deleted successfully"
        )
    );
});

module.exports = {
    createResume,
    getResume,
    updateResume,
    deleteResume,
};