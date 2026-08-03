const Certification = require("../models/Certification");
const asyncHandler = require("../utils/asyncHandler");
const ApiError = require("../utils/ApiError");
const ApiResponse = require("../utils/ApiResponse");

// ==============================
// CREATE CERTIFICATION
// ==============================

const createCertification = asyncHandler(async (req, res) => {
    const certification = await Certification.create({
        user: req.user._id,
        title: req.body.title,
        issuingOrganization: req.body.issuingOrganization,
        issueDate: req.body.issueDate,
        expiryDate: req.body.expiryDate,
        credentialId: req.body.credentialId,
        credentialUrl: req.body.credentialUrl,
        description: req.body.description,
        skills: req.body.skills,
        order: req.body.order,
        isActive: req.body.isActive,
    });

    return res.status(201).json(
        new ApiResponse(
            201,
            certification,
            "Certification added successfully"
        )
    );
});

// ==============================
// GET CURRENT USER CERTIFICATIONS
// ==============================

const getAllCertifications = asyncHandler(async (req, res) => {
    const certifications = await Certification.find({
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
            certifications,
            "Certifications fetched successfully"
        )
    );
});

// ==============================
// GET CERTIFICATION BY ID
// ==============================

const getCertificationById = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const certification = await Certification.findOne({
        _id: id,
        user: req.user._id,
    }).lean();

    if (!certification) {
        throw new ApiError(404, "Certification not found");
    }

    return res.status(200).json(
        new ApiResponse(
            200,
            certification,
            "Certification fetched successfully"
        )
    );
});

// ==============================
// UPDATE CERTIFICATION
// ==============================

const updateCertification = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const certification = await Certification.findOne({
        _id: id,
        user: req.user._id,
    });

    if (!certification) {
        throw new ApiError(404, "Certification not found");
    }

    const allowedFields = [
        "title",
        "issuingOrganization",
        "issueDate",
        "expiryDate",
        "credentialId",
        "credentialUrl",
        "description",
        "skills",
        "order",
        "isActive",
    ];

    allowedFields.forEach((field) => {
        if (req.body[field] !== undefined) {
            certification[field] = req.body[field];
        }
    });

    await certification.save();

    return res.status(200).json(
        new ApiResponse(
            200,
            certification,
            "Certification updated successfully"
        )
    );
});

// ==============================
// DELETE CERTIFICATION
// ==============================

const deleteCertification = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const certification = await Certification.findOne({
        _id: id,
        user: req.user._id,
    });

    if (!certification) {
        throw new ApiError(404, "Certification not found");
    }

    await certification.deleteOne();

    return res.status(200).json(
        new ApiResponse(
            200,
            null,
            "Certification deleted successfully"
        )
    );
});

module.exports = {
    createCertification,
    getAllCertifications,
    getCertificationById,
    updateCertification,
    deleteCertification,
};