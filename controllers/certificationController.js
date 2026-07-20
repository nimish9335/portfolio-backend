const Certification = require("../models/Certification");
const asyncHandler = require("../utils/asyncHandler");
const ApiError = require("../utils/ApiError");
const ApiResponse = require("../utils/ApiResponse");

// Create Certification
const createCertification = asyncHandler(async (req, res) => {
    const certification = await Certification.create(req.body);

    return res.status(201).json(
        new ApiResponse(201, certification, "Certification added successfully")
    );
});

// Get Public Certifications
const getAllCertifications = asyncHandler(async (req, res) => {
    const certifications = await Certification.find({ isActive: true })
        .sort({ order: 1 })
        .lean();

    return res.status(200).json(
        new ApiResponse(200, certifications, "Certifications fetched successfully")
    );
});

// Get Admin Certifications
const getAdminCertifications = asyncHandler(async (req, res) => {
    const certifications = await Certification.find()
        .sort({ order: 1 })
        .lean();

    return res.status(200).json(
        new ApiResponse(200, certifications, "Certifications fetched successfully")
    );
});

// Get Certification By ID
const getCertificationById = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const certification = await Certification.findById(id).lean();

    if (!certification) {
        throw new ApiError(404, "Certification not found");
    }

    return res.status(200).json(
        new ApiResponse(200, certification, "Certification fetched successfully")
    );
});

// Update Certification
const updateCertification = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const certification = await Certification.findByIdAndUpdate(
        id,
        req.body,
        {
            new: true,
            runValidators: true,
        }
    );

    if (!certification) {
        throw new ApiError(404, "Certification not found");
    }

    return res.status(200).json(
        new ApiResponse(200, certification, "Certification updated successfully")
    );
});

// Delete Certification
const deleteCertification = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const certification = await Certification.findById(id);

    if (!certification) {
        throw new ApiError(404, "Certification not found");
    }

    await certification.deleteOne();

    return res.status(200).json(
        new ApiResponse(200, {}, "Certification deleted successfully")
    );
});

module.exports = {
    createCertification,
    getAllCertifications,
    getAdminCertifications,
    getCertificationById,
    updateCertification,
    deleteCertification,
};